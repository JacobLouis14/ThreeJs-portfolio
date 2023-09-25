import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../../constants/index";
import "./about.css";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="tiltWrapper">
      <motion.div className="tiltCard">
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className="tiltBox"
        >
          <img src={icon} alt={title} className="tiltIcon" />
          <h4 style={{ textAlign: "center" }}>{title}</h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="aboutContainer">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="firstWrapper"
      >
        <p className="aboutText" style={{ fontWeight: 200 }}>
          INTODUCTION
        </p>
        <h2 className="aboutText" style={{ fontSize: 40 }}>
          Overview.
        </h2>
        <p style={{ display: "grid" }}>
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like React and Node.js. I'm a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let's work
          together to bring your ideas to life!
        </p>
      </motion.div>
      <div className="cardsContainer">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
