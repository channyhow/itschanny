import React from "react";
import ContactForm from "../components/ContactForm";
import { CommonPageProps } from "../types";


const Contact = ({section}:CommonPageProps) => {
  return (
    <React.Fragment>
      {" "}
      <h1 >{section.id}</h1> <ContactForm />
    </React.Fragment>
  );
};

export default Contact;
