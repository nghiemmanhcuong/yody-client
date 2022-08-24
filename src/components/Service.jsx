import Grid from '../components/Grid';

import ser1 from '../asset/images/ser_1.webp';
import ser2 from '../asset/images/ser_2.webp';
import ser3 from '../asset/images/ser_3.webp';
import ser4 from '../asset/images/ser_4.webp';

const Service = () => {
    return (
        <div className='product_info_service'>
            <Grid col={2} gap={20}>
                <div className='product_info_service_item'>
                    <div className='product_info_service_item_icon'>
                        <img src={`${ser1}`} alt='service icon' />
                    </div>
                    <div className='product_info_service_item_content'>
                        <p>Miễn phí vận chuyển</p>
                        <span>FREESHIP mọi đơn hàng từ 30/6-31/7</span>
                    </div>
                </div>
                <div className='product_info_service_item'>
                    <div className='product_info_service_item_icon'>
                        <img src={`${ser2}`} alt='service icon' />
                    </div>
                    <div className='product_info_service_item_content'>
                        <p>Thanh toán COD</p>
                        <span>Thanh toán khi nhận hàng (COD)</span>
                    </div>
                </div>
                <div className='product_info_service_item'>
                    <div className='product_info_service_item_icon'>
                        <img src={`${ser3}`} alt='service icon' />
                    </div>
                    <div className='product_info_service_item_content'>
                        <p>Khách hàng VIP</p>
                        <span>Ưu đãi dành cho khách hàng VIP</span>
                    </div>
                </div>
                <div className='product_info_service_item'>
                    <div className='product_info_service_item_icon'>
                        <img src={`${ser4}`} alt='service icon' />
                    </div>
                    <div className='product_info_service_item_content'>
                        <p>Hỗ trợ bảo hành</p>
                        <span>Dễ dàng đổi, sửa sản phẩm tại YODY Store</span>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default Service;
