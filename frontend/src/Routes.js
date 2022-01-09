import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AllProjects from "./pages/projects/AllProjects";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
