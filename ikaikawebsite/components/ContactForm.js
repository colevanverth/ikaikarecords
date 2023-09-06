import Header from "./Header";
import { useState } from "react";
import { motion } from "framer-motion";

import Error from "./error";

const ContactForm = ({ serviceName }) => {
  const [formError, setFormError] = useState(false);
  const [formConfirm, setFormConfirm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");

  const handleFormSent = async (e) => {
    e.preventDefault(); // Prevent page reset

    // Info that gets sent by email
    const contactInfo = {
      name: document.getElementById("project__input__name").value,
      phone: document.getElementById("project__input__phone").value,
      email: document.getElementById("project__input__email").value,
      message: document.getElementById("project__input__message").value,
      service: serviceName,
    };
    setFormConfirm(true);

    // Send contact info to backend for node mailer to process.

    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        body: JSON.stringify(contactInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        setFormError(true);
        console.error("Received 500 when trying to send contact form");
      } else {
        setFormSent(true); // Change the state
        setName(document.getElementById("project__input__name").value); // For success message
      }
    } catch (error) {
      console.error(error);
      setFromError(true);
    }
  };

  return (
    <>
      {!formSent && !formError ? (
        <>
          <Header headerName="contact form" minor={true} />
          <div className="project__container">
            <form className="project__form" onSubmit={handleFormSent}>
              <div className="project__input" first="">
                <a> NAME </a>
                <input
                  className="project__input__text"
                  id="project__input__name"
                  placeholder="Anthony Fantano"
                  required
                />
              </div>

              <div className="project__input" second="">
                <a> PHONE (OPTIONAL) </a>
                <input
                  type="tel"
                  id="project__input__phone"
                  placeholder="999-999-9999"
                  className="project__input__text"
                />
              </div>

              <div className="project__input" third="">
                <a> EMAIL </a>
                <input
                  type="email"
                  placeholder="email@example.com"
                  id="project__input__email"
                  className="project__input__text"
                  required
                />
              </div>

              <div className="project__input" fourth="">
                <a> MESSAGE </a>
                <textarea
                  className="project__input__text"
                  id="project__input__message"
                  placeholder={`Tell us a little about your ${serviceName.toLowerCase()} project...`}
                  rows="3"
                  required
                />
              </div>

              <motion.input
                whileHover={{ backgroundColor: "#a6a6a6" }}
                transition={{ duration: 0.25 }}
                className="project__input__submit"
                type="submit"
                value={!formConfirm ? "SUBMIT" : "CONFIRMING"}
              />
            </form>
          </div>
        </>
      ) : null}
      {formSent && !formError ? (
        <div className="project__message">
          Thanks {name}! We look forward to working with you and will get back
          to you as soon as possible.
        </div>
      ) : null}
      {formError ? (
        <div className="project__message">
          {" "}
          <Error description="We were unable to receive your contact info. Please email us directly at cj.ikaika@ikaikarecords.us." />{" "}
        </div>
      ) : null}
    </>
  );
};

export default ContactForm;
