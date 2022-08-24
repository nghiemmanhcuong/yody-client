import PropTypes from 'prop-types';
import {HiOutlineChevronDown} from 'react-icons/hi';
import {BsCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom';

import Loading from '../components/Loading';

import {colors, sizes, prices} from '../asset/constains.js';
import numberWithComas from '../utils/numberWithComas.js';

const Filters = (props) => {
    const filterHeaders = Array.from(document.getElementsByClassName('filter_header'));
    filterHeaders.forEach((item) => {
        item.onclick = () => {
            item.nextSibling.classList.toggle('active');
        };
    });

    const checkFilter = (type, value) => {
        switch (type) {
            case 'color':
                const checkColor = props.filterColors.findIndex((e) => e == value);
                if (checkColor == -1) {
                    return false;
                }
                return true;
            case 'size':
                const checkSize = props.filterSizes.findIndex((e) => e == value);
                if (checkSize == -1) {
                    return false;
                }
                return true;

            case 'material':
                const checkMaterial = props.filterMaterials.findIndex((e) => e == value);
                if (checkMaterial == -1) {
                    return false;
                }
                return true;

            case 'price':
                const checkPrice = props.filterPrices.findIndex(
                    (e) => e.minValue == value.minValue && e.maxValue == value.maxValue,
                );
                if (checkPrice == -1) {
                    return false;
                }
                return true;
        }
    };

    return (
        <div className='filter'>
            {props.childCategories && (
                <div className='filter_item'>
                    <div className='filter_header'>
                        <span>Loại sản phẩm</span>
                        <HiOutlineChevronDown size={22} />
                    </div>
                    <div className='filter_body filter_body-category'>
                        {props.childCategories.length > 0 ? (
                            props.childCategories.map((category, index) => (
                                <div className='filter_body_item' key={index}>
                                    <Link to={`/collection/${category.slug}`}>{category.name}</Link>
                                </div>
                            ))
                        ) : (
                            <div>Không có dữ liệu cho bạn!</div>
                        )}
                    </div>
                </div>
            )}
            <div className='filter_item'>
                <div className='filter_header'>
                    <span>Màu sắc</span>
                    <HiOutlineChevronDown size={22} />
                </div>
                <div className='filter_body active filter_body-color'>
                    {colors.map((color, index) => (
                        <div
                            className={`filter_body_item filter_body-color_item ${
                                checkFilter('color', color.value) ? 'active' : ''
                            }`}
                            key={index}
                            onClick={() => props.onSetFilters('color', color.value)}
                        >
                            <div
                                className='filter_body-color_box'
                                style={{background: color.color}}
                            ></div>
                            {color.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='filter_item'>
                <div className='filter_header'>
                    <span>Kích thước</span>
                    <HiOutlineChevronDown size={22} />
                </div>
                <div className='filter_body active filter_body-size'>
                    {sizes.map((size, index) => (
                        <div
                            className={`filter_body_item ${
                                checkFilter('size', size) ? 'active' : ''
                            }`}
                            key={index}
                            onClick={() => props.onSetFilters('size', size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </div>
            {props.materials ? (
                <div className='filter_item'>
                    <div className='filter_header'>
                        <span>Chất liệu</span>
                        <HiOutlineChevronDown size={22} />
                    </div>
                    <div className='filter_body filter_body-material'>
                        {props.materials.map((material, index) => (
                            <div
                                className={`filter_body_item ${
                                    checkFilter('material', material._id) ? 'active' : ''
                                }`}
                                key={index}
                                onClick={() => props.onSetFilters('material', material._id)}
                            >
                                {material.name}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
            <div className='filter_item'>
                <div className='filter_header'>
                    <span>Khoảng giá (VNĐ)</span>
                    <HiOutlineChevronDown size={22} />
                </div>
                <div className='filter_body filter_body-price'>
                    {prices.map((price, index) => (
                        <div
                            className='filter_price_item'
                            key={index}
                            onClick={() => props.onSetFilters('price', price)}
                        >
                            <div
                                className={`filter_price_item_box ${
                                    checkFilter('price', price) ? 'active' : ''
                                }`}
                            >{checkFilter('price', price) && <BsCheck />}</div>
                            <span>
                                {price.minValue == 0
                                    ? 'Nhỏ hơn ' + numberWithComas(price.maxValue) + 'đ'
                                    : index == prices.length - 1
                                    ? 'Lớn hơn ' + numberWithComas(price.minValue) + 'đ'
                                    : 'Từ ' +
                                      numberWithComas(price.minValue) +
                                      ' - ' +
                                      numberWithComas(price.maxValue) +
                                      'đ'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Filters.propTypes = {
    material: PropTypes.array,
    childCategories: PropTypes.array,
    onSetFilters: PropTypes.func.isRequired,
};

export default Filters;
