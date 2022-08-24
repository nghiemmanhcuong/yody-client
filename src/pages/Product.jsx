import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {FaCartPlus} from 'react-icons/fa';
import parse from 'html-react-parser';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import Loading from '../components/Loading';
import Helmet from '../components/Helmet';
import SendEvaluate from '../components/SendEvaluate';
import Service from '../components/Service';

import productApi from '../api/productApi.js';
import {colors} from '../asset/constains.js';
import getColorIndex from '../utils/getColorIndex.js';
import numberWithComas from '../utils/numberWithComas.js';

import numberPhoneYellow from '../asset/images/number_phone_yellow.webp';
import locationYellow from '../asset/images/location_yellow.webp';

import {addToCart, updateQuantityProductInCart} from '../store/actions/cartActions.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [productEvaluates, setProductEvaluates] = useState(null);
    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(null);
    const [activeEvaluate, setActiveEvaluate] = useState(false);

    const {products} = useSelector((state) => state.cartReducer);

    // fecth current product
    useEffect(() => {
        const fecthProduct = async () => {
            try {
                const response = await productApi.getDetail(params.slug);
                if (response.success) {
                    setProduct(response.data);
                    setCategory(response.productCategory);
                    setSize(response.data.warehouse.sizes[0]);
                    setColor(response.data.warehouse.colors[0]);
                    setMainImage(response.data.image_main);
                }
            } catch (error) {
                console.log('Có lỗi khi lấy sản phẩm', error);
            }
        };
        fecthProduct();
    }, [params]);

    // fecth all evaluates of the current product
    useEffect(() => {
        if (product && product._id) {
            const fecthProductEvaluates = async () => {
                try {
                    const response = await productApi.getProductEvaluate(product._id);
                    if (response.success) {
                        setProductEvaluates(response.data);
                    }
                } catch (error) {
                    console.log('Có lỗi khi lấy đánh giá sản phẩm', error);
                }
            };

            fecthProductEvaluates();
        }
    }, [product]);

    // handle minus quantity product
    const handleMinusQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    // handle add product to cart
    const handleAddProductToCartAndByProduct = () => {
        const index = products.findIndex(
            (item) => item.name == product.name && item.size == size && item.color == color,
        );

        if (index !== -1) {
            dispatch(updateQuantityProductInCart(products[index].id, quantity));
        } else {
            const data = {
                id: uuidv4(),
                name: product.name,
                price: product.price.real_price,
                size: size,
                color: color,
                quantity: quantity,
                image: product.image_main,
            };
            dispatch(addToCart(data));
        }
    };

    // handle buy now product
    const handleBuyNowProduct = () => {
        handleAddProductToCartAndByProduct();
        navigate('/checkout');
    };

    return (
        <Helmet title={product ? product.name : ''}>
            <div className='product'>
                <div className='container container-big'>
                    {/* breadcrumb */}
                    <div className='breadcrumb'>
                        <ul className='breadcrumb_list'>
                            <li className='breadcrumb_item'>
                                <Link to='/'>Trang chủ</Link>
                                <span>/</span>
                            </li>
                            {category && (
                                <li className='breadcrumb_item'>
                                    <Link to={`/collection/${category.slug}`}>
                                        {category && category.name}
                                    </Link>
                                    <span>/</span>
                                </li>
                            )}
                            {product && (
                                <li className='breadcrumb_item'>
                                    <Link to={`/collection/${product.slug}`}>
                                        {product && product.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/* product info */}
                    {product ? (
                        <>
                            <div className='product_main'>
                                <div className='product_image'>
                                    <div className='product_image_sub'>
                                        {product.images.map((image, index) => (
                                            <div className='product_image_sub_item' key={index}>
                                                <img
                                                    src={imgUrl + image}
                                                    alt='product sub image'
                                                    className='product_image_sub_item_img'
                                                    onMouseOver={() => setMainImage(image)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='product_image_main'>
                                        <img src={imgUrl + mainImage} alt='product image main' />
                                    </div>
                                </div>
                                <div className='product_info'>
                                    <h1 className='product_info_name'>{product.name}</h1>
                                    <div className='product_start'></div>
                                    <div className='product_info_price'>
                                        <div className='product_info_price_real'>
                                            {numberWithComas(product.price.real_price)}đ
                                        </div>
                                        {product.price.sale_price != 0 && (
                                            <div className='product_info_price_sale'>
                                                {numberWithComas(product.price.sale_price)}đ
                                            </div>
                                        )}
                                        {product.price.sale_number != 0 && (
                                            <div className='product_info_price_sale-number'>
                                                {product.price.sale_number}%
                                            </div>
                                        )}
                                    </div>
                                    <div className='product_info_color'>
                                        <p>Màu sắc: {color}</p>
                                        <div className='product_info_color_list'>
                                            {product.warehouse.colors.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`product_info_color_item_wap ${
                                                        item == color ? 'active' : ''
                                                    }`}
                                                >
                                                    <div
                                                        className='product_info_color_item'
                                                        style={{
                                                            background:
                                                                colors[getColorIndex(item)].color,
                                                        }}
                                                        onClick={() => setColor(item)}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='product_info_size'>
                                        <div className='product_info_size_header'>
                                            <p>Kích thước: {size}</p>
                                            <div className='product_info_size_suggest'>
                                                Bảng size chuẩn
                                            </div>
                                        </div>
                                        <div className='product_info_size_list'>
                                            {product.warehouse.sizes.map((item, index) => (
                                                <div
                                                    className={`product_info_size_item ${
                                                        item == size ? 'active' : ''
                                                    }`}
                                                    key={index}
                                                    onClick={() => setSize(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='product_info_quantity'>
                                        <p>Chọn số lượng:</p>
                                        <div className='product_info_quantity_wrapper'>
                                            <button
                                                className='product_info_quantity_minus'
                                                onClick={() => handleMinusQuantity()}
                                            >
                                                <FiMinus />
                                            </button>
                                            <div className='product_info_quantity_number'>
                                                {quantity}
                                            </div>
                                            <button
                                                className='product_info_quantity_plus'
                                                onClick={() => setQuantity(quantity + 1)}
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='product_info_btn'>
                                        <button
                                            className='product_info_btn_buy'
                                            onClick={handleBuyNowProduct}
                                        >
                                            Mua ngay
                                        </button>
                                        <button
                                            className='product_info_btn_add-cart'
                                            onClick={handleAddProductToCartAndByProduct}
                                        >
                                            <FaCartPlus />
                                            <span>Thêm Vào Giỏ Hàng</span>
                                        </button>
                                    </div>
                                    <div className='product_info_shop'>
                                        <div className='product_info_shop_item'>
                                            <a href='tel:02499966868'>
                                                <img src={numberPhoneYellow} alt='number phone' />
                                                <div className='product_info_shop_item_box'>
                                                    Gọi đặt mua: 02499966868
                                                </div>
                                            </a>
                                        </div>
                                        <div className='product_info_shop_item'>
                                            <Link to='/he-thong-cua-hang'>
                                                <img src={locationYellow} alt='address phone' />
                                                <div className='product_info_shop_item_box'>
                                                    Tìm shop gần bạn nhất
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <Service />
                                    <div className='product_info_characteristics'>
                                        <h5>Đặc điểm sản phẩm</h5>
                                        <div>{parse(product.description)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='product_detail'>
                                <h3 className='product_detail_title'>CHI TIẾT SẢN PHẨM</h3>
                                <div>{parse(product.detail)}</div>
                            </div>
                        </>
                    ) : (
                        <Loading />
                    )}
                    {/* evaluate */}
                    <div className='product_evaluate'>
                        <h3 className='product_evaluate_title'>
                            ĐÁNH GIÁ {product && product.name}
                        </h3>
                        {productEvaluates == null && <Loading />}
                        {productEvaluates && productEvaluates.length > 0 && (
                            <div>Đánh giá sản phẩm</div>
                        )}
                        {productEvaluates && productEvaluates.length == 0 && (
                            <div className='product_evaluate_empty'>
                                <p>
                                    Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người
                                    đầu tiên đánh giá cho sản phẩm này
                                </p>
                                <button onClick={() => setActiveEvaluate(true)}>
                                    Gửi đánh giá của bạn
                                </button>
                            </div>
                        )}
                        <div className={`product_evaluate_box ${activeEvaluate ? 'active' : ''}`}>
                            <SendEvaluate
                                productName={product ? product.name : ''}
                                onSetActiveEvaluate={setActiveEvaluate}
                            />
                        </div>
                    </div>
                    <div className='product_want-buy'>
                        <h3 className='product_evaluate_title'>CÓ THỂ BẠN MUỐN MUA</h3>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Product;
