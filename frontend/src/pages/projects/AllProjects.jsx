import React from "react";

import { NavBar, ProjectItem } from "../../components";
import { Footer } from "../../containers";
import classes from "./AllProjects.module.css";

const AllProjects = () => {
  return (
    <section id="all-projects">
      <NavBar
        navItems={["Mobile", "Web", "UI/UX", "Mentoring"]}
        navHrefs={["#mobile", "#web", "#ui", "#mentoring"]}
      />

      <div className={classes["portfolio-projects__container"]}>
        <h3
          className={classes["portfolio-projects__section-title"]}
          id="mobile"
        >
          Mobile App <br /> Development
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>

        <h3
          className={`${classes["portfolio-projects__section-title"]} ${classes["align-text-end"]}`}
          id="web"
        >
          Web Development
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>

        <h3 className={classes["portfolio-projects__section-title"]} id="ui">
          UI/UX Designing
        </h3>

        <div className={classes["portfolio-projects__project-grid"]}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AllProjects;
