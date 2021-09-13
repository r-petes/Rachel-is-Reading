import {Link} from 'react-router-dom';

const EachProject = (props) => {
    return (
        <div>
      <Link to={props.link}>
          <img src={props.image} alt="Project view" className="project-image"/>
      </Link>
      <div className="project-description">{props.description}</div>
      <div className="project-tools">{props.tools}</div>
    </div>
    )
}

export default EachProject
