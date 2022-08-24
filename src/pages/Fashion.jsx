import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Grid from '../components/Grid';
import Loading from '../components/Loading';
import Services from '../components/Services';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';

import categoryApi from '../api/categoryApi.js';
import blogApi from '../api/blogApi.js';
import productApi from '../api/productApi.js';

import pageFamaleSlider from '../asset/images/page_nu_slider_1.webp';
import pageMaleSlider from '../asset/images/page_nam_slider_1.webp';
import pageChildrenSlider from '../asset/images/page_treem_slider_1.webp';
import {pageFamaleBanners, pageMaleBanners, pageChildrenBanners} from '../asset/constains.js';

const Fashion = () => {
    SwiperCore.use([Navigation]);

    const params = useParams();
    const [slider, setSlider] = useState(null);
    const [title, setTitle] = useState('');
    const [banners, setBanners] = useState(null);
    const [object, setObject] = useState(null);
    const [categories, setCategories] = useState(null);
    const [parentcategories, setParentCategories] = useState(null);
    const [popularBlogs, setPopularBlogs] = useState(null);
    const [products, setProducts] = useState(null);
    const [categoryActive, setCategoryActive] = useState(null);

    useEffect(() => {
        if (params.object == 'nu') {
            setObject('famale');
            setSlider(pageFamaleSlider);
            setBanners(pageFamaleBanners);
            setTitle('Thời Trang Nữ - Quần Áo Nữ Đẹp, Mới Nhất');
        } else if (params.object == 'nam') {
            setObject('male');
            setSlider(pageMaleSlider);
            setBanners(pageMaleBanners);
            setTitle('Thời Trang Nam Đẹp, Phong Cách Trẻ Trung Năng Động');
        } else if (params.object == 'tre-em') {
            setObject('children');
            setSlider(pageChildrenSlider);
            setBanners(pageChildrenBanners);
            setTitle('Quần Áo Trẻ Em - Thời Trang Cho Bé Cao Cấp 2022');
        }
    }, [params]);

    useEffect(() => {
        if (object) {
            const fetchPopularCategoris = async () => {
                try {
                    const response = await categoryApi.getPopular(object);
                    if (response.success) {
                        setCategories(response.data);
                    }
                } catch (error) {
                    console.error('Có lỗi khi thực hiện lấy loại sản phẩm nổi bật' + error);
                }
            };
            fetchPopularCategoris();
        }
    }, [object]);

    useEffect(() => {
        if (object) {
            const fetchParentPopularCategoris = async () => {
                try {
                    const response = await categoryApi.getParentPopular(object);
                    if (response.success) {
                        setParentCategories(response.data);
                        setCategoryActive(response.data[0].slug);
                    }
                } catch (error) {
                    console.error('Có lỗi khi thực hiện lấy loại sản phẩm cha nổi bật' + error);
                }
            };
            fetchParentPopularCategoris();
        }
    }, [object]);

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

    useEffect(() => {
        if (categoryActive) {
            const fetchProducts = async () => {
                try {
                    const response = await productApi.getBySubject(categoryActive);
                    if (response.success) {
                        setProducts(response.data);
                    }
                } catch (error) {
                    console.error('Có lỗi khi thực hiện lấy bài viết nôi bật ' + error);
                }
            };
            fetchProducts();
        }
    }, [categoryActive, params]);

    return (
        <Helmet title={title}>
            <main className='fashion'>
                <section className='fashion_slider'>
                    <Link to='#'>
                        <img src={slider} alt='page slider image' />
                    </Link>
                </section>
                <section className='fashion_services'>
                    <div className='container'>
                        <Services />
                    </div>
                </section>
                <section className='section fashion_category'>
                    <div className='container'>
                        <div className='section_title'>
                            <h2>MUA THEO THỂ LOẠI</h2>
                        </div>
                        {categories ? (
                            <Grid col={5} gap={20}>
                                {categories.map((category, index) => (
                                    <div className='fashion_category_item' key={index}>
                                        <Link to={`/collection/${category.slug}`}>
                                            {category.name}
                                        </Link>
                                        {category.attributes.hot && (
                                            <div
                                                style={{backgroundColor: 'orange', color: 'white'}}
                                            >
                                                HOT
                                            </div>
                                        )}
                                        {category.attributes.new && (
                                            <div style={{backgroundColor: 'blue', color: 'white'}}>
                                                NEW
                                            </div>
                                        )}
                                        {category.attributes.sale && (
                                            <div style={{backgroundColor: 'red', color: 'white'}}>
                                                SALE
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </Grid>
                        ) : (
                            <Loading />
                        )}
                    </div>
                </section>
                <section className='fashion_style'>
                    <div className='container'>
                        <div className='section_title'>
                            <h2>MUA THEO PHONG CÁCH</h2>
                        </div>
                        <div
                            className={`fashion_style_list ${
                                params.object == 'tre-em' && 'children'
                            }`}
                        >
                            {banners &&
                                banners.map((banner, index) => (
                                    <div
                                        className={`fashion_style_item ${
                                            params.object == 'tre-em' && 'children'
                                        }`}
                                        key={index}
                                    >
                                        <Link to={`/${banner.path}`}>
                                            <img src={banner.image} alt='page banner image' />
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <div className='section_title'>
                            <h2>ĐỀ XUẤT CHO BẠN</h2>
                        </div>
                        <div className='fashion_parent-category'>
                            <ul className='fashion_parent-category_list'>
                                {parentcategories &&
                                    parentcategories.map((category, index) => (
                                        <li className='fashion_parent-category_item' key={index}>
                                            <button
                                                className={`button ${
                                                    category.slug == categoryActive ? 'active' : ''
                                                }`}
                                                onClick={() => setCategoryActive(category.slug)}
                                            >
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className='fashion_product'>
                            {products ? (
                                <Grid col={5} gap={20}>
                                    {products.map((product, index) => (
                                        <div className='fashion_product_item' key={index}>
                                            <ProductCard data={product} isSubImage={true} />
                                        </div>
                                    ))}
                                </Grid>
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <div className='section_title'>
                            <h2>#YODYLOVE</h2>
                        </div>
                        <div className='home_popular_blog'>
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
                        <div className='home_hot_product_button'>
                            <Button
                                text='Xem thêm'
                                link='/'
                                fontSize={17}
                                bold={true}
                                outline={true}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </Helmet>
    );
};

export default Fashion;
