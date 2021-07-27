import React from "react";

function ProjectTemplate(props) {
  return (
    <>
      <div className="container-fluid list-group-item">
        <div className="row">
          <div className="col">
            <h5>{props.project.projectName}</h5>
          </div>
          <div className="col-2 text-right">
            <i
              onClick={() => props.loadValue(props.project)}
              style={{ cursor: "pointer" }}
              className="fas fa-user-edit mr-2"
              data-bs-toggle="modal"
              data-bs-target="#Project"
            ></i>
            <i
              onClick={() => props.deleteProject(props.project.id)}
              style={{ cursor: "pointer" }}
              className="fas fa-trash"
            ></i>
          </div>
        </div>
        <p className="mb-0">
          <i>{props.project.technology}</i>
        </p>
        <p className="mb-0">
          <li>{props.project.task}</li>
        </p>
      </div>
    </>
  );
}

export default ProjectTemplate;
