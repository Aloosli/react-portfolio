import avatar from "../img/avatar.png";
import { About, Description, Image, Hide } from "../Styles";
// Framer Motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animations";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi, I'm Adrian Loosli.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>I am passionate</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              about<span className="coding"> coding</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              and<span className="design"> design.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any project ideas you have.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
        <Image>
          <motion.img variants={photoAnim} src={avatar} alt="avatar" />
        </Image>
      </Description>
    </About>
  );
};

export default AboutSection;
