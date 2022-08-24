import returnPolicyImg from '../asset/images/return_policy.jpeg';

const ReturnPolicy = () => {
    return (
        <div className='page_return-policy'>
            <h5 className='page_title'>CHÍNH SÁCH ĐỔI/TRẢ</h5>
            <p className='page_text page_text-bold page_text-italic'>
                Khách hàng nắm được chính sách đổi trả sản phẩm sẽ giúp cho quá trình mua sắm diễn
                ra suôn sẻ, như ý và đem đến sự hài lòng cũng như trải nghiệm tốt nhất.
            </p>
            <ol className='page_list-number' style={{paddingInlineStart:'20px'}}>
                <li className='page_list-number_item'>
                    Chính sách bảo hành đổi trả sản phẩm YODY năm 2022
                </li>
                <p className='page_text'>
                    Để mang đến cho Khách hàng những trải nghiệm tốt hơn trong quá trình mua sắm,
                    YODY xin gửi đến quý khách các thông tin về chính sách bảo hành đổi trả sản phẩm
                    mới nhất năm 2022. Cụ thể như sau:
                </p>
            </ol>
            <img src={returnPolicyImg} alt='return policy image' />
            <p className='page_text page_text-italic' style={{textAlign: 'center'}}>Chính sách đổi trả sản phẩm YODY 2022</p>
            <p className='page_text page_text-bold'>Chi tiết liên hệ:</p>
            <ul className='page_list'>
                <li className='page_item'>Bộ phận chăm sóc khách hàng: 1800 2086</li>
                <li className='page_item'>Mua hàng online: 0888 293 258 </li>
                <li className='page_item'>Góp ý, khiếu nại: 1800 2086 (Miễn phí)</li>
                <li className='page_item'>Email: chamsockhachhang@yody.vn </li>
            </ul>
        </div>
    );
};

export default ReturnPolicy;
