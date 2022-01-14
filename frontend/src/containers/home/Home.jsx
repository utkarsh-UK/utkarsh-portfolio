import React from "react";

import { NavBar } from "../../components";
import { handleLinkOpen } from "../../helpers/helpers";

import circleSvg from "../../icons/circle.svg";
import githubImage from "../../icons/github-black.png";
import instagramImage from "../../icons/instagram-black.png";
import linkedinImage from "../../icons/linkedin-black.png";
import profileBackgroundSvg from "../../icons/profile-background.svg";

import classes from "./Home.module.css";

const SocialIconsContainer = ({ imageSource, url = "" }) => {
  return (
    <div
      className={classes["icon-container"]}
      onClick={() => handleLinkOpen(url)}
    >
      <img src={imageSource} alt="" />
    </div>
  );
};

const Home = () => {
  return (
    <header id="home">
      <NavBar
        navItems={["Home", "Services", "Experience", "Projects", "Contact"]}
        navHrefs={[
          "#home",
          "#services",
          "#experience",
          "#projects",
          "#contact",
        ]}
      />
      <div className={classes["section_padding"]}>
        <div className={classes["portfolio-home__col-1"]}>
          <div className={classes["semi-circle-container"]}></div>
          <div className={classes["portfolio-home__intro-wrapper"]}>
            <h1>
              <em>Hii !</em> <br /> I’M UTKARSH
            </h1>
            <p>Full Stack Developer</p>
            <div className={classes["cute-circle"]}>
              <img src={circleSvg} alt="" />
            </div>
          </div>

          <hr />

          <p className={classes["tag-line"]}>
            People are not your most important asset. The right people are!
          </p>
          <div className={classes["portfolio-home__description-box"]}>
            <hr align="left" />
            <p>
              I always take responsibility for the direction, I look more
              broadly at the whole business. Figuring out solutions to complex
              problems and develop it, ughh! That's what I live for. Let's work
              together and be each other's important asset.
            </p>
          </div>

          <div className={classes["portfolio-home__social-links"]}>
            <SocialIconsContainer
              imageSource={linkedinImage}
              url="https://www.linkedin.com/in/utkarsh-kore-175080174/"
            />
            <SocialIconsContainer
              imageSource={githubImage}
              url="https://github.com/utkarsh-UK"
            />
            <SocialIconsContainer
              imageSource={instagramImage}
              url="https://www.instagram.com/_utkarsh_kore_uk/"
            />
          </div>
        </div>

        <div className={classes["portfolio-home__col-2"]}>
          <img src={profileBackgroundSvg} alt="" />

          <div className={classes["scroll-indicator"]}>
            <p>Scroll Down </p>
            <hr className={classes["first"]} />
            <hr className={classes["second"]} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
