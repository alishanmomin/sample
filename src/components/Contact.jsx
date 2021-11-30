import React from "react";
import image from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div className="con-img">
      <div class="contact-col">
        <h1 className="contact-us">CONTACT US</h1>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <textarea rows="5" placeholder="Your Comment"></textarea>
        <button class="hero-btn ">POST</button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Contact;
