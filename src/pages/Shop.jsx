import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronDown} from 'react-icons/fi';
import {MdPlace} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {IoIosSend} from 'react-icons/io';

import Grid from '../components/Grid';
import Loading from '../components/Loading';
import Helmet from '../components/Helmet';

import {systems} from '../asset/constains.js';
import shopApi from '../api/shopApi.js';

const Shop = () => {
    const [shops, setShops] = useState(null);
    const [mapLink, setMapLink] = useState('');
    const [keyword, setKeyword] = useState(null);
    const [province, setProvince] = useState(null);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await shopApi.getShop({keyword: keyword, province: province});
                setShops(response.shops);
                setMapLink(response.shops[0].linkMap);
            } catch (error) {
                console.log('Có lỗi khi lấy dữ liệu', error);
            }
        };
        fetchShops();
    }, [keyword]);

    return (
        <Helmet title='Hệ thống của hàng'>
            <div className='shop'>
                <div className='shop_breadcrumb'>
                    <ul>
                        <li>
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        <span>/</span>
                        <li>Hệ thống cửa hàng YODY - Shop quần áo thời trang Việt</li>
                    </ul>
                </div>
                <h1 className='shop_title'>TÌM CỬA HÀNG</h1>
                <div className='shop_system'>
                    <Grid col={5} gap={30}>
                        {systems.map((system, index) => (
                            <div
                                className='shop_system_item'
                                key={index}
                                style={{
                                    background: system.background,
                                    backgroundImage: `url(${system.backgroundImg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 30px bottom',
                                }}
                            >
                                <p>{system.title}</p>
                                <b>{system.number}</b>
                            </div>
                        ))}
                    </Grid>
                </div>
                <div className='shop_container'>
                    <div className='shop_map'>
                        <iframe
                            src={mapLink}
                            width='600'
                            height='450'
                            style={{border: '0'}}
                            allowFullScreen=''
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                    <div className='shop_info'>
                        <div className='shop_info_search'>
                            <Grid col={2} gap={20}>
                                <div className='shop_info_search_item'>
                                    <span>Tỉnh / Thành</span>
                                    <div className='shop_info_search_item_input'>
                                        Tất cả tỉnh,thành
                                        <FiChevronDown />
                                    </div>
                                </div>
                                <div className='shop_info_search_item'>
                                    <span>Nhập tên cửa hàng</span>
                                    <div className='shop_info_search_item_input'>
                                        <input
                                            type='text'
                                            placeholder='Tìm kiếm của hàng'
                                            value={keyword || ''}
                                            onChange={(e) => setKeyword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </div>
                        <div className='shop_info_list'>
                            {shops ? (
                                shops.map((shop, index) => (
                                    <div className='shop_info_item' key={index}>
                                        <div className='shop_info_item_detail'>
                                            <h5>{shop.shopName}</h5>
                                            <div className='address'>
                                                <div>
                                                    <MdPlace size={18} />
                                                </div>
                                                <span>{shop.address}</span>
                                            </div>
                                            <div className='phone'>
                                                <div>
                                                    <FaPhoneAlt size={16} />
                                                </div>
                                                <span>{shop.phone}</span>
                                            </div>
                                        </div>
                                        <div className='shop_info_item_btn'>
                                            <button onClick={() => setMapLink(shop.linkMap)}>
                                                <IoIosSend size={18} />
                                                Chỉ đường
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <Loading />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Shop;
