import React, { useEffect } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { handleLinkOpen } from "../../helpers/helpers";

import mediumImage from "../../images/medium.png";
import featureImage from "../../images/resume-bg.jpg";

import classes from "./Footer.module.css";

const Footer = () => {
  const resumeBackgroundStyle = {
    backgroundImage: `url(${featureImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const lastUpdatedElement = document.querySelectorAll(
      `.${classes["portfolio-footer__resume-expiry"]} h3 span`
    );
    for (let index = 0; index < lastUpdatedElement.length; index++) {
      lastUpdatedElement[index].style.transform = `rotate(${index * 28}deg)`;
    }
  }, []);

  console.log("URL", window.location.pathname);
  console.log("URL", window.location.hostname);
  console.log("URL", window.location.href);

  return (
    <footer id="footer">
      <div
        className={classes["portfolio-footer__resume"]}
        style={resumeBackgroundStyle}
      >
        <div className={classes["portfolio-footer__resume-content"]}>
          <h6>Want to know more about my education and experience?</h6>
          <button
            onClick={() =>
              handleLinkOpen(`${window.location.href}resources/resume.pdf`)
            }
          >
            My Resume
          </button>
        </div>
      </div>

      <div className={classes["portfolio-footer__resume-social-links"]}>
        <div className={classes["portfolio-footer__resume-links"]}>
          <span
            onClick={() =>
              handleLinkOpen(
                "https://www.linkedin.com/in/utkarsh-kore-175080174/"
              )
            }
          >
            <LinkedInIcon style={{ color: "#2867B2" }} /> LinkedIn
          </span>
          <span onClick={() => handleLinkOpen("https://github.com/utkarsh-UK")}>
            <GitHubIcon /> Github
          </span>
          <span
            onClick={() => handleLinkOpen("https://utkarshkore.medium.com/")}
          >
            <img
              src={mediumImage}
              alt="Medium Logo"
              className={classes["medium-logo"]}
            />
            Medium
          </span>
        </div>

        <div className={classes["portfolio-footer__resume-expiry"]}>
          {/* <div className={(classes["circle"])}></div> */}
          <h3>
            <span></span>
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>2</span>
            <span></span>
            <span>U</span>
            <span>p</span>
            <span>d</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>d</span>
            <span></span>
          </h3>
        </div>

        <div className={classes["portfolio-footer__resume-details"]}>
          <span>Utkarsh Kore</span>
          <span>utkarshkore@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
