import React from "react";

import { LongArrow, IconContainer } from "../../components/index";

import classes from "./Skill.module.css";

const Skill = ({ title, number }) => {
  return (
    <div className={classes["portfolio-services__skill-container"]}>
      <hr />
      <div className={classes["portfolio-services__skill-content"]}>
        <p className={classes["skill-number"]}> {number}/ </p>

        <div className={classes["portfolio-services__skill-title-wrapper"]}>
          <h4> {title} </h4>
          <div className={classes["portfolio-services__skill-explore"]}>
            <p>Explore</p>

            <IconContainer icon={<LongArrow />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
