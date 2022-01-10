import React from "react";

import { handleLinkOpen } from "../../helpers/helpers";

import githubImage from "../../icons/github-black.png";
import instagramImage from "../../icons/instagram-black.png";
import linkedinImage from "../../icons/linkedin-black.png";
import circleSvg from "../../icons/circle.svg";
import semiCircleSvg from "../../icons/semi-circle.svg";

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
    <header className={classes["section_padding"]}>
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
            I always take responsibility for the direction, I look more broadly
            at the whole business. Figuring out solutions to complex problems
            and develop it, ughh! That's what I live for. Let's work together
            and be each other's important asset.
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
        <svg
          // width="576"
          width="400"
          // width="276"
          height="85vh"
          viewBox="0 0 576 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_28_845" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M307.354 5.73488C295.549 -1.7919 280.451 -1.79189 268.646 5.73489L17.1254 166.102C6.75651 172.713 0.479492 184.16 0.479492 196.457V523.615C0.479492 525.68 0.656421 527.721 0.999939 529.718V971.842H575.8V508.018H575.52V196.457C575.52 184.16 569.243 172.713 558.874 166.102L307.354 5.73488Z"
            />
          </mask>
          <path
            d="M268.646 5.73489L254.13 -17.0313L254.13 -17.0313L268.646 5.73489ZM307.354 5.73488L292.838 28.5011L292.838 28.5011L307.354 5.73488ZM17.1254 166.102L31.641 188.868L31.641 188.868L17.1254 166.102ZM0.999939 529.718H27.9999V527.414L27.6094 525.143L0.999939 529.718ZM0.999939 971.842H-26.0001V998.842H0.999939V971.842ZM575.8 971.842V998.842H602.8V971.842H575.8ZM575.8 508.018H602.8V481.018H575.8V508.018ZM575.52 508.018H548.52V535.018H575.52V508.018ZM558.874 166.102L573.39 143.336V143.336L558.874 166.102ZM283.161 28.5011C286.113 26.6194 289.887 26.6194 292.838 28.5011L321.87 -17.0313C301.211 -30.2032 274.789 -30.2031 254.13 -17.0313L283.161 28.5011ZM31.641 188.868L283.161 28.5011L254.13 -17.0313L2.60991 143.336L31.641 188.868ZM27.4795 196.457C27.4795 193.383 29.0487 190.521 31.641 188.868L2.60991 143.336C-15.5357 154.906 -26.5205 174.937 -26.5205 196.457H27.4795ZM27.4795 523.615V196.457H-26.5205V523.615H27.4795ZM27.6094 525.143C27.524 524.646 27.4795 524.136 27.4795 523.615H-26.5205C-26.5205 527.224 -26.2112 530.795 -25.6095 534.294L27.6094 525.143ZM27.9999 971.842V529.718H-26.0001V971.842H27.9999ZM575.8 944.842H0.999939V998.842H575.8V944.842ZM548.8 508.018V971.842H602.8V508.018H548.8ZM575.52 535.018H575.8V481.018H575.52V535.018ZM548.52 196.457V508.018H602.52V196.457H548.52ZM544.359 188.868C546.951 190.521 548.52 193.383 548.52 196.457H602.52C602.52 174.937 591.536 154.906 573.39 143.336L544.359 188.868ZM292.838 28.5011L544.359 188.868L573.39 143.336L321.87 -17.0313L292.838 28.5011Z"
            fill="#FCDA68"
            mask="url(#path-1-inside-1_28_845)"
          />
        </svg>
      </div>
    </header>
  );
};

export default Home;
