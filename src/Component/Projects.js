import React from "react";
import Project from "./Project";
import ProjectList from "./ProjectList";

const Projects = () => (
  <div>
    {/* using the map to pass the each project details to the project component */}
    {ProjectList.map(project => (
      <Project project={project} key={project.id} />
    ))}
  </div>
);

export default Projects;
