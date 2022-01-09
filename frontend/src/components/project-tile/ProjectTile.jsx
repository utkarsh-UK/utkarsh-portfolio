import React from "react";

// import projectImage from "../../images/project.jpg";

import classes from "./ProjectTile.module.css";

const ProjectTile = ({ project, projectImage }) => {
  return (
    <div className={classes["portfolio-projects__element-wrapper"]}>
      <img
        src={projectImage}
        alt={project.title}
        className={classes["portfolio-projects__image"]}
      />

      <div className={classes["portfolio-projects__hashtags-div"]}>
        {project.tools.map((tool, index) => (
          <p key={index}> {tool} </p>
        ))}
      </div>

      <div className={classes["portfolio-projects__bottom-container"]}>
        <button className={classes["view-more-btn"]}>View More</button>

        <div className={classes["portfolio-projects__project-name"]}>
          <h4> {project.title} </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
