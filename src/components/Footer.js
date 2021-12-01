import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-align">
          <h4>News letter</h4>
          <p>printer took a galley of type and scrambled it to make a type</p>
          <input type="email" placeholder="Enter Email" />
          <button>POST</button>
        </div>
        <div>
          Navigation
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            <li>Testinomial</li>
          </ul>
        </div>
        {/* <div>
          Follow us
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div> */}
        {/* <div>
          <p>Copyright &copy; 2022</p>
        </div> */}
      </section>
    </div>
  );
};

export default Footer;
