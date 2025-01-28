/* eslint-disable @next/next/no-img-element */
import React from "react";

 const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Comapny</h3>
            </div>
            <div className="box">
              <h2 className="fz-40 fw-600 ls1 mb-20">
                25 years <br /> of Experience
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/about1.jpg" alt="" />

            <div className="feat mt-30">
              <div className="item">
                <div>
                  <h5>01</h5>
                  <h6>Architecture</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>02</h5>
                  <h6>Interior Design</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>03</h5>
                  <h6>3D Modeling</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;