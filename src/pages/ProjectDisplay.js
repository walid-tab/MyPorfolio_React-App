import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt='img of project'/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.url}><GitHubIcon /></Link>
      
    </div>
  );
}

export default ProjectDisplay;