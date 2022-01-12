import React from "react";
import Grid from "@mui/material/Grid";

import { ExperienceTile, SectionTitle, TechRow } from "../../components/index";
import { experience, tech } from "../../content/index";
import { handleLinkOpen } from "../../helpers/helpers";

import {
  nodejsIcon,
  firebaseIcon,
  flutterIcon,
  githubIcon,
  mysqlIcon,
  reactIcon,
} from "./icons";

import classes from "./Experience.module.css";

export const SkillIconsContainer = ({ imageSource, url = "" }) => {
  return (
    <div
      className={classes["icon-container"]}
      onClick={() => handleLinkOpen(url)}
    >
      <img src={imageSource} alt="" />
    </div>
  );
};

const Experience = () => {
  const skillIconsArray = [
    nodejsIcon,
    reactIcon,
    flutterIcon,
    reactIcon,
    reactIcon,
    mysqlIcon,
    firebaseIcon,
    reactIcon,
    githubIcon,
  ];

  return (
    <section id="experience" className={classes["section_padding"]}>
      <div className={classes["portfolio-experience__col-1"]}>
        <SectionTitle
          title="Skills & "
          bottomTitle="Experience"
          description="I always take responsibility for the direction, I look more broadly at
          the whole business. Figuring out solutions to complex problems and
          develop it, ughh! That's what I live for. Let's work together and be
          each other's important asset."
        />

        <div className={classes["portofolio-experience__skills-grid"]}>
          <h5 className={classes["sub-title"]}>Skills</h5>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <TechRow skills={tech.slice(0, 3)} icons={skillIconsArray.slice(0, 3)}/>
            <TechRow skills={tech.slice(3, 6)} icons={skillIconsArray.slice(3, 6)}/>
            <TechRow skills={tech.slice(6, 9)} icons={skillIconsArray.slice(6, 9)}/>
          </Grid>
        </div>
      </div>

      <div className={classes["portfolio-experience__col-2"]}>
        <h5 className={`${classes["sub-title"]} ${classes["margin-removed"]}`}>
          Experience
        </h5>
        {experience.map((ex, i) => (
          <ExperienceTile
            name={ex.company}
            role={ex.role}
            date={`${ex.from} - ${ex.to}`}
            description={ex.content}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
