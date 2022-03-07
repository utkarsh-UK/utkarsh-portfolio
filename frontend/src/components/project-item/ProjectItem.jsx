import React from "react";

import {
  androidIcon,
  apiIcon,
  cssIcon,
  figmaIcon,
  flaskIcon,
  flutterIcon,
  htmlIcon,
  iosIcon,
  mlIcon,
  nodejsIcon,
  ocrIcon,
  presentationIcon,
  publicSpeakingIcon,
  pythonIcon,
  rapidapiIcon,
  razorpayIcon,
  reactRouterIcon,
  sqliteIcon,
  stripeIcon,
  firebaseIcon,
  reactIcon,
  mysqlIcon,
  mongoIcon,
  adobeIcon,
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

const toolsIcons = [
  androidIcon,
  flutterIcon,
  nodejsIcon,
  reactIcon,
  mysqlIcon,
  mongoIcon,
  firebaseIcon,
  apiIcon,
  cssIcon,
  figmaIcon,
  flaskIcon,
  htmlIcon,
  iosIcon,
  mlIcon,
  ocrIcon,
  presentationIcon,
  publicSpeakingIcon,
  pythonIcon,
  rapidapiIcon,
  razorpayIcon,
  reactRouterIcon,
  sqliteIcon,
  stripeIcon,
  adobeIcon,
];

const TechIconsContainer = ({ imageSource, url = "" }) => {
  return url === "" ? null : (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={classes["tech-container"]}>
        <img src={imageSource} alt="" />
      </div>
    </a>
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
          {project.tools.map((t, i) => (
            <ToolsContainer imageSource={toolsIcons[t - 1]} url="" key={i} />
          ))}
        </div>
      </div>

      <div className={classes["project-name"]}>
        <h3> {project.title} </h3>
        <div className={classes["project-type"]}>
          {project.tech.map((t, i) => (
            <TechIconsContainer
              imageSource={techIcons[t - 1]}
              url={project.links[i]}
              key={i}
            />
          ))}
        </div>
      </div>

      <p>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
