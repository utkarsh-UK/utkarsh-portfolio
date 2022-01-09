import React, { Fragment } from "react";

import "./App.module.css";

import {
  Contact,
  Experience,
  Footer,
  Home,
  LatestProjects,
  Services,
  Traits,
} from "./containers/index";

const App = () => {
  return (
    <Fragment>
      {/* <Home /> */}
      <main>
        <Services />
        <Experience />
        <LatestProjects />
        {/* <Traits /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
