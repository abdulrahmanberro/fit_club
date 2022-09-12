import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div id="plans">
      <div className="plans-container">
        <div className="programs-header">
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITH US?</span>
        </div>
      </div>

      {/* plans cards */}
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="blur blur-p"></div>
              <div className="blur blur-p2"></div>
              <div className="features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div className="benefits">
                <span>{`See more benefit ->`}</span>
                <button className="btn">Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
