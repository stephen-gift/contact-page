// components/contact-form.tsx
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ContactFormData, contactSchema } from "@/lib/validationSchema";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
} from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "../ui/dialog";
import { toast } from "sonner";
import { CheckCircle2, Mail } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Update your contact form onSubmit function
  function onSubmit(data: ContactFormData) {
    // Show loading state
    toast.loading("Sending your message...");

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        const result = await response.json();

        if (response.ok) {
          toast.dismiss();
          toast.success("Message sent successfully!");
          setShowSuccessModal(true);
          form.reset();
        } else {
          throw new Error(result.error || "Failed to send message");
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(
          error.message || "Failed to send message. Please try again."
        );
      });
  }

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    form.reset();
  };

  return (
    <>
      <form id="form-rhf-contact" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          {/* Name Field */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-contact-name">
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-contact-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  data-testid="test-contact-name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-contact-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-contact-email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  data-testid="test-contact-email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Subject Field */}
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-contact-subject">
                  Subject
                </FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-contact-subject"
                  aria-invalid={fieldState.invalid}
                  placeholder="What is this regarding?"
                  autoComplete="off"
                  data-testid="test-contact-subject"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Message Field */}
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-contact-message">
                  Message
                </FieldLabel>
                <Textarea
                  {...field}
                  id="form-rhf-contact-message"
                  aria-invalid={fieldState.invalid}
                  placeholder="Please describe your message in detail..."
                  rows={5}
                  className="min-h-24 resize-none"
                  data-testid="test-contact-message"
                />
                <FieldDescription>
                  Include any relevant details about your inquiry. Must be
                  between 10 and 1000 characters.
                </FieldDescription>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Field orientation="horizontal" className="mt-6">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button
            type="submit"
            form="form-rhf-contact"
            data-testid="test-contact-submit"
          >
            Send Message
          </Button>
        </Field>
      </form>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center mt-4">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center">
              <p className="flex flex-col items-center gap-4">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  Please check your email
                </p>
                <p className="text-base text-foreground">
                  Thank you for reaching out! We've received your message and
                  will get back to you within 24-48 hours.
                </p>
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleCloseModal}
              className="min-w-32"
              data-testid="test-contact-success-close"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
