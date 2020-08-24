import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#:">
                State Parks <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:">
                Landmarks
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
