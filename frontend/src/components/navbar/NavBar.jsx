import React from "react";
import { useState } from "react";

import logoSvg from "../../icons/logo.svg";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getNavClass = (navIndex) => {
    return activeIndex === navIndex ? `${classes["active"]}` : ``;
  };

  return (
    <div className={classes["nav-bar"]}>
      <img src={logoSvg} alt="" />

      <div className={classes["nav-links"]}>
        <a
          href="#home"
          className={getNavClass(0)}
          onClick={() => handleClick(0)}
        >
          Home
        </a>
        <a
          href="#services"
          className={getNavClass(1)}
          onClick={() => handleClick(1)}
        >
          Services
        </a>
        <a
          href="#experience"
          className={getNavClass(2)}
          onClick={() => handleClick(2)}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={getNavClass(3)}
          onClick={() => handleClick(3)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={getNavClass(4)}
          onClick={() => handleClick(4)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
