import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <hr />
      <div className="footer">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
      <div className="blur blur-f"></div>
      <div className="blur blur-f2"></div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
