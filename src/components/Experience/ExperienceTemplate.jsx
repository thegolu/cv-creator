import React from "react";

function ExperienceTemplate(props) {
  return (
    <>
      <div className="container-fluid list-group-item">
        <div className="row">
          <div className="col">
            <h5>{props.experience.companyName}</h5>
          </div>
          <div className="col-2 text-right">
            <i
              onClick={() => props.loadValue(props.experience)}
              style={{ cursor: "pointer" }}
              className="fas fa-user-edit mr-2"
              data-bs-toggle="modal"
              data-bs-target="#Experience"
            ></i>
            <i
              onClick={() => props.deleteExperience(props.experience.id)}
              style={{ cursor: "pointer" }}
              className="fas fa-trash"
            ></i>
          </div>
        </div>
        <span className="text-secondary text-small">
          <i class="far fa-calendar-alt"></i> {props.experience.dateFrom} -{" "}
          {props.experience.dateTo}
        </span>
        <p className="mb-0">
          <i>{props.experience.position}</i>. {props.experience.task}
        </p>
      </div>
    </>
  );
}

export default ExperienceTemplate;
