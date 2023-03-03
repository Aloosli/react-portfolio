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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <ContactFormStyled
      variants={formAnimations}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit}
      method="POST"
      netlify
      action="/success"
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
  );
};

const ContactFormStyled = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
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
