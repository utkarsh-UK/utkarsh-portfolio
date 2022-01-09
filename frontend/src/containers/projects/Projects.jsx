import React from "react";

import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { SectionTitle, ProjectTile } from "../../components/index";
import { projects } from "../../content/index";
import { persuitImage, sacredImage, annadataImage } from "./images";

import classes from "./Projects.module.css";

const Projects = () => {
  const projectImages = [persuitImage, sacredImage, annadataImage];

  return (
    <section id="projects">
      <SectionTitle
        mainTitle="What I Have Built"
        subTitle="Over The Past Years"
        backgroundTitle="PROJECTS"
        hasDescription={true}
        descriptionComponent={
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <button>
              Explore All <ArrowRightAltIcon sx={{ fontSize: 40 }} />
            </button>
          </Link>
        }
      />

      <div className={classes["portfolio-projects__container"]}>
        {projects.map((project, i) => (
          <ProjectTile
            project={project}
            projectImage={projectImages[i]}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
