import React, { useState } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectGrid from './ProjectGrid';
import projectsData from '../../data/projects.json';

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [visibleProjects, setVisibleProjects] = useState(8); // Initially show 8 projects

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleProjects(8); // Reset visible projects on filter change
  };

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4); // Load 4 more
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === '*') return true;
    return project.category.includes(activeFilter.slice(1));
  }).slice(0, visibleProjects); // Limit to visible projects

  return (
    <section className="project5 mb-75">
      <div className="row no-gutters ">
        <div className="col-md-12 ">
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <ProjectGrid projects={filteredProjects} filter={activeFilter} />
      {visibleProjects < projectsData.filter((project) => {
        if (activeFilter === '*') return true;
        return project.category.includes(activeFilter.slice(1));
      }).length && (
        <div className="see-more text-center mt-25 ">
          <button
            onClick={handleLoadMore}
            className="au-btn au-btn--pill au-btn--yellow au-btn--big w-25 au-btn--white"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;