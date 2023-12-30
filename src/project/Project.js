import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, img, skills, index }) => {
  return (
    <>
      <NavLink to={`project/${index}`}>
        <li className="project">
          <img src={img} alt={title} className="project__img" />
          <h3 className="h3tag">{skills}</h3>
          {index}
          <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
    </>
  );
};

export default Project;
