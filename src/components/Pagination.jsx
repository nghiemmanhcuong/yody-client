import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {HiOutlineArrowLeft, HiOutlineArrowRight} from 'react-icons/hi';

const Pagination = (props) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        for (let i = 1; i <= props.pages; i++) {
            pages.push(i);
        }
        setPages(Array.from(new Set(pages)));
    }, [props.pages]);

    const handelPrev = () => {
        if (props.current <= 0) {
            props.onSetCurrentPage(1);
        } else {
            props.onSetCurrentPage(props.currPage - 1);
        }
    };

    return (
        <nav className='pagination'>
            <ul className='pagination_list'>
                <li
                    className={`pagination_list_item ${props.currPage == 1 ? 'disabled' : ''}`}
                    onClick={() => handelPrev()}
                >
                    <HiOutlineArrowLeft />
                </li>
                {pages.map((page) => (
                    <li
                        className={`pagination_list_item ${page == props.currPage ? 'active' : ''}`}
                        key={page}
                        onClick={() => props.onSetCurrentPage(page)}
                    >
                        {page}
                    </li>
                ))}
                <li
                    className={`pagination_list_item ${
                        props.currPage == props.pages ? 'disabled' : ''
                    }`}
                    onClick={() => props.onSetCurrentPage(props.currPage + 1)}
                >
                    <HiOutlineArrowRight />
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    currPage: PropTypes.number.isRequired,
    onSetCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
