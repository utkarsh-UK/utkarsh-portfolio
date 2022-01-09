import React from "react";

import { AppIcon, ProjectTile, SectionTitle } from "../../components/index";

import { projects } from "../../content/index";
import { annadataImage, persuitImage, sacredImage } from "./images";

import classes from "./LatestProjects.module.css";

const LatestProjects = () => {
  const projectImages = [persuitImage, sacredImage, annadataImage];

  return (
    <section id="projects" className={classes["section_padding"]}>
      <SectionTitle
        title="Latest Projects"
        description="I always take responsibility for the direction, I look more broadly at the whole business. Figuring out solutions to complex problems and develop it, ughh! That's what I live for. Let's work together and be each other's important asset."
        isFullPage
      />

      <div className={classes["portfolio-latest-projects__container"]}>
        {projects.map((proj, i) => (
          <ProjectTile project={proj} key={i} projectImage={projectImages[i]} />
        ))}
      </div>

      <button className={classes["view-all"]}>
        <AppIcon /> View All Projects
      </button>
    </section>
  );
};

export default LatestProjects;