import Button from '../Button';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import Helmet from '../Helmet';

import {colors} from '../../asset/constains.js';
import getColorIndex from '../../utils/getColorIndex.js';
import numberWithComas from '../../utils/numberWithComas.js';
import {unlikeProduct} from '../../store/actions/authActions.js';
import userApi from '../../api/userApi.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const MyLikeProducts = () => {
    const dispatch = useDispatch();
    const {user, likeProducts} = useSelector((state) => state.authReducer);

    // handle unlikeProducts
    const handleUnlikeProduct = async (productId) => {
        dispatch(unlikeProduct(productId));
        await userApi.unlikeProduct({email: user.email, productId: productId});
    };

    return (
        <Helmet title='Sản phẩm yêu thích'>
            <div className='account-my-like-products'>
                <div className='account_header'>
                    <h5>Sản phẩm yêu thích</h5>
                    <p>{likeProducts.length} sản phẩm</p>
                </div>
                <div className='account-my-like-products_content'>
                    {likeProducts.length > 0 ? (
                        likeProducts.map((item) => (
                            <div className='account-my-like-products_item' key={item._id}>
                                <div className='account-my-like-products_item_img'>
                                    <Link to={`/san-pham/${item.slug}`}>
                                        <img src={imgUrl + item.image} alt='product image' />
                                    </Link>
                                </div>
                                <div className='account-my-like-products_item_info'>
                                    <Link to={`/san-pham/${item.slug}`}>
                                        <h5>{item.name}</h5>
                                    </Link>
                                    <div className='account-my-like-products_item_color'>
                                        {item.warehouse.colors.map((color, index) => (
                                            <div
                                                className='product_info_color_item'
                                                style={{
                                                    background: colors[getColorIndex(color)].color,
                                                    width: '25px',
                                                    height: '25px',
                                                }}
                                                key={index}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className='account-my-like-products_item_size'>
                                        {item.warehouse.sizes.map((size, index) => (
                                            <div
                                                className='product_info_size_item'
                                                style={{
                                                    width: '35px',
                                                    height: '25px',
                                                    fontSize: '12px',
                                                }}
                                                key={index}
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='account-my-like-products_item_price'>
                                        <div>
                                            {numberWithComas(item.price.real_price)}
                                            <sup>đ</sup>
                                        </div>
                                        {item.price.sale_price != 0 && (
                                            <div>
                                                {numberWithComas(item.price.real_price)}
                                                <sup>đ</sup>
                                            </div>
                                        )}
                                        {item.price.sale_number != 0 && (
                                            <div>
                                                {item.price.sale_number}
                                                <sup>%</sup>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='account-my-like-products_item_btn'>
                                    <button onClick={() => handleUnlikeProduct(item._id)}>
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='account-my-like-products_empty'>
                            <img
                                src='https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/no-heart.png'
                                alt=''
                            />
                            <p>Danh sách yêu thích của bạn trống</p>
                            <Button
                                text='Mua sắm ngay bây giờ'
                                fontSize={16}
                                link='/'
                                outline={true}
                                bold={true}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Helmet>
    );
};

export default MyLikeProducts;
