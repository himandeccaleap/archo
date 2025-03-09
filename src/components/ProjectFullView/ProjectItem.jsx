import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className={`col-lg-3 col-md-6 col-sm-12 item ${project.category}`}>
      <div className="project__item">
        <div className="pro__img">
          <img alt={project.alt} src={project.src} />
          <a href="" className="pro-link">
            <div className="pro-info pro-info--darker">
              <h4 className="company">{project.company}</h4>
              <p className="cat-name">
                <em>{project.categoryLabel}</em>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
