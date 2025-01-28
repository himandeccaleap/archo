/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials2 = () => {
  return (
    <section className="testimonials2 bg-blc">
      <div className="container-fluid no-padding">
        <div className="row">
          <div className="col-lg-8 no-padding order2">
            <div className="box">
              <Slider
                className="testimslic-item wow fadeInUp"
                data-wow-delay=".3S"
                {...{
                  dots: true,
                  arrows: false,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 2,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Alex Regelman</h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Arch digital agency to support our organic and
                    paid social media activity has extended the marketing
                    activities we are able to achieve.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Alex Regelman</h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Arch digital agency to support our organic and
                    paid social media activity has extended the marketing
                    activities we are able to achieve.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Alex Regelman</h6>
                        <span className="author-details">
                          Co-founder, Colabrio
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Working with Arch digital agency to support our organic and
                    paid social media activity has extended the marketing
                    activities we are able to achieve.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
              </Slider>
              <div className="qoute-icon">
                <img src="/assets/img/icons/left-quote.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 order1">
            <div className="sec-head mt-80 mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Testimonials
              </h6>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  What <br /> People <br /> Says.
                </h3>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
