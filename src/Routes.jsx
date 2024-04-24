import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/Landing";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
