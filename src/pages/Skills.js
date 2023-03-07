import React from "react";
import styled from "styled-components";
import { About, Description } from "../Styles";
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

// Import icons
import htmlIcon from "../icons/html.svg";
import cssIcon from "../icons/css.svg";
import jsIcon from "../icons/javascript.svg";
import reactIcon from "../icons/react.svg";
import nodeIcon from "../icons/nodejs.svg";

const Skills = () => {
  return (
    <SkillsSection>
      <motion.div
        exit="exit"
        variants={pageAnimations}
        initial="hidden"
        animate="show"
      >
        <Description>
          <h2>Skills</h2>
          <Cards>
            <Card>
              <img src={htmlIcon} alt="html icon" />
              <h3>HTML5</h3>
            </Card>
            <Card>
              <img src={cssIcon} alt="css icon" />
              <h3>CSS3</h3>
            </Card>
            <Card>
              <img src={jsIcon} alt="javascript icon" />
              <h3>JavaScript</h3>
            </Card>
            <Card>
              <img src={reactIcon} alt="react icon" />
              <h3>React</h3>
            </Card>
            <Card>
              <img src={nodeIcon} alt="nodejs icon" />
              <h3>Node.js</h3>
            </Card>
          </Cards>
        </Description>
      </motion.div>
    </SkillsSection>
  );
};

const SkillsSection = styled(About)`
  color: #e9c46a;
  padding: 0;
  display: flex;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  width: 14rem;
  height: 14rem;
  background-color: #264653;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  img {
    width: 7rem;
    height: 7rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #f4a261;
    margin-top: 0.5rem;
  }
`;

export default Skills;
