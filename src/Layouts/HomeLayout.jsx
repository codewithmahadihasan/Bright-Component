import React, { useEffect, useState } from 'react';
import Header from '../CommonComponets/Footer/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../CommonComponets/Footer/Footer';

const HomeLayout = () => {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={!scrolling ? 'sticky top-0 ' : 'sticky top-0 z-50'}><Header /></div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;