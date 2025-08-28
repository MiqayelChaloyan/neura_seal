import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';
import { useLanguageSync } from '../hooks/useLanguageSync';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Use the language sync hook
    const { forceSync } = useLanguageSync();

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

    // Force sync on mount to resolve any initial mismatches
    useEffect(() => {
        const timeoutId = setTimeout(forceSync, 200);
        return () => clearTimeout(timeoutId);
    }, [forceSync]);

    return (
        <div className="layout-container">
            <HamburgerMenu />
            <Outlet />
            <Footer className={isMenuOpen ? 'menu-open' : ''} />
        </div>
    );
};

export default Layout;