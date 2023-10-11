import React from 'react';
import Aboutus from './Aboutus';
import Footer from './Footer';
import Navbar from './Navbar';
import Partners from './Partners';
import '../../css/mystyle.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div>
          <Navbar />
        </div>
        <div className="headings">
          We have the best events.
          <br />
          Get your ticket now!
        </div>
      </div>
      <Aboutus />
      <Partners />
      <Footer />
    </React.Fragment>
  );
};

export default Header;
