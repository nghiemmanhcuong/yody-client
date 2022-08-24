import {
    ADD_CART,
    DELETE_PRODUCT_IN_CART,
    UPDATE_QUANTITY_PRODUCT_IN_CART,
    ADD_QUANTITY_PRODUCT_IN_CART,
    MINUS_QUANTITY_PRODUCT_IN_CART,
    EMPTY_CART
} from '../constants';

export const addToCart = (data) => {
    return {
        type: ADD_CART,
        payload: data,
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        payload: null,
    };
};

export const deleteProductInCart = (id) => {
    return {
        type: DELETE_PRODUCT_IN_CART,
        payload: id,
    };
};

export const updateQuantityProductInCart = (id, quantity) => {
    return {
        type: UPDATE_QUANTITY_PRODUCT_IN_CART,
        payload: {
            id,
            quantity,
        },
    };
};

export const addQuantityProductInCart = (id) => {
    return {
        type: ADD_QUANTITY_PRODUCT_IN_CART,
        payload: id,
    };
};

export const minusQuantityProductInCart = (id) => {
    return {
        type: MINUS_QUANTITY_PRODUCT_IN_CART,
        payload: id,
    };
};
