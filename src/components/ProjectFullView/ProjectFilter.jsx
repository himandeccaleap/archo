import React from 'react';

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { label: 'All', filter: '*' },
    { label: 'Agency Interior', filter: '.agency' },
    { label: 'Ecommerce Interior', filter: '.ecomer' },
    { label: 'Residential Interior', filter: '.resident' },
  ];

  return (
    <div id="filter-wrap">
      <ul id="filter" className="ul--no-style ul--inline">
        {filters.map((item) => (
          <li
            key={item.filter}
            className={activeFilter === item.filter ? 'active' : ''}
            onClick={() => onFilterChange(item.filter)}
          >
            <span data-filter={item.filter}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilter;
