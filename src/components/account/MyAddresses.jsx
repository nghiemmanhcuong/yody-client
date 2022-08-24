import {HiPlusSm} from 'react-icons/hi';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AddAddressModel from '../AddAddressModel';
import Helmet from '../Helmet';

import {deleteAddress} from '../../store/actions/authActions.js';
import userApi from '../../api/userApi.js';

const MyAddresses = () => {
    const dispatch = useDispatch();
    const {user, userAddresses} = useSelector((state) => state.authReducer);
    const [openAddAddressModal, setOpenAddAddressModal] = useState(false);

    // handle deleteAddress
    const handleDeleteAddress = async (addressId) => {
        if (window.confirm('Bạn chắc chắn muốn xoá địa chỉ này???')) {
            dispatch(deleteAddress(addressId));
            await userApi.deleteAddress(user.email, addressId);
        } else {
            return;
        }
    };

    return (
        <Helmet title='Địa chỉ của bạn'>
            <div className='account-my-addresses'>
                <div className='account_header'>
                    <h5>Địa chỉ của bạn</h5>
                    <button onClick={() => setOpenAddAddressModal(true)}>
                        <HiPlusSm />
                        Thêm địa chỉ mới
                    </button>
                </div>
                <div className='account-my-addresses_list'>
                    {userAddresses.map((address) => (
                        <div className='account-my-addresses_item' key={address.id}>
                            <p>
                                <strong>Email:</strong>
                                {address.email}
                            </p>
                            <p>
                                <strong>Họ tên:</strong>
                                {address.name}
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong>
                                {address.address}
                            </p>
                            <p>
                                <strong>Số điện thoại:</strong>
                                {address.phone}
                            </p>
                            <button
                                className='account-my-addresses_item_delete'
                                onClick={() => handleDeleteAddress(address.id)}
                            >
                                Xoá
                            </button>
                        </div>
                    ))}
                </div>
                <div className={`add-address-modal ${openAddAddressModal ? 'active' : ''}`}>
                    <AddAddressModel
                        onSetOpenAddressModel={setOpenAddAddressModal}
                        userEmail={user?.email}
                    />
                </div>
            </div>
        </Helmet>
    );
};

export default MyAddresses;
