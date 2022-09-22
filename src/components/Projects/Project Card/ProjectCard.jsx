import React from "react";
import "./ProjectCard.css";

function ProjectCard({ image, title }) {
  return (
    <div className="projectCard">
      <div
        className="projectCardImg"
        style={{
          backgroundImage: `url(${image})`,
          // width: "30px",
          // height: "160px",
          backgroundSize: "cover",
        }}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
