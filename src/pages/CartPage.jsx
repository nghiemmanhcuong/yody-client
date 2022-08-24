import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {useState, useMemo, useEffect} from 'react';

import Helmet from '../components/Helmet';
import Grid from '../components/Grid';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

import numberWithComas from '../utils/numberWithComas';
import productApi from '../api/productApi';
import {
    deleteProductInCart,
    addQuantityProductInCart,
    minusQuantityProductInCart,
} from '../store/actions/cartActions.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const CartPage = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(null);
    const [popularProducts, setPopularProducts] = useState([]);
    const {products} = useSelector((state) => state.cartReducer);
    const {user} = useSelector((state) => state.authReducer);

    useMemo(() => {
        let totalPrice = products.reduce((initValue, product) => {
            return initValue + product.price * product.quantity;
        }, 0);
        setTotal(totalPrice);
    }, [products]);

    useEffect(() => {
        const fecthPopularProducts = async () => {
            try {
                const response = await productApi.getHotProduct();
                if (response.success) {
                    setPopularProducts(response.data);
                }
            } catch (error) {
                console.log('Có lỗi', error);
            }
        };
        fecthPopularProducts();
    }, []);

    return (
        <Helmet title='Giỏ hàng'>
            <div className='cart-page'>
                <div className='container'>
                    {products.length > 0 ? (
                        <div className='cart-page_wrapper'>
                            <div className='cart-page_left'>
                                <div className='cart-page_left_header'>
                                    <div className='cart-page_left_header_text'>
                                        <h5>Đơn hàng của bạn</h5>
                                        <p>(1) Sản phẩm</p>
                                    </div>
                                    <div className='cart-page_left_header_btn'>
                                        <Link to='/collection/polo-yody'>
                                            Tiếp tục mua hàng
                                            <BsArrowRight />
                                        </Link>
                                    </div>
                                </div>
                                <div className='cart-page_left_product'>
                                    <div className='cart-page_left_product_header'>
                                        <p>Sản phẩm</p>
                                        <p>Đơn giá</p>
                                        <p>Số lượng</p>
                                        <p>Thành tiền</p>
                                    </div>
                                    <div className='cart-page_left_product_list'>
                                        {products.map((product, index) => (
                                            <div
                                                className='cart-page_left_product_item'
                                                key={index}
                                            >
                                                <div className='cart-page_left_product_img'>
                                                    <img
                                                        src={imgUrl + product.image}
                                                        alt='product image'
                                                    />
                                                </div>
                                                <div className='cart-page_left_product_info'>
                                                    <div>
                                                        <h5>{product.name}</h5>
                                                        <div>
                                                            <span>{product.color}</span>
                                                            <span>/</span>
                                                            <span>{product.size}</span>
                                                        </div>
                                                    </div>
                                                    <p className='cart-page_left_product_price'>
                                                        {numberWithComas(product.price)}
                                                        <sup>đ</sup>
                                                    </p>
                                                    <div className='cart-page_left_product_quantity'>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    minusQuantityProductInCart(
                                                                        product.id,
                                                                    ),
                                                                )
                                                            }
                                                        >
                                                            <FiMinus />
                                                        </button>
                                                        <p>{product.quantity}</p>
                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    addQuantityProductInCart(
                                                                        product.id,
                                                                    ),
                                                                )
                                                            }
                                                        >
                                                            <FiPlus />
                                                        </button>
                                                    </div>
                                                    <p className='cart-page_left_product_price'>
                                                        {numberWithComas(
                                                            product.price * product.quantity,
                                                        )}
                                                        <sup>đ</sup>
                                                    </p>
                                                </div>
                                                <div
                                                    className='cart-page_left_product_delete'
                                                    onClick={() =>
                                                        dispatch(deleteProductInCart(product.id))
                                                    }
                                                >
                                                    <RiDeleteBin6Line />
                                                    Xoá
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='cart-page_right'>
                                <div>
                                    <p>Tổng cộng :</p>
                                    <p>
                                        {numberWithComas(total || 0)}
                                        <sup>đ</sup>
                                    </p>
                                </div>
                                <Link to='/checkout'>Thanh toán ({products.length})</Link>
                                <p>Dùng mã giảm giá của YODY trong bước tiếp theo</p>
                            </div>
                        </div>
                    ) : (
                        <div className='cart-empty'>
                            <img
                                src='https://bizweb.dktcdn.net/100/438/408/themes/863105/assets/blank_cart.svg?1660357170520'
                                alt='empty cart image'
                            />
                            <p>Giỏ hàng của bạn trống!!!</p>
                            {!user ? (
                                <div className='cart-empty_link'>
                                    <Button text='Đăng nhập / Đăng ký' fontSize={16} link='/account/login' bold={true} outline={true} width={250}/>
                                </div>
                            ) : null}
                            <div style={{marginTop:'5px'}}>
                                <Button text='Mua ngay' fontSize={16} link='/' bold={true} outline={true} width={250}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='container' style={{paddingTop: '30px'}}>
                <h5
                    style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#FDAF18',
                    }}
                >
                    CÓ THỂ BẠN MUỐN MUA
                </h5>
                <Grid col={6} gap={10}>
                    {popularProducts.map((product, index) => (
                        <ProductCard data={product} isSubImage={true} key={index} />
                    ))}
                </Grid>
            </div>
        </Helmet>
    );
};

export default CartPage;
