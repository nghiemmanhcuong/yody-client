import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

import './scss/index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import "swiper/css/pagination";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
