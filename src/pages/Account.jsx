import {useParams,useNavigate} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import AccountInfo from '../components/AccountInfo';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

import bgAccount from '../asset/images/bg_account.jpeg';

const Account = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.authReducer);

    useEffect(() => {
        if(user == null && params.page != 'login' && params.page != 'register') {
            navigate('/');
        }
    },[user])

    return (
        <div
            className='account'
            style={{
                backgroundImage: (params.page == 'login' || params.page == 'register')
                    ? `url(${bgAccount})`
                    : 'none',
                display: (params.page == 'login' || params.page == 'register') ? 'flex' : 'block',
                padding: (params.page == 'login' || params.page == 'register') ? '130px 0' : '0 0'
            }}
        >
            {params.page == 'login' && <Login />}
            {params.page == 'register' && <Register />}
            {(params.page != 'login' && params.page != 'register') ? <AccountInfo /> : null}
        </div>
    );
};

export default Account;
