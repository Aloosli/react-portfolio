import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Animation
import { motion } from "framer-motion";
import { pageAnimations } from "../animations";

const AboutMe = () => {
  return(
  <motion.div exit='exit' variants={pageAnimations} initial="hidden"animate="show">
    <AboutSection />
    <ServicesSection />
    <FaqSection />
  </motion.div>
    );
};

export default AboutMe;
