import { SEO } from "@/components/global/SEO";
import { ContactPageContainer } from "@/container";
import { Metadata } from "next";

export const metadata: Metadata = SEO({
  prefix: "Contact",
  path: "/contact",
  description:
    "Get in touch with Stephen Gift. Contact form for inquiries, collaborations, or questions about frontend development, React, Next.js projects.",
  keywords:
    "contact Stephen Gift, frontend developer contact, React developer hire, web development inquiries, collaboration opportunities"
});
const ContactPage = () => {
  return (
    <>
      <ContactPageContainer />
    </>
  );
};

export default ContactPage;
