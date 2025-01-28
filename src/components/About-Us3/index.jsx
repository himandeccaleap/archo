import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs3 = () => {
  React.useEffect(() => {
    console.clear();
  }, [])
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="extra wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-20 playfont fz-50">
                What we <br /> actually do.
              </h2>
              <p>
                Architecture bibendum pharetra eleifend. Suspendisse vel
                volutpat purus, sit amet bibendum nisl. mollis turpis a ipsum
                ultes, nec condi mentum ipsum consequat. Mauris vitae consequat
                nibh, vitae interdum mi.
              </p>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="specialty wow fadeInUp" data-wow-delay=".5s">
              <ul>
                <li>
                  <span>01.</span>Design Project
                </li>
                <li>
                  <span>02.</span>Interior Visualization
                </li>
                <li>
                  <span>03.</span>Landscape Design
                </li>
                <li>
                  <span>04.</span>Architect Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img pat valign text-center"
        style={{ backgroundImage: `url(/assets/img/pat1.png)` }}
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen}
            videoId="AzwC6umvd1s"
            onClose={() => setOpen(false)}
          />
        )}
        <a
          className="play-button color vid wow fadeInUp"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          data-wow-delay=".7s"
          href="https://youtu.be/AzwC6umvd1s"
        >
          <svg className="circle-fill">
            <circle
              cx="43"
              cy="43"
              r="39"
              stroke="#b19777"
              strokeWidth=".5"
            ></circle>
          </svg>
          <svg className="circle-track">
            <circle
              cx="43"
              cy="43"
              r="39"
              stroke="none"
              strokeWidth="1"
              fill="none"
            ></circle>
          </svg>
          <span className="polygon">
            <i className="pe-7s-play"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default AboutUs3;
