import React, { Fragment } from "react";

import "./App.module.css";

import {
  Contact,
  Experience,
  Home,
  LatestProjects,
  Services,
} from "./containers/index";

const App = () => {
  return (
    <Fragment>
      <Home />
      <main>
        <Services />
        <Experience />
        <LatestProjects />
        <Contact />
      </main>
    </Fragment>
  );
};

export default App;
