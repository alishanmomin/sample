import React from "react";

function Service() {
  return (
    <React.Fragment>
       <section class="services">
  
  <h1 className="os">OUR SERVICES</h1>
  <div className="icon">
    <hr className="line"></hr>
    <div >
        <i className="fas fa-burn"></i>
    </div>
    <hr className="line"></hr>
  </div>

  <div class="row">

    <div class="service-col">
      <i className="fas fa-cog"></i>
      <h3>Service Name</h3>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <button className="service-btn">Read More</button>
    </div>

    <div class="service-col">
      <i className="fas fa-flask"></i>
      <h3>Service Name</h3>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <button className="service-btn">Read More</button>    
    </div>

    <div class="service-col">
      <i className="far fa-clock"></i>
      <h3>Service Name</h3>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <button className="service-btn">Read More</button>
    </div>

  </div>
</section>
    </React.Fragment>
  );
}

export default Service;
