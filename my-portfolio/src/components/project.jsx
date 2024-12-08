const Project = ({ project }) => (
    <div className="project">
      <h3>{project.title}</h3>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
  
  export default Project;
  