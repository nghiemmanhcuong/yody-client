import {useState} from 'react';
import {Link} from 'react-router-dom';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {AiFillStar} from 'react-icons/ai';

import Grid from '../components/Grid';
import Helmet from '../components/Helmet';

import {
    uniformPolicy,
    uniformCate,
    uniformHotImgs,
    uniformCustomerImgs,
    uniformReviews,
} from '../asset/constains.js';

import mainImage from '../asset/images/main_image_unform.webp';
import aboutImg1 from '../asset/images/dp_about_1.webp';
import aboutImg2 from '../asset/images/dp_about_2.webp';
import slide1 from '../asset/images/uniform_slide_1.webp';
import slide2 from '../asset/images/uniform_slide_2.webp';
import slide3 from '../asset/images/uniform_slide_3.webp';

const Uniform = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination]);

    return (
        <Helmet title='Đồng phục'>
            <div className='uniform'>
                <div className='container'>
                    <div className='uniform_banner'>
                        <Link to='#'>
                            <img src={mainImage} alt='uniform main image' />
                        </Link>
                    </div>
                    <div className='uniform_policy'>
                        <Grid col={6} gap={20}>
                            {uniformPolicy.map((policy, index) => (
                                <div className='uniform_policy_item' key={index}>
                                    <div className='uniform_policy_item_img'>
                                        <img src={policy.image} alt='polyci image' />
                                    </div>
                                    <div className='uniform_policy_item_content'>
                                        <h5>{policy.title}</h5>
                                        <p>{policy.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Grid>
                    </div>
                    <div className='uniform_introduce' id='introduce'>
                        <div className='uniform_introduce_left'>
                            <div className='uniform_introduce_header'>
                                <h5 className='uniform_introduce_title'>GIỚI THIỆU SẢN PHẨM</h5>
                                <p className='uniform_introduce_text'>
                                    Không chỉ là một bộ trang phục - Đồng phục mang tinh thần đoàn
                                    kết vững mạnh và nét văn hóa đặc biệt không nơi nào có được, là
                                    biểu tượng cho cả tập thể, đội nhóm, công ty, trường học hay gia
                                    đình. Mang sứ mệnh kết nối các thành viên gia đình và đồng
                                    nghiệp, Yody không ngừng cải tiến sản phẩm để mang đến những áo
                                    đồng phục ưu việt có chất liệu tốt và đặc biệt nhất.
                                </p>
                            </div>
                            <div className='uniform_introduce_form'>
                                <h5 className='uniform_introduce_form_title'>
                                    Chiết khẩu tới 20% tư vấn miễn phí - đặt hàng ngay
                                </h5>
                                <input type='text' placeholder='Họ và tên khách hàng' />
                                <input type='text' placeholder='Số điện thoại' />
                                <input type='text' placeholder='Email' />
                                <textarea cols='30' rows='5' placeholder='Ghi chú'></textarea>
                                <button>Đặt mua ngay</button>
                            </div>
                        </div>
                        <div className='uniform_introduce_right'>
                            <div className='uniform_introduce_right_img-bot'>
                                <img src={aboutImg1} alt='uniform introduce image' />
                            </div>
                            <div className='uniform_introduce_right_img-top'>
                                <img src={aboutImg2} alt='uniform introduce image' />
                            </div>
                        </div>
                    </div>
                    <div className='uniform_category'>
                        <div className='uniform_category_header'>
                            <span>DANH MỤC SẢN PHẨM </span>
                            ĐỒNG PHỤC YODY
                        </div>
                        <div className='uniform_category_list'>
                            {uniformCate.map((category, index) => (
                                <div className='uniform_category_item' key={index}>
                                    <img src={category.image} alt='uniform categfory image' />
                                    <div className='uniform_category_item_text'>
                                        <h5>{category.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='uniform_category_btn'>
                            <a href='#introduce'>Đặt mua ngay</a>
                        </div>
                    </div>
                </div>
                <div className='uniform_slide'>
                    <div className='container'>
                        <div className='uniform_slide_header'>
                            <h5>CHẤT LIỆU ĐỘC QUYỀN CHỈ CÓ TẠI YODY</h5>
                            <p>
                                Luôn đặt sự hài lòng của khách hàng là ưu tiên số 1, sản phẩm của
                                YODY được cải tiến không ngừng, nỗ lực đem lại cho quý khách những
                                trải nghiệm tốt nhất. Đặc biệt, YODY đã phát triển những chất liệu
                                độc quyền thân thiện với môi trường và đang là xu hướng thời trang
                                bền vững như vải cafe khử mùi, Pique mắt chim, Coolmax hay vải Pima
                                cao cấp.
                            </p>
                        </div>
                        <div className='uniform_slide_wrapper'>
                            <Swiper
                                slidesPerView={1}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                loop={true}
                                navigation={true}
                                pagination={true}
                            >
                                <SwiperSlide>
                                    <img src={slide1} alt='uniform slide image' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slide2} alt='uniform slide image' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slide3} alt='uniform slide image' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='uniform_hot'>
                    <div className='container'>
                        <div className='uniform_hot_header'>
                            <span>MẪU PHÔI ÁO YODY </span>
                            HOT NHẤT 2022
                        </div>
                        <div className='uniform_hot_image'>
                            <Grid col={6} gap={20}>
                                {uniformHotImgs.map((item, index) => (
                                    <div className='uniform_hot_image_item' key={index}>
                                        <img src={item.img1} alt='uniform hot image' />
                                        {item.img2 && (
                                            <img src={item.img2} alt='uniform hot image' />
                                        )}
                                    </div>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className='uniform_customer'>
                    <div className='container'>
                        <div className='uniform_customer_wrapper'>
                            <div className='uniform_customer_item'>
                                <h5 className='uniform_customer_title'>
                                    KHÁCH HÀNG, ĐỐI TÁC ĐỒNG PHỤC YODY
                                </h5>
                                <ul>
                                    <li>
                                        Công ty TNHH Seoul Semiconductor Vina: 1.900 áo Polo Pique
                                        Mắt Chim kẻ nhỏ
                                    </li>
                                    <li>Công ty Arcadyan: 1.200 áo Polo Pique Mắt Chim phối bo</li>
                                    <li>Công Ty THINK Việt Nam: 30 áo</li>
                                    <li>Công ty cổ phần thiết bị và công nghệ TEKCOM : 65 áo</li>
                                </ul>
                            </div>
                            {uniformCustomerImgs.map((image, index) => (
                                <div className='uniform_customer_item' key={index}>
                                    <img src={image} alt='uniform customer image' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='uniform_review'>
                    <div className='container'>
                        <div className='uniform_review_header'>
                            <h5>100% KHÁCH HÀNG TIN TƯỞNG VÀ ỦNG HỘ</h5>
                            <p>
                                Sự hài lòng của quý khách hàng là niềm vui của chúng tôi. Chúng tôi
                                luôn nổ lực để đưa tới cho quý khách hàng dịch vụ tốt nhất và những
                                sản phẩm chất lượng nhất.
                            </p>
                        </div>
                        <div className='uniform_review_list'>
                            <Grid col={3} gap={50}>
                                {uniformReviews.map((item, index) => (
                                    <div className='uniform_review_item' key={index}>
                                        <p className='uniform_review_item_content'>
                                            {item.content}
                                        </p>
                                        <div className='uniform_review_item_info'>
                                            <div className='uniform_review_item_info_left'>
                                                <img
                                                    src={item.avatar}
                                                    alt='uniform review avatar'
                                                />
                                                <div>
                                                    <p className='uniform_review_item_name'>
                                                        {item.name}
                                                    </p>
                                                    <p className='uniform_review_item_job'>
                                                        {item.job}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='uniform_review_item_stars'>
                                                <AiFillStar size={18} />
                                                <span>{item.starts}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Uniform;
