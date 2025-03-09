import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectGrid = ({ projects, filter }) => {
  const filteredProjects =
    filter === '*'
      ? projects
      : projects.filter((project) => project.category.includes(filter.slice(1)));

  return (
    <div id="isotope-grid" className="project--hover clearfix row no-gutters">
      {filteredProjects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
