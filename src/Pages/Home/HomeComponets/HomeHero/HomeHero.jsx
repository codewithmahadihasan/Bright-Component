import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";

const HomeHero = () => {


    return (
        <div className="bg-gray-900">

            <section className="relative">
                <div className="relative z-10 max-w-screen-2xl mx-auto px-4 py-28 md:px-8 lg:px-24">
                    <div className="space-y-5 max-w-2xl mx-auto text-center">
                        <h2 className="lg:text-5xl  md:text-4xl text-3xl  text-white font-extrabold mx-auto ">
                            Build and ship fast with Tailwind CSS UI components
                        </h2>
                        <p className="max-w-xl font-medium mx-auto text-gray-400">
                            Move faster with beautiful, responsive UI components and website templates with modern design, 100% free and open-source.
                        </p>
                        <div className='flex items-center justify-center gap-x-3 '>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium active:bg-gray-800 duration-150 hover:bg-gray-700 bg-gray-900 rounded-full md:inline-flex">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium  bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                <FaGithub />   Star on GithHub

                            </a>

                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 m-auto max-w-xs h-[157px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 10.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) .49%, rgba(79, 70, 229, 0.4) 90.91%)" }}></div>
            </section>
        </div>
    )
};

export default HomeHero;