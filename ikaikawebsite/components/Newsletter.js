import { motion } from "framer-motion";
import { useState } from "react";

import Error from "./error";

const Newsletter = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const address = "/api/newsletter";
    const emailValue = document.getElementById("footer__input__text").value;
    const email = JSON.stringify({ email: emailValue });
    setSending(true);
    try {
      const res = await fetch(address, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: email,
      });
      setSending(false);
      if (!res.ok) {
        console.error(
          "Newsletter.js component: Received code 500 when trying to set up newsletter!",
        );
        setError(true);
      } else {
        setSent(true);
      }
    } catch (error) {
      console.error(`Newsletter.js component: ${error}`);
      setError(true);
    }
  };

  return (
    <section className="form__container">
      <form onSubmit={handleFormSubmit}>
        {!sent && !error ? (
          <label>
            {" "}
            <h2> SIGN UP FOR UPDATES FROM IKAIKA RECORDS </h2>{" "}
          </label>
        ) : null}
        {!sent && !error ? <a> EMAIL</a> : null}
        {!sent && !error ? (
          <input
            type="email"
            placeholder="email@example.com"
            id="footer__input__text"
            className="input__text"
            required
          ></input>
        ) : null}
        {!sent && !error ? (
          <motion.input
            whileHover={{ backgroundColor: "#a6a6a6" }}
            transition={{ duration: 0.25 }}
            className="input__submit"
            type="submit"
            value={!sending ? "SUBSCRIBE" : "CONFIRMING..."}
            id="footer__input__submit"
            required
          ></motion.input>
        ) : null}
        {sent && !error ? (
          <p> Thanks for signing up to the Ikaika Records Newsletter! </p>
        ) : null}
        {error ? (
          <Error description="We were unable to sign you up to our newsletter. Please try again later." />
        ) : null}
      </form>
    </section>
  );
};

export default Newsletter;
