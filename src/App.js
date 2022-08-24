import {useLocation} from 'react-router-dom';

import Routers from './routers/Routers';
import DocumentMeta from 'react-document-meta';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const location = useLocation();

    return (
        <DocumentMeta>
            <div className='app'>
                {location.pathname == '/' && <Topbar />}
                {location.pathname !== '/checkout' && <Header />}
                <Routers />
                {location.pathname !== '/checkout' && <Footer />}
            </div>
        </DocumentMeta>
    );
};

export default App;