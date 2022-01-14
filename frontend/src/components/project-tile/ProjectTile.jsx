import React from "react";
import { Link } from "react-router-dom";

import { IconContainer, LongArrow } from "../../components/index";

import classes from "./ProjectTile.module.css";

const ProjectTile = ({ project, projectImage }) => {
  return (
    <div className={classes["portfolio-latest-projects__project-tile"]}>
      <hr />

      <div className={classes["portfolio-project__content-wrapper"]}>
        <div className={classes["portfolio-project-tile-content"]}>
          <h6> {project.title} </h6>
          <p> {project.tech} </p>
        </div>

        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          <IconContainer icon={<LongArrow />} />
        </Link>
      </div>

      <div className={classes["portfolio-project-tile_image-box"]}>
        <img src={projectImage} alt="" />
      </div>
    </div>
  );
};

export default ProjectTile;
