import React from 'react';

const Error = () => {
    return (
        <div>
            <section className="relative h-screen flex justify-center items-center rounded-xl z-10 bg-sky-500 py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto  text-center">
                                <h2 className="mb-10 text-[20px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    We are very sorry
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                                    This Component is not ready right now
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    Stay with us
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-sky-500"
                                >
                                    Go To Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="flex h-full w-1/3">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
            </section>
        </div>
    );
};

export default Error;