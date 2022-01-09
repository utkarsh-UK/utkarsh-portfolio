import React from "react";

import { SectionTitle, Skill } from "../../components/index";
import { skills } from "../../content/index";

import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <SectionTitle
        mainTitle="What Can I Do"
        subTitle="To Help Create Your Product"
        backgroundTitle="SKILLS"
        hasDescription={true}
        descriptionComponent={
          <p>
            Thanks to my invaluable experience at work, I have acquired strong
            development skills.
          </p>
        }
      />

      <div className={classes["portfolio-skills__container"]}>
        {skills.map((skill, index) => (
          <Skill title={skill.skill} content={skill.content} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
