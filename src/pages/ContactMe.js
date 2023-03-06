import { motion } from "framer-motion";
import { useState } from "react";
import { pageAnimations, titleAnim } from "../animations";
import styled from "styled-components";

import emailIcon from "../icons/email.svg";
import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import ContactForm from "../components/ContactForm";
import cvIcon from "../icons/cv.svg";

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ContactStyled
      exit="exit"
      variants={pageAnimations}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Socials href="#" onClick={() => setShowForm(!showForm)}>
          <img src={emailIcon} alt="email" />
          <h3>Send me a message</h3>
        </Socials>
        <Socials href="https://www.linkedin.com/in/adrian-loosli-8b24ba87/">
          <img src={linkedinIcon} alt="linkedin" />
          <h3>Connect on LinkedIn</h3>
        </Socials>
        <Socials href="https://github.com/Aloosli">
          <img src={githubIcon} alt="github" />
          <h3>Visit my GitHub</h3>
        </Socials>
        {!showForm && (
          <ResumeIcon
            href="/PDF/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </div>
      {showForm && <ContactForm />}
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.2rem 3rem;
  color: #e76f51;
  min-height: 80vh;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem;
  @media screen and (min-width: 768px) {
    margin: 3rem;
  }

  @media screen and (min-width: 500px) {
    margin: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Socials = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #e76f51;

  margin-bottom: 2rem;

  img {
    width: 2.5rem;
    margin-right: 2rem;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2rem;
    color: #4c88a7;
  }

  @media screen and (min-width: 768px) {
    
    h3 {
      font-size: 2rem;
    }
  }
`;

const ResumeIcon = styled.a`
  position: absolute;
  top:70%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  background-image: url(${cvIcon});
  background-size: cover;
  cursor: pointer;
`;

export default ContactMe;
