import React from "react";
import { SectionWrapper } from "../../../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { styles } from "../../../assets/styles/styles";

function SectionAbout() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px] text-justify"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React JS, Node JS, next JS, and jQuery. I'm
        a quick learner and Honest, responsible and professional work. Have the
        advantage of adapting quickly to a new environment, Being a positive
        value that I can offer for the company to achieve company goals together.
        Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
}

export default SectionWrapper(SectionAbout);
