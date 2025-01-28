import React from "react";
import Split from "../Split";
import Link from "next/link";

const NextProject = () => {
  return (
    <section className="call-action nogif next">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content text-center">
              <Link href="/project-details">
                <a>
                  <Split>
                    <h6
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      Next Project
                    </h6>
                  </Split>

                  <Split>
                    <h2
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      <b> Luxury </b> Furniture
                    </h2>
                  </Split>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nxt-img bg-img"
        data-background="img/portfolio/project1/bg.jpg"
      ></div>
    </section>
  );
};

export default NextProject;
