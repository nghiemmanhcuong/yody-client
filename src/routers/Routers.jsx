import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Collection from '../pages/Collection';
import Product from '../pages/Product';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Uniform from '../pages/Uniform';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import OrderSuccess from '../pages/OrderSuccess';
import Account from '../pages/Account';
import Contact from '../pages/Contact';
import CartPage from '../pages/CartPage';
import Page from '../pages/Page';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/thoi-trang/:object' element={<Fashion />} />
            <Route path='/collection/:slug' element={<Collection />} /> 
            <Route path='/collection/:slug/:bts' element={<Collection />} />
            <Route path='/san-pham/:slug' element={<Product />} />
            <Route path='/yody-love/:slug' element={<Blog />} />
            <Route path='/dong-phuc' element={<Uniform />} />
            <Route path='/bai-viet/:slug' element={<BlogDetail />} />
            <Route path='/he-thong-cua-hang' element={<Shop />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/account/:page' element={<Account />} />
            <Route path='/account' element={<Account />} />
            <Route path='/lien-he' element={<Contact />} />
            <Route path='/gio-hang' element={<CartPage />} />
            <Route path='/page/:page' element={<Page />} />
            <Route path='/dat-hang-thanh-cong' element={<OrderSuccess />} />
        </Routes>
    );
};

export default Routers;
