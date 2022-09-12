import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  const handleLeftArrow = () => {
    if (selected > 0) {
      setSelected(selected - 1);
    } else {
      setSelected(2);
    }
  };

  const handleRightArrow = () => {
    if (selected >= 0) {
      if (selected === 2) {
        return setSelected(0);
      }
      setSelected(selected + 1);
    }
  };

  const transition = { type: "tween", duration: 1 };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, type: "spring" }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span>{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.img
          key={selected}
          initial={{ x: "10rem", opacity: 0 }}
          whileInView={{ x: "0rem", opacity: 1 }}
          transition={{ ...transition, type: "spring", duration: 1.5 }}
          src={testimonialsData[selected].image}
          alt=""
        />
        <motion.div
          initial={{ right: "25rem", opacity: 0 }}
          whileInView={{ right: "9rem", opacity: 1 }}
          transition={transition}
          className="imageBorder"
        ></motion.div>
        <motion.div
          initial={{ right: "-10rem", opacity: 0 }}
          whileInView={{ right: "7rem", opacity: 1 }}
          transition={transition}
          className="imageGradiante"
        ></motion.div>
        <div className="arrows">
          <img src={leftArrow} onClick={handleLeftArrow} alt="" />
          <img src={rightArrow} onClick={handleRightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
