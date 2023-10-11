import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <figure className="footer-logo">
                <a href="/">
                  <img
                    src="https://preview.colorlib.com/theme/agenda/images/logo.png.webp"
                    alt="logo"
                  />
                </a>
              </figure>
              <nav className="footer-navigation">
                <ul className="flex flex-wrap justify-content-center align-items-center">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Events</a>
                  </li>
                  <li>
                    <a href="/">News</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </nav>
              Copyright © 2023 All rights reserved by vk
              <div className="footer-social">
                <ul className="flex flex-wrap justify-content-center align-items-center">
                  <li>
                    <a href="/">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
