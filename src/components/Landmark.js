import React from "react";
import "../App.scss";

export default function Landmark() {
  return (
    <article className="landmark-card">
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/154140/pexels-photo-154140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="grand canyon"
        />
        <span className="close-button">
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="landmark-info">
        <h3>Grand Canyon</h3>
        <h4>Arizona</h4>
        <h5>
          Info{" "}
          <span>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nibh
          ultricies, convallis nisi mattis, vehicula velit.
        </p>
      </div>
    </article>
  );
}
