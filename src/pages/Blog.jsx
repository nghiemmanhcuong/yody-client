import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import Loading from '../components/Loading';
import BlogPageCard from '../components/BlogPageCard';

import blogApi from '../api/blogApi.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const Blog = () => {
    const params = useParams();
    const [blogs, setBlogs] = useState(null);
    const [popularBlogs, setPopularBlogs] = useState(null);

    useEffect(() => {
        const fecthBlogs = async () => {
            try {
                const response = await blogApi.getByCategory(params.slug, 15);
                if (response.success) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi lấy bài viết', error);
            }
        };
        fecthBlogs();
    }, [params]);

    useEffect(() => {
        const fecthPopularBlogs = async () => {
            try {
                const response = await blogApi.getByCategoryPopular(params.slug);
                if (response.success) {
                    setPopularBlogs(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi lấy bài viết', error);
            }
        };
        fecthPopularBlogs();
    }, [params]);

    return (
        <div className='blog'>
            <div className='container'>
                <h1 className='blog_title'>TIN TỨC TỔNG HỢP</h1>
                <div className='blog_wrapper'>
                    {blogs ? (
                        <Grid col={3} gap={20}>
                            {blogs.map((blog, index) =>
                                index == 2 ? (
                                    <>
                                        <div className='blog_item_popular'>
                                            <div className="blog_item_popular_header">
                                                Tin nổi bật
                                            </div>
                                            <div className="blog_item_popular_wrapper">
                                                {popularBlogs && popularBlogs.map((blog,index) => 
                                                    <div className='blog_item_popular_item' key={index}>
                                                        <Link to=''>
                                                            <img src={imgUrl + blog.image} alt="blog popular image" />
                                                        </Link>
                                                        <div className="blog_item_popular_item_content">
                                                            <h5>{blog.title}</h5>
                                                            <p>{blog.description}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='blog_item' key={index}>
                                            <BlogPageCard blog={blog} />
                                        </div>
                                    </>
                                ) : (
                                    <div className='blog_item' key={index}>
                                        <BlogPageCard blog={blog} />
                                    </div>
                                ),
                            )}
                        </Grid>
                    ) : (
                        <Loading />
                    )}
                </div>
                <div className='blog_more'>
                    <button>Xem thêm</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
