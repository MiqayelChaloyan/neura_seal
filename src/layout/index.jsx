import { Outlet } from 'react-router-dom';

import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
        <HamburgerMenu />
        <Outlet />
        <Footer />
      </div>
    );
};

export default Layout;