import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import ContactForm from "../Contact/ContactForm";
import ContactHeader from "../Contact/ContactHeader";
import "../Contact/contact.css";
import GoogleMap from "../Contact/GoogleMap";
function Contact() {
  return (
    <>
      <Header />
      <ContactHeader />
      <GoogleMap />
      <ContactForm />
      <Form />
      <Footer />
    </>
  );
}

export default Contact;
