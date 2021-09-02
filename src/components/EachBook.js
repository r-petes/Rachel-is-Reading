import {Link} from 'react-router-dom';

const EachBook = (props) => {
    return (
        <div>
      <Link to={props.link}>
        <div className="book-image">
          <img src={props.image} alt="Book Image"/>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-category">{props.category}</div>
            </Link>
    </div>
    )
}

export default EachBook
