import React from "react";

import { nodejsIcon } from "../../containers/experience/icons";
import sacredImage from "../../images/sacred.jpg";

import classes from "./ProjectItem.module.css";

const TechIconsContainer = ({ imageSource, url = "" }) => {
  return (
    <div className={classes["tech-container"]}>
      <img src={imageSource} alt="" />
    </div>
  );
};

const ProjectItem = () => {
  return (
    <div className={classes["project-item"]}>
      <img className={classes["project-image"]} src={sacredImage} alt="" />

      <div className={classes["project-name"]}>
        <h3>Sacred Groves</h3>
        <div className={classes["project-type"]}>
          <TechIconsContainer imageSource={nodejsIcon} url="" />
          <TechIconsContainer imageSource={nodejsIcon} url="" />
        </div>
      </div>

      <p>
        Lorem ipsum doler itso. Lorem ipsum doler itso. Lorem ipsum doler itso.
        Lorem ipsum doler itso. Lorem ipsum doler itso. Lorem ipsum doler itso.
        Lorem ipsum doler itso. Lorem ipsum doler itso. Lorem ipsum doler
        itso.Lorem ipsum doler itso.Lorem ipsum doler itso. Lorem ipsum doler
        itso. Lorem ipsum doler itso. Lorem ipsum doler itso.Lorem ipsum doler
        itso.Lorem ipsum doler itso. Lorem ipsum doler itso. Lorem ipsum doler
        itso. Lorem ipsum doler itso.Lorem ipsum doler itso.Lorem ipsum doler
        itso.
      </p>
    </div>
  );
};

export default ProjectItem;
