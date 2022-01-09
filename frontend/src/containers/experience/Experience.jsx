import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Article, SectionTitle } from "../../components/index";
import { experience } from "../../content/index";

import classes from "./Experience.module.css";

const Experience = () => {
  const [current, setCurrent] = useState(0);

  const experiences = experience
    .map((e, i) => {
      if (i % 2 !== 0) {
        return [
          <Article
            key={i}
            title={experience[i - 1].company}
            role={experience[i - 1].role}
            content={experience[i - 1].content}
            animationClasses={classes["slide"]}
          />,
          e.company && (
            <Article
              key={i}
              isContentRight={false}
              title={e.company}
              role={e.role}
              content={e.content}
              animationClasses={classes["slide"]}
            />
          ),
        ];
      } else return null;
    })
    .filter((e) => e !== null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current < experiences.length - 1 ? current + 1 : 0);
    }, 8000);

    return () => clearTimeout(timer);
  }, [current, experiences]);

  const handleDotClick = (i) => {
    setCurrent(i);
  };

  return (
    <section id="experience">
      <SectionTitle
        mainTitle="What I Have Done"
        subTitle="Throughout My Career"
        backgroundTitle="EXPERIENCE"
      />

      {experiences.map((exp, index) => (
        <div className={classes["container-slider"]} key={index}>
          {index === current && exp}
        </div>
      ))}

      <div className={classes["container-dots"]}>
        {Array.from({ length: experiences.length }).map((_, i) => (
          <div
            onClick={handleDotClick.bind(this, i)}
            key={i}
            className={
              current === i
                ? `${classes["dot"]} ${classes["active"]}`
                : classes["dot"]
            }
          ></div>
        ))}
      </div>

      {/* <Article
        title={experience[0].company}
        role={experience[0].role}
        content={experience[0].content}
      />

      <Article
        isContentRight={false}
        title={experience[1].company}
        role={experience[1].role}
        content={experience[1].content}
      /> */}
    </section>
  );
};

export default Experience;
