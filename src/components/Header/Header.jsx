import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleBarClick = () => {
    if (window.innerWidth <= 768 && menuOpened === false) {
      setMenuOpened(true);
    } else {
      setMenuOpened(false);
    }
  };
  return (
    <div className="header" id="header">
      <img className="logo" src={Logo} alt="" />
      {window.innerWidth <= 768 && menuOpened === false ? (
        <div className="barsBtn">
          <img onClick={handleBarClick} src={Bars} alt="" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="hero"
              spy={true}
              smooth={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
