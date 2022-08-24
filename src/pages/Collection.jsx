import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import {FiArrowUp, FiArrowDown} from 'react-icons/fi';
import {AiOutlineCheck} from 'react-icons/ai';

import Loading from '../components/Loading';
import Button from '../components/Button';
import Filters from '../components/Filters';
import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';

import categoryApi from '../api/categoryApi.js';
import materialApi from '../api/materialApi.js';
import productApi from '../api/productApi.js';
import collectionApi from '../api/collectionApi.js';
import {sorts} from '../asset/constains.js';

import collectionFooterImg from '../asset/images/slider-collection-footer.jpeg';

const Collection = () => {
    const params = useParams();
    const [category, setCategory] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [childCategories, setChildCategories] = useState(null);
    const [materials, setMaterials] = useState(null);
    const [products, setProducts] = useState(null);
    const [totalProducts, setTotalProducts] = useState(null);
    const [filterColors, setFilterColors] = useState([]);
    const [filterSizes, setFilterSizes] = useState([]);
    const [filterMaterials, setFilterMaterials] = useState([]);
    const [filterPrices, setFilterPrices] = useState([]);
    const [sortObject, setSortObject] = useState({
        field: 'createdAt',
        criteria: '1',
    });
    const [sortTitle, setSortTitle] = useState('Mặc định');
    const [activeFooter, setActiveFooter] = useState(false);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                if (params.bts) {
                    const response = await collectionApi.getBySlug(params.slug);
                    if (response.success) {
                        setCategory(response.data);
                        setChildCategories(null);
                    }
                } else {
                    const response = await categoryApi.getBySlug(params.slug);
                    if (response.success) {
                        setCategory(response.data);
                        setChildCategories(response.childrens);
                    }
                }
            } catch (error) {
                console.log('Có lỗi khi thực hiện lấy loại sản phẩm', error);
            }
        };

        fetchCategory();
    }, [params]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await materialApi.getAll();
                if (response.success) {
                    setMaterials(response.data);
                }
            } catch (error) {
                console.log('Có lỗi khi thực hiện lấy chất liệu sản phẩm', error);
            }
        };

        fetchMaterials();
    }, [params]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const formData = {
                    filterColors,
                    filterSizes,
                    filterMaterials,
                    filterPrices,
                    field: sortObject.field,
                    criteria: sortObject.criteria,
                };

                if (params.bts) {
                    const response = await productApi.getByCollection(
                        params.slug,
                        40,
                        currPage,
                        formData,
                    );
                    if (response.success) {
                        setProducts(response.data);
                        setTotalProducts(response.totalProducts);
                        setPages(response.pageCount);
                    }
                } else {
                    const response = await productApi.getByCategory(
                        params.slug,
                        40,
                        currPage,
                        formData,
                    );
                    if (response.success) {
                        setProducts(response.data);
                        setTotalProducts(response.totalProducts);
                        setPages(response.pageCount);
                    }
                }
            } catch (error) {
                console.log('Có lỗi khi thực hiện lấy sản phẩm', error);
            }
        };
        fetchProducts();
    }, [
        params,
        filterColors,
        filterSizes,
        filterMaterials,
        filterPrices,
        currPage,
        sortObject.field,
        sortObject.criteria,
    ]);

    // handle filter
    const handleSetFilters = (type, value) => {
        switch (type) {
            case 'color':
                const colorIndex = filterColors.findIndex((color) => color === value);

                if (colorIndex != -1) {
                    const colorArr = filterColors.filter((color) => {
                        return color != value;
                    });
                    setFilterColors(colorArr);
                } else {
                    setFilterColors([...filterColors, value]);
                }
                break;

            case 'size':
                const sizeIndex = filterSizes.findIndex((size) => size === value);

                if (sizeIndex != -1) {
                    const sizeArr = filterSizes.filter((size) => {
                        return size != value;
                    });
                    setFilterSizes(sizeArr);
                } else {
                    setFilterSizes([...filterSizes, value]);
                }
                break;

            case 'material':
                const materialIndex = filterMaterials.findIndex((material) => material === value);

                if (materialIndex != -1) {
                    const materialArr = filterMaterials.filter((material) => {
                        return material != value;
                    });
                    setFilterMaterials(materialArr);
                } else {
                    setFilterMaterials([...filterMaterials, value]);
                }
                break;

            case 'price':
                const priceIndex = filterPrices.findIndex(
                    (price) => price.minValue == value.minValue && price.maxValue == value.maxValue,
                );

                if (priceIndex != -1) {
                    const priceArr = filterPrices.filter(
                        (price) =>
                            price.minValue != value.minValue && price.maxValue != value.maxValue,
                    );
                    setFilterPrices(priceArr);
                } else {
                    setFilterPrices([...filterPrices, value]);
                }
        }
    };

    return (
        <Helmet title={category ? category.name : ''}>
            <main className='collection'>
                <div className='container'>
                    <section className='collection_header'>
                        <div>
                            <Link to='/'>Trang chủ</Link>
                            {params.bts && (
                                <span style={{fontWeight: 600, fontSize: 15}}> / BỘ SƯU TẬP</span>
                            )}
                        </div>
                        <h3>{category && category.name}</h3>
                    </section>
                    {childCategories && childCategories.length > 0 && (
                        <section className='collection_child-category'>
                            {childCategories ? (
                                childCategories.map((category, index) => (
                                    <div className='collection_child-category_item' key={index}>
                                        <Button
                                            text={category.name}
                                            fontSize={15}
                                            link={`/collection/${category.slug}`}
                                        />
                                    </div>
                                ))
                            ) : (
                                <Loading />
                            )}
                        </section>
                    )}
                    <section className='collection_container'>
                        <Filters
                            materials={materials}
                            childCategories={childCategories}
                            onSetFilters={handleSetFilters}
                            filterColors={filterColors}
                            filterSizes={filterSizes}
                            filterMaterials={filterMaterials}
                            filterPrices={filterPrices}
                        />
                        <div className='collection_main'>
                            <div className='collection_main_header'>
                                <p>{totalProducts} sản phẩm</p>
                                <div className='sort'>
                                    <span>Sắp xếp theo</span>
                                    <div className='sort_container'>
                                        <div className='sort_header'>
                                            {sortTitle}
                                            <HiOutlineChevronDown size={20} />
                                        </div>
                                        <div className='sort_body'>
                                            {sorts.map((sort, index) => (
                                                <div
                                                    className={`sort_item ${
                                                        sort.field == sortObject.field &&
                                                        sort.criteria == sortObject.criteria
                                                            ? 'active'
                                                            : ''
                                                    }`}
                                                    key={index}
                                                    onClick={() => {
                                                        setSortObject({
                                                            field: sort.field,
                                                            criteria: sort.criteria,
                                                        });
                                                        setSortTitle(sort.title);
                                                    }}
                                                >
                                                    {sort.title}
                                                    {sort.field == sortObject.field &&
                                                    sort.criteria == sortObject.criteria ? (
                                                        <AiOutlineCheck size={20} />
                                                    ) : null}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='collection_main_product'>
                                {products ? (
                                    <Grid col={5} gap={10}>
                                        {products.map((product, index) => (
                                            <div
                                                className='collection_main_product_item'
                                                key={index}
                                            >
                                                <ProductCard data={product} isSubImage={true} />
                                            </div>
                                        ))}
                                    </Grid>
                                ) : (
                                    <Loading />
                                )}
                                {products && products.length === 0 && (
                                    <div className='alert alert-warning'>
                                        Không có sản phẩm nào trong danh mục này.
                                    </div>
                                )}
                            </div>
                            {products && products.length > 0 && (
                                <Pagination
                                    pages={pages}
                                    currPage={currPage}
                                    onSetCurrentPage={setCurrPage}
                                />
                            )}
                            <div
                                className={`collection_main_footer ${activeFooter ? 'active' : ''}`}
                            >
                                <p>
                                    Mua áo Polo nam, nữ, trẻ em chính hãng, áo polo đồng phục giá
                                    tốt, chất liệu tốt. Cùng với đó là kiểu dáng thể thao, thanh
                                    lịch chắc chắn sẽ làm bạn hài lòng.
                                </p>
                                <p>
                                    Đặc biệt ưu đãi Tháng 6: Freeship mọi đơn hàng có áo polo dù chỉ
                                    1 chiếc!
                                </p>
                                <p>(Không áp dụng cho Polo Thể thao)</p>
                                <img src={collectionFooterImg} alt='collection footer image' />
                                <div
                                    className='collection_main_footer_btn'
                                    onClick={() => setActiveFooter(!activeFooter)}
                                >
                                    {activeFooter ? 'Thu gọn' : 'Xem thêm'}
                                    {activeFooter ? <FiArrowUp /> : <FiArrowDown />}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </Helmet>
    );
};

export default Collection;
