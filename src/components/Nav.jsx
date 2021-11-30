import React from "react";
import logo from '../assets/images/logo.png'

function Nav() {
  return (
    <React.Fragment>
      <div className="header">
        <div>
          <img className="logo" src={logo} alt=""/>
        </div>
      <div className="icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
           
      </div>
      </div>
      <div className="banner">
        <div className="heading">
          <h4>Hello1</h4>
          <h4>Hello2</h4>
          <h4>Hello3</h4>
          <h4>Hello4</h4>
          <h4>Hello5</h4>
          <h4>Hello6</h4>
          <h4>Hello7</h4>
        </div>
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
