/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkFourColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img four-col section-padding">
        <div className="container-fluid">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".interior">Interior</span>
              <span data-filter=".theaters">Theaters</span>
              <span data-filter=".residential">Residential</span>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-3 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/01.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/02.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/03.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/04.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/05.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/06.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/07.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/08.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/09.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFourColumn;
