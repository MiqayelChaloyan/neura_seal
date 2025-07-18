import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Listen for menu state changes from HamburgerMenu component
    useEffect(() => {
        const handleMenuStateChange = (event) => {
            if (event.detail && typeof event.detail.isOpen === 'boolean') {
                setIsMenuOpen(event.detail.isOpen);
            }
        };

        window.addEventListener('menuStateChange', handleMenuStateChange);

        return () => {
            window.removeEventListener('menuStateChange', handleMenuStateChange);
        };
    }, []);

    return (
        <div className="layout-container">
            <HamburgerMenu />
            <Outlet />
            <Footer className={isMenuOpen ? 'menu-open' : ''} />
        </div>
    );
};

export default Layout;