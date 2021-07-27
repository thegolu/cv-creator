import React from "react";

function EducationModal(props) {
  const [education, setEducation] = React.useState(props.education); // initial value to render the form (this is called once, only on mount)

  const inputHandler = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value
    });
  };

  const save = (e) => {
    e.preventDefault();
    props.save(education); // pass the education object to the parent
  };

  // setEducation everytime props.education value changes
  React.useEffect(() => {
    setEducation(props.education);
  }, [props.education]);

  return (
    <>
      <form onSubmit={save}>
        <div class="mb-3">
          <label for="schoolName" class="col-form-label">
            School Name :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="schoolName"
            autoComplete="off"
            required
          />
        </div>
        <div class="mb-3">
          <label for="title" class="col-form-label">
            Title :
          </label>
          <input
            onChange={inputHandler}
            type="text"
            class="form-control"
            name="title"
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

export default EducationModal;
