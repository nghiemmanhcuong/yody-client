import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

import Input from './Input';
import Helmet from './Helmet';

import {login, emptyErrorMessage} from '../store/actions/authActions.js';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, loading, errorMessage} = useSelector((state) => state.authReducer);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        // if not user change page home
        if (user != null) {
            navigate('/account');
        }
    }, [user]);

    // empty error message
    useEffect(() => {
        dispatch(emptyErrorMessage());
    }, []);

    // handle change input value
    const handleChangInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        dispatch(emptyErrorMessage());
    };

    // handle login form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(data));
    };

    return (
        <Helmet title='Đăng nhập'>
            <form className='account_form' onSubmit={handleSubmit}>
                <h3 className='account_form_title'>ĐĂNG NHẬP</h3>
                <Input
                    placeholder='Email'
                    element='input'
                    name='email'
                    onChangeValue={handleChangInput}
                />
                <Input
                    placeholder='Mật khẩu'
                    element='input'
                    name='password'
                    type='password'
                    onChangeValue={handleChangInput}
                />
                {errorMessage && <div className='account_form_error'>{errorMessage}</div>}
                <div className='account_form_btn'>
                    <button>{loading ? 'Đang đăng nhập...' : 'Đăng nhập'}</button>
                </div>
                <div className='account_form_link'>
                    <Link to='/account/register'>Đăng ký</Link>
                </div>
            </form>
        </Helmet>
    );
};

export default Login;
