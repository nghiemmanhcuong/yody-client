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
import authApi from '../../api/authApi.js';

export const login = (formData) => async (dispatch) => {
    dispatch({type: LOGIN_START});
    try {
        const response = await authApi.login(formData);
        dispatch({type: LOGIN_SUCCESS, data: response.user});
    } catch (error) {
        dispatch({type: LOGIN_FAIL, message: error.response.data.message});
    }
};

export const register = (formData) => async (dispatch) => {
    dispatch({type: REGISTER_START});
    try {
        const response = await authApi.register(formData);
        dispatch({type: REGISTER_SUCCESS, data: response.user});
    } catch (error) {
        console.log(error);
        dispatch({type: REGISTER_FAIL, message: error.response.data.message});
    }
};

export const emptyErrorMessage = () => {
    return {
        type:EMPTY_ERROR_MESSAGE,
        payload:null
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: null,
    };
};

export const likeProduct = (product) => {
    return {
        type: LIKE_PRODUCT,
        payload: product,
    }
}

export const unlikeProduct = (productId) => {
    return {
        type: UNLIKE_PRODUCT,
        payload: productId,
    }
}

export const addAddress = (address) => {
    return {
        type: ADD_ADDRESS,
        payload: address,
    }
}

export const deleteAddress = (addressId) => {
    return {
        type: DELETE_ADDRESS,
        payload: addressId,
    }
}


