import React from "react";
import ExperienceTemplate from "./ExperienceTemplate";
import ExperienceModal from "./ExperienceModal";
import uniqid from "uniqid";
function Experience() {
  const [exp, setExp] = React.useState([
    {
      id: uniqid.time(),
      companyName: "XYZ Company",
      position: "Software Engineer",
      task: "Don't Know",
      dateFrom: "2018-07-23",
      dateTo: "2021-05-20"
    }
  ]);

  const initials = {
    id: "",
    companyName: "",
    position: "",
    task: "",
    dateFrom: "",
    dateTo: ""
  };

  const [newExp, SetnewExp] = React.useState(initials);

  function loadValue(event) {
    SetnewExp(event);
  }

  function saveExperience(ed) {
    if (ed.id) {
      setExp((prev) => {
        return prev.map((e) => {
          if (e.id === ed.id) return ed;
          return e;
        });
      });
    } else {
      ed.id = uniqid.time();
      setExp((prev) => {
        return prev.concat(ed);
      });
    }
  }

  function deleteExperience(id) {
    setExp((prev) => {
      return prev.filter((ed) => ed.id !== id);
    });
  }

  return (
    <>
      <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
        <div className="row">
          <div className="col">
            <h2 className="text-primary">Experience</h2>
          </div>
          <div className="col-2 text-right">
            <button
              onClick={() => loadValue(initials)}
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#Experience"
            >
              <i class="fas fa-plus-circle"></i>
              <span> Add</span>
            </button>
          </div>
        </div>
      </div>
      <div className="list-group list-group-flush">
        {exp.length > 0 ? (
          exp.map((event) => {
            return (
              <ExperienceTemplate
                key={event.id}
                experience={event}
                loadValue={loadValue}
                deleteExperience={deleteExperience}
              />
            );
          })
        ) : (
          <p className="ps-3">No Experience. Please add some...</p>
        )}
      </div>

      <div
        class="modal fade"
        id="Experience"
        tabindex="-1"
        aria-labelledby="ExperienceLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ExperienceLabel">
                Experiences
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ExperienceModal experience={newExp} save={saveExperience} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
