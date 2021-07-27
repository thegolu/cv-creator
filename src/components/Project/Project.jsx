import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import ProjectModal from "./ProjectModal";
import uniqid from "uniqid";

function Project() {
  const [pro, setPro] = React.useState([
    {
      id: uniqid.time(),
      projectName: "Resume-Builder",
      technology: "React",
      task: "Used to create Beautiful Dynamic Resume"
    }
  ]);

  const initials = {
    id: "",
    projectName: "",
    technology: "",
    task: ""
  };

  const [newPro, SetnewPro] = React.useState(initials);

  function loadValue(event) {
    SetnewPro(event);
  }

  function saveProject(ed) {
    if (ed.id) {
      setPro((prev) => {
        return prev.map((e) => {
          if (e.id === ed.id) return ed;
          return e;
        });
      });
    } else {
      ed.id = uniqid.time();
      setPro((prev) => {
        return prev.concat(ed);
      });
    }
  }

  function deleteProject(id) {
    setPro((prev) => {
      return prev.filter((ed) => ed.id !== id);
    });
  }

  return (
    <>
      <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
        <div className="row">
          <div className="col">
            <h2 className="text-primary">Projects</h2>
          </div>
          <div className="col-2 text-right">
            <button
              onClick={() => loadValue(initials)}
              type="button"
              className="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#Project"
            >
              <i class="fas fa-plus-circle"></i>
              <span> Add</span>
            </button>
          </div>
        </div>
      </div>
      <div className="list-group list-group-flush">
        {pro.length > 0 ? (
          pro.map((event) => {
            return (
              <ProjectTemplate
                key={event.id}
                project={event}
                loadValue={loadValue}
                deleteProject={deleteProject}
              />
            );
          })
        ) : (
          <p className="ps-3">No Project. Please add some...</p>
        )}
      </div>

      <div
        class="modal fade"
        id="Project"
        tabindex="-1"
        aria-labelledby="ProjectLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ProjectLabel">
                Projects
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ProjectModal project={newPro} save={saveProject} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
