import React from "react";
import Modal from "bootstrap/js/dist/modal";

function General() {
  const [user, setUser] = React.useState({
    name: "Pratyaksh Goyal",
    email: "pratyaksh2000@gmail.com",
    phone: "+91-8890752494"
  });

  function handleClick(event) {
    const Newname = event.target.name;
    const Newvalue = event.target.value;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [Newname]: Newvalue
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="container p-3 bg-primary text-light rounded">
        <div className="row">
          <div className="col">
            <h2 className="mt-2 mb-2">{user.name}</h2>

            <div>
              <i className="fas fa-envelope"></i>
              <span> {user.email}</span>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <span> {user.phone}</span>
            </div>
          </div>
          <div className="col-2 text-right">
            <i
              style={{ cursor: "pointer" }}
              className="fas fa-user-edit"
              data-bs-toggle="modal"
              data-bs-target="#General"
            ></i>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="General"
        tabindex="-1"
        aria-labelledby="GeneralLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="GeneralLabel">
                General Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="name" class="col-form-label">
                    Name :
                  </label>
                  <input
                    onChange={handleClick}
                    type="text"
                    class="form-control"
                    name="name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="col-form-label">
                    Email :
                  </label>
                  <input
                    onChange={handleClick}
                    type="email"
                    class="form-control"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="col-form-label">
                    Phone :
                  </label>
                  <input
                    onChange={handleClick}
                    type="text"
                    class="form-control"
                    name="phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onSubmit={submitForm}
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default General;
