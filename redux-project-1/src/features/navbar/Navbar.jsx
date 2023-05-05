import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark mb-4"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React-Redux
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/posts"}>
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/posts/add"}>
                  Add Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
