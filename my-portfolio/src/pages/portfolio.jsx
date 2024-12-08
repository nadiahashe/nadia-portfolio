import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', link: 'https://example1.com', github: 'https://github.com/example1' },
  { title: 'Project 2', link: 'https://example2.com', github: 'https://github.com/example2' },
  // Add more projects as needed
];

const Portfolio = () => (
  <section id="Portfolio">
    <h2>Portfolio</h2>
    {projects.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </section>
);

export default Portfolio;
