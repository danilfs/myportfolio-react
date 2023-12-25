import "./style.css"
import project1 from "./../img/projects/01.jpg"

const Project = ({title,img,skills}) => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={img} alt={title} className="project__img" />
          <h3 className="h3tag">{skills}</h3>
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
