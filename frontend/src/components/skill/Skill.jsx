import React, { useState } from "react";

import { AngleDown, AngleUp } from "../../components/index";

import classes from "./Skill.module.css";

const Skill = ({ title, content }) => {
  const [isActive, setActive] = useState(true);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };

  const contentClass = isActive
    ? `${classes["portfolio-skills__skill-content__wrapper"]} ${classes["active"]}`
    : `${classes["portfolio-skills__skill-content__wrapper"]}`;

  return (
    <div className={classes["portfolio-skills__skill-div"]}>
      <div className={classes["portfolio-skills__skill-title__wrapper"]} onClick={handleClick}>
        <h3> {title} </h3>
        {!isActive ? (
          <AngleUp onClick={handleClick} width="30px" height="30px" />
        ) : (
          <AngleDown onClick={handleClick} height="40px" width="40px" />
        )}
      </div>

      <div className={contentClass}>
        <p>{content}</p>
      </div>

      <hr className={classes["portfolio-skills__skill-hr"]} />
    </div>
  );
};

export default Skill;
