import React from "react";

import { IconContainer, LongArrow } from "../../components";
import { Footer } from "../../containers/index";

import classes from "./Contact.module.css";

const ContactTile = ({ icon, content }) => {
  return (
    <div className={classes["portfolio-contact__tile-container"]}>
      <hr />

      <div className={classes["portfolio-contact__tile-wrapper"]}>
        <IconContainer icon={icon} />
        <p> {content} </p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <section id="contact" className={classes["section_padding"]}>
        <div className={classes["portfolio-contact__col-1"]}>
          <h2>Let’s make something amazing together.</h2>
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
              icon={<LongArrow />}
              content="utkarshkore98@gmail.com"
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
