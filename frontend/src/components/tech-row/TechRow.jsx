import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import { SkillIconsContainer } from "../../containers/experience/Experience";

import classes from "./TechRow.module.css";

const TechTile = ({
  title,
  description = "",
  index,
  rowSize = 4,
  icon,
  onHovered = (i) => {},
  onExited = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
    onHovered(index);
  };

  const handleOnMouseExit = () => {
    setIsHovered(false);
    onExited();
  };

  return !isHovered ? (
    <Grid item xs={rowSize}>
      <div
        className={classes["portfolio-experience__skills-wrapper"]}
        onMouseEnter={handleOnMouseEnter}
      >
        <SkillIconsContainer imageSource={icon} />
        <p> {title} </p>
      </div>
    </Grid>
  ) : (
    <Grid item xs={rowSize}>
      <div
        className={classes["portfolio-experience__skill-item"]}
        onMouseLeave={handleOnMouseExit}
      >
        <div className={classes["skill-item-title"]}>
          <div className={classes["image-box"]}>
            <img src={icon} alt="" />
          </div>
          <h6> {title} </h6>
        </div>

        <p>{description}</p>
      </div>
    </Grid>
  );
};

const TechRow = ({ skills, icons }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);

  const onHover = (index) => {
    setHoveredIndex(index);
    setIsHovered(true);
  };

  const onExit = () => {
    setHoveredIndex(-1);
    setIsHovered(false);
  };

  return (
    <Grid container item spacing={1}>
      {skills.map((skill, i) => (
        <TechTile
          title={skill.title}
          description={skill.content}
          index={i}
          icon={icons[i]}
          onHovered={onHover}
          onExited={onExit}
          rowSize={hoveredIndex === i ? 6 : isHovered ? 3 : 4}
        />
      ))}
    </Grid>
  );
};

export default TechRow;
