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

const ProjectItem = ({ project }) => {
  console.log(project);
  return (
    <div className={classes["project-item"]}>
      <img className={classes["project-image"]} src={sacredImage} alt="" />

      <div className={classes["project-name"]}>
        <h3> {project.title} </h3>
        <div className={classes["project-type"]}>
          <TechIconsContainer imageSource={nodejsIcon} url="" />
          <TechIconsContainer imageSource={nodejsIcon} url="" />
        </div>
      </div>

      <p>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
