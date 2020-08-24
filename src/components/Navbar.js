import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#:">
                State Parks <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#:">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#:">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#:">
                Landmarks
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
