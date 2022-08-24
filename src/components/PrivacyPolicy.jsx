import privacyPolicy from '../asset/images/privacy_policy.jpeg';

const PrivacyPolicy = () => {
    return (
        <div className='page_privacy-policy'>
            <h5 className='page_title'>CHÍNH SÁCH BẢO MẬT</h5>
            <p className='page_text page_text-bold page_text-italic'>
                Luôn coi trọng việc bảo mật thông tin, vì vậy, Yody ưu tiên sử dụng các biện pháp
                tốt nhất để bảo vệ thông tin cá nhân của khách hàng, đảm bảo cho quá trình thanh
                toán diễn ra an toàn nhất.
            </p>
            <h6 className='page_list-title'>Trách nhiệm bảo mật thanh toán của Yody</h6>
            <ul className='page_list'>
                <li className='page_item'>
                    Yody luôn coi trọng việc bảo mật thông tin vì vậy chúng tôi thưởng sử dụng các
                    biện pháp tốt nhất để bảo vệ thông tin cá nhân của khách hàng trong quá trình
                    thanh toán.
                </li>
                <li className='page_item'>
                    Giảm thiểu và đảm bảo tốt nhất việc người ngoài sử dụng các chương trình, công
                    cụ hay các hình thức để can thiệp vào hệ thống và làm thay đổi cấu trúc dữ liệu
                </li>
                <li className='page_item'>
                    Cá nhân hay tổ chức có hành vi can thiệp, phá hoại hay xâm nhập vào dữ liệu của
                    hệ thống sẽ bị tước bỏ mọi quyền lợi cũng như bị truy tố trước pháp luật nếu cần
                    thiết.
                </li>
                <li className='page_item'>
                    Tất cả thông tin giao dịch đều được bảo mật trừ trường hợp phải thực hiện theo
                    yêu cầu của cơ quan Nhà nước có thẩm quyền
                </li>
            </ul>
            <img src={privacyPolicy} alt='privacy policy image' />
            <h6 className='page_list-title'>Mục đích áp dụng</h6>
            <ul className='page_list'>
                <li className='page_item'>
                    Hệ thống thanh toán thẻ trên{' '}
                    <span style={{fontWeight: '500'}}>website: yody.vn</span> đều được bảo mật theo
                    tiêu chuẩn bảo mật thanh toán theo quy định của các ngân hàng.
                </li>
                <li className='page_item'>
                    Ngoài ra, YODY còn có các tiêu chuẩn bảo mật giao dịch thanh toán riêng, đảm bảo
                    an toàn các thông tin thanh toán của khách hàng.
                </li>
            </ul>
            <h6 className='page_list-title'>Quy định giao dịch thanh toán bằng thẻ nội địa</h6>
            <p className='page_text'>
                Yody đảm bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán gồm:
            </p>
            <ul className='page_list'>
                <li className='page_item'>
                    Thông tin tài chính của khách hàng được bảo vệ bằng giao thức SSL (Secure
                    Sockets Layer). Giao thức SSL sẽ mã hóa thông tin khách hàng cung cấp trong suốt
                    quá trình giao dịch.
                </li>
                <li className='page_item'>
                    Hệ thống thanh toán đáp ứng chuẩn bảo mật thông tin của PCI Security Standards
                    Council (https://www.pcisecuritystandards.org).
                </li>
                <li className='page_item'>
                    Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng
                    theo quy định của Ngân hàng Nhà nước Việt Nam.
                </li>
            </ul>
        </div>
    );
};

export default PrivacyPolicy;
