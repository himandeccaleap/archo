// components/WorkThreeColumn.js
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/projects.json"; // Import your projects data

const WorkThreeColumn = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const categories = [...new Set(projectsData.map((project) => project.category))]; // Get unique categories

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              {categories.map((category) => (
                <span key={category} data-filter={`.${category}`}>
                  {projectsData.find((project) => project.category === category)
                    ?.categoryLabel || category}
                </span>
              ))}
            </div>
          </div>
          <div className="row gallery">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`col-lg-4 col-md-6 items ${project.category}`}
              >
                <div className="item">
                  <div className="img">
                    <img src={project.src} alt={project.alt} />
                  </div>
                  <div className="cont">
                    <h5>
                      <Link href={`/project-details?id=${project.id}`}>
                        {project.alt}
                      </Link>
                    </h5>
                    <span>{project.company}</span>
                    <span>{project.categoryLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;