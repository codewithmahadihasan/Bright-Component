import React from 'react';
import Header from '../CommonComponets/Footer/Header/Header';
import SideNav from '../Pages/Home/SideNav/SideNav';
import Footer from '../CommonComponets/Footer/Footer';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Components/DashboardNav';

const DashboardLayout = () => {
    return (
        <div className='bg-gray-900'>
            <Header />
            <div className='flex items-start px-4 bg-gray-900  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-[84px]'>
                <div className='lg:block hidden'>
                    <DashboardNav />
                </div>
                <div className=' pt-4 ml-3 mt-3 w-full  overflow-x-scroll '>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;