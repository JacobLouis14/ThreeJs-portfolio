import { motion } from "framer-motion";

import { projects } from "../../constants/index";
import "./experience.css";

const ProjectCards = ({ name, description, image, index }) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5 * index },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      className="projectContainer"
    >
      <div className="expImgContainer">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="expDataContainer">
        <h4 style={{ fontSize: 20 }}>{name}</h4>
        <p style={{ marginTop: "4%" }}>{description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 20, opacity: 1 }}
        transition={{ duration: 1 }}
        className="expHeaderWrapper"
      >
        <p style={{ fontWeight: 200, fontSize: 18 }}>WHAT I DO ?</p>
        <h4 style={{ fontSize: 40 }}>Projects</h4>
      </motion.div>
      <div className="expContentContainer">
        {projects.map((project, index) => (
          <ProjectCards key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
