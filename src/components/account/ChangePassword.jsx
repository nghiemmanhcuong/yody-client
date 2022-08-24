import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useSelector} from 'react-redux';

import Input from '../Input';
import Helmet from '../Helmet';

import authApi from '../../api/authApi.js';

const ChangePassword = () => {
    const {user} = useSelector((state) => state.authReducer);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChangInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        setError(null);
    };

    // handle change password
    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (!data.confirmNewPassword) {
            setError('Vui lòng nhập đủ thông tin');
            return;
        } else if (data.confirmNewPassword != data.newPassword) {
            setError('Mật khẩu mới không khớp');
            return;
        } else {
            try {
                await authApi.changePassword({...data, email: user.email});
                setError(null);
                setSuccess(true);
                setData({
                    oldPassword: '',
                    newPassword: '',
                    confirmNewPassword: '',
                });
            } catch (error) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <Helmet title='Đổi mật khẩu'>
            <div className='account-change-password'>
                <div className='account_header' style={{justifyContent: 'flex-start'}}>
                    <h5 style={{marginRight: '10px'}}>Đổi mật khẩu</h5>
                    <p style={{fontSize: '14px'}}>
                        (Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác)
                    </p>
                </div>
                <form
                    className='account-change-password_form'
                    onSubmit={(e) => handleChangePassword(e)}
                >
                    <div>
                        <label htmlFor=''>Mật khẩu hiện tại *</label>
                        <Input
                            type='password'
                            name='oldPassword'
                            placeholder=''
                            element='input'
                            onChangeValue={handleChangInput}
                        />
                    </div>
                    <div>
                        <label htmlFor=''>Mật khẩu mới *</label>
                        <Input
                            type='password'
                            name='newPassword'
                            placeholder=''
                            element='input'
                            onChangeValue={handleChangInput}
                        />
                    </div>
                    <div>
                        <label htmlFor=''>Xác nhận mật khẩu mới *</label>
                        <Input
                            type='password'
                            name='confirmNewPassword'
                            placeholder=''
                            element='input'
                            onChangeValue={handleChangInput}
                        />
                    </div>
                    {error && <div className='account_form_error'>{error}</div>}
                    {success && <div className='account_form_success'>Đổi mật khẩu thành công</div>}
                    <div className='account-change-password_form_btn'>
                        <Link to='/account'>Huỷ</Link>
                        <button>Lưu</button>
                    </div>
                </form>
            </div>
        </Helmet>
    );
};

export default ChangePassword;
