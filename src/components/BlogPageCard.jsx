import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import {BsClock} from 'react-icons/bs';

import getDateBlog from '../utils/getDateBlog.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const BlogPageCard = props => {
  return (
    <div className="blog-page-card">
        <div className="blog-page-card_img">
            <Link to={`/bai-viet/${props.blog.slug}`}>
                <img src={imgUrl + props.blog.image} alt="blog image" />
            </Link>
        </div>  
        <div className="blog-page-card_content">
            <p className="blog-page-card_content_category">
                <Link to={`/bai-viet/${props.blog.slug}`}>
                    Có thể bạn chưa biết
                </Link>
            </p>
            <h3 className="blog-page-card_content_title">
                <Link to={`/bai-viet/${props.blog.slug}`}>
                    {props.blog.title}
                </Link>
            </h3>
            <p className='blog-page-card_content_desc'>
                {props.blog.description}
            </p>
            <div className='blog-page-card_content_footer'>
                <p>{props.blog.author}</p>
                <div className='blog-page-card_content_created'>
                    <BsClock />
                    <span>{getDateBlog(props.blog.createdAt)}</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

BlogPageCard.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogPageCard