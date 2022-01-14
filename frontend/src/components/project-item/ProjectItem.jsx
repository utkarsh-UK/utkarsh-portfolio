import React from "react";

import { SkillIconsContainer } from "../../containers/experience/Experience";
import sacredImage from "../../images/sacred.jpg";
import { nodejsIcon } from "../../containers/experience/icons";

import classes from "./ProjectItem.module.css";

const ProjectItem = () => {
  return (
    <div className={classes["project-item"]}>
      <img className={classes["project-image"]} src={sacredImage} alt="" />

      <div className={classes["project-name"]}>
        <h3>Sacred Groves</h3>
        <div className={classes["project-type"]}>
          <SkillIconsContainer imageSource={nodejsIcon} url="" />
          <SkillIconsContainer imageSource={nodejsIcon} url="" />
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
