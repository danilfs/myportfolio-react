import Project from "../project/Project";

import { projects } from "../helpers/projectList";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <h4 className="h4tag">My Projects</h4>
          <ul className="projects">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  img={project.img}
                  skills={project.skills}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
