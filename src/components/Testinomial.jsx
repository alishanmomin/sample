import React from "react";
import boy from "../assets/images/boy1.png";

export const Testinomial = () => {
  return (
    <div>
      <section>
        <div className="testinomial-block">
          <h1 className="os">Testinomial</h1>
          <div className="icon">
            <hr className="line"></hr>
            <div>
              <i className="fas fa-burn"></i>
            </div>
            <hr className="line"></hr>
          </div>

          <div className="name">
            <img className="testimonial-img" src={boy} alt="" />

            <div className="details">
              <div className="center">
                <h3>Kevin Dash</h3>
              </div>
              <div>
                <p>Tmmy </p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="name">
            <img className="testimonial-img" src={boy} alt="" />

            <div className="details">
              <div className="center">
                <h3>Kevin Dash</h3>
              </div>
              <div>
                <p>Tmmy </p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
          <div className="name">
            <img className="testimonial-img" src={boy} alt="" />

            <div className="details">
              <div>
                <h3>Kevin Dash</h3>
              </div>
              <div>
                <p className="center">Tmmy </p>
              </div>
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
