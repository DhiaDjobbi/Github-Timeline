import React from "react";
const InputSearch = ({ username, setUsername, searchRepos, error }) => {
  return (
    <>
      <div className="container py-1">
        <form onSubmit={searchRepos}>
          <div className="row">
            <div className="col-lg-6 text-center centerr">
              <div className="form-group search">
                <h4 className="py-3" htmlFor="username">
                  GitHub Username:
                </h4>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className={
                    error !== "" ? "form-control is-invalid" : "form-control"
                  }
                  style={{ width: "60%", margin: "0 auto" }}
                  id="username"
                  placeholder="Username"
                />
                <div
                  style={{ fontWeight: "bold", fontSize: "100%" }}
                  className="invalid-feedback"
                >
                  {error}
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!username}
                style={{
                  cursor: username ? "pointer" : "not-allowed",
                  backgroundColor: "#0e76a8",
                  border: "none",
                }}
              >
                Browse Repositories
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputSearch;
