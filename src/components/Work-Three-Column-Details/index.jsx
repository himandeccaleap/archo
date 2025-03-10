// components/WorkThreeColumn.js
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectsData from "../../data/projects.json"; // Import your projects data

const WorkThreeColumnDetails = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState(15);
  const [dataLoaded, setDataLoaded] = useState(false); // Add dataLoaded state

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);

    // Check if projectsData is loaded before setting visibleProjects
    if (projectsData && projectsData.length > 0) {
      setVisibleProjects(projectsData.slice(0, projectsToShow));
      setDataLoaded(true); // Set dataLoaded to true
    }
  }, [projectsToShow]);

  const categories = [...new Set(projectsData.map((project) => project.category))]; // Get unique categories

  const loadMore = () => {
    setProjectsToShow((prev) => prev + 15);
  };

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
            {visibleProjects.map((project) => (
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
          <div className="text-center mt-30">
              <Link href="#" onClick={(e) => { e.preventDefault(); loadMore(); }}>
                <button
                  className="btn-curve bg-light" // Added bg-light class
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
              </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumnDetails;