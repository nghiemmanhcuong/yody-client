import {useSelector,useDispatch} from 'react-redux';
import {Link, useParams,useNavigate} from 'react-router-dom';

import MyAccount from './account/MyAccount';
import MyOrders from './account/MyOrders';
import MyAddresses from './account/MyAddresses';
import MyLikeProducts from './account/MyLikeProducts';
import ChangePassword from './account/ChangePassword';

import notAvatar from '../asset/images/not_avatar.webp';

import {siteBarAcountList} from '../asset/constains.js';
import {logout} from '../store/actions/authActions.js';

const AccountInfo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.authReducer);

    // handle logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className='account-info'>
            <div className='container container-big'>
                <div className='account-info_header'>
                    <div>
                        <Link to='/'>Trang chủ</Link>
                        <span>/</span>
                        <Link to='/account'>Tài khoản</Link>
                    </div>
                    <h5>TÀI KHOẢN</h5>
                </div>
                <div className='account-info_wrapper'>
                    <aside className='account-info_sitebar'>
                        <div className='account-info_sitebar_head'>
                            <div className='account-info_sitebar_img'>
                                <img src={notAvatar} alt='not avatar' />
                            </div>
                            <p>{user?.surname + ' ' + user?.name}</p>
                            <button onClick={handleLogout}>Đăng xuất</button>
                        </div>
                        <div className='account-info_sitebar_list'>
                            {siteBarAcountList.map((item, index) => (
                                <div
                                    className={`account-info_sitebar_item ${
                                        !params.page && index == 0 ? 'active' : ''
                                    } ${params.page == item.key ? 'active' : ''}`}
                                    key={index}
                                >
                                    <Link to={`/account/${item.link}`}>
                                        <img src={item.icon} alt='icon' />
                                        <p>{item.block}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <div className='account-info_content'>
                        {!params.page && (
                            <MyAccount
                                username={user?.surname + ' ' + user?.name}
                                email={user?.email}
                            />
                        )}
                        {params.page == 'my-orders' && <MyOrders />}
                        {params.page == 'change-password' && <ChangePassword />}
                        {params.page == 'my-addresses' && <MyAddresses />}
                        {params.page == 'my-like-products' && <MyLikeProducts />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
