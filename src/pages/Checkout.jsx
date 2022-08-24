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
                            <h3>Thông tin giao hàng</h3>
                            {user ? (
                                <button onClick={() => dispatch(logout())}>
                                    <HiOutlineLogout size={18} />
                                    Đăng xuất
                                </button>
                            ) : (
                                <Link to='/account/login'>
                                    <FaUserCircle size={18} />
                                    Đăng nhập
                                </Link>
                            )}
                        </div>
                        <div className='checkout_form_wap'>
                            <Input
                                placeholder='Họ và tên'
                                onChangeValue={handleChangInput}
                                name='name'
                                element='input'
                                error={errors.name || null}
                            />
                            <Input
                                placeholder='Số điện thoại'
                                onChangeValue={handleChangInput}
                                name='phone'
                                element='input'
                                error={errors.phone || null}
                            />
                            <Input
                                placeholder='Địa chỉ'
                                onChangeValue={handleChangInput}
                                name='address'
                                element='input'
                                error={errors.address || null}
                            />
                            <Input
                                placeholder='Tỉnh thành'
                                onChangeValue={handleChangInputSelect}
                                name='province'
                                element='select'
                                data={provinces}
                                address={data.province}
                                error={errors.province || null}
                            />
                            <Input
                                placeholder='Quận huyện'
                                onChangeValue={handleChangInputSelect}
                                name='district'
                                element='select'
                                disabled={data.province == ''}
                                data={districts}
                                address={data.district}
                                error={errors.district || null}
                            />
                            <Input
                                placeholder='Xã phường'
                                onChangeValue={handleChangInputSelect}
                                name='wards'
                                element='select'
                                disabled={data.district == ''}
                                data={wards}
                                address={data.wards}
                                error={errors.wards || null}
                            />
                            <Input
                                placeholder='Ghi chú'
                                onChangeValue={handleChangInput}
                                name='noteMessage'
                                element='textarea'
                            />
                        </div>
                    </form>
                    <div className='checkout_payment'>
                        <div className='checkout_payment_transport'>
                            <div className='checkout_header'>
                                <h3>Vận chuyển</h3>
                            </div>
                            <div className='checkout_payment_item'>
                                <div className='checkout_payment_item_left'>
                                    <div className='checkout_payment_item_circle active'>
                                        <div></div>
                                    </div>
                                    <p>
                                        Miễn phí vận chuyển <span>20.000đ</span>
                                    </p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <h5>Miễn phí</h5>
                                </div>
                            </div>
                        </div>
                        <div className='checkout_payment_method'>
                            <div className='checkout_header'>
                                <h3>Thanh toán</h3>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh toán qua VNPAY')}
                                style={{
                                    padding: '16px 10px',
                                    borderBottom: 'none',
                                    borderRadius: '5px 5px 0 0',
                                }}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh toán qua VNPAY'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh toán qua VNPAY</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <img src={vnpayIcon} alt='vnpay icon' />
                                </div>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh toán qua Ví MoMo')}
                                style={{
                                    padding: '16px 10px',
                                    borderBottom: 'none',
                                    borderRadius: '0 0 0 0',
                                }}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh toán qua Ví MoMo'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh toán qua Ví MoMo</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <img src={momoIcon} alt='vnpay icon' style={{height: '30px'}} />
                                </div>
                            </div>
                            <div
                                className={`checkout_payment_item ${
                                    errors.paymentMethod ? 'error' : ''
                                }`}
                                onClick={() => setPaymentMethod('Thanh toán khi nhận hàng (COD)')}
                                style={{padding: '16px 10px', borderRadius: '0 0 5px 5px'}}
                            >
                                <div className='checkout_payment_item_left'>
                                    <div
                                        className={`checkout_payment_item_circle ${
                                            data.paymentMethod == 'Thanh toán khi nhận hàng (COD)'
                                                ? 'active'
                                                : ''
                                        }`}
                                    >
                                        <div></div>
                                    </div>
                                    <p>Thanh toán khi nhận hàng (COD)</p>
                                </div>
                                <div className='checkout_payment_item_right'>
                                    <FaMoneyBill size={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <div className='checkout_note'>
                    Sau khi <span>hoàn tất đơn hàng</span> khoảng 60-90 phút (trong giờ hành chính),
                    YODY sẽ nhanh chóng gọi điện xác nhận lại thời gian giao hàng với bạn. YODY xin
                    cảm ơn!
                </div>
            </div>
            <div className='checkout_right'>
                <div className='checkout_header'>
                    <h3>Đơn hàng ({products.length} sản phẩm)</h3>
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
                        <span>Nhập mã giảm giá</span>
                    </label>
                    <button
                        className={`checkout_discount_button ${discount == '' ? 'disabled' : ''}`}
                    >
                        Áp dụng
                    </button>
                </div>
                <div className='checkout_price'>
                    <div>
                        <p>Tạm tính</p>
                        {totalPrice && (
                            <p>
                                {numberWithComas(totalPrice)}
                                <sup>đ</sup>
                            </p>
                        )}
                    </div>
                    <div>
                        <p>Phí vận chuyển</p>
                        <p>Miễn phí</p>
                    </div>
                </div>
                <div className='checkout_total'>
                    <div>
                        <p>Tổng cộng</p>
                        {totalPrice && (
                            <h5>
                                {numberWithComas(totalPrice)}
                                <sup>đ</sup>
                            </h5>
                        )}
                    </div>
                    <div>
                        <Link to='/gio-hang'>
                            <MdOutlineKeyboardArrowLeft size={22} />
                            Quay về giỏ hàng
                        </Link>
                        <button onClick={handleOrder}>ĐẶT HÀNG</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
