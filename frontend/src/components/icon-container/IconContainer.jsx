import React from "react";

import classes from "./IconContainer.module.css";

const IconContainer = ({ icon }) => {
  return <div className={classes["icon-container"]}>{icon}</div>;
};

export default IconContainer;
