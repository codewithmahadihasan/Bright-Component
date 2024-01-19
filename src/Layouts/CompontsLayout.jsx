import React, { useEffect, useState } from 'react';
import Header from '../CommonComponets/Footer/Header/Header';
import { Outlet } from 'react-router-dom';
import SideNav from '../Pages/Home/SideNav/SideNav';
import Footer from '../CommonComponets/Footer/Footer';

const CompontsLayout = () => {
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
        <div className='bg-gray-900'>
            <div className={!scrolling ? 'sticky top-0 ' : 'sticky top-0 z-50'}><Header /></div>
            <div className='flex px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-[84px]'>
                <div className='lg:block hidden'>
                    <SideNav />
                </div>
                <div className=' ml-3 mt-3 w-full  overflow-x-scroll '>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CompontsLayout;