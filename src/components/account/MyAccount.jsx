import {Link} from 'react-router-dom';
import Helmet from '../Helmet';

const MyAccount = ({username, email}) => {
    return (    
        <Helmet title='Thông tin cá nhân'>
            <div className='account-my-account'>
                <div className='account-my-account_head account_header'>
                    <h5>Thông tin cá nhân</h5>
                    <Link to='/'>Sửa thông tin</Link>
                </div>
                <div className='account-my-account_content'>
                    <p>Họ và tên: {username}</p>
                    <p>Địa chỉ email: {email}</p>
                </div>
            </div>
        </Helmet>
    );
};

export default MyAccount;
