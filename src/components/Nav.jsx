import React from "react";
import logo from "../assets/images/logo.png";

function Nav() {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    console.log("sdsd", navLinks);
    if (navLinks) {
      navLinks.style.right = "0";
    }
  };
  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  };

  return (
    <React.Fragment>
      <div className="header">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="banner">
        <nav>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
              <li>Testinomial</li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="extra">
          <h1>Welcome To Tigris </h1>
          <p>Hello World</p>

          <div className="btn-div">
            <button className="hero-btn">Read More</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
