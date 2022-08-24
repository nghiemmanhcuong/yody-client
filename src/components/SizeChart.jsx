import sizeChart1 from '../asset/images/size_chart_1.jpeg';
import sizeChart2 from '../asset/images/size_chart_2.jpeg';
import sizeChart3 from '../asset/images/size_chart_3.jpeg';
import sizeChart4 from '../asset/images/size_chart_4.jpeg';
import sizeChart5 from '../asset/images/size_chart_5.jpeg';
import sizeChart6 from '../asset/images/size_chart_6.jpeg';
import sizeChart7 from '../asset/images/size_chart_7.jpeg';

const SizeChart = () => {
    return (
        <div className='page_size-chart'>
            <h5 className='page_title'>BẢNG SIZE CHUẨN</h5>
            <p className='page_text page_text-bold page_text-italic'>
                Khi đi mua quần áo thì chọn được món đồ chuẩn size vừa vặn luôn là đẹp nhất. Thấu
                hiểu điều đó, trên mỗi sản phẩm của Yody đều có bảng tính size số giúp khách hàng dễ
                dàng tìm được size số phù hợp với chiều cao và cân nặng. Cùng tìm hiểu bạn nhé!
            </p>
            <p className='page_text'>
                Mỗi người chúng ta có những đặc điểm hình dáng cơ thể khác nhau, vì vậy size số mà
                bảng tính gợi ý có thể chưa phù hợp với một số người. Để chắc xác định chính xác
                size số quần áo của mình tại Yody bạn có thể tham khảo thêm bảng thông số dưới đây
                nhé!
            </p>
            <p className='page_text page_text-bold'>
                Thông số chọn size theo cân nặng và chiều cao tham khảo theo bảng:
            </p>
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart1}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart2}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart3}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart4}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart5}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart6}
                alt='size chart image'
            />
            <img
                className='page_img'
                style={{marginTop: 0, marginBottom: 0}}
                src={sizeChart7}
                alt='size chart image'
            />
        </div>
    );
};

export default SizeChart;
