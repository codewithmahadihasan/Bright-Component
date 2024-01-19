import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrAppsRounded } from "react-icons/gr";
import { AuthContext } from '../Provider/UserContext';




const DashboardNav = () => {

    const scrollbarStyles = {
        width: '3px',
        height: '4px',
        backgroundColor: '#E5E7EB',
    };

    const thumbStyles = {
        backgroundColor: '#0B64B4',
        borderRadius: '6px',

    };

    const { logOut } = useContext(AuthContext)


    const [motherCategory, setMotherCategory] = useState([])

    useEffect(() => {
        fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/category/mother-category/get').then((res) => res.json()).then((data) => {

            setMotherCategory(data.category)
        })
    }, [motherCategory])



    return (
        <div>
            <div className="flex flex-col h-full p-3 bg-gray-900 text-gray-100">
                <div >


                    <div className="flex-1 w-72  mt-4 shadow-lg border-[2px] border-white border-opacity-5 rounded-xl overflow-hidden bg-gray-800" >

                        <div className='overflow-y-scroll  h-screen p-4'>
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: ${scrollbarStyles.width};
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${thumbStyles.backgroundColor};
            border-radius: ${thumbStyles.borderRadius};
          }
          ::-webkit-scrollbar-track {
            background-color: ${scrollbarStyles.backgroundColor};
          }
        `}
                            </style>
                            <ul className="pt-2 pb-4  space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 text-2xl rounded-sm ' />   Application UI
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/dashboard/add-category'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Add Category
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/dashboard/add-component'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Add Component
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Blogs
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Cards
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Contacts
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Cookies
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Footers
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Modals
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Navbars
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Paginations
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className={({ isActive }) => {
                                        return isActive
                                            ?
                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                    }}>
                                        Auth/Sign In/Up
                                        <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <button onClick={() => logOut()} name="Testimonials" aria-label="Testimonials" className=
                                        "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-red-400 text-white  font-semibold w-full">
                                        Log Out

                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;