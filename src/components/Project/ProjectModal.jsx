import React from "react";

function ProjectModal(props) {
  const [pro, setPro] = React.useState(props.project);

  React.useEffect(() => {
    setPro(props.project);
  }, [props.project]);

  const inputHandler = (e) => {
    setPro({
      ...pro,
      [e.target.name]: e.target.value
    });
  };

  const save = (e) => {
    e.preventDefault();
    props.save(pro);
  };

  return (
    <>
      <form onSubmit={save}>
        <div class="mb-3">
          <label for="projectName" class="col-form-label">
            Project Name :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="projectName"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="technology" class="col-form-label">
            Technology :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="technology"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="task" class="col-form-label">
            Detail :
          </label>
          <textarea
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="task"
            autoComplete="off"
            required
          />
        </div>

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button
          type="submit"
          class="btn btn-primary ms-2"
          data-bs-dismiss="modal"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default ProjectModal;
