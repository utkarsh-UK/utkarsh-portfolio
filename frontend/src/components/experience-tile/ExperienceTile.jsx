import React, { useState } from "react";

import { ArrowDown, ArrowUp } from "../index";

import classes from "./ExperienceTile.module.css";

const ExperienceDesc = ({ description }) => {
  return (
    <ul className={classes["portfolio-experience__tile-description"]}>
      {description.map((desc, i) => (
        <li key={i}> {desc} </li>
      ))}
    </ul>
  );
};

const MoreOrLess = ({ isMoreVisible }) => {
  return isMoreVisible ? (
    <p>
      more <ArrowDown />
    </p>
  ) : (
    <p>
      less <ArrowUp />
    </p>
  );
};

const ExperienceTile = ({ name, role, description, date }) => {
  const [isJobDescVisible, setIsJobDescVisible] = useState(false);

  const handleMoreClick = () => {
    setIsJobDescVisible(!isJobDescVisible);
  };

  return (
    <div className={classes["portfolio-experience__tile-container"]}>
      <hr />

      <div className={classes["portfolio-experience__tile-wrapper"]}>
        <div className={classes["portfolio-experience__tile-left"]}>
          <h6> {name} </h6>
          <p> {role} </p>
        </div>
        <div className={classes["portfolio-experience__tile-right"]}>
          <h6> {date} </h6>
          <div onClick={handleMoreClick}>
            {isJobDescVisible ? <MoreOrLess /> : <MoreOrLess isMoreVisible />}
          </div>
        </div>
      </div>

      {isJobDescVisible && <ExperienceDesc description={description} />}
    </div>
  );
};

export default ExperienceTile;
