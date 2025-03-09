/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-600 text-u ls1 mb-30">Our Comapny</h3>
              <p>
              We provide complete design solution, for both commercial and residential projects. This includes space planning, furniture design, 3D-rendering etc. Our approach to 
              design and implementation is consistently oriented towards innovations, exploring the appropriate use of latest technology and material. Every project is a true 
              collaboration with the client's tastes, needs and budget firmly in mind.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/feat.jpg" alt="" />
            <div className="stauts">
              <div className="item">
                <h4>
                  3<span>K</span> +
                </h4>
                <h6>Happy Clients</h6>
              </div>
              <div className="item">
                <h4>
                  14<span>K</span> +
                </h4>
                <h6>Success Projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
