import {useState,useMemo} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import Button from './Button';

import numberWithComas from '../utils/numberWithComas';
import CartProductItem from './CartProductItem';

const Cart = () => {
    const [total, setTotal] = useState(null);
    const {products, isOpen} = useSelector((state) => state.cartReducer);
    const {user} = useSelector((state) => state.authReducer);

    useMemo(() => {
        let totalPrice = products.reduce((initValue, product) => {
            return initValue + product.price * product.quantity;
        }, 0);
        setTotal(totalPrice);
    }, [products]);

    return (
        <div className={`cart dropdown-item ${isOpen && 'cart-open'}`}>
            {products.length > 0 ? (
                <>
                    {products.map((product, index) => (
                        <CartProductItem product={product} key={index} />
                    ))}
                    <div className='cart_footer'>
                        <div>
                            Tổng cộng:{' '}
                            <span>
                                {total && numberWithComas(total)}
                                <sup>đ</sup>{' '}
                            </span>
                        </div>
                        <Button link='/gio-hang' fontSize={16} text='Vào giỏ hàng' outline={true} />
                    </div>
                </>
            ) : (
                <div className='cart-empty'>
                    <img
                        src='https://bizweb.dktcdn.net/100/438/408/themes/863105/assets/blank_cart.svg?1660357170520'
                        alt='empty cart image'
                    />
                    <p>Giỏ hàng của bạn trống!!!</p>
                    {!user ? (
                        <div className='cart-empty_link'>
                            <Link to='/account/login'>Đăng nhập</Link>
                            <span>/</span>
                            <Link to='/account/register'>Đăng ký</Link>
                        </div>
                    ) : null}
                    <Link to='/'>Mua ngay</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
