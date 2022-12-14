import {Link, useNavigate} from 'react-router-dom';
import {FaUserCircle, FaMoneyBill} from 'react-icons/fa';
import {useState, useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import {HiOutlineLogout} from 'react-icons/hi';

import Grid from '../components/Grid';
import Input from '../components/Input';
import CheckoutProductItem from '../components/CheckoutProductItem';

import logo from '../asset/images/logo.webp';
import vnpayIcon from '../asset/images/payment_icon_vnpay.webp';
import momoIcon from '../asset/images/payment_icon_momo.webp';

import {getProvinces, getDistricts, getWards} from '../api/addressApi.js';
import numberWithComas from '../utils/numberWithComas.js';
import validateOrderForm from '../utils/validateOrderForm.js';
import orderApi from '../api/orderApi.js';
import {emptyCart} from '../store/actions/cartActions.js';
import {logout} from '../store/actions/authActions.js';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {products} = useSelector((state) => state.cartReducer);
    const {user} = useSelector((state) => state.authReducer);

    const [errors, setErrors] = useState({});
    const [discount, setDiscount] = useState('');
    const [totalPrice, setTotalPrice] = useState(null);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [data, setData] = useState({
        name: '',
        phone: '',
        address: '',
        province: '',
        district: '',
        wards: '',
        noteMessage: '',
        paymentMethod: '',
        products: [],
        userId: null,
        totalPrice: null,
    });

    // fecth provinces
    useEffect(() => {
        const fecthProvinces = async () => {
            try {
                const response = await getProvinces();
                setProvinces(response.data);
            } catch (error) {
                console.log('error', error);
            }
        };
        fecthProvinces();
    }, []);

    // fecth districts
    useEffect(() => {
        const fecthDistricts = async () => {
            try {
                const response = await getDistricts();
                const provinceIndex = provinces.findIndex(
                    (province) => province.name === data.province,
                );
                if (provinceIndex !== -1) {
                    const data = response.data.filter(
                        (item) => item.province_code == provinces[provinceIndex].code,
                    );
                    setDistricts(data);
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        if (data.province != '') {
            fecthDistricts();
        }
        setData({...data, district: ''});
    }, [data.province]);

    // fecth wards
    useEffect(() => {
        const fecthWards = async () => {
            try {
                const response = await getWards();
                const districtIndex = districts.findIndex(
                    (district) => district.name === data.district,
                );
                if (districtIndex !== -1) {
                    const data = response.data.filter(
                        (item) => item.district_code == districts[districtIndex].code,
                    );
                    setWards(data);
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        if (data.district != '') {
            fecthWards();
        } else {
            setData({...data, district: '', wards: ''});
        }
        setData({...data, wards: ''});
    }, [data.district]);

    // handle change input value
    const handleChangInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    // handle change select value
    const handleChangInputSelect = (e) => {
        setData({...data, [e.target.dataset.name]: e.target.dataset.value});
    };

    // set payment method
    const setPaymentMethod = (method) => {
        setData({...data, paymentMethod: method});
    };

    // total price of products in cart
    useMemo(() => {
        let totalPrice = products.reduce((initValue, product) => {
            return initValue + product.price * product.quantity;
        }, 0);
        setTotalPrice(totalPrice);
    }, [products]);

    // handle order all products in cart
    const handleOrder = async () => {
        const errorsOrderForm = validateOrderForm(data);
        if (Object.entries(errorsOrderForm).length > 0) {
            setErrors(errorsOrderForm);
        } else {
            data.products = products;
            data.totalPrice = products.reduce(
                (init, product) => init + product.price * product.quantity,
                0,
            );
            if (user != null) {
                data.userId = user._id;
            }
            try {
                const response = await orderApi.addOrder(data);
                if (response.success) {
                    navigate('/dat-hang-thanh-cong');
                    dispatch(emptyCart());
                }
            } catch (error) {
                console.log('error', error);
            }
        }
    };

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div className='checkout_logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <Grid col={2} gap={30}>
                    <form className='checkout_form'>
                        <div className='checkout_header'>
                            <h3>Th??ng tin giao h??ng</h3>
                            {user ? (
                                <button onClick={() => dispatch(logout())}>
                                    <HiOutlineLogout size={18} />
                                    ????ng xu???t
                                </button>
                            ) : (
                                <Link to='/account/login'>
                                    <FaUserCircle size={18} />
                                    ????ng nh???p
                                </Link>
                            )}
                        </div>
                        <div className='checkout_form_wap'>
                            <Input
                                placeholder='H??? v?? t??n'
                                onChangeValue={handleChangInput}
                                name='name'
                                element='input'
                                error={errors.name || null}
                            />
                            <Input
                                placeholder='S??? ??i???n tho???i'
                                onChangeValue={handleChangInput}
                                name='phone'
                                element='input'
                                error={errors.phone || null}
                            />
                            <Input
                                placeholder='?????a ch???'
                                onChangeValue={handleChangInput}
                                name='address'
                                element='input'
                                error={errors.address || null}
                            />
                            <Input
                                placeholder='T???nh th??nh'
                                onChangeValue={handleChangInputSelect}
                                name='province'
                                element='select'
                                data={provinces}
                                address={data.province}
                                error={errors.province || null}
                            />
                            <Input
                                placeholder='Qu???n huy???n'
                                onChangeValue={handleChangInputSelect}
                                name='district'
                                element='select'
                                disabled={data.province == ''}
                                data={districts}
                                address={data.district}
                                error={errors.district || null}
                            />
                            <Input
                                placeholder='X?? ph?????ng'
                                onChangeValue={handleChangInputSelect}
                                name='wards'
                                element='select'
                                disabled={data.district == ''}
                                data={wards}
                                address={data.wards}
                                error={errors.wards || null}
                            />
                            <Input
                                placeholder='Ghi ch??'
                                onChangeValue={handleChangInput}
                                name='noteMessage'
                                element='textarea'
                            />
                        </div>
                    </form>
                    <div className='checkout_payment'>
                        <div className='checkout_payment_transport'>
                            <div className='checkout_header'>
                                <h3>V???n chuy???n</h3>
                            </div>
                            <div className='checkout_payment_item'>
                                <div className='checkout_payment_item_left'>
                                    <div className='checkout_payment_item_circle active'>
                                        <div></div>
                                    </div>
                                    <p>
                                        Mi???n ph?? v???n chuy???n <span>20.000??</span>
                                    </p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <h5>Mi???n ph??</h5>
                                </div>
                            </div>
                        </div>
                        <div className='checkout_payment_method'>
                            <div className='checkout_header'>
                                <h3>Thanh to??n</h3>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh to??n qua VNPAY')}
                                style={{
                                    padding: '16px 10px',
                                    borderBottom: 'none',
                                    borderRadius: '5px 5px 0 0',
                                }}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh to??n qua VNPAY'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh to??n qua VNPAY</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <img src={vnpayIcon} alt='vnpay icon' />
                                </div>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh to??n qua V?? MoMo')}
                                style={{
                                    padding: '16px 10px',
                                    borderBottom: 'none',
                                    borderRadius: '0 0 0 0',
                                }}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh to??n qua V?? MoMo'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh to??n qua V?? MoMo</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <img src={momoIcon} alt='vnpay icon' style={{height: '30px'}} />
                                </div>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh to??n khi nh???n h??ng (COD)')}
                                style={{padding: '16px 10px', borderRadius: '0 0 5px 5px'}}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh to??n khi nh???n h??ng (COD)'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh to??n khi nh???n h??ng (COD)</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <FaMoneyBill size={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <div className='checkout_note'>
                    Sau khi <span>ho??n t???t ????n h??ng</span> kho???ng 60-90 ph??t (trong gi??? h??nh ch??nh),
                    YODY s??? nhanh ch??ng g???i ??i???n x??c nh???n l???i th???i gian giao h??ng v???i b???n. YODY xin
                    c???m ??n!
                </div>
            </div>
            <div className='checkout_right'>
                <div className='checkout_header'>
                    <h3>????n h??ng ({products.length} s???n ph???m)</h3>
                </div>
                <div className='checkout_product'>
                    {products.map((product, index) => (
                        <CheckoutProductItem key={index} product={product} />
                    ))}
                </div>
                <div className='checkout_discount'>
                    <label
                        className={`checkout_discount_input ${discount != '' ? 'active' : ''}`}
                        htmlFor='input_discount_code'
                    >
                        <input
                            type='text'
                            id='input_discount_code'
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                        <span>Nh???p m?? gi???m gi??</span>
                    </label>
                    <button
                        className={`checkout_discount_button ${discount == '' ? 'disabled' : ''}`}
                    >
                        ??p d???ng
                    </button>
                </div>
                <div className='checkout_price'>
                    <div>
                        <p>T???m t??nh</p>
                        {totalPrice && (
                            <p>
                                {numberWithComas(totalPrice)}
                                <sup>??</sup>
                            </p>
                        )}
                    </div>
                    <div>
                        <p>Ph?? v???n chuy???n</p>
                        <p>Mi???n ph??</p>
                    </div>
                </div>
                <div className='checkout_total'>
                    <div>
                        <p>T???ng c???ng</p>
                        {totalPrice && (
                            <h5>
                                {numberWithComas(totalPrice)}
                                <sup>??</sup>
                            </h5>
                        )}
                    </div>
                    <div>
                        <Link to='/gio-hang'>
                            <MdOutlineKeyboardArrowLeft size={22} />
                            Quay v??? gi??? h??ng
                        </Link>
                        <button onClick={handleOrder}>?????T H??NG</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
