import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/global/Container";
import React from "react";

type Props = {};

const ContactPageContainer = (props: Props) => {
  return (
    <main>
      <Container>
        <ContactForm />
      </Container>
    </main>
  );
};

export default ContactPageContainer;
