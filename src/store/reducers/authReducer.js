import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LIKE_PRODUCT,
    UNLIKE_PRODUCT,
    ADD_ADDRESS,
    DELETE_ADDRESS,
    EMPTY_ERROR_MESSAGE
} from '../constants';

const initialState = {
    user: null,
    userAddresses: [],
    likeProducts: [],
    loading: false,
    errorMessage: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // auth
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                errorMessage: null,
                loading: false,
                user: action.data,
                userAddresses: action.data.addresses,
                likeProducts: action.data.favorite_products,
            };

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.message,
            };

        case REGISTER_START:
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                errorMessage: null,
                loading: false,
                user: action.data,
                userAddresses: action.data.addresses,
                likeProducts: action.data.favorite_products,
            };

        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.message,
            };

        case LOGOUT:
            return {
                ...state,
                user: null,
                errorMessage: null,
                loading: false,
                userAddresses: [],
                likeProducts: [],
            };

        case EMPTY_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: null,
            }

        // user
        case LIKE_PRODUCT:
            return {
                ...state,
                likeProducts: [...state.likeProducts, action.payload],
            };

        case UNLIKE_PRODUCT:
            return {
                ...state,
                likeProducts: state.likeProducts.filter((product) => product._id != action.payload),
            };

        case ADD_ADDRESS:
            return {
                ...state,
                userAddresses: [...state.userAddresses, action.payload],
            };

        case DELETE_ADDRESS:
            return {
                ...state,
                userAddresses: state.userAddresses.filter(
                    (address) => address.id != action.payload,
                ),
            };

        default:
            return state;
    }
};

export default authReducer;
