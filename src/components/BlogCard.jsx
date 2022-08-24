import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AiOutlineClockCircle} from 'react-icons/ai';

import getDateBlog from '../utils/getDateBlog.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const BlogCard = (props) => {
    const blog = props.data ? props.data : {};

    return (
        <div className='blog-card'>
            <div className='blog-card_image'>
                <Link to={`/bai-viet/${blog.slug}`}>
                    <img src={`${imgUrl + blog.image}`} alt='blog image' />
                </Link>
            </div>
            <div className='blog-card_info'>
                <h3>
                    <Link to={`/bai-viet/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p>{blog.description}</p>
                <div className='blog-card_info_created'>
                    <AiOutlineClockCircle size={16}/>
                    <span>{getDateBlog(blog.createdAt)}</span>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogCard;
