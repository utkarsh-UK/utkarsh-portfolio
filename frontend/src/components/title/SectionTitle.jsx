import React, { useEffect, useState } from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = ({
  title,
  bottomTitle,
  description,
  isFullPage = false,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const descBoxWidth =
    width <= 768 && isFullPage ? "75%" : isFullPage ? "35%" : "75%";

  return (
    <div className={classes["portfolio-section__container"]}>
      <h2>
        {title} <br /> {bottomTitle}{" "}
      </h2>

      <div
        className={classes["portfolio-section__description-box"]}
        style={{ width: descBoxWidth }}
      >
        <hr align="left" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
