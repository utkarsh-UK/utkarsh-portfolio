import React from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = ({ title, description, isFullPage = false }) => {
  return (
    <div className={classes["portfolio-section__container"]}>
      <h2 style={{ width: isFullPage ? "10%" : "40%" }}>{title}</h2>

      <div
        className={classes["portfolio-section__description-box"]}
        style={{ width: isFullPage ? "35%" : "75%" }}
      >
        <hr align="left" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
