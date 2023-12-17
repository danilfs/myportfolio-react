

import Project from "../project/Project"
import project2 from "./../img/projects/02.jpg"
import project3 from "./../img/projects/03.jpg"
import project4 from "./../img/projects/04.jpg"
import project5 from "./../img/projects/05.jpg"
import project6 from "./../img/projects/06.jpg"


const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <h4>My Projects</h4>
          <ul className="projects">
            <Project/>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
