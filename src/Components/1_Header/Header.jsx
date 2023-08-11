import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container px-lg-5">
        <a className="navbar-brand" href="#">
          Start Boostrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
