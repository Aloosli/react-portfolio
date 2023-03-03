// Animation
 import { motion } from "framer-motion";
 import { pageAnimations } from "../animations";

const ContactMe = () => {
    return (
        <motion.div exit="exit" variants={pageAnimations} initial="hidden" animate="show">
        <h1>Contact Me</h1>
        </motion.div>
    );
    }

export default ContactMe;