import React from "react";
import aboutUs1Data from "../../data/about-us1.json";

const AboutUs1 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="exp-img wow fadeInUp" data-wow-delay=".3s">
              <div
                className="img bg-img wow imago"
                style={{ backgroundImage: `url(${aboutUs1Data.image})` }}
              >
                <div className="since playfont">
                  <span>Since</span>
                  <span>{aboutUs1Data.exp.since}</span>
                </div>
                <div className="years playfont">
                  <h2>{aboutUs1Data.exp.nmb}</h2>
                  <h5>Years Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
              <h6 className="sub-title">About Us</h6>
              <h2 className="mb-20 playfont">
                {aboutUs1Data.title.first} <br /> {aboutUs1Data.title.second}
              </h2>
              <p>{aboutUs1Data.content}</p>
              <div className="numbers mt-50">
                <div className="row">
                  {aboutUs1Data.numbers.map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <div className="item">
                        <h3>
                          <span className="nbr playfont">{item.number}</span>
                        </h3>
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
