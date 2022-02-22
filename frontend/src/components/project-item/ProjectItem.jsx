import React from "react";

import {
  androidIcon,
  flutterIcon,
  iosIcon,
  nodejsIcon,
} from "../../containers/experience/icons";

import classes from "./ProjectItem.module.css";

const techIcons = [
  androidIcon,
  iosIcon,
  flutterIcon,
  nodejsIcon,
  nodejsIcon,
  nodejsIcon,
];

const TechIconsContainer = ({ imageSource, url = "" }) => {
  return (
    <div className={classes["tech-container"]}>
      <img src={imageSource} alt="" />
    </div>
  );
};

const ToolsContainer = ({ imageSource, url = "" }) => {
  return (
    <div className={classes["tool-container"]}>
      <img src={imageSource} alt="" />
    </div>
  );
};

const ProjectItem = ({ project, projectImage }) => {
  return (
    <div className={classes["project-item"]}>
      <div className={classes["project-image-container"]}>
        <img className={classes["project-image"]} src={projectImage} alt="" />
        <div className={classes["tools-container"]}>
          {project.tech.map((t, i) => (
            <ToolsContainer imageSource={techIcons[t - 1]} url="" key={i} />
          ))}
        </div>
      </div>

      <div className={classes["project-name"]}>
        <h3> {project.title} </h3>
        <div className={classes["project-type"]}>
          {project.tech.map((t, i) => (
            <TechIconsContainer imageSource={techIcons[t - 1]} url="" key={i} />
          ))}
        </div>
      </div>

      <p>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
