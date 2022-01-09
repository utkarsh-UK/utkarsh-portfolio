import React, { Fragment } from "react";

import "./App.module.css";

import {
  Contact,
  Experience,
  Footer,
  Home,
  Projects,
  Skills,
  Traits,
} from "./containers/index";

const App = () => {
  return (
    <Fragment>
      <Home />
      <main>
        <Experience />
        <Skills />
        <Projects />
        <Traits />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
