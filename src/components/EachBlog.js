import {Link} from 'react-router-dom';

const EachBlog = (props) => {
    return (
        <div>
      <Link to={props.link}>
        <div className="blog-image">
          <img src={props.image} alt="Blog Image"/>
        </div>
        <div className="blog-title">{props.title}</div>
        <div className="blog-category">{props.category}</div>
            </Link>
    </div>
    )
}

export default EachBlog
