/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs1.json";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-grid center bg-light text-dark section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                Latest News
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Blogs
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          {Blog1Data.slice(0, 2).map((blog, index) => {
            // Ensure the blog link is correctly assigned
            const blogLink = blog.Link || "/blogs"; // fallback if Link is missing

            return (
              <div className="col-lg-6" key={blog.id}>
                <div
                  className="item wow fadeInUp md-mb50"
                  data-wow-delay={index === 0 ? ".3s" : ".5s"}
                >
                  <div className="post-img">
                    <div className="img">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">

                      <Link href={blogLink}>{blog.date}</Link>
                    </div>

                    <h5 className="playfont">
                      <Link href={blogLink}>{blog.title}</Link>
                    </h5>

                    <Link href={blogLink}>
                      <a className="more">
                        <span className="custom-font">Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blog Grid Button */}
        <div className="row mt-80">
          <div className="col-12 text-center">
            <Link href="/blogs">
              <button
                className="btn-curve bg-light"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span>View All Blogs</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
