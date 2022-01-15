import React from "react";
import { Link } from "react-router-dom";

import { AppIcon, ProjectTile, SectionTitle } from "../../components/index";

import { projects } from "../../content/index";
import { annadataImage, persuitImage, sacredImage } from "./images";

import classes from "./LatestProjects.module.css";

const LatestProjects = () => {
  const projectImages = [persuitImage, sacredImage, annadataImage];

  return (
    <section id="projects" className={classes["section_padding"]}>
      <SectionTitle
        title="Key "
        bottomTitle="Projects"
        description="I have always believed in doing rather than talking. I have been fortunate to work on some interesting projects or develop some of my own to apply and nurture my skills."
        isFullPage={true}
      />

      <div className={classes["portfolio-latest-projects__container"]}>
        {projects.map((proj, i) => (
          <ProjectTile project={proj} key={i} projectImage={projectImages[i]} />
        ))}
      </div>

      <Link to="/projects" style={{ textDecoration: "none" }}>
        <button className={classes["view-all"]}>
          <AppIcon /> View All Projects
        </button>
      </Link>
    </section>
  );
};

export default LatestProjects;
