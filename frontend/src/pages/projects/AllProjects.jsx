import React from "react";

import { NavBar, ProjectItem } from "../../components";
import { Footer } from "../../containers";
import {
  designProjects,
  mentoringProjects,
  mobileProjects,
  webProjects,
} from "../../content/projects";
import {
  annadataProject,
  blissDesignProject,
  cpWorkshopProject,
  cryptoProject,
  dojoProject,
  fiscalProject,
  flutterWorkshopProject,
  frontendMentorProject,
  newsAppProject,
  newsDesignProject,
  noteProject,
  persuitProject,
  reddooDesignProject,
  reddooProject,
  sacredProject,
  studentTeacherProject,
} from "./images";

import classes from "./AllProjects.module.css";

const mobileProjectImages = [
  sacredProject,
  reddooProject,
  fiscalProject,
  dojoProject,
  newsAppProject,
];

const webProjectImages = [
  annadataProject,
  persuitProject,
  cryptoProject,
  noteProject,
  frontendMentorProject,
];

const designProjectImages = [
  reddooDesignProject,
  blissDesignProject,
  newsDesignProject,
  dojoProject,
  newsAppProject,
];

const mentoringImages = [
  flutterWorkshopProject,
  cpWorkshopProject,
  studentTeacherProject,
];

const AllProjects = () => {
  return (
    <section id="all-projects">
      <NavBar
        navItems={["Mobile", "Web", "UI/UX", "Mentoring"]}
        navHrefs={["", "", "", ""]}
      />

      <div className={classes["portfolio-projects__container"]}>
        <h3 className={classes["portfolio-projects__section-title"]}>
          Mobile App <br /> Development
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          {mobileProjects.map((proj, index) => (
            <ProjectItem
              project={proj}
              key={index}
              projectImage={mobileProjectImages[index]}
            />
          ))}
        </div>

        <h3
          className={`${classes["portfolio-projects__section-title"]} ${classes["align-text-end"]}`}
        >
          Web Development
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          {webProjects.map((proj, index) => (
            <ProjectItem
              project={proj}
              key={index}
              projectImage={webProjectImages[index]}
            />
          ))}
        </div>

        <h3 className={classes["portfolio-projects__section-title"]}>
          UI/UX Designing
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          {designProjects.map((proj, index) => (
            <ProjectItem
              project={proj}
              key={index}
              projectImage={designProjectImages[index]}
            />
          ))}
        </div>

        <h3
          className={`${classes["portfolio-projects__section-title"]} ${classes["align-text-end"]}`}
        >
          Mentoring
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          {mentoringProjects.map((proj, index) => (
            <ProjectItem
              project={proj}
              key={index}
              projectImage={mentoringImages[index]}
            />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AllProjects;
