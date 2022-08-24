import PropTypes from 'prop-types';
import numberWithComas from '../utils/numberWithComas.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const CheckoutProductItem = ({product}) => {
    return (
        <div className='checkout_product_item'>
            <div className='checkout_product_item_left'>
                <div className='checkout_product_item_img'>
                    <img src={imgUrl + product.image} alt='product image' />
                    <div>{product.quantity}</div>
                </div>
                <div className='checkout_product_item_info'>
                    <h5>{product.name}</h5>
                    <div>
                        <span>{product.color}</span>
                        <span>/</span>
                        <span>{product.size}</span>
                    </div>
                </div>
            </div>
            <div className='checkout_product_item_total'>
                {numberWithComas(product.price * product.quantity)}<sup>đ</sup>
            </div>
        </div>
    );
};

CheckoutProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CheckoutProductItem;
