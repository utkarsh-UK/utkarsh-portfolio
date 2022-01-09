import React from "react";

import { SectionTitle } from "../../components/index";

import { handleLinkOpen } from "../../helpers/helpers";

import classes from "./Contact.module.css";

const Contact = () => {
  const emailID = "utkarshkore98@gmail.com";

  const handleCTAClick = () => {
    navigator.clipboard.writeText(emailID);
  };

  return (
    <section id="contact">
      <SectionTitle
        mainTitle="Get In Touch"
        subTitle="Interview Me"
        backgroundTitle="CONTACT"
      />

      <div className={classes["portfolio-contact__container"]}>
        <div className={classes["portfolio-contact__work-details"]}>
          <div className={classes["circle"]}></div>
          <h2>I'm building digital products and valuable services</h2>
          <p>
            I'm building digital products and valuable services. I'm building
            digital products and valuable services
          </p>
          <hr align="center" />
          {/* <div className={classes["inner-circle"]}></div> */}
        </div>

        <div className={classes["portfolio-contact__social-info"]}>
          <SectionTitle
            mainTitle="Interested?"
            subTitle="Let's catch up for a talk!"
            isBackgroundTitleVisible={false}
          />
          <h6>
            You can contact me on{" "}
            <strong
              onClick={() =>
                handleLinkOpen(
                  "https://www.linkedin.com/in/utkarsh-kore-175080174/"
                )
              }
            >
              LinkedIn
            </strong>{" "}
            anytime. I post my work on{" "}
            <strong
              onClick={() => handleLinkOpen("https://github.com/utkarsh-UK")}
            >
              GitHub
            </strong>{" "}
            and write my experiences/guide on{" "}
            <strong
              onClick={() => handleLinkOpen("https://utkarshkore.medium.com/")}
            >
              Medium
            </strong>
            .
          </h6>

          <button
            className={classes["portfolio-contact__cta"]}
            onClick={handleCTAClick}
          >
            {emailID}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
