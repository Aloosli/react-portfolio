import { motion } from "framer-motion";
import { useState } from "react";
import { formAnimations } from "../animations";
import styled from "styled-components";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",

      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => {
        console.log("Form submitted successfully");
        setShowSuccessMessage(true);
      })
      .catch((error) => alert(error));
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <>
      {showSuccessMessage ? (
        <SuccessMessage onClick={handleCloseSuccessMessage}>
          Thank you for your message!
        </SuccessMessage>
      ) : (
        <ContactFormStyled
          variants={formAnimations}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          action="thank-you"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" id="name" onChange={handleChange} />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" name="email" id="email" onChange={handleChange} />

          <Label htmlFor="message">Message:</Label>
          <Textarea name="message" id="message" onChange={handleChange} />

          <Button type="submit">Send</Button>
        </ContactFormStyled>
      )}
    </>
  );
};

const ContactFormStyled = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
`;

const SuccessMessage = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 80%;
  border-radius: 10rem;
  background-color: #4c88a7;
  color: #e76f51;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Label = styled.label`
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #e9c46a;
  color: #4c88a7;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`;

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #e9c46a;
  color: #4c88a7;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e76f51;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default ContactForm;
