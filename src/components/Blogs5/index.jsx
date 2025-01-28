/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs5 = () => {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="section-head">
          <h3>News</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/assets/img/blog/03.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog-details">
                      <a className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog-details">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link href="/blog-details" className="simple-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/assets/img/blog/02.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog-details">
                      <a className="date">
                        <span>
                          <i>06</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog-details">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link href="/blog-details" className="simple-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs5;
