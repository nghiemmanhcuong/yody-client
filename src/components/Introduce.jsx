import introduce1 from '../asset/images/introduce_1.jpeg';
import introduce2 from '../asset/images/introduce_2.jpeg';
import introduce3 from '../asset/images/introduce_3.jpeg';
import introduce4 from '../asset/images/introduce_4.jpeg';
import introduce5 from '../asset/images/introduce_5.jpeg';

const Introduce = () => {
    return (
        <div className='page_introduce'>
            <h5 className='page_title'>TẦM NHÌN - SỨ MỆNH YODY: NÂNG TẦM THƯƠNG HIỆU VIỆT</h5>
            <img className='page_img' src={introduce1} alt='introduct image' />
            <h6 className='page_text page_text-bold page_text-italic'>
                Bắt đầu từ thương hiệu thời trang Hi5 ra đời trong năm 2009, trải qua chặng đường
                phát triển đầy khó khăn, Hi5 được đổi tên thành Yody vào năm 2014 với ước mơ gây
                dựng một thương hiệu thời trang hàng đầu thế giới.
            </h6>
            <p style={{marginTop:'10px'}}>
                Từ đó trở đi Yody lớn mạnh không ngừng, đến năm 2016 Yody đã có 38 cửa hàng, chỉ sau
                2 năm vào năm 2018 Yody đã có 73 cửa hàng. Đến năm 2019 Yody đã có 82 cửa hàng và
                tính đến thời điểm hiện tại Yody đã mở rộng được hơn 100 cửa hàng trên toàn quốc.
            </p>
            <img className='page_img' src={introduce2} alt='introduct image' />
            <h2 className='page_list-title'>NIỀM TIN CỦA YODY</h2>
            <ul className='page_list'>
                <li className='page_item'>
                    Tất cả các khoản chi đều là chi phí, chỉ có chi cho khách hàng và nhân viên là
                    không phí.
                </li>
                <li className='page_item'>
                    Tất cả những thành viên của Yody đều nỗ lực hết sức và có năng lực để thực hiện
                    mục tiêu.
                </li>
                <li className='page_item'>
                    Mỗi thành viên Yody đều có thể thay đổi khi được trao niềm tin, ghi nhận, hướng
                    dẫn và đào tạo.
                </li>
            </ul>
            <h2 className='page_list-title'>SỨ MỆNH CỦA YODY</h2>
            <p className='page_text-italic'>
                Sứ mệnh của Yody là "Đưa sản phẩm thời trang Việt có chất liệu tốt, dịch vụ tốt đến
                tận tay khách hàng tại các vùng miền Việt Nam và trên Thế Giới".
            </p>
            <img className='page_img' src={introduce3} alt='introduct image' />
            <p>
                Yody mong muốn mang đến cho toàn bộ khách hàng trên khắp mọi miền tổ quốc Việt Nam
                những sản phẩm thời trang do chính tay người Việt làm ra. Không phân biệt tầng lớp,
                không phân biệt giàu nghèo, những khách hàng chưa bao giờ được trải nghiệm dịch vụ
                mua sắm vượt ngoài mong đợi, ai cũng sẽ được chào đón, tôn trọng khi đến với Yody.{' '}
            </p>
            <br />
            <p>
                Chính vì vậy, Yody dày công nghiên cứu chất liệu sản phẩm và cho ra mắt những dòng
                sản phẩm tối ưu cả về giá cả và chất lượng mang đến cho khách hàng. Cùng với đó,
                Yody luôn dành phần lớn thời gian để đào tạo văn hóa phục vụ cho toàn bộ nhân viên.
                Mỗi nhân viên sẽ là 1 đại sứ thương hiệu, mỗi nhân viên sẽ là 1 hình mẫu về văn hóa
                phục vụ của Yody và trao giá trị tốt nhất đến từng khách hàng.
            </p>
            <h2 className='page_list-title'>GIÁ TRỊ CỐT LÕI CỦA YODY</h2>
            <p className='page_text page_text-italic' style={{marginBottom:'10px'}}>
                Ở Yody, chúng tôi luôn gìn giữ 6 Giá Trị Cốt Lõi để mọi bước đi đều thêm vững chắc
                và giàu giá trị.
            </p>
            <ol className='page_list-number'>
                <li className='page_list-number_item'>
                    Đam mê phục vụ khách hàng
                    <ul className='page_list'>
                        <li className='page_item'>
                            Luôn đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
                            và hành động của mình.
                        </li>
                        <li className='page_item'>Luôn Chủ động, Cười, Chào, Cảm ơn.</li>
                    </ul>
                </li>
                <li className='page_list-number_item'>
                    Coi mình là gốc rễ của mọi vấn đề
                    <ul className='page_list'>
                        <li className='page_item'>
                            Là một sự lựa chọn để từ đó bạn có sức mạnh để thay đổi kết quả.
                        </li>
                        <li className='page_item'>
                            Là bạn đã từ bỏ quyền coi mình là nạn nhân (Từ bỏ quyền đổ lỗi, chỉ
                            trích, than phiền).
                        </li>
                    </ul>
                </li>
                <li className='page_list-number_item'>
                    Integrity
                    <ul className='page_list'>
                        <li className='page_item'>Hoàn tất lời hứa của mình.</li>
                        <li className='page_item'>Làm đúng, làm đủ theo thiết kế</li>
                        <li className='page_item'>
                            Khi đã nỗ lực hết sức mà thấy nguy cơ không thể giữ lời thì ngay lập tức
                            thông tin cho những người có liên quan, tìm hiểu tác động, dọn dẹp hậu
                            quả và đưa ra lời hứa mới.
                        </li>
                    </ul>
                </li>
                <li className='page_list-number_item'>
                    Trung thực
                    <ul className='page_list'>
                        <li className='page_item'>
                            Không lấy, không sử dụng và không nghĩ đến việc chiếm hữu tiền bạc, hàng
                            hoá, tài sản không phải của mình.
                        </li>
                        <li className='page_item'>
                            Nói thẳng, nói thật một cách kịp thời và trực tiếp.
                        </li>
                        <li className='page_item'>Sẵn lòng đóng góp và đón nhận sự đóng góp.</li>
                        <li className='page_item'>Báo cáo đúng, đủ trạng thái công việc.</li>
                    </ul>
                </li>
                <li className='page_list-number_item'>
                    Cầu tiến
                    <ul className='page_list'>
                        <li className='page_item'>
                            Sẵn sàng thử nghiệm phương pháp mới, chấp nhận thất bại và tiếp tục hành
                            động.
                        </li>
                        <li className='page_item'>
                            Luôn "Say YES", hành động quyết liệt và tin tưởng sẽ đạt được mục tiêu
                            thách thức.
                        </li>
                    </ul>
                </li>
                <li className='page_list-number_item'>
                    Yêu thương và hỗ trợ đồng đội
                    <ul className='page_list'>
                        <li className='page_item'>
                            Sẵn lòng hỗ trợ, hướng dẫn, động viên để họ hoàn thành tốt công việc.
                            Không làm thay, không bao che.
                        </li>
                        <li className='page_item'>
                            Đứng vào vị trí của người nói để lắng nghe đầy đủ và không thành kiến.
                        </li>
                        <li className='page_item'>
                            Thẳng thắn theo hướng đóng góp xây dựng. Luôn ghi nhận thành quả hoặc nỗ
                            lực dù chưa có thành quả.
                        </li>
                    </ul>
                </li>
            </ol>
            <h2 className='page_list-title'>TẦM NHÌN CỦA YODY</h2>
            <ul className='page_list'>
                <li className="page_item">2025: Công ty thời trang số 1 Việt Nam. IPO và trở thành "Kỳ lân" tiếp theo của Việt Nam. Cộng đồng Yody có cuộc sống viên mãn, hạnh phúc.</li>
                <li className="page_item">2038: Công ty thời trang số 1 Thế Giới. Cộng đồng Yody có cuộc sống viên mãn, hạnh phúc.</li>
            </ul>
            <img className='page_img' src={introduce4} alt="introduce image" />
            <h2 className='page_list-title'>HÀNH TRÌNH CỦA YODY QUA CÁC NĂM</h2>
            <img className='page_img' src={introduce5} alt="introduce image" />
            <h6 className='page_title-sub'>Năm 2014: Thương hiệu Yody ra đời</h6>
            <ul className='page_list'>
                <li className="page_item">25/4/2014: Khai trương cửa hàng Yody đầu tiên tại 22 Chùa Bộc – Hà Nội.</li>
                <li className="page_item">14/7/2014 : Khai trương cửa hàng Yody thứ 2 tại Chí Linh.</li>
                <li className="page_item">26/10/2014: Khai trương cửa hàng Yody thứ 3 tại Kẻ Sặt.</li>
                <li className="page_item">20/10/2014: Khai trương cửa hàng Yody thứ 4 tại Bắc Giang.</li>
                <li className="page_item">Năm 2014 cũng là năm với sự góp mặt của các thành viên: Chị Thanh, chị Huế, chị Ngân, chị Thêu, chị Nguyệt… đến giờ vẫn đang đồng hành cùng Yody</li>
                <li className="page_item">Hoạt động đào tạo, chia sẻ trở thành một phần văn hoá không thể thiếu của Yody.</li>
            </ul>
            <h6 className='page_title-sub'>Năm 2015: Yody tìm được văn phòng “mơ ước”</h6>
            <ul className='page_list'>
                <li className="page_item">09/4/2015: CEO Nguyễn Việt Hòa vẫn mơ về một văn phòng khang trang, tràn đầy cảm hứng cho đội ngũ Yody. Và rồi đội ngũ Yody cũng đã biến mong muốn về văn phòng ấy thành hiện thực. Văn phòng “Ước mơ” đã được tìm thấy và chính thức khai trương tại 45 Hồng Quang - TP Hải Dương.</li>
                <li className="page_item">Yody đón nhận thêm các thành viên cốt cán, gắn bó: anh Hiếu, chị Mận, chị Trang, chị Hạnh…</li>
                <li className="page_item">Năm 2015: Thương hiệu Yody đã có 12 cửa hàng.</li>
            </ul>
            <h6 className='page_title-sub'>Năm 2016: Sự nhiệt huyết và đột phá</h6>
            <ul className='page_list'>
                <p className='page_text page_text'>Câu chuyện về niềm đam mê Thời trang Việt trở nên sục sôi hơn khi CEO Nguyễn Việt Hòa cùng đội ngũ Leader ra nước ngoài, bước chân vào các trung tâm thương mại lớn chưa có 1 hãng thời trang Việt Nam nào xuất hiện nhưng sản phẩm "made in Vietnam" lại vô cùng phổ biến. Đây là niềm đau và cũng là động lực, lý do vì sao CEO Nguyễn Việt Hòa muốn đưa sản phẩm thời trang Việt vươn ra Thế giới.</p>
                <li className="page_item">28/4/2016: Yody tiến vào nội thành Hà Nội, khai trương tại 193 Bà Triệu (160m2).</li>
                <li className="page_item">Năm 2016 với sự phát triển nhanh chóng Yody đã có 38 cửa hàng trên 20 tỉnh thành của Việt Nam.</li>
            </ul>
            <h6 className='page_title-sub'>Năm 2017: Yody thử nghiệm mô hình mới</h6>
            <ul className='page_list'>
                <li className="page_item">Thành lập công ty con Yody Miền Trung (6 cửa hàng)</li>
                <li className="page_item">17/12/2017: Sự kiện Yody Fashion Show hoành tráng được kỳ công đầu tư tổ chức tại TP. Hải Dương với sự tham gia của 1500 khách hàng.</li>
                <li className="page_item">Năm 2017, Yody triển khai mô hình siêu thị thời trang, điển hình như: Yody Gia Lộc, Yody Kinh Môn, Yody Quế Võ với diện tích 500m2 - 600m2.</li>
                <li className="page_item">Năm 2017, Yody đã có 63 cửa hàng trên 30 tỉnh thành.</li>
                <li className="page_item">CEO Nguyễn Việt Hòa dành 11 ngày đi nghiên cứu thị trường tại Nhật Bản và quyết định sẽ sử dụng công nghệ Nhật Bản cho nhà máy sản xuất của Yody sau này.</li>
            </ul>
            <h6 className="page_title-sub">Năm 2019: Bước đà đột phá</h6>
            <ul className='page_list'>
                <li className="page_item">Yody hiện đã có 91 cửa hàng trải khắp 33 tỉnh thành trên toàn quốc với quy mô trên 700 nhân sự.</li>
                <li className="page_item">Yody chuẩn bị các bước để năm 2020 gấp đôi số lượng cửa hàng và mở thêm 1 cửa hàng tại nước ngoài.</li>
            </ul>
            <h6 className="page_title-sub">Năm 2020: Đột phá</h6>
            <ul className='page_list'>
                <li className='page_item'>Yody tiến bước đến với Miền Nam.</li>
                <li className='page_item'>Đưa Yody ra thế giới với những sản phẩm đầu tiên được bán ra thị trường Mỹ.</li>
                <li className='page_item'>16/12/2020: Khai trương cửa hàng Yody Bắc Giang lớn nhất Đông Nam Á.</li>
            </ul>
            <h6 className="page_title-sub">Năm 2021: Bức tốc</h6>
            <ul className="page_list">
                <li className="page_item">18/3/2021: Yody ra mắt dòng sản phẩm Everyday Wear 2021 cùng Trường Giang - Nhã Phương với chất liệu độc quyền tại Việt Nam là áo polo cafe, áo polo mắt chim, áo polo pima, áo polo airycool, áo polo coolmax. </li>
                <li className="page_item">10/4/2021: Chính thức đưa văn phòng Yody Hà Nội vào hoạt động.</li>
            </ul>
            <p className="page_text page_text-bold">Với sứ mệnh đưa Yody thành thương hiệu thời trang toàn cầu, đội ngũ các thành viên Yody cam kết sẽ mang lại sự hài lòng tuyệt đối về sản phẩm cũng như dịch vụ đến tận tay khách hàng.</p>
        </div>
    );
};

export default Introduce;
