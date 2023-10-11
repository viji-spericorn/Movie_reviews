import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img
              src="https://preview.colorlib.com/theme/agenda/images/logo.png.webp"
              alt="logo"
              height="60px"
            ></img>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fab fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 lists">
              <li className="nav-item list">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="/venue">
                  Venues
                </a>
              </li>
              <li className="nav-item btn">
                <a className="nav-link" href="/auth/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
