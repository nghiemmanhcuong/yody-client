import {MdClose} from 'react-icons/md';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux';

import Input from './Input';
import Grid from './Grid';

import userApi from '../api/userApi.js';
import {addAddress} from '../store/actions/authActions.js';

const AddAddressModel = ({userEmail, onSetOpenAddressModel}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        company: '',
        address: '',
    });

    // handle change input value
    const handleChangInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        if (error) {
            setError(null);
        }
    };

    // handle add address
    const handleAddAddress = async (e) => {
        e.preventDefault();
        if (!data.name) {
            setError({name: true});
        } else if (!data.phone) {
            setError({phone: true});
        } else if (!data.address) {
            setError({address: true});
        } else {
            data.id = uuidv4();
            dispatch(addAddress(data));
            await userApi.addAddress({userEmail: userEmail, address: data});
            onSetOpenAddressModel(false);
            setData({
                id: '',
                name: '',
                phone: '',
                email: '',
                company: '',
                address: '',
            });
        }
    };

    return (
        <form className='add-address-modal_form' onSubmit={handleAddAddress}>
            <div className='add-address-modal_form_header'>
                <h5>Thêm địa chỉ mới</h5>
                <MdClose size={26} onClick={() => onSetOpenAddressModel(false)} />
            </div>
            <div className='add-address-modal_form_input'>
                <Grid col={2} gap={10}>
                    <Input
                        placeholder='Họ tên'
                        name='name'
                        element='input'
                        value={data.name}
                        onChangeValue={handleChangInput}
                        error={error?.name}
                    />
                    <Input
                        placeholder='Số điện thoại'
                        name='phone'
                        element='input'
                        value={data.phone}
                        onChangeValue={handleChangInput}
                        error={error?.phone}
                    />
                </Grid>
                <Input
                    placeholder='Email'
                    name='email'
                    element='input'
                    value={data.email}
                    onChangeValue={handleChangInput}
                />
                <Input
                    placeholder='Công ty'
                    name='company'
                    element='input'
                    value={data.company}
                    onChangeValue={handleChangInput}
                />
                <Input
                    placeholder='Địa chỉ'
                    name='address'
                    element='input'
                    value={data.address}
                    onChangeValue={handleChangInput}
                    error={error?.address}
                />
                <div className='add-address-modal_form_btn'>
                    <Grid col={2} gap={10}>
                        <div
                            className='add-address-modal_form_btn_cancel'
                            onClick={() => onSetOpenAddressModel(false)}
                        >
                            Huỷ
                        </div>
                        <button type='submit' className='add-address-modal_form_btn_submit'>
                            Lưu
                        </button>
                    </Grid>
                </div>
            </div>
        </form>
    );
};

export default AddAddressModel;
