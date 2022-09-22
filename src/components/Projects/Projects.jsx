import React from "react";
import ProjectCard from "./Project Card/ProjectCard";
import "./Projects.css";

const projectData = [
  {
    img: "https://wallpapercave.com/wp/wp1919679.jpg",
    title: "Chill Trip",
  },
  {
    img: "https://images.alphacoders.com/594/594876.jpg",
    title: "SpaceSpot Explorer",
  },
  {
    img: "https://wallpaperaccess.com/full/655151.jpg",
    title: "SpaceSpot Adventurer",
  },
];

function Projects() {
  return (
    <div className="projects">
      {projectData.map((v, i) => (
        <ProjectCard key={i} image={v.img} title={v.title} />
      ))}
    </div>
  );
}

export default Projects;
