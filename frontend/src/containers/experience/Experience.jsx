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
  adobeIcon,
  androidIcon,
  mongoIcon,
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
    flutterIcon,
    androidIcon,
    nodejsIcon,
    reactIcon,
    mysqlIcon,
    mongoIcon,
    githubIcon,
    firebaseIcon,
    adobeIcon,
  ];

  return (
    <section id="experience" className={classes["section_padding"]}>
      <div className={classes["portfolio-experience__col-1"]}>
        <SectionTitle
          title="Skills & "
          bottomTitle="Experience"
          description="To my fortune, had the opportunity to intern into various organizations with great seniors to guide on us. I have experienced being a developer as well as being on the other side as production support thereby imrpoving my appraoch towards development."
        />

        <div className={classes["portofolio-experience__skills-grid"]}>
          <h5 className={classes["sub-title"]}>Skills</h5>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <TechRow
              skills={tech.slice(0, 3)}
              icons={skillIconsArray.slice(0, 3)}
              key={0}
            />
            <TechRow
              skills={tech.slice(3, 6)}
              icons={skillIconsArray.slice(3, 6)}
              key={1}
            />
            <TechRow
              skills={tech.slice(6, 9)}
              icons={skillIconsArray.slice(6, 9)}
              key={2}
            />
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
