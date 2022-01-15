import React from "react";

import { SectionTitle, Skill } from "../../components/index";
import { skills } from "../../content/index";
import snowmanSvg from "../../icons/snowman.svg";

import classes from "./Services.module.css";

const padZero = (num, places) => String(num).padStart(places, "0");

const Services = () => {
  return (
    <section id="services" className={classes["section_padding"]}>
      <div className={classes["portfolio-services__col-1"]}>
        <SectionTitle
          title="Services I"
          bottomTitle="Offer"
          description="Be it mobile apps or websites, I've got enough of the required skills to build your product through rigorous plans and timely implementation. Explore through my projects for real world examples."
        />

        <div className={classes["snowman-art"]}>
          <img src={snowmanSvg} alt="" />
        </div>
      </div>

      <div className={classes["portfolio-services__col-2"]}>
        {skills.map((s, i) => (
          <Skill title={s.skill} number={padZero(i + 1, 2)} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
