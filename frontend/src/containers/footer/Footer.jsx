import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className={classes["portfolio-footer__container"]}>
        <a
          target="_blank"
          href="/resources/resume.pdf"
          className={classes["portfolio-footer__resume"]}
        >
          <button className={classes["view-resume"]}>View My Resume</button>
        </a>

        <hr />

        <div className={classes["portfolio-footer__credits"]}>
          <p>© 2022 All Rights Reserved</p>
          <p>Developed by Utkarsh Kore</p>
          <p>Designed by Mayur Nile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
