import { motion } from "framer-motion";

import { technologies } from "../../constants/index";
import { BallCanvas } from "../canvas";
import "./tech.css";

const Tech = () => {
  return (
    <>
      <div className="techSectionWrapper">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 20, opacity: 1 }}
          transition={{ duration: 1 }}
          className="techHeaderWrapper"
        >
          <p style={{ fontWeight: 200, fontSize: 18 }}>TECH STACK</p>
          <h4 style={{ fontSize: 40 }}>Expertise</h4>
        </motion.div>
        <div className="techModelWrapper">
          {technologies.map((technologies) => (
            <motion.div
              className="techWrapper"
              key={technologies.name}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={[
                {
                  opacity: technologies.index * 1,
                  y: 0,
                  transition: {
                    duration: 0.2,
                    delay: technologies.index * 0.1,
                  },
                },
                {
                  y: [0, 24, 0],
                  transition: {
                    duration: 1,
                    repeat: "infinity",
                    repeatType: "loop",
                    delay: technologies.index * 0.5,
                  },
                },
              ]}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <BallCanvas icon={technologies.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
