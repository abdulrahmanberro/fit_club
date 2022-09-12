import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobileWidth = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero ">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobileWidth ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullist
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={55} delay="4" preFix="+" />
            </span>
            <span>experts coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={600} delay="4" preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay="4" preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* BTNs */}
        <div className="btns">
          <button className="btn get-started-btn">Get Started</button>
          <button className="btn learn0-mote-btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />

        <motion.img
          initial={{ right: "14rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero-image-back"
        />
        {/* calories  */}
        <motion.div
          className="calories"
          initial={{ right: "33rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
