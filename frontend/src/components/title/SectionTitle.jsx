import React from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = ({
  mainTitle,
  subTitle,
  backgroundTitle,
  isBackgroundTitleVisible = true,
  hasDescription = false,
  descriptionComponent = null,
}) => {
  return (
    <div className={classes["portfolio-experience__section-container"]}>
      <div className={classes["portfolio-experience__section-title"]}>
        <h2>{mainTitle} </h2>
        <h5> {subTitle} </h5>

        {isBackgroundTitleVisible && (
          <div
            className={classes["portfolio-experience__section-display-title"]}
          >
            <h1> {backgroundTitle} </h1>
          </div>
        )}
      </div>

      {hasDescription && (
        <div className={classes["portfolio-experience__section-description"]}>
          {descriptionComponent}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
