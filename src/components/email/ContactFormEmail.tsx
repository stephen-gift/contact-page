import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  type: "admin" | "customer";
}

const baseUrl = `https://stephen-contact-page.vercel.app/`;

export const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
  submittedAt,
  type = "admin"
}: ContactFormEmailProps) => {
  const isAdmin = type === "admin";

  return (
    <Html>
      <Head />
      <Preview>
        {isAdmin
          ? `New contact form submission from ${name}`
          : `Thank you for contacting us, ${name}!`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header - Different for admin vs customer */}
          <Section style={isAdmin ? adminHeader : customerHeader}>
            <Row>
              <Column style={headerContent}>
                <Heading style={headerTitle}>
                  {isAdmin
                    ? "New Message Received"
                    : "Thank You for Reaching Out!"}
                </Heading>
                <Text style={headerSubtitle}>
                  {isAdmin
                    ? "Someone has reached out through your contact form"
                    : `We've received your message and will get back to you soon.`}
                </Text>
              </Column>
              <Column style={headerImageContainer}>
                <Img
                  style={headerImage}
                  width={80}
                  src={
                    isAdmin
                      ? `${baseUrl}/contact.svg`
                      : `${baseUrl}/contact.svg`
                  }
                  alt={isAdmin ? "Message Icon" : "Thank You Icon"}
                />
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            {isAdmin ? (
              // ADMIN VERSION - Full details
              <>
                {/* Submission Alert */}
                <Section style={alertSection}>
                  <Row>
                    <Column style={alertIconContainer}>
                      <div style={alertIcon}>💫</div>
                    </Column>
                    <Column style={alertContent}>
                      <Text style={alertTitle}>Form Submission Alert</Text>
                      <Text style={alertText}>Submitted on {submittedAt}</Text>
                    </Column>
                  </Row>
                </Section>

                <Hr style={divider} />

                {/* Contact Information */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    Contact Information
                  </Heading>
                  <Row style={infoGrid}>
                    <Column style={infoColumn}>
                      <Text style={infoLabel}>Name</Text>
                      <Text style={infoValue}>{name}</Text>
                    </Column>
                    <Column style={infoColumn}>
                      <Text style={infoLabel}>Email</Text>
                      <Link href={`mailto:${email}`} style={emailLink}>
                        {email}
                      </Link>
                    </Column>
                  </Row>
                </Section>

                <Hr style={divider} />

                {/* Message Details */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    Message Details
                  </Heading>
                  <Section style={subjectBox}>
                    <Text style={subjectLabel}>Subject</Text>
                    <Text style={subjectText}>{subject}</Text>
                  </Section>
                  <Section style={messageBox}>
                    <Text style={messageLabel}>Message</Text>
                    <Text style={messageText}>{message}</Text>
                  </Section>
                </Section>

                <Hr style={divider} />

                {/* Quick Actions - Only for admin */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    Quick Actions
                  </Heading>
                  <Row style={actionsContainer}>
                    <Column>
                      <Link
                        href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)}&body=Hi ${encodeURIComponent(name)},\n\nThank you for reaching out! `}
                        style={primaryButton}
                      >
                        📧 Reply to {name}
                      </Link>
                    </Column>
                    <Column>
                      <Link
                        href={`mailto:${email}?subject=Following up: ${encodeURIComponent(subject)}`}
                        style={secondaryButton}
                      >
                        ⏰ Follow Up
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </>
            ) : (
              // CUSTOMER VERSION - Confirmation and next steps
              <>
                {/* Thank You Section */}
                <Section style={thankYouSection}>
                  <Row>
                    <Column style={thankYouIconContainer}>
                      <div style={thankYouIcon}>✨</div>
                    </Column>
                    <Column style={thankYouContent}>
                      <Heading as="h2" style={thankYouTitle}>
                        We've Got Your Message!
                      </Heading>
                      <Text style={thankYouText}>
                        Thank you for contacting us, <strong>{name}</strong>. We
                        appreciate you reaching out and will review your message
                        shortly.
                      </Text>
                    </Column>
                  </Row>
                </Section>

                <Hr style={divider} />

                {/* Message Summary */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    Your Message Summary
                  </Heading>
                  <Row style={infoGrid}>
                    <Column style={infoColumn}>
                      <Text style={infoLabel}>Subject</Text>
                      <Text style={infoValue}>{subject}</Text>
                    </Column>
                    <Column style={infoColumn}>
                      <Text style={infoLabel}>Submitted</Text>
                      <Text style={infoValue}>{submittedAt}</Text>
                    </Column>
                  </Row>

                  <Section style={customerMessageBox}>
                    <Text style={messageLabel}>Your Message</Text>
                    <Text style={messageText}>{message}</Text>
                  </Section>
                </Section>

                <Hr style={divider} />

                {/* What Happens Next */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    What Happens Next?
                  </Heading>
                  <Row style={stepsContainer}>
                    <Column style={stepColumn}>
                      <div style={stepNumber}>1</div>
                      <Text style={stepTitle}>Review</Text>
                      <Text style={stepDescription}>
                        We'll review your message and understand your needs
                      </Text>
                    </Column>
                    <Column style={stepColumn}>
                      <div style={stepNumber}>2</div>
                      <Text style={stepTitle}>Response</Text>
                      <Text style={stepDescription}>
                        You'll hear back from us within 24-48 hours
                      </Text>
                    </Column>
                    <Column style={stepColumn}>
                      <div style={stepNumber}>3</div>
                      <Text style={stepTitle}>Solution</Text>
                      <Text style={stepDescription}>
                        We'll work together to address your inquiry
                      </Text>
                    </Column>
                  </Row>
                </Section>

                <Hr style={divider} />

                {/* Contact Information */}
                <Section style={section}>
                  <Heading as="h2" style={sectionTitle}>
                    Need Immediate Assistance?
                  </Heading>
                  <Text style={paragraph}>
                    If you need to get in touch urgently, feel free to reply
                    directly to this email.
                  </Text>
                  <Row style={actionsContainer}>
                    <Column>
                      <Link
                        href="mailto:info@stephengift.com"
                        style={primaryButton}
                      >
                        📧 Contact Support
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </>
            )}
          </Section>
        </Container>

        {/* Footer - Different for admin vs customer */}
        <Container style={footer}>
          <Section style={footerContent}>
            <Img
              width={32}
              src={`${baseUrl}/logo.svg`}
              alt="Stephen Gift"
              style={logo}
            />
            <Text style={footerTitle}>Stephen Gift</Text>
            <Text style={footerText}>
              {isAdmin
                ? "This email was automatically generated from your website contact form."
                : "This email confirms that we have received your message. Please do not reply to this automated message."}
            </Text>

            <Hr style={footerDivider} />

            <Row style={footerLinks}>
              <Column>
                <Link
                  href="https://stephen-contact-page.vercel.app/"
                  style={footerLink}
                >
                  Website
                </Link>
              </Column>
              <Column>
                <Link
                  href="https://stephen-contact-page.vercel.app/contact"
                  style={footerLink}
                >
                  Contact
                </Link>
              </Column>
              <Column>
                <Link
                  href="https://stephen-contact-page.vercel.app/about"
                  style={footerLink}
                >
                  About
                </Link>
              </Column>
            </Row>

            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Stephen Gift. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles (previous styles remain the same, plus new ones below)
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: "20px 0"
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  margin: "0 auto",
  overflow: "hidden" as const,
  maxWidth: "600px"
};

// Admin Header (original gradient)
const adminHeader = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "40px 30px 30px",
  color: "#ffffff"
};

// Customer Header (different gradient)
const customerHeader = {
  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  padding: "40px 30px 30px",
  color: "#ffffff"
};

const headerContent = {
  padding: "0 10px 0 0"
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  lineHeight: "1.2",
  margin: "0 0 8px"
};

const headerSubtitle = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "0"
};

const headerImageContainer = {
  textAlign: "right" as const,
  padding: "0 0 0 10px"
};

const headerImage = {
  borderRadius: "12px"
};

const content = {
  padding: "40px 30px"
};

// Customer-specific styles
const thankYouSection = {
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 0 30px"
};

const thankYouIconContainer = {
  width: "60px",
  verticalAlign: "top" as const
};

const thankYouIcon = {
  fontSize: "32px",
  textAlign: "center" as const
};

const thankYouContent = {
  verticalAlign: "top" as const
};

const thankYouTitle = {
  color: "#15803d",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 8px"
};

const thankYouText = {
  color: "#166534",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0"
};

const customerMessageBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px",
  margin: "16px 0 0"
};

const stepsContainer = {
  margin: "0 -10px"
};

const stepColumn = {
  padding: "0 10px",
  textAlign: "center" as const,
  verticalAlign: "top" as const
};

const stepNumber = {
  backgroundColor: "#3b82f6",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  width: "32px",
  height: "32px",
  lineHeight: "32px",
  textAlign: "center" as const,
  margin: "0 auto 12px"
};

const stepTitle = {
  color: "#1e293b",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px"
};

const stepDescription = {
  color: "#64748b",
  fontSize: "12px",
  lineHeight: "1.4",
  margin: "0"
};

const paragraph = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 16px"
};

// ... (all previous styles remain the same: alertSection, section, infoGrid, etc.)
const alertSection = {
  backgroundColor: "#f0f9ff",
  border: "1px solid #bae6fd",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 0 30px"
};

const alertIconContainer = {
  width: "60px",
  verticalAlign: "top" as const
};

const alertIcon = {
  fontSize: "28px",
  textAlign: "center" as const
};

const alertContent = {
  verticalAlign: "top" as const
};

const alertTitle = {
  color: "#0369a1",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 4px"
};

const alertText = {
  color: "#0c4a6e",
  fontSize: "14px",
  margin: "0"
};

const section = {
  margin: "0 0 30px"
};

const sectionTitle = {
  color: "#1e293b",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 16px"
};

const infoGrid = {
  margin: "0 -10px"
};

const infoColumn = {
  padding: "0 10px",
  verticalAlign: "top" as const
};

const infoLabel = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px"
};

const infoValue = {
  color: "#1e293b",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0"
};

const emailLink = {
  color: "#3b82f6",
  fontSize: "16px",
  fontWeight: "500",
  textDecoration: "none"
};

const subjectBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "16px",
  margin: "0 0 16px"
};

const subjectLabel = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px"
};

const subjectText = {
  color: "#1e293b",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0"
};

const messageBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px"
};

const messageLabel = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 8px"
};

const messageText = {
  color: "#334155",
  fontSize: "14px",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
  margin: "0"
};

const divider = {
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "30px 0"
};

const actionsContainer = {
  margin: "0 -8px"
};

const primaryButton = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  padding: "12px 24px",
  textDecoration: "none",
  textAlign: "center" as const,
  margin: "0 8px"
};

const secondaryButton = {
  backgroundColor: "#f1f5f9",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  color: "#475569",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "600",
  padding: "12px 24px",
  textDecoration: "none",
  textAlign: "center" as const,
  margin: "0 8px"
};

const footer = {
  margin: "20px auto 0",
  maxWidth: "600px"
};

const footerContent = {
  textAlign: "center" as const,
  padding: "20px"
};

const logo = {
  margin: "0 auto 12px",
  borderRadius: "6px"
};

const footerTitle = {
  color: "#475569",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px"
};

const footerText = {
  color: "#64748b",
  fontSize: "12px",
  lineHeight: "1.4",
  margin: "0 0 20px"
};

const footerDivider = {
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "20px 0"
};

const footerLinks = {
  margin: "0 0 20px"
};

const footerLink = {
  color: "#64748b",
  fontSize: "12px",
  textDecoration: "none",
  margin: "0 8px"
};

const footerCopyright = {
  color: "#94a3b8",
  fontSize: "11px",
  margin: "0"
};

export default ContactFormEmail;
