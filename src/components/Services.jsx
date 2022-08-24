import Grid from './Grid';

import ser1 from '../asset/images/ser_1.webp';
import ser2 from '../asset/images/ser_2.webp';
import ser3 from '../asset/images/ser_3.webp';
import ser4 from '../asset/images/ser_4.webp';

const Services = () => {
    return (
        <div className="services">
            <Grid col={4} gap={30}>
                <div className='services_item'>
                    <div className='services_item_icon'>
                        <img src={`${ser1}`} alt='service icon' />
                    </div>
                    <div className='services_item_content'>
                        Miễn phí vận chuyển
                        <div className='services_item_content_text'>
                            <span>FREESHIP </span>
                            mọi đơn hàng từ 30/6-31/7
                        </div>
                    </div>
                </div>
                <div className='services_item'>
                    <div className='services_item_icon'>
                        <img src={`${ser2}`} alt='service icon' />
                    </div>
                    <div className='services_item_content'>
                        Thanh toán COD
                        <div className='services_item_content_text'>
                            Thanh toán khi
                            <span> nhận hàng (COD)</span>
                        </div>
                    </div>
                </div>
                <div className='services_item'>
                    <div className='services_item_icon'>
                        <img src={`${ser3}`} alt='service icon' />
                    </div>
                    <div className='services_item_content'>
                        Khách hàng VIP
                        <div className='services_item_content_text'>
                            Ưu đãi dành cho
                            <span> khách hàng VIP</span>
                        </div>
                    </div>
                </div>
                <div className='services_item'>
                    <div className='services_item_icon'>
                        <img src={`${ser4}`} alt='service icon' />
                    </div>
                    <div className='services_item_content'>
                        Hỗ trợ bảo hành
                        <div className='services_item_content_text'>
                            Dễ dàng đổi, sửa sản phẩm
                            <span> tại YODY Store</span>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default Services;
