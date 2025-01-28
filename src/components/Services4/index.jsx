import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";

const Services4 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="services halfbg">
      <div
        className="background bg-img valign parallaxie"
        style={{ backgroundImage: `url(/assets/img/04.jpg)` }}
        data-overlay-dark="7"
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            autoplay
            isOpen={isOpen}
            videoId="AzwC6umvd1s"
            onClose={() => setOpen(false)}
          />
        )}
        <Link
          href="https://youtu.be/AzwC6umvd1s"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <a className="play-button vid">
            <svg className="circle-fill">
              <circle
                cx="43"
                cy="43"
                r="39"
                stroke="#fff"
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
        </Link>
      </div>
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-3 col-md-6 item-bx">
            <h2 className="custom-font numb">01</h2>
            <h6 className="mb-20">Architecture</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <Link href="#">
              <a className="more custom-font mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <h2 className="custom-font numb">02</h2>
            <h6 className="mb-20">Interior Design</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <Link href="#">
              <a className="more custom-font mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <h2 className="custom-font numb">03</h2>
            <h6 className="mb-20">3D Modeling</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <Link href="#">
              <a className="more custom-font mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <h2 className="custom-font numb">04</h2>
            <h6 className="mb-20">Furniture Design</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <Link href="#">
              <a className="more custom-font mt-30">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services4;
