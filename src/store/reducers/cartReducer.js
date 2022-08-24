import {
    ADD_CART,
    DELETE_PRODUCT_IN_CART,
    UPDATE_QUANTITY_PRODUCT_IN_CART,
    ADD_QUANTITY_PRODUCT_IN_CART,
    MINUS_QUANTITY_PRODUCT_IN_CART,
    EMPTY_CART
} from '../constants';

const initinalState = {
    products: [],
};

const cartReducer = (state = initinalState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case EMPTY_CART:
            return {
                ...state,
                products: [],
            };

        case DELETE_PRODUCT_IN_CART:
            const newProducts = state.products.filter((product) => product.id !== action.payload);

            return {
                ...state,
                products: newProducts,
            };

        case UPDATE_QUANTITY_PRODUCT_IN_CART:
            const products = state.products.map((product) =>
                product.id == action.payload.id
                    ? {...product, quantity: product.quantity + action.payload.quantity}
                    : product,
            );
            return {
                ...state,
                products: products,
            };

        case ADD_QUANTITY_PRODUCT_IN_CART:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id == action.payload
                        ? {...product, quantity: product.quantity + 1}
                        : product,
                ),
            };

        case MINUS_QUANTITY_PRODUCT_IN_CART:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id == action.payload
                        ? {...product, quantity: product.quantity == 1 ? 1 : product.quantity - 1}
                        : product,
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;
