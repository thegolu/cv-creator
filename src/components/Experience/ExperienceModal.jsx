import React from "react";

function ExperienceModal(props) {
  const [exp, setExp] = React.useState(props.experience);

  React.useEffect(() => {
    setExp(props.experience);
  }, [props.experience]);

  const inputHandler = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value
    });
  };

  const save = (e) => {
    e.preventDefault();
    props.save(exp);
  };

  return (
    <>
      <form onSubmit={save}>
        <div class="mb-3">
          <label for="companyName" class="col-form-label">
            Company Name :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="companyName"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="position" class="col-form-label">
            Position :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="position"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="task" class="col-form-label">
            Task :
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
        <div class="mb-3">
          <label for="dateFrom" class="col-form-label">
            Date From :
          </label>
          <input
            onChange={inputHandler}
            type="date"
            class="form-control"
            name="dateFrom"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="dateTo" class="col-form-label">
            Date To :
          </label>
          <input
            onChange={inputHandler}
            type="date"
            class="form-control"
            name="dateTo"
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

export default ExperienceModal;
