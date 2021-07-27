import React from "react";

function EducationTemplate(props) {
  return (
    <>
      <div className="container-fluid list-group-item">
        <div className="row">
          <div className="col">
            <h5>{props.education.schoolName}</h5>
          </div>
          <div className="col-2 text-right">
            <i
              onClick={() => props.loadValue(props.education)}
              style={{ cursor: "pointer" }}
              className="fas fa-user-edit mr-2"
              data-bs-toggle="modal"
              data-bs-target="#Education"
            ></i>
            <i
              onClick={() => props.deleteEducation(props.education.id)}
              style={{ cursor: "pointer" }}
              className="fas fa-trash"
            ></i>
          </div>
        </div>
        <span className="text-secondary text-small">
          <i class="far fa-calendar-alt"></i> {props.education.dateFrom} -{" "}
          {props.education.dateTo}
        </span>
        <p>{props.education.title}</p>
      </div>
    </>
  );
}

export default EducationTemplate;
