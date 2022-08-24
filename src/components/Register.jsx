import {useState, useEffect} from 'react';
import {HiOutlineChevronLeft} from 'react-icons/hi';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Input from './Input';
import Grid from './Grid';
import Helmet from './Helmet';

import {register, emptyErrorMessage} from '../store/actions/authActions.js';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, loading, errorMessage} = useSelector((state) => state.authReducer);
    const [data, setData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        interests: '',
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

    // handle change input value
    const handleChangInterests = (e) => {
        setData({...data, interests: e.target.dataset.interests});
        dispatch(emptyErrorMessage());
    };

    // handle register form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(data));
    };

    return (
        <Helmet title='Đăng ký'>
            <form className='account_form' onSubmit={(e) => handleSubmit(e)} method='post'>
                <div className='account_form_header'>
                    <Link to='/account/login'>
                        <HiOutlineChevronLeft size={36} />
                    </Link>
                    <h3 className='account_form_title'>ĐĂNG KÝ THÀNH VIÊN MỚI</h3>
                </div>
                <Grid col={2} gap={10}>
                    <Input
                        placeholder='Tên'
                        element='input'
                        onChangeValue={handleChangInput}
                        name='name'
                    />
                    <Input
                        placeholder='Họ'
                        element='input'
                        onChangeValue={handleChangInput}
                        name='surname'
                    />
                </Grid>
                <Input
                    placeholder='Số điện thoại'
                    element='input'
                    onChangeValue={handleChangInput}
                    name='phone'
                />
                <Input
                    placeholder='Địa chỉ email'
                    element='input'
                    onChangeValue={handleChangInput}
                    name='email'
                />
                <Input
                    placeholder='Mật khẩu'
                    element='input'
                    onChangeValue={handleChangInput}
                    name='password'
                    type='password'
                />
                {errorMessage && <div className='account_form_error'>{errorMessage}</div>}
                <div className='account_form_interests'>
                    <span>Sở thích</span>
                    <div className='account_form_interests_list'>
                        <Grid col={3} gap={10}>
                            <div
                                className={`account_form_interests_item ${
                                    data.interests == 'Thời trang nam' ? 'active' : ''
                                }`}
                                data-interests='Thời trang nam'
                                onClick={(e) => handleChangInterests(e)}
                            >
                                Thời trang nam
                            </div>
                            <div
                                className={`account_form_interests_item ${
                                    data.interests == 'Thời trang nữ' ? 'active' : ''
                                }`}
                                data-interests='Thời trang nữ'
                                onClick={(e) => handleChangInterests(e)}
                            >
                                Thời trang nữ
                            </div>
                            <div
                                className={`account_form_interests_item ${
                                    data.interests == 'Thời trang trẻ em' ? 'active' : ''
                                }`}
                                data-interests='Thời trang trẻ em'
                                onClick={(e) => handleChangInterests(e)}
                            >
                                Thời trang trẻ em
                            </div>
                        </Grid>
                    </div>
                </div>
                <div className='account_form_btn'>
                    <button className='register'>{loading ? 'Đang đăng ký...' : 'Đăng ký'}</button>
                </div>
            </form>
        </Helmet>
    );
};

export default Register;
