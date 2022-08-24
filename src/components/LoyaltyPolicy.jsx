import loyaltyPolicy from '../asset/images/loyalty_policy.png';

const LoyaltyPolicy = () => {
    return (
        <div className='page_loyalty-policy'>
            <h5 className='page_title'>CHÍNH SÁCH KHÁCH HÀNG THÂN THIẾT VIP</h5>
            <p className='page_text page_text-bold page_text-italic'>
                Cảm ơn quý khách hàng đã tin tưởng và mua sản phẩm của YODY. Nhằm giúp khách hàng
                gia tăng được quyền lợi của mình khi là khách hàng thân thiết VIP, YODY xin thông
                báo tới các quý khách hàng một số thông tin về chính sách khách hàng thân thiết như
                sau:
            </p>
            <ol className='page_list-number' style={{listStyleType:'upper-roman',paddingInlineStart:'10px'}}>
                <li style={{fontSize:'20px'}}>
                    ĐIỂM YODY
                    <p className='page_text page_text-bold'>Giá trị tích lũy: </p>
                    <p className='page_text'>
                        - Chính sách tích điểm: 2% cho các sản phẩm giảm giá dưới 30% đối với cả
                        Khách hàng VIP và Khách hàng thường.
                    </p>
                    <p className='page_text page_text-bold'>Giá trị quy đổi: 1 điểm = 1.000đ</p>
                    <p className='page_text page_text-bold'>Lưu ý:</p>
                    <ul className='page_list'>
                        <li className='page_item'>
                            Số tiền được tích điểm là số tiền trên hóa đơn khách hàng cần thanh toán
                        </li>
                        <li className='page_item'>Số điểm tích lũy là không giới hạn</li>
                        <li className='page_item'>
                            Điểm tích lũy không quy đổi sang tiền mặt, điểm chỉ có giá trị khi mua
                            hàng tại YODY
                        </li>
                        <li className='page_item'>
                            Điểm tích lũy không được áp dụng chung với các chương trình khuyến mại
                            khác
                        </li>
                    </ul>
                </li>
                <li style={{fontSize:'20px'}}>
                    CÁC QUY ĐỊNH SỬ DỤNG THẺ
                    <ul className='page_list'>
                        <li className='page_item'>
                            Khi đi mua hàng, Quý khách vui lòng mang theo thẻ đưa cho nhân viên thu
                            ngân trước khi yêu cầu thanh toán để được hưởng ưu đãi.
                        </li>
                        <li className='page_item'>
                            Trường hợp không mang theo thẻ quý khách vui lòng đọc số điện thoại của
                            mình để nhân viên thu ngân xác nhận và giúp quý khách hưởng trọn các ưu
                            đãi.
                        </li>
                        <li className='page_item'>
                            Trường hợp bị mất thẻ, đề nghị quý khách báo cho phòng Chăm Sóc Khách
                            Hàng của YODY theo số điện thoại: 18002086 (Miễn phí) để đăng ký cấp thẻ
                            mới, thẻ bị mất sẽ được vô hiệu hóa để bảo mật.
                        </li>
                    </ul>
                </li>
                <li style={{fontSize:'20px'}}>
                    PHÂN LOẠI HẠNG THẺ
                    <ol className='page_list-number' style={{paddingInlineStart:'20px'}}>
                        <li className='page_list-number_item'>
                            Thẻ thành viên
                            <p className='page_text'>
                                Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống
                                cửa hàng YODY sẽ được cấp thẻ thành viên.
                            </p>
                        </li>
                        <li className='page_list-number_item'>
                            Thẻ VIP YODY
                            <p className='page_text page_text-bold'>Điều kiện nhận thẻ VIP YODY:</p>
                            <ul className='page_list'>
                                <li className='page_item'>
                                    VIP Silver: Quý khách mua hàng đến hạn mức 10 triệu đồng
                                </li>
                                <li className='page_item'>
                                    VIP Gold: Quý khách mua hàng đến hạn mức 20 triệu đồng
                                </li>
                                <li className='page_item'>
                                    VIP Rubi: Quý khách mua hàng đến hạn mức 30 triệu đồng
                                </li>
                                <li className='page_item'>
                                    VIP Diamond: Quý khách mua hàng đến hạn mức 50 triệu đồng
                                </li>
                                <li className='page_item'>
                                    Siêu VIP: Quý khách mua hàng đến hạn mức 100 triệu đồng
                                </li>
                            </ul>
                            <p className='page_text'>
                                <span style={{fontWeight: '600'}}>Lưu ý:</span> Hạn mức 10 triệu -
                                100 triệu đồng là tính từ thời điểm bắt đầu mua tới khi lên thẻ. Khi
                                lên thẻ VIP S và tích tiếp lên 20 triệu - 100 triệu đồng, tổng tiền
                                này là tính từ khi khách hàng mua lần đầu và cộng dồn lên.
                            </p>
                        </li>
                    </ol>
                </li>
                <li style={{fontSize:'20px'}}>
                    Đặc quyền dành cho thẻ VIP YODY
                    <img className='page_img' src={loyaltyPolicy} alt='' />
                    <p className='page_text page_text-italic' style={{textAlign: 'center'}}>
                        Chính sách Khách hàng VIP YODY năm 2022
                    </p>
                </li>
            </ol>
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

export default LoyaltyPolicy;
