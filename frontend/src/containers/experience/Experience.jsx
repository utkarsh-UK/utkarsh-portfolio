import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";

import {
  Article,
  ExperienceTile,
  LongArrow,
  SectionTitle,
  Skill,
  IconContainer,
} from "../../components/index";
import { experience, skills } from "../../content/index";

import classes from "./Experience.module.css";

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
                  <IconContainer icon={<LongArrow />} />
                  <p>NodeJS </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>ReactJS </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>Flutter </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>Android </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>MongoDB </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>MySQL </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>Firebase </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
                  <p>AdobeXD </p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  className={classes["portfolio-experience__skills-wrapper"]}
                >
                  <IconContainer icon={<LongArrow />} />
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
