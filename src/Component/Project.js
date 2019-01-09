import React from "react";
import classes from "./Project.module.css";

const Project = props => {
  // destructing the props passed
  const { name, url, desc } = props.project;
  return (
    <div className={classes.project}>
      <div>
        <h2> Project: {name} </h2>
        <h3>
          {/* noopener noreferrer is for security */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </h3>
      </div>
      <div>
        <h5>{desc}</h5>
      </div>
    </div>
  );
};
export default Project;
