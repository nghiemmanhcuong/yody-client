import {combineReducers} from 'redux';
import cartReducer from './cartReducer.js';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    authReducer: authReducer,
});

export default rootReducer;
