import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/global/Container";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    icon: <MapPin className="h-5 w-5 text-[#34679F] sm:h-6 sm:w-6" />,
    title: "Address",
    description: "Lagos, Nigeria"
  },
  {
    icon: <PhoneCall className="h-5 w-5 text-[#34679F] sm:h-6 sm:w-6" />,
    title: "Phone",
    description: "+234 812 4** ****"
  },
  {
    icon: <Mail className="h-5 w-5 text-[#34679F] sm:h-6 sm:w-6" />,
    title: "Email",
    description: "info@stephengift.com"
  }
];

type Props = {};

const ContactPageContainer = (props: Props) => {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl pt-16 pb-10 text-center md:pt-24 lg:max-w-4xl lg:pt-32">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="mb-4 text-3xl font-semibold md:mb-6 md:text-4xl lg:text-5xl">
              <span className="text-[#F16A00]">Chat </span>
              with our friendly team
            </h1>
            <p className="px-2 text-base text-[#414141] md:text-lg">
              We would love to hear from you. Please fill out this form or send
              us an email.
            </p>
          </div>

          {/* Contact Features - Responsive Row */}
          <div className="w-full max-w-6xl px-4">
            <div className="flex flex-col flex-nowrap items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-center md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex min-w-0 flex-1 flex-row items-center gap-2 p-2 text-center sm:p-4 md:flex-col md:gap-0"
                >
                  <div className="mb-2 rounded-lg bg-[#0043B20F] p-2 sm:mb-3 sm:p-3">
                    {feature.icon}
                  </div>
                  <h3 className="mb-1 truncate text-sm font-medium text-[#062A4F] sm:mb-2 sm:text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="truncate text-[14px] text-[#62636C] sm:text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-7xl px-4 py-10 md:py-16">
            <div className="flex flex-col gap-8 p-6 md:gap-12 md:p-8 lg:flex-row">
              <div className="mx-auto md:max-w-[500px] lg:flex-1 relative">
                <Image
                  src={"/woman-laughing-while-talking-phone.jpg"}
                  alt="contact-us-image"
                  fill
                  className="h-48 w-full object-top object-cover rounded-lg md:h-[220px] lg:h-auto lg:max-h-[400px]"
                  // placeholder="blur"
                />
              </div>

              <div className="min-w-0 lg:flex-1">
                <div className="mb-6 md:mb-8">
                  <h2 className="mb-3 text-2xl font-semibold text-[#002347] md:text-3xl lg:text-4xl">
                    Get in <span className="text-[#F16A00]">touch</span> with
                    our experts today
                  </h2>
                  <p className="text-base text-[#414141] md:text-lg">
                    Have any questions or challenges? Our team is ready to
                    assist 24/7
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ContactPageContainer;
