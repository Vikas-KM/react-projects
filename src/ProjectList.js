import React from "react";
import Project from "./Project.js";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: "Persons List",
      url: "https://vikas-km.github.io/persons-list/",
      desc:
        "Explains the prop passing from one component to the other component."
    }
  ];

  return (
    <div>
      {/* using the map to pass the each project details to the project component */}
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
