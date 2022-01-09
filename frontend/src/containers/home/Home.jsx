import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { handleLinkOpen } from "../../helpers/helpers";

import classes from "./Home.module.css";

import featureImage from "../../images/feature-image.jpg";
import dojoImage from "../../images/dojo.jpg";
import outshadeImage from "../../images/outshade.jpg";
import tcsImage from "../../images/tcs.png";
import reddooImage from "../../images/reddoo.png";

const classObjects = {
  headerRoleClass: `${classes["portfolio-home__header-role"]}  ${classes["section_padding"]} }`,
  headerPitchClass: `${classes["portfolio-home__header-pitch"]} }`,
};

const Home = () => {
  const pulseBaseClass = classes["base-pulse"];

  return (
    <header>
      <div className={classes["portfolio-home__header-content"]}>
        <div className={classObjects.headerRoleClass}>
          <h3>Full Stack Developer</h3>
          <hr align="left" />
          <div className={classes["small-circle"]}></div>
        </div>

        <div className={classObjects.headerPitchClass}>
          <h6>
            People are not your most important asset. The right people are!
          </h6>
          <p>
            I always take responsibility for the direction, I look more broadly
            at the whole business. Figuring out solutions to complex problems
            and develop it, ughh! That's what I live for. Let's work together
            and be each other's important asset.
          </p>
        </div>

        <div className={classes["portfolio-home__header-personal"]}>
          <h1>
            <b>
              HI, I AM
              <div className={classes["pulse-container"]}>
                <div className={`${pulseBaseClass} ${classes["pulse1"]}`}></div>
                <div className={`${pulseBaseClass} ${classes["pulse2"]}`}></div>
              </div>
            </b>
            <br /> <strong>UTKARSH</strong>
          </h1>
          <div className={classes["portfolio-home__header-links"]}>
            <div
              className={classes["circle"]}
              onClick={() =>
                handleLinkOpen(
                  "https://www.linkedin.com/in/utkarsh-kore-175080174/"
                )
              }
            >
              <LinkedInIcon
                sx={{ fontSize: 20 }}
                className={classes["social-icons"]}
              />
            </div>
            <div
              className={classes["circle"]}
              onClick={() => handleLinkOpen("https://github.com/utkarsh-UK")}
            >
              <GitHubIcon
                sx={{ fontSize: 20 }}
                className={classes["social-icons"]}
              />
            </div>
            <div
              className={classes["circle"]}
              onClick={() =>
                handleLinkOpen("https://www.instagram.com/_utkarsh_kore_uk/")
              }
            >
              <InstagramIcon
                sx={{ fontSize: 20 }}
                className={classes["social-icons"]}
              />
            </div>
          </div>
        </div>

        <div className={classes["portfolio-home__header-companies"]}>
          <img src={tcsImage} alt="Tata Consultancy Services Logo" />
          <img src={outshadeImage} alt="Outshade Digital Media Logo" />
          <img src={reddooImage} alt="Reddoo Logo" />
          <img src={dojoImage} alt="DOJO Sports Logo" />
        </div>
      </div>

      <div className={classes["portfolio-home__header-image"]}>
        <img src={featureImage} alt="Utkarsh Kore. Full Stack Developer" />
      </div>
    </header>
  );
};

export default Home;
