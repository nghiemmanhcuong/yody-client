import {useParams,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

import Helmet from '../components/Helmet';
import Introduce from '../components/Introduce';
import SizeChart from '../components/SizeChart';
import ReturnPolicy from '../components/ReturnPolicy';
import PrivacyPolicy from '../components/PrivacyPolicy';
import LoyaltyPolicy from '../components/LoyaltyPolicy';

const Page = () => {
    const params = useParams();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if(params.page == 'gioi-thieu') {
            setTitle('Giới thiệu');
        }else if(params.page == 'bang-size-chuan') {
            setTitle('Bảng size chuẩn');
        }else if(params.page == 'chinh-sach-doi-tra') {
            setTitle('Chính sách đổi trả');
        }else if(params.page == 'chinh-sach-bao-mat') {
            setTitle('Chính sách bảo mật');
        }else if(params.page == 'chinh-sach-khach-hang-than-thiet') {
            setTitle('Chính sách khách hàng thân thiết');
        }
        
    },[params.page])


  return (
    <Helmet title={title}>
        <div className="page">
            <div className="container">
                <div className="page_breadcrumb">
                    <Link to='/'>
                        Trang chủ 
                    </Link>
                    <span>/</span>
                    <p>{title}</p>
                </div>
                <div className="page_component">
                    {params.page == 'gioi-thieu' && <Introduce />}
                    {params.page == 'bang-size-chuan' && <SizeChart />}
                    {params.page == 'chinh-sach-doi-tra' && <ReturnPolicy />}
                    {params.page == 'chinh-sach-bao-mat' && <PrivacyPolicy />}
                    {params.page == 'chinh-sach-khach-hang-than-thiet' && <LoyaltyPolicy />}
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default Page