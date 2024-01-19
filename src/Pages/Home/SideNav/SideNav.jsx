import React, { useEffect, useState } from 'react';
import { MdHome, MdMarkEmailUnread } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { GrAppsRounded } from "react-icons/gr";

const SideNav = () => {
    const scrollbarStyles = {
        width: '3px',
        height: '4px',
        backgroundColor: '#E5E7EB',
    };

    const thumbStyles = {
        backgroundColor: '#0B64B4',
        borderRadius: '6px',

    };

    function camelToKebab(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
    }


    const [motherCategory, setMotherCategory] = useState([])

    useEffect(() => {
        fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/category/mother').then((res) => res.json()).then((data) => {

            setMotherCategory(data.category)
        })
    }, [setMotherCategory])

    console.log(motherCategory);

    return (
        <div>
            <div className="flex flex-col h-full p-3 bg-gray-900 text-gray-100">
                <div >

                    {/* <div className=" border-2   w-72 border-gray-400 rounded-xl p-4">
                        <p className='mb-2 text-sm'>Search Components</p>

                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-4 text-sm border-transparent rounded-md focus:outline-none bg-gray-800 text-gray-100 " />

                    </div> */}

                    <div className="mb-3 overflow-hidden rounded-xl  p-4 shadow-lg border-[2px] border-white border-opacity-5 bg-gray-800">
                        <div>
                            <h4 className="relative mb-2 flex w-full items-center bg-transparent font-medium text-primary text-white">
                                Search Components
                            </h4>
                            <form className="relative w-full overflow-hidden">
                                <input
                                    id="tagSearchTerm"
                                    type="text"
                                    name="search"
                                    placeholder="Type and Hit Enter"
                                    className="w-full rounded-lg border border-[#d8dfff] bg-gray-900 py-[14px] pl-6 pr-[50px] text-base  outline-none duration-300 placeholder:text-body-color focus:border-primary focus-visible:shadow-none border-white/10 bg-white/5 text-[#A1A4BE] focus:border-white/50"
                                    required=""
                                    defaultValue=""
                                />
                                <button className="absolute right-0 top-0 flex h-full w-[46px] items-center justify-center  text-white">
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        className="fill-current"
                                    >
                                        <path d="M17.4657 16.0312L12.5438 12.0375C13.4438 10.8562 13.9501 9.42187 13.9501 7.90312C13.9501 6.07499 13.247 4.38749 11.9532 3.09374C9.30947 0.449994 5.00635 0.449994 2.33447 3.09374C1.06885 4.35937 0.365723 6.07499 0.365723 7.87499C0.365723 9.70312 1.06885 11.3906 2.3626 12.6844C3.68447 14.0062 5.42822 14.6812 7.17197 14.6812C8.8876 14.6812 10.5751 14.0344 11.897 12.7687L16.8751 16.7906C16.9595 16.875 17.072 16.9031 17.1845 16.9031C17.3251 16.9031 17.4657 16.8469 17.5782 16.7344C17.7188 16.5094 17.6907 16.2 17.4657 16.0312ZM3.0376 12.0094C1.94072 10.9125 1.3501 9.44999 1.3501 7.87499C1.3501 6.29999 1.94072 4.86562 3.06572 3.76874C4.19072 2.64374 5.68135 2.08124 7.17197 2.08124C8.6626 2.08124 10.1532 2.64374 11.2782 3.76874C12.3751 4.86562 12.9938 6.32812 12.9938 7.87499C12.9938 9.42187 12.347 10.9125 11.2501 12.0094C9.0001 14.2594 5.31572 14.2594 3.0376 12.0094Z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

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
                            {motherCategory.map((mother) => (
                                <ul key={mother._id} className="pt-2 pb-4  space-y-1 text-sm  ">

                                    <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                        <GrAppsRounded className='bg-[#0B64B4] p-1 text-2xl rounded-sm ' />  {mother.label}
                                    </div>
                                    {
                                        mother?.children.map((child) => (
                                            <li className="rounded-sm">
                                                <NavLink to={`/components/${camelToKebab(mother.label)}/${camelToKebab(child.name)}`}
                                                    name={child.name}
                                                    aria-label="Testimonials" className={({ isActive }) => {
                                                        return isActive
                                                            ?
                                                            "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 bg-[#0B64B4] text-white  font-semibold" : "group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white  text-gray-200 font-semibold";
                                                    }}>
                                                    {child.name}
                                                    <span className="border-[2px] border-opacity-20 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-900 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white ">5</span>
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;