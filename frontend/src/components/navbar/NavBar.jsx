import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logoSvg from "../../icons/logo.svg";

import classes from "./NavBar.module.css";

const NavBar = ({ navItems, navHrefs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getNavClass = (navIndex) => {
    return activeIndex === navIndex ? `${classes["active"]}` : ``;
  };

  return (
    <div className={classes["nav-bar"]}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        }}
      >
        <img src={logoSvg} alt="" />
      </Link>

      <div className={classes["nav-links"]}>
        {navItems.map((item, index) => (
          <a
            href={navHrefs[index]}
            className={getNavClass(index)}
            onClick={() => handleClick(index)}
            key={index}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
