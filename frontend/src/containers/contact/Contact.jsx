import React from "react";

import { Footer } from "../../containers/index";
import { handleLinkOpen } from "../../helpers/helpers";

import linkedinImage from "../../icons/linkedin-white.png";
import mailImage from "../../icons/email-white.png";
import mediumImage from "../../icons/medium-white.png";

import classes from "./Contact.module.css";

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

const ContactTile = ({ icon, content }) => {
  return (
    <div className={classes["portfolio-contact__tile-container"]}>
      <hr />

      <div className={classes["portfolio-contact__tile-wrapper"]}>
        <SocialIconsContainer imageSource={icon} />

        <p> {content} </p>
      </div>
    </div>
  );
};

const Contact = () => {
  const conactListIcons = [mailImage, linkedinImage, mediumImage];
  const conactAccounts = [
    "utkarshkore98@gmail.com",
    "Utkarsh Kore",
    "@utkarshkore",
  ];

  return (
    <>
      <section id="contact" className={classes["section_padding"]}>
        <div className={classes["portfolio-contact__col-1"]}>
          <h2>Let’s make something <br /> amazing together.</h2>
          <h2>
            Start by <em>saying hi</em>
          </h2>
        </div>

        <div className={classes["portfolio-contact__col-2"]}>
          <h5
            className={`${classes["sub-title"]} ${classes["margin-removed"]}`}
          >
            Contact
          </h5>

          {Array.from({ length: 3 }).map((_, i) => (
            <ContactTile
              key={i}
              icon={conactListIcons[i]}
              content={conactAccounts[i]}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
