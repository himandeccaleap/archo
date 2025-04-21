/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/projects.json";

const WorkThreeColumn = () => {
  const initialCount = 9;
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);

    setVisibleProjects(projectsData.slice(0, initialCount));
  }, []);

  const categories = [...new Set(projectsData.map((project) => project.category))];

  return (
    <section className="works filter-img three-col section-padding bg-light text-dark">
      <div className="container">
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

        <div className="row gallery">
          {visibleProjects.map((project) => (
            <div key={project.id} className={`col-lg-4 col-md-6 items ${project.category}`}>
              <div className="item">
                <div className="img">
                  <Link href={`/project-details?id=${project.id}`}>
                    <img src={project.src} alt={project.alt} />
                  </Link>
                </div>
                <div className="cont text-light">
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

        <div className="text-center mt-30">
          <Link href="/work2">
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
              <span>View Full Portfolio</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkThreeColumn;
