import {useState, useEffect} from 'react';
import {MdPlace} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {IoIosMail} from 'react-icons/io';
import {BsSearch} from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Grid from './Grid';

import logo from '../asset/images/logo.webp';
import freeIcon from '../asset/images/free_icon.webp';
import famaleImage from '../asset/images/famale_image.webp';
import maleImage from '../asset/images/male_image.jpeg';
import childrenImage from '../asset/images/children_image.jpeg';
import blogCategoryImage from '../asset/images/blog_dropdown_img.webp';

import infoApi from '../api/infoApi';
import categoryApi from '../api/categoryApi';
import collectionApi from '../api/collectionApi';
import blogApi from '../api/blogApi';
import Cart from './Cart';

import {siteBarAcountList} from '../asset/constains.js';
import {logout} from '../store/actions/authActions.js';

const imgUrl = process.env.REACT_APP_IMG_URL;

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.cartReducer);
    const {user} = useSelector((state) => state.authReducer);

    const [yodyInfo, setYodyInfo] = useState(null);
    const [navCategories, setNavCategories] = useState(null);
    const [blogCategories, setBlogCategories] = useState(null);
    const [famaleCategories, setFamaleCategories] = useState(null);
    const [maleCategories, setMaleCategories] = useState(null);
    const [childrenCategories, setChildrenCategories] = useState(null);
    const [collections, setCollections] = useState(null);

    useEffect(() => {
        const getYodyInfo = async () => {
            try {
                const response = await infoApi.getYodyInfos();
                if (response.success) {
                    setYodyInfo(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy thông tin yody', error);
            }
        };
        getYodyInfo();
    }, []);

    useEffect(() => {
        const getNavCategories = async () => {
            try {
                const response = await categoryApi.getNavCategories();
                if (response.success) {
                    setNavCategories(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy loại sản phẩm trên thanh điều hướng', error);
            }
        };
        getNavCategories();
    }, []);

    useEffect(() => {
        const getFamaleCategories = async () => {
            try {
                const response = await categoryApi.getCategories('famale');
                if (response.success) {
                    setFamaleCategories(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy loại sản phẩm của nữ', error);
            }
        };
        getFamaleCategories();
    }, []);

    useEffect(() => {
        const getMaleCategories = async () => {
            try {
                const response = await categoryApi.getCategories('male');
                if (response.success) {
                    setMaleCategories(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy loại sản phẩm của nam', error);
            }
        };
        getMaleCategories();
    }, []);

    useEffect(() => {
        const getChildrenCategoriesCategories = async () => {
            try {
                const response = await categoryApi.getCategories('children');
                if (response.success) {
                    setChildrenCategories(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy loại sản phẩm của trẻ em', error);
            }
        };
        getChildrenCategoriesCategories();
    }, []);

    useEffect(() => {
        const getCollections = async () => {
            try {
                const response = await collectionApi.getAll();
                if (response.success) {
                    setCollections(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy bộ sưu tập', error);
            }
        };
        getCollections();
    }, []);

    useEffect(() => {
        const getBlogCategories = async () => {
            try {
                const response = await blogApi.getBlogCategories();
                if (response.success) {
                    setBlogCategories(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi khi lấy loại bài viết', error);
            }
        };
        getBlogCategories();
    }, []);

    // handle logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className='header'>
            <div className='container'>
                <div className='header_wrapper'>
                    <div className='header_logo'>
                        <Link to=''>
                            <img className='header_logo_image' src={`${logo}`} alt='logo yody' />
                        </Link>
                    </div>
                    <div className='header_main'>
                        <div className='header_main_top'>
                            <div className='header_main_top_left'>
                                <Link to='/he-thong-cua-hang'>
                                    <MdPlace size={18} />
                                    Tìm
                                    <b>180+</b>
                                    Cửa hàng
                                </Link>
                                <a href={`tel:${yodyInfo && yodyInfo.hotline}`}>
                                    <FaPhoneAlt />
                                    <b>{yodyInfo && yodyInfo.hotline}</b>
                                    <img src={`${freeIcon}`} alt='free icon' />
                                </a>
                                <a href={`mailto:${yodyInfo && yodyInfo.mailCustomerCare}`}>
                                    <IoIosMail size={18} />
                                    <span>{yodyInfo && yodyInfo.mailCustomerCare}</span>
                                </a>
                            </div>
                            <div className='header_main_top_right'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    className='mdl-js'
                                >
                                    <g clipPath='url(#clip0_3045_4657)'>
                                        <path
                                            d='M18.5389 7.69766H13.248L15.6295 0H8.34382L5.46143 13.7916H8.99008L8.092 24L18.5389 7.69766Z'
                                            fill='#FCAF17'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_3045_4657'>
                                            <rect width='24' height='24' fill='white' />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <b>
                                    <Link to=''>Miễn phí đổi trả 15 ngày</Link>
                                </b>
                            </div>
                        </div>
                        <div className='header_main_bot'>
                            <nav className='header_navigation'>
                                <ul className='header_navigation_list'>
                                    {navCategories &&
                                        navCategories.map((nav, index) => (
                                            <li className='header_navigation_list_item' key={index}>
                                                <Link to={'/collection/' + nav.slug}>
                                                    {nav.name}
                                                </Link>
                                            </li>
                                        ))}
                                    <li className='header_navigation_list_item'>
                                        <Link to='thoi-trang/nu'>NỮ</Link>
                                        <div className='dropdown'>
                                            <div className='dropdown_list'>
                                                <Grid col={5}>
                                                    {famaleCategories &&
                                                        famaleCategories.map((category, index) => (
                                                            <div
                                                                className='dropdown_list_item'
                                                                key={index}
                                                            >
                                                                <Link
                                                                    to={
                                                                        '/collection/' +
                                                                        category.slug
                                                                    }
                                                                >
                                                                    {category.name}
                                                                </Link>
                                                                {category.isParent && (
                                                                    <ChildCategories
                                                                        childrenCategories={
                                                                            category.childCategorires
                                                                        }
                                                                        link='collection'
                                                                    />
                                                                )}
                                                            </div>
                                                        ))}
                                                </Grid>
                                            </div>
                                            <div className='dropdown_image'>
                                                <img src={`${famaleImage}`} alt='' />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='header_navigation_list_item'>
                                        <Link to='thoi-trang/nam'>NAM</Link>
                                        <div className='dropdown'>
                                            <div className='dropdown_list'>
                                                <Grid col={5}>
                                                    {maleCategories &&
                                                        maleCategories.map((category, index) => (
                                                            <div
                                                                className='dropdown_list_item'
                                                                key={index}
                                                            >
                                                                <Link
                                                                    to={
                                                                        '/collection/' +
                                                                        category.slug
                                                                    }
                                                                >
                                                                    {category.name}
                                                                </Link>
                                                                {category.isParent && (
                                                                    <ChildCategories
                                                                        childrenCategories={
                                                                            category.childCategorires
                                                                        }
                                                                        link='collection'
                                                                    />
                                                                )}
                                                            </div>
                                                        ))}
                                                </Grid>
                                            </div>
                                            <div className='dropdown_image'>
                                                <img src={`${maleImage}`} alt='' />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='header_navigation_list_item'>
                                        <Link to='thoi-trang/tre-em'>TRẺ EM</Link>
                                        <div className='dropdown'>
                                            <div className='dropdown_list'>
                                                <Grid col={5}>
                                                    {childrenCategories &&
                                                        childrenCategories.map(
                                                            (category, index) => (
                                                                <div
                                                                    className='dropdown_list_item'
                                                                    key={index}
                                                                >
                                                                    <Link
                                                                        to={
                                                                            '/collection/' +
                                                                            category.slug
                                                                        }
                                                                    >
                                                                        {category.name}
                                                                    </Link>
                                                                    {category.isParent && (
                                                                        <ChildCategories
                                                                            childrenCategories={
                                                                                category.childCategorires
                                                                            }
                                                                            link='collection'
                                                                        />
                                                                    )}
                                                                </div>
                                                            ),
                                                        )}
                                                </Grid>
                                            </div>
                                            <div className='dropdown_image'>
                                                <img src={`${childrenImage}`} alt='' />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='header_navigation_list_item'>
                                        <Link to=''>BỘ SƯU TẬP</Link>
                                        <div className='dropdown dropdown_collection'>
                                            {collections &&
                                                collections.map((collection, index) => (
                                                    <div
                                                        className='dropdown_collection_item'
                                                        key={index}
                                                    >
                                                        <Link
                                                            to={`/collection/${collection.slug}/bst`}
                                                        >
                                                            <h5>{collection.name}</h5>
                                                            <img
                                                                src={imgUrl + collection.image}
                                                                alt='collection image'
                                                            />
                                                        </Link>
                                                    </div>
                                                ))}
                                        </div>
                                    </li>
                                    <li className='header_navigation_list_item'>
                                        <Link to=''>YODY LOVE</Link>
                                        <div className='dropdown'>
                                            <div className='dropdown_list'>
                                                {blogCategories && (
                                                    <Grid col={5}>
                                                        {blogCategories.map((category, index) => (
                                                            <div
                                                                className='dropdown_list_item'
                                                                key={index}
                                                            >
                                                                <Link
                                                                    to={`/yody-love/${category.slug}`}
                                                                >
                                                                    {category.name}
                                                                </Link>
                                                                {category.childCategorires.length >
                                                                    0 && (
                                                                    <ChildCategories
                                                                        childrenCategories={
                                                                            category.childCategorires
                                                                        }
                                                                        link='yody-love'
                                                                    />
                                                                )}
                                                            </div>
                                                        ))}
                                                    </Grid>
                                                )}
                                            </div>
                                            <div className='dropdown_image'>
                                                <img src={`${blogCategoryImage}`} alt='' />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='header_navigation_list_item'>
                                        <Link to='/dong-phuc'>ĐỒNG PHỤC</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='header_main_bot_right'>
                                <div className='header_search'>
                                    <input
                                        type='text'
                                        placeholder='Tìm sản phẩm'
                                        role='input search product'
                                    />
                                    <button type='button' role='button-search'>
                                        <BsSearch size={22} />
                                    </button>
                                </div>
                                <div className='header_tool'>
                                    <div className='header_tool_item'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='28'
                                            height='28'
                                            viewBox='0 0 28 28'
                                            fill='none'
                                            className='mdl-js'
                                        >
                                            <path
                                                d='M14.0001 1.64722C10.4081 1.64722 7.48584 4.56951 7.48584 8.16146C7.48584 11.7534 10.4081 14.6757 14.0001 14.6757C17.592 14.6757 20.5143 11.7534 20.5143 8.16146C20.5143 4.56951 17.592 1.64722 14.0001 1.64722ZM14.0001 13.2281C11.2063 13.2281 8.93345 10.9552 8.93345 8.16146C8.93345 5.36772 11.2063 3.09483 14.0001 3.09483C16.7938 3.09483 19.0667 5.36772 19.0667 8.16146C19.0667 10.9552 16.7938 13.2281 14.0001 13.2281Z'
                                                fill='black'
                                                stroke='black'
                                                strokeWidth='0.2'
                                            />
                                            <path
                                                d='M22.1051 18.9314C20.3217 17.1206 17.9574 16.1233 15.4478 16.1233H12.5525C10.043 16.1233 7.67862 17.1206 5.89517 18.9314C4.12044 20.7334 3.14307 23.112 3.14307 25.6293C3.14307 26.029 3.46714 26.3531 3.86687 26.3531H24.1334C24.5331 26.3531 24.8572 26.029 24.8572 25.6293C24.8572 23.112 23.8798 20.7334 22.1051 18.9314ZM4.62252 24.9055C4.98515 20.7997 8.40325 17.5709 12.5525 17.5709H15.4478C19.597 17.5709 23.0151 20.7997 23.3778 24.9055H4.62252Z'
                                                fill='black'
                                                stroke='black'
                                                strokeWidth='0.2'
                                            />
                                        </svg>
                                        <div
                                            className={`user-box dropdown-item ${
                                                user ? 'is-user' : ''
                                            }`}
                                        >
                                            {!user ? (
                                                <>
                                                    <div className='user-box_item'>
                                                        <Link to='/account/login'>Đăng nhập</Link>
                                                    </div>
                                                    <div className='user-box_item'>
                                                        <Link to='/account/register'>Đăng ký</Link>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {siteBarAcountList.map((item, index) => (
                                                        <div className='user-box_item' key={index}>
                                                            <Link to={`/account/${item.link}`}>
                                                                {item.block}
                                                            </Link>
                                                        </div>
                                                    ))}
                                                    <div
                                                        className='user-box_item'
                                                        style={{
                                                            borderTop: '1px solid #dde1ef',
                                                            paddingTop: '5px',
                                                        }}
                                                        onClick={handleLogout}
                                                    >
                                                        <p>Đăng xuất</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='header_tool_item'>
                                        <Link to='/account/my-like-products'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='28'
                                                height='28'
                                                viewBox='0 0 28 28'
                                                fill='none'
                                                className='mdl-js'
                                            >
                                                <path
                                                    d='M3.5 14.0004C0.875 10.5004 1.75 5.25039 6.125 3.50039C10.5 1.75039 13.125 5.25039 14 7.00039C14.875 5.25039 18.375 1.75039 22.75 3.50039C27.125 5.25039 27.125 10.5004 24.5 14.0004C21.875 17.5004 14 24.5004 14 24.5004C14 24.5004 6.125 17.5004 3.5 14.0004Z'
                                                    stroke='black'
                                                    strokeWidth='1.75'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className='header_tool_item'>
                                        <Link to='/gio-hang'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='28'
                                                height='28'
                                                viewBox='0 0 28 28'
                                                fill='none'
                                                className='mdl-js'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M8.89805 11.5713C8.46585 11.5713 8.11548 11.2565 8.11548 10.8683L8.11548 6.36911C8.11548 3.49602 10.7082 1.16693 13.9065 1.16693C17.1048 1.16693 19.6976 3.49602 19.6976 6.36911L19.6976 10.8683C19.6976 11.2565 19.3472 11.5713 18.915 11.5713C18.4828 11.5713 18.1324 11.2565 18.1324 10.8683L18.1324 6.36911C18.1324 4.27253 16.2404 2.57292 13.9065 2.57292C11.5726 2.57292 9.68063 4.27253 9.68063 6.36911L9.68063 10.8683C9.68063 11.2565 9.33026 11.5713 8.89805 11.5713Z'
                                                    fill='#222222'
                                                />
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M8.01791 7.81299H19.7943C20.9248 7.81296 21.8548 7.81294 22.5957 7.90897C23.3731 8.00972 24.0554 8.22789 24.6209 8.74717C25.1863 9.26645 25.4608 9.92705 25.6259 10.6919C25.7833 11.4209 25.8605 12.346 25.9544 13.4705L26.6574 21.8909C26.7105 22.5263 26.7574 23.0877 26.7326 23.5422C26.7057 24.034 26.5905 24.5388 26.2028 24.9593C25.8152 25.3798 25.3208 25.5364 24.8319 25.604C24.3802 25.6664 23.8158 25.6664 23.177 25.6663H4.6352C3.99643 25.6664 3.432 25.6664 2.98029 25.604C2.49142 25.5364 1.997 25.3798 1.60936 24.9593C1.22172 24.5388 1.10647 24.034 1.07959 23.5422C1.05475 23.0877 1.10167 22.5263 1.15477 21.8909L1.85779 13.4705C1.95165 12.346 2.02886 11.4209 2.18627 10.6919C2.35142 9.92705 2.6259 9.26645 3.19132 8.74717C3.75673 8.22789 4.43908 8.00972 5.21643 7.90897C5.95736 7.81294 6.88737 7.81296 8.01791 7.81299ZM5.43373 9.57922C4.83819 9.65641 4.54347 9.79413 4.3339 9.9866C4.12433 10.1791 3.96236 10.4608 3.83584 11.0467C3.70422 11.6563 3.63447 12.4716 3.53466 13.6672L2.841 21.9755C2.78193 22.683 2.74682 23.1265 2.76453 23.4504C2.78052 23.7432 2.83506 23.8017 2.85011 23.8178L2.85112 23.8189L2.85212 23.82C2.86699 23.8363 2.92087 23.8954 3.2118 23.9356C3.53379 23.9801 3.97942 23.982 4.69077 23.982H23.1214C23.8328 23.982 24.2784 23.9801 24.6004 23.9356C24.8913 23.8954 24.9452 23.8363 24.9601 23.82L24.9611 23.8189L24.9621 23.8178C24.9771 23.8017 25.0317 23.7432 25.0477 23.4504C25.0654 23.1265 25.0303 22.683 24.9712 21.9755L24.2775 13.6672C24.1777 12.4716 24.108 11.6563 23.9763 11.0467C23.8498 10.4608 23.6878 10.1791 23.4783 9.9866C23.2687 9.79413 22.974 9.65641 22.3784 9.57922C21.7589 9.49893 20.9391 9.49727 19.7372 9.49727H8.07501C6.8731 9.49727 6.05325 9.49893 5.43373 9.57922Z'
                                                    fill='#222222'
                                                />
                                            </svg>
                                        </Link>
                                        <Cart />
                                        {products.length > 0 && (
                                            <div className='cart_quantity_product'>
                                                {products.length}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChildCategories = (props) => {
    return (
        <div className='dropdown_child'>
            <div className='dropdown_child_list'>
                {props.childrenCategories &&
                    props.childrenCategories.length > 0 &&
                    props.childrenCategories.map((category, index) => (
                        <div className='dropdown_child_list_item' key={index}>
                            <Link to={'/' + props.link + '/' + category.slug}>{category.name}</Link>
                            {category.attributes && category.attributes.hot && (
                                <span style={{color: 'orange'}}>HOT</span>
                            )}
                            {category.attributes && category.attributes.new && (
                                <span style={{color: 'blue'}}>NEW</span>
                            )}
                            {category.attributes && category.attributes.sale && (
                                <span style={{color: 'red'}}>SALE</span>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Header;
