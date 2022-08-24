import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {MdPlace, MdEmail} from 'react-icons/md';
import {BsShop, BsFillTelephoneFill} from 'react-icons/bs';

import infoApi from '../api/infoApi';
import {socials, abouts, customerServices} from '../asset/constains.js';

import logoBct from '../asset/images/logo_bct.webp';

const Footer = () => {
    const [yodyInfo, setYodyInfo] = useState(null);

    useEffect(() => {
        const getYodyInfo = async () => {
            try {
                const response = await infoApi.getYodyInfos();
                if (response.success) {
                    setYodyInfo(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy thông tin yody');
            }
        };
        getYodyInfo();
    }, []);

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer_block'>
                        <p className='footer_block_slogan'>"{yodyInfo && yodyInfo.slogan}"</p>
                        <div className='footer_block_register-info'>
                            <h5>ĐĂNG KÝ NHẬN THÔNG TIN</h5>
                            <div className='footer_block_register-info_form'>
                                <input type='text' placeholder='Nhập email đăng ký của bạn' />
                                <button>Đăng ký</button>
                            </div>
                        </div>
                        <div className='footer_block_social'>
                            {socials.map((social, index) => (
                                <div className='footer_block_social_item' key={index}>
                                    <a href={social.link}>
                                        <img src={social.icon} alt='social icon' />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='footer_block'>
                        <h5 className='footer_block_title'>VỀ YODY</h5>
                        <ul className='footer_block_about'>
                            {abouts.map((about, index) => (
                                <li className='footer_block_about_item' key={index}>
                                    <Link to={about.link}>{about.block}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer_block'>
                        <h5 className='footer_block_title'>HỖ TRỢ KHÁCH HÀNG</h5>
                        <ul className='footer_block_service'>
                            {customerServices.map((service, index) => (
                                <li className='footer_block_service_item' key={index}>
                                    <Link to={service.link}>{service.block}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='footer_block'>
                        <div className='footer_block_item'>
                            <div className='footer_block_item_icon'>
                                <MdPlace size={18} />
                            </div>
                            <div className='footer_block_item_content'>
                                <p>{yodyInfo && yodyInfo.companyName}</p>
                                <p>Mã số thuế: 0801206940</p>
                                <p>{yodyInfo && yodyInfo.address}</p>
                            </div>
                        </div>
                        <div className='footer_block_item'>
                            <div className='footer_block_item_icon'>
                                <BsShop />
                            </div>
                            <div className='footer_block_item_content'>
                                <a href=''>Tìm cửa hàng gần nhất</a>
                            </div>
                        </div>
                        <div className='footer_block_item'>
                            <div className='footer_block_item_icon'>
                                <BsFillTelephoneFill />
                            </div>
                            <div className='footer_block_item_content'>
                                <p>
                                    <a href={`tel:${yodyInfo && yodyInfo.phoneOrder}`}>
                                        Liên hệ đặt hàng: {yodyInfo && yodyInfo.phoneOrder}
                                    </a>
                                </p>
                                <p>
                                    <a href={`tel:${yodyInfo && yodyInfo.phoneFeedback}`}>
                                        Thắc mắc đơn hàng: {yodyInfo && yodyInfo.phoneFeedback}
                                    </a>
                                </p>
                                <p>
                                    <a href={`tel:${yodyInfo && yodyInfo.phoneWonder}`}>
                                        Góp ý khiếu nại: {yodyInfo && yodyInfo.phoneWonder}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='footer_block_item'>
                            <div className='footer_block_item_icon'>
                                <MdEmail size={16} />
                            </div>
                            <div className='footer_block_item_content'>
                                <a href={`mailto:${yodyInfo && yodyInfo.mailCustomerCare}`}>
                                    Email: {yodyInfo && yodyInfo.mailCustomerCare}
                                </a>
                            </div>
                        </div>
                        <div className='footer_block_item'>
                            <a href='http://online.gov.vn/Home/WebDetails/44085' className=''>
                                <img src={logoBct} alt='logo bo cong thuong' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer_copyright'>
                    @ Bản quyền thuộc về <span>Nghiêm Mạnh Cường</span> All right reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
