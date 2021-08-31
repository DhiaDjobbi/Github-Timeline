import React from "react";
const Header = () => {
  return (
    <>
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-lg-6 text-center centerr">
            <div className="service-box">
              <img src="logo.svg" alt="Logo" />
              <div className="content">
                <h1 className="pagetitle mr-2">GitHub Timeline</h1>
                <p style={{ color: "#545C64" }}>
                  API's and graphical representation of information are
                  hallmarks of modern web applications.
                  <br />
                  <b className="mr-1">GitHub Timeline</b>
                  combines the two to create a visual history of a users GitHub
                  activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
