/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/projects.json";

const WorkThreeColumn = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);

    setVisibleProjects(projectsData.slice(0, projectsToShow));
  }, [projectsToShow]);

  const categories = [...new Set(projectsData.map((project) => project.category))];

  const loadMore = (e) => {
    e.preventDefault();
    setProjectsToShow((prev) => prev + 15);
  };

  return (
    <section className="works filter-img three-col section-padding bg-light">
      <div className="container">
        {/* Category Filters */}
        <div className="filtering text-center mb-30">
          <div className="filter">
            <span data-filter="*" className="active">All</span>
            {categories.map((category) => (
              <span key={category} data-filter={`.${category}`}>
                {projectsData.find((p) => p.category === category)?.categoryLabel || category}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row gallery">
          {visibleProjects.map((project) => (
            <div key={project.id} className={`col-lg-4 col-md-6 items ${project.category}`}>
              <div className="item">
                <div className="img">
                  <Link href={`/project-details?id=${project.id}`}>
                    <img src={project.src} alt={project.alt} />
                  </Link>
                </div>
                <div className="cont">
                  <h5>
                    <Link href={`/project-details?id=${project.id}`}>{project.alt}</Link>
                  </h5>
                  <span>{project.company}</span>
                  <span>{project.categoryLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {projectsToShow < projectsData.length && (
          <div className="text-center mt-30">
            <button
              className="btn-curve bg-light"
              onClick={loadMore}
              style={{
                padding: "10px 15px",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>Load More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkThreeColumn;
