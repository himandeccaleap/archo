/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import MainSkin from "../../layouts/main-skin";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumnDetails from "../../components/Work-Three-Column-Details";
import projectsData from "../../data/projects.json"; // Importing projects data from JSON file

const Work2 = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [allLoaded, setAllLoaded] = useState(false);
  const totalProjects = projectsData.length; // Get total projects from JSON data

  useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  const loadMoreProjects = () => {
    if (visibleProjects + 6 >= totalProjects) {
      setVisibleProjects(totalProjects);
      setAllLoaded(true);
    } else {
      setVisibleProjects(visibleProjects + 6);
    }
  };

  return (
    <MainSkin>
      <WorkHeader
        center
        title={{
          first: "Architecture is a visual art,",
          second: "and the building speak for themselves",
        }}
        content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultrices, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
      />
      <WorkThreeColumnDetails visibleProjects={visibleProjects} className="h-full text-light" />
      {!allLoaded && (
        <div className="text-center ">
          <button onClick={loadMoreProjects} className="btn px-2 py-2 text-dark rounded-lg shadow-md">
            Load More Projects
          </button>
        </div>
      )}
    </MainSkin>
  );
};

export default Work2;
