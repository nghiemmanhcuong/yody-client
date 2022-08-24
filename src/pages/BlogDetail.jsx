import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {BsClock} from 'react-icons/bs';
import parse from 'html-react-parser';
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Loading from '../components/Loading';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import Helmet from '../components/Helmet';

import blogApi from '../api/blogApi';
import getDateBlog from '../utils/getDateBlog.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const BlogDetail = () => {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const [blog, setBlog] = useState(null);
    const [popularBlogs, setPopularBlogs] = useState(null);

    useEffect(() => {
        const fecthBlog = async () => {
            try {
                const response = await blogApi.getDetail(params.slug);
                if (response.success) {
                    setBlog(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi lấy bài viết', error);
            }
        };
        fecthBlog();
    }, [params]);

    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await blogApi.getPopularBlogs(10);
                if (response.success) {
                    setPopularBlogs(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy bài viết nôi bật ' + error);
            }
        };

        fetchPopularBlogs();
    }, []);

    return (
        <Helmet title={blog ? blog.title : ''}>
            <div className='blog-detail'>
                <div className='container'>
                    <div className='blog-detail_wrapper'>
                        {blog ? (
                            <>
                                <div className='blog-detail_image'>
                                    <img src={imgUrl + blog.image} alt='blog image' />
                                </div>
                                <div className='breadcrumb'>
                                    <ul className='breadcrumb_list'>
                                        <li className='breadcrumb_item'>
                                            <Link to='/'>Trang chủ</Link>
                                            <span>/</span>
                                        </li>
                                        <li className='breadcrumb_item'>
                                            <Link to={`/yody-love/${blog.slug}`}>{blog.title}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='blog-detail_main'>
                                    <h1 className='blog-detail_title'>{blog.title}</h1>
                                    <div className='blog-detail_info'>
                                        <p>{blog.author}</p>
                                        <div className='blog-detail_created'>
                                            <BsClock />
                                            <span>{getDateBlog(blog.createdAt)}</span>
                                        </div>
                                    </div>
                                    <p className='blog-detail_desc'>{blog.description}</p>
                                    <div className='blog-detail_content'>{parse(blog.content)}</div>
                                </div>
                            </>
                        ) : (
                            <Loading />
                        )}
                    </div>
                    <div className='blog-detail_relate'>
                        <div className='section_title'>
                            <h2>TIN LIÊN QUAN</h2>
                        </div>
                        <div className='blog-detail_relate_blog'>
                            <Swiper
                                slidesPerView={5}
                                speed={1000}
                                navigation={true}
                                spaceBetween={20}
                            >
                                {popularBlogs ? (
                                    popularBlogs.map((blog, index) => (
                                        <SwiperSlide key={index}>
                                            <BlogCard data={blog} />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <Loading />
                                )}
                            </Swiper>
                        </div>
                        <div className='blog-detail_relate_button'>
                            <Button
                                text='Xem thêm'
                                link='/'
                                fontSize={17}
                                bold={true}
                                outline={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default BlogDetail;
