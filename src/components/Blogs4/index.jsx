/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs4 = () => {
  return (
    <section className="cls-blog section-padding position-re">
      <div className="container">
        <div className="main-header text-center">
          <h3>Interesting articles.</h3>
          <div className="tex-bg">Blog</div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="img">
                <img src="/assets/img/blog/1.jpg" alt="" />

                <div className="tag">
                  <Link href="/blog-details">Branding</Link>
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <h6>
                    By David Faber <span>14 august</span>
                  </h6>
                </div>
                <h5>
                  <Link href="/blog-details">
                    <a>How to use solid color combine with simple furnitures</a>
                  </Link>
                </h5>
                <Link href="/blog-details">
                  <a className="more">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="img">
                <img src="/assets/img/blog/2.jpg" alt="" />

                <div className="tag">
                  <Link href="/blog-details">Branding</Link>
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <h6>
                    By David Faber <span>14 august</span>
                  </h6>
                </div>
                <h5>
                  <Link href="/blog-details">
                    <a>Double rectangle houses from old containers</a>
                  </Link>
                </h5>
                <Link href="/blog-details">
                  <a className="more">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="img">
                <img src="/assets/img/blog/3.jpg" alt="" />

                <div className="tag">
                  <Link href="/blog-details">Branding</Link>
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <h6>
                    By David Faber <span>14 august</span>
                  </h6>
                </div>
                <h5>
                  <Link href="/blog-details">
                    <a>Double rectangle houses from old containers</a>
                  </Link>
                </h5>
                <Link href="/blog-details">
                  <a className="more">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
