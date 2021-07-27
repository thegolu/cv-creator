import React from "react";
import EducationTemplate from "./EducationTemplate";
import EducationModal from "./EducationModal";
import uniqid from "uniqid";
function Education() {
  const [edu, setEdu] = React.useState([
    {
      id: uniqid.time(),
      schoolName: "IIT ISM Dhanbad",
      title: "B.Tech. in EIE",
      dateFrom: "2018-07-23",
      dateTo: "2021-05-20"
    },
    {
      id: uniqid.time(),
      schoolName: "IIT ISM Dhanbad",
      title: "B.Tech. in EIE",
      dateFrom: "2018-07-23",
      dateTo: "2021-05-20"
    }
  ]);

  const initials = {
    id: "",
    schoolName: "",
    title: "",
    dateFrom: "",
    dateTo: ""
  };

  const [newEdu, SetnewEdu] = React.useState(initials);

  function loadValue(event) {
    SetnewEdu(event);
  }

  function saveEducation(ed) {
    if (ed.id) {
      setEdu((prev) => {
        return prev.map((e) => {
          if (e.id === ed.id) return ed;
          return e;
        });
      });
    } else {
      ed.id = uniqid.time();
      setEdu((prev) => {
        return prev.concat(ed);
      });
    }
  }

  function deleteEducation(id) {
    setEdu((prev) => {
      return prev.filter((ed) => ed.id !== id);
    });
  }

  return (
    <>
      <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
        <div className="row">
          <div className="col">
            <h2 className="text-primary">Education</h2>
          </div>
          <div className="col-2 text-right">
            <button
              onClick={() => loadValue(initials)}
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#Education"
            >
              <i class="fas fa-plus-circle"></i>
              <span> Add</span>
            </button>
          </div>
        </div>
      </div>
      <div className="list-group list-group-flush">
        {edu.length > 0 ? (
          edu.map((event) => {
            return (
              <EducationTemplate
                key={event.id}
                education={event}
                loadValue={loadValue}
                deleteEducation={deleteEducation}
              />
            );
          })
        ) : (
          <p className="ps-3">No Education. Please add some...</p>
        )}
      </div>

      <div
        class="modal fade"
        id="Education"
        tabindex="-1"
        aria-labelledby="EducationLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="EducationLabel">
                Education Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <EducationModal education={newEdu} save={saveEducation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
