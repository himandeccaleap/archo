import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skillsCircleData from '../../data/skills-circle.json'

const SkillsCircle = () => {
  const cpStyle = {
    path: {
      stroke: "#b19777",
    },
    trail: {
      stroke: "#0f1013",
    },
    text: {
      fill: "#ffffff",
      fontSize: "16px",
    },
  };
  return (
    <section
      className="skills-circle section-padding bg-img parallaxie"
      style={{ backgroundImage: "url(/assets/img/1.jpg" }}
      data-overlay-dark="7"
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Best Skills
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Best Skills
              </h4>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          {skillsCircleData.map((skill) => (
            <div className="col-lg-3 col-md-6" key={skill.id}>
              <div className="item text-center">
                <div className="skill">
                  <CircularProgressbar
                    value={skill.val}
                    strokeWidth={2}
                    styles={cpStyle}
                  />
                  <span className="playfont">{`${skill.val}%`}</span>
                </div>
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
