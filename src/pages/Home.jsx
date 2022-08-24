import {useState, useEffect} from 'react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';

import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Services from '../components/Services';

import bannerApi from '../api/bannerApi';
import productApi from '../api/productApi';
import materialApi from '../api/materialApi';
import blogApi from '../api/blogApi';

const imgUrl = process.env.REACT_APP_IMG_URL;

const Home = () => {
    document.title = 'YODY - LOOK GOOD, FEEL GOOD';

    SwiperCore.use([Autoplay, Navigation, Pagination]);
    const [heroSlides, setHeroSlides] = useState(null);
    const [botSlides, setBotSlides] = useState(null);
    const [hotBanner, setHotBanner] = useState(null);
    const [popularBanners, setPopularBanners] = useState(null);
    const [hotProducts, setHotProducts] = useState(null);
    const [materials, setMaterials] = useState(null);
    const [materialActive, setMaterialActive] = useState(null);
    const [productByMaterials, setProductByMaterials] = useState(null);
    const [popularBlogs, setPopularBlogs] = useState(null);

    useEffect(() => {
        const fetchHeroSlides = async () => {
            try {
                const response = await bannerApi.getHeroSlider();
                if (response.success) {
                    setHeroSlides(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy hero slide ' + error);
            }
        };

        fetchHeroSlides();
    }, []);

    useEffect(() => {
        const fetchBotSlides = async () => {
            try {
                const response = await bannerApi.getBotSlider();
                if (response.success) {
                    setBotSlides(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy bot slide ' + error);
            }
        };

        fetchBotSlides();
    }, []);

    useEffect(() => {
        const fetchHotBanner = async () => {
            try {
                const response = await bannerApi.getHotBanner();
                if (response.success) {
                    setHotBanner(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy hot banner ' + error);
            }
        };

        fetchHotBanner();
    }, []);

    useEffect(() => {
        const fetchPopularBanner = async () => {
            try {
                const response = await bannerApi.getPopularBanner();
                if (response.success) {
                    setPopularBanners(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy banner nổi bật' + error);
            }
        };

        fetchPopularBanner();
    }, []);

    useEffect(() => {
        const fetchHotProducts = async () => {
            try {
                const response = await productApi.getHotProduct();
                if (response.success) {
                    setHotProducts(response.data);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy sản phẩm hot ' + error);
            }
        };

        fetchHotProducts();
    }, []);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await materialApi.getPopularMaterials();
                if (response.success) {
                    setMaterials(response.data);
                    setMaterialActive(response.data[0]._id);
                }
            } catch (error) {
                console.error('Có lỗi khi thực hiện lấy chất liệu nôi bật ' + error);
            }
        };

        fetchMaterials();
    }, []);

    useEffect(() => {
        if (materialActive) {
            const fetchProductByMaterial = async () => {
                try {
                    const response = await productApi.getByMaterial(materialActive, 40);
                    if (response.success) {
                        setProductByMaterials(response.data);
                    }
                } catch (error) {
                    console.error('Có lỗi khi thực hiện lấy sản phẩm theo chất liệu ' + error);
                }
            };

            fetchProductByMaterial();
        }
    }, [materialActive]);

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
        <div className='home'>
            <section className='home_hero-slide'>
                {heroSlides ? (
                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        loop={true}
                    >
                        {heroSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <Link to={`/collection/${slide.link}`}>
                                        <img
                                            className='home_hero-slide_image'
                                            src={imgUrl + slide.image}
                                            alt='home hero-slide'
                                            style={{
                                                width: Number(slide.width),
                                                height: Number(slide.height),
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Loading />
                )}
            </section>
            <section className='home_services'>
                <div className='container'>
                    <Services />
                </div>
            </section>
            <section className='section home_hot'>
                <div className='container'>
                    <div className='section_title'>
                        <h2>EVERYDAY WEAR</h2>
                    </div>
                    <div className='home_hot_banner'>
                        {hotBanner ? (
                            hotBanner.map((banner, index) => (
                                <div className='home_hot_banner_item' key={index}>
                                    <Link to={`/collection/${banner.link}`}>
                                        <img
                                            src={`${imgUrl + banner.image}`}
                                            alt='home hot banner'
                                            style={{
                                                width: Number(banner.width),
                                                height: Number(banner.height),
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </div>
                    <div className='home_hot_product'>
                        <div className='home_hot_product_slide'>
                            {hotProducts ? (
                                <Swiper
                                    slidesPerView={6}
                                    speed={1000}
                                    navigation={true}
                                    spaceBetween={20}
                                >
                                    {hotProducts.map((product, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductCard data={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <Loading />
                            )}
                        </div>
                        <div className='home_hot_product_button'>
                            <Button
                                text='Xem tất cả 119 sản phẩm'
                                link='/collection/polo-yody'
                                fontSize={17}
                                bold={true}
                                outline={true}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section home_popular'>
                <div className='container'>
                    <div className='section_title'>
                        <h2>#YODY</h2>
                    </div>
                    <div className='home_popular_banner'>
                        {popularBanners ? (
                            popularBanners.map((banner, index) => (
                                <div className='home_popular_banner_item' key={index}>
                                    <Link to={`/collection/${banner.link}`}>
                                        <img
                                            src={`${imgUrl + banner.image}`}
                                            alt='home popular image'
                                        />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </div>
                    <div className='home_popular_slider'>
                        {botSlides ? (
                            <Swiper
                                slidesPerView={1}
                                pagination={true}
                                speed={600}
                                autoplay={{
                                    delay: 6000,
                                }}
                                loop={true}
                            >
                                {botSlides.map((banner, index) => (
                                    <SwiperSlide key={index}>
                                        <Link to={`/collection/${banner.link}`}>
                                            <img
                                                src={`${imgUrl + banner.image}`}
                                                alt='bot slider image'
                                            />
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Loading />
                        )}
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='section_title'>
                        <h2>POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
                    </div>
                    <div className='home_material'>
                        {materials ? (
                            materials.map((material, index) => (
                                <div className='home_material_item' key={index}>
                                    <button
                                        className={`button ${
                                            material._id == materialActive ? 'active' : ''
                                        }`}
                                        style={{fontSize: 17}}
                                        onClick={() => setMaterialActive(material._id)}
                                    >
                                        {material.name}
                                    </button>
                                </div>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </div>
                    <div className='home_product-by-material'>
                        {productByMaterials ? (
                            <Grid col={5} gap={20}>
                                {productByMaterials.map((product, index) => (
                                    <div className='home_product-by-material_item' key={index}>
                                        <ProductCard data={product} isSubImage={true}/>
                                    </div>
                                ))}
                            </Grid>
                        ) : (
                            <Loading />
                        )}
                    </div>
                    <div className='home_hot_product_button'>
                        <Button
                            text='Xem tất cả sản phẩm'
                            link='/collection'
                            fontSize={17}
                            bold={true}
                            outline={true}
                        />
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='section_title'>
                        <h2>#YODYLOVE</h2>
                    </div>
                    <div className='home_popular_blog'>
                        <Swiper slidesPerView={5} speed={1000} navigation={true} spaceBetween={20}>
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
                        <Button text='Xem thêm' link='/yody-love/tin-tuc' fontSize={17} bold={true} outline={true} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
