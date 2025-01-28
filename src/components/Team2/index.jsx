/* eslint-disable @next/next/no-img-element */
import React from "react";
import Team1Data from "../../data/team1.json";

const Team2 = () => {
  return (
    <section className="team bord section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Creative Team.</h3>
          <div className="tex-bg">Team</div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {Team1Data.slice(0, 4).map((item, index) => (
            <div className="col-lg-3" key={item.id}>
              <div className="item">
                <div
                  className={`img ${
                    index && !(index & (index - 1)) ? "right" : "left"
                  }`}
                >
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <h5>{item.username}</h5>
                  <span>{item.usertitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team2;
