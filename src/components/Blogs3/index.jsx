import React from "react";
import Link from "next/link";

const Blogs3 = ({ smallTitle }) => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        {!smallTitle ? (
          <div className="main-header text-center">
            <h3>Latest News.</h3>
            <div className="tex-bg">Blog</div>
          </div>
        ) : (
          <div className="section-head">
            <h3>News</h3>
          </div>
        )}
        <div className="row">
          <div className="col-lg-4">
            <div
              className="item bg-img md-mb50 wow fadeInUp"
              data-wow-delay=".3s"
              style={{ backgroundImage: "url(/assets/img/blog/1.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog-details">
                  <a className="date">
                    <span>
                      <i>06</i> August
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <Link href="#">
                    <a className="author">
                      <span>Admin</span>
                    </a>
                  </Link>
                  <Link href="/blog-details">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details">
                    Double rectangle houses from old containers.
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/blog-details">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="item active bg-img md-mb50 wow fadeInUp"
              data-wow-delay=".5s"
              style={{ backgroundImage: "url(/assets/img/blog/2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog-details">
                  <a className="date">
                    <span>
                      <i>06</i> August
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <Link href="#">
                    <a className="author">
                      <span>Admin</span>
                    </a>
                  </Link>
                  <Link href="/blog-details">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details">
                    How to use solid color combine with simple furnitures.
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="/blog-details" className="simple-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="item bg-img wow fadeInUp"
              data-wow-delay=".8s"
              style={{ backgroundImage: "url(/assets/img/blog/3.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog-details">
                  <a className="date">
                    <span>
                      <i>06</i> August
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <Link href="#">
                    <a className="author">
                      <span>Admin</span>
                    </a>
                  </Link>
                  <Link href="/blog-details">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details">
                    How to use solid color combine with simple furnitures.
                  </Link>
                </h6>
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
    </section>
  );
};

export default Blogs3;
