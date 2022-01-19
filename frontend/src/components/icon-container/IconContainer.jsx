import React from "react";
import { Link } from "react-router-dom";

import classes from "./IconContainer.module.css";

const IconContainer = ({ icon, url = "" }) => {
  return (
    <Link to={url}>
      <div className={classes["icon-container"]}>{icon}</div>
    </Link>
  );
};

export default IconContainer;
