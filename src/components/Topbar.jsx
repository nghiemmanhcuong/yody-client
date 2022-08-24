import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import bannerApi from '../api/bannerApi';

const imgUrl = process.env.REACT_APP_IMG_URL;

const Topbar = () => {
    const [topbarBanner, setTopbarBanner] = useState(null);

    useEffect(() => {
        const getTopbarBanner = async () => {
            try {
                const response = await bannerApi.getTopbarBanner();
                if (response.success) {
                    setTopbarBanner(response.data);
                }
            } catch (error) {
                console.log('Có lỗi xảy ra khi tải banner đầu trang chủ' + error);
            }
        };
        getTopbarBanner();
    }, []);

    return (
        <div className='topbar'>
            {topbarBanner && (
                <Link to={`/collection/${topbarBanner.link}`}>
                    <img
                        src={`${imgUrl + topbarBanner.image}`}
                        alt='top bar banner'
                        style={{width: topbarBanner.width, height: topbarBanner.height,objectFit:'cover'}}
                    />
                </Link>
            )}
        </div>
    );
};

export default Topbar;
