// components/ui/input-field.tsx
"use client";

import * as React from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError as UiFieldError,
  FieldLabel
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export interface InputFieldProps {
  // Field identification
  name: string;
  id?: string;

  // Field content
  label?: string;
  placeholder?: string;
  description?: string;
  type?: "text" | "email" | "password" | "number" | "textarea" | "url" | "tel";

  // Validation & state
  error?: FieldError;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isLoading?: boolean;

  // Layout & styling
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;

  // Addons
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  showCharacterCount?: boolean;
  maxLength?: number;

  // Textarea specific
  rows?: number;
  resize?: boolean;

  // Controller props
  field: ControllerRenderProps<any, any>;
}

const InputField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputFieldProps
>(
  (
    {
      name,
      id,
      label,
      placeholder,
      description,
      type = "text",
      error,
      invalid,
      required = false,
      disabled = false,
      readOnly = false,
      isLoading = false,
      className,
      containerClassName,
      labelClassName,
      inputClassName,
      prefix,
      suffix,
      showCharacterCount = false,
      maxLength,
      rows = 3,
      resize = false,
      field,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const fieldId = id || `field-${name}`;

    const isInvalid = invalid || !!error;
    const currentType = type === "password" && showPassword ? "text" : type;
    const value = field?.value || "";
    const characterCount = typeof value === "string" ? value.length : 0;

    // Common input props
    const inputProps = {
      id: fieldId,
      // name,
      placeholder,
      disabled,
      readOnly,
      "aria-invalid": isInvalid,
      "aria-required": required,
      className: cn(inputClassName, isInvalid && "border-red-500"),
      ...field,
      ...props
    };

    const renderInput = () => {
      if (type === "textarea") {
        if (prefix || suffix) {
          return (
            <InputGroup>
              <InputGroupTextarea
                {...inputProps}
                rows={rows}
                className={cn(
                  "min-h-24 resize-none",
                  !resize && "resize-none",
                  inputClassName,
                  isInvalid && "border-red-500"
                )}
                ref={ref as React.Ref<HTMLTextAreaElement>}
              />
              {(showCharacterCount || suffix) && (
                <InputGroupAddon align="block-end">
                  {showCharacterCount && maxLength && (
                    <InputGroupText className="tabular-nums">
                      {characterCount}/{maxLength}
                    </InputGroupText>
                  )}
                  {suffix}
                </InputGroupAddon>
              )}
            </InputGroup>
          );
        }

        return (
          <Textarea
            {...inputProps}
            rows={rows}
            className={cn(
              !resize && "resize-none",
              inputClassName,
              isInvalid && "border-red-500"
            )}
            ref={ref as React.Ref<HTMLTextAreaElement>}
          />
        );
      }

      if (prefix || suffix || type === "password") {
        return (
          <InputGroup>
            {prefix && (
              <InputGroupAddon>
                <InputGroupText>{prefix}</InputGroupText>
              </InputGroupAddon>
            )}

            <Input
              {...inputProps}
              type={currentType}
              ref={ref as React.Ref<HTMLInputElement>}
            />

            {(suffix || type === "password" || isLoading) && (
              <InputGroupAddon>
                <InputGroupText>
                  {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {type === "password" && !isLoading && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="h-auto p-0 hover:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                  {suffix && !isLoading && type !== "password" && suffix}
                </InputGroupText>
              </InputGroupAddon>
            )}
          </InputGroup>
        );
      }

      return (
        <Input
          {...inputProps}
          type={currentType}
          ref={ref as React.Ref<HTMLInputElement>}
        />
      );
    };

    return (
      <div className={cn("w-full", containerClassName)}>
        <Field
          data-invalid={isInvalid}
          data-loading={isLoading}
          className="w-full"
        >
          {(label || isLoading) && (
            <div className="flex items-center justify-between mb-2">
              {label && (
                <FieldLabel
                  htmlFor={fieldId}
                  className={cn("block text-sm font-medium", labelClassName)}
                >
                  {label}
                  {required && <span className="text-destructive ml-1">*</span>}
                </FieldLabel>
              )}
              {isLoading && (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>
          )}

          {renderInput()}

          {description && <FieldDescription>{description}</FieldDescription>}

          {error && <UiFieldError errors={[error]} />}
        </Field>

        {showCharacterCount && maxLength && type !== "textarea" && (
          <div className="flex justify-end mt-1">
            <span className="text-xs text-muted-foreground tabular-nums">
              {characterCount}/{maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export { InputField };
