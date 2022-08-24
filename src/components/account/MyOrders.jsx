import Helmet from '../Helmet';

const MyOrders = () => {
    return (
        <Helmet title='Danh sách đơn hàng'>
            <div className='account-my-orders'>
                <div className='account_header'>
                    <h5>Đơn hàng của tôi</h5>
                    <p>0 đơn hàng</p>
                </div>
                <table className='account-my-orders_table'>
                    <thead>
                        <tr>
                            <td>Mã đơn hàng</td>
                            <td>Ngày mua</td>
                            <td>Địa chỉ</td>
                            <td>Giá trị đơn hàng</td>
                            <td>Trạng thái thanh toán</td>
                            <td>Trạng thái vận chuyển</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan='6' style={{textAlign: 'left', padding: '10px 30px'}}>
                                Không có đơn hàng nào.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Helmet>
    );
};

export default MyOrders;
