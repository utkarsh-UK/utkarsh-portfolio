import React from "react";
import Grid from "@mui/material/Grid";

import {
  ExperienceTile, SectionTitle
} from "../../components/index";
import { experience } from "../../content/index";
import { handleLinkOpen } from "../../helpers/helpers";
import {
  firebaseIcon, flutterIcon, githubIcon, mysqlIcon, nodejsIcon,
  reactIcon
} from "./icons";

import classes from "./Experience.module.css";

const SkillIconsContainer = ({ imageSource, url = "" }) => {
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
  return (
    <section id="experience" className={classes["section_padding"]}>
      <div className={classes["portfolio-experience__col-1"]}>
        <SectionTitle
          title="Skills & Experience"
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
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={nodejsIcon} />
                  <p>NodeJS </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={reactIcon} />
                  <p>ReactJS </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={flutterIcon} />
                  <p>Flutter </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={reactIcon} />
                  <p>Android </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={reactIcon} />
                  <p>MongoDB </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={mysqlIcon} />
                  <p>MySQL </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={firebaseIcon} />
                  <p>Firebase </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={firebaseIcon} />
                  <p>AdobeXD </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <SkillIconsContainer imageSource={githubIcon} />
                  <p>GitHub </p>
                </div>
              </Grid>
            </Grid>
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
