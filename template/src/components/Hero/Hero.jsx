import { motion } from "framer-motion";

import "./hero.css";

const Hero = () => {
  return (
    <div className="wrapper">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="detailsContainer"
      >
        <div>
          <h1>
            Hi, I am{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="name"
            >
              Jacob
            </motion.span>
          </h1>
          <p>I am a developer looking forward to evolve</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
