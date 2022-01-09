import React from "react";

import { SectionTitle, Skill } from "../../components/index";
import { skills } from "../../content/index";

import classes from "./Services.module.css";

const padZero = (num, places) => String(num).padStart(places, "0");

const Services = () => {
  return (
    <section id="services" className={classes["section_padding"]}>
      <div className={classes["portfolio-services__col-1"]}>
        <SectionTitle
          title="Services I Offer"
          description="I always take responsibility for the direction, I look more broadly at
          the whole business. Figuring out solutions to complex problems and
          develop it, ughh! That's what I live for. Let's work together and be
          each other's important asset."
        />
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
