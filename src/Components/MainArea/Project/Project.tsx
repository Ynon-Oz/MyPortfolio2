import { Component } from "react";
import ProjectModel from "../../../Models/ProjectModel";
import "./Project.css";

interface ProjectProps {
  projects: ProjectModel;
}


  function Project (props: ProjectProps): JSX.Element {


    return (
      <div className="ProjectCard Box">
      <div>
          {props.projects.name} <br/>
         
      </div>
<div>
          <img src={props.projects.image} alt={props.projects.name}/>
      </div>
  </div>

    );
  }


export default Project;
