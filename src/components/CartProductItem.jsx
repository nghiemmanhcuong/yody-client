import React from 'react';
import PropTypes from 'prop-types';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {useDispatch} from 'react-redux';

import {
    deleteProductInCart,
    addQuantityProductInCart,
    minusQuantityProductInCart,
} from '../store/actions/cartActions.js';

import numberWithComas from '../utils/numberWithComas.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const CartProductItem = ({product}) => {
    const dispatch = useDispatch();

    const hanleDeleteProductInCart = (id) => {
        dispatch(deleteProductInCart(id));
    };

    return (
        <div className='cart-product_item'>
            <div style={{display: 'flex'}}>
                <div className='cart-product_item_img'>
                    <img src={imgUrl + product.image} alt='product cart image' />
                </div>
                <div className='cart-product_item_info'>
                    <p>{product.name}</p>
                    <h5>{numberWithComas(product.price)}</h5>
                    <div className='cart-product_item_atributes'>
                        <span>{product.color}</span>
                        <span style={{padding: '0 5px'}}>/</span>
                        <span>{product.size}</span>
                    </div>
                    <div className='cart-product_item_quantity'>
                        <button onClick={() => dispatch(minusQuantityProductInCart(product.id))}>
                            <FiMinus />
                        </button>
                        <div>{product.quantity}</div>
                        <button onClick={() => dispatch(addQuantityProductInCart(product.id))}>
                            <FiPlus />
                        </button>
                    </div>
                </div>
            </div>
            <div className='cart-product_item_total-price'>
                Tổng cộng:{' '}
                <span>
                    {numberWithComas(product.quantity * product.price)}
                    <sup>đ</sup>
                </span>
            </div>
            <div
                className='cart-product_item_delete'
                onClick={() => hanleDeleteProductInCart(product.id)}
            >
                <RiDeleteBin6Line size={20} />
            </div>
        </div>
    );
};

CartProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CartProductItem;
