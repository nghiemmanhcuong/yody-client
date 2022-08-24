import {Link} from 'react-router-dom';
import {BsCheckCircleFill} from 'react-icons/bs';
import {FcHome} from 'react-icons/fc';
import {HiArrowNarrowLeft} from 'react-icons/hi';

const OrderSuccess = () => {
    return (
        <div className='order-success'>
            <div className='container'>
                <BsCheckCircleFill size={44} color='green'/>
                <h5>Đặt hàng thành công</h5>
                <p>
                    Cảm ơn bạn đã tin tưởng sử dụng dịch vụ của chúng tối.
                    Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đơn hàng <span>(60phút - 90phút)</span>.
                    Chúc bạn một ngày tốt lành!!!
                </p>
                <Link to='/'>
                    <span><HiArrowNarrowLeft /></span>
                    Quay về trang chủ <FcHome />
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
