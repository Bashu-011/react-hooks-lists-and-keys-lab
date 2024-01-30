import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
  <div className="project-item">
  <h3>{name}</h3>
  <p>{about}</p>
      {/**
       * prop is basically the number/position of the technology
       * 
       */}
    <div className="technologies">
    {technologies.map((technology, prop) => (
    <span key={prop}>{technology}</span>))}
    </div>
    </div>
  );
}

export default ProjectItem;
