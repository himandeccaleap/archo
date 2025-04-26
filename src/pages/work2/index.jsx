/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import MainSkin from "../../layouts/main-skin";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumnDetails from "../../components/Work-Three-Column-Details";
import projectsData from "../../data/projects.json"; // Importing projects data from JSON file

const Work2 = () => {
  const [visibleProjects, setVisibleProjects] = useState(9); // Show only 9 initially
  const [allLoaded, setAllLoaded] = useState(false);
  const totalProjects = projectsData.length; // Get total projects from JSON data

  useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects(totalProjects); // Show all projects after clicking
    setAllLoaded(true); // Hide button after showing all
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
      
      {/* Pass only the visible projects */}
      <WorkThreeColumnDetails visibleProjects={visibleProjects} className="h-full text-light" />
      
      {/* Show button only if not all projects are loaded */}
      {!allLoaded && (
        <div className="text-center mt-6">
          <button 
            onClick={loadMoreProjects} 
            className="btn px-6 py-2 text-dark rounded-lg shadow-md">
            Load More Projects
          </button>
        </div>
      )}
    </MainSkin>
  );
};

export default Work2;
