import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { TbZoomInArea } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import featureCover from './feature-cover.svg';

const HomeFeature = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 20 });

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };


    const integrations = [
        {
            title: "Beautifully designed",
            desc: "Bright Component allows you build beautiful and modern websites regardless of your design skills.",
            icon: <FaPen />

        },
        {
            title: "Fully Responsive",
            desc: "Responsive designed components and templates that look great on any screen.",
            icon: <TbZoomInArea />

        }, {
            title: "Customizable",
            desc: "copy and paste into your apps and experience the power of customizable components.",
            icon: <MdDashboardCustomize />

        },
    ]

    return (
        <div>

            <section className="py-16  bg-gray-900">
                <div className="max-w-screen-2xl lg:px-24 mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="text-gray-100 md:text-4xl font-extrabold text-2xl">Turn your ideas into reality</h1>
                        <p className="text-gray-100 mt-2">Bright Component offers all the vital building blocks you need to transform your idea into a great-looking startup.</p>
                    </div>
                    <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


                        {
                            integrations.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="relative z-0 group overflow-hidden h-full border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#22d3ee_0,transparent,transparent_70%)]"

                                    style={{
                                        "--cursor-x": `${cursorPosition.x}px`,
                                        "--cursor-y": `${cursorPosition.y}px`,
                                    }}

                                >
                                    <div
                                        className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90"
                                        style={{
                                            top: `${cursorPosition.y}px`,
                                            left: `${cursorPosition.x}px`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    ></div>
                                    <div className="space-y-3 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
                                        <div className="text-gray-500 w-9 h-9 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-gray-700">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-gray-100 font-semibold">{item.title}</h3>
                                        <p className="text-gray-300">{item.desc}</p>
                                        <div>
                                            <img alt={item.alt} loading="lazy" width="363" height="172" decoding="async" data-nimg="1" className="absolute inset-0 -z-10" style={{ color: 'transparent' }} src={featureCover} />
                                        </div>
                                    </div>
                                    <div className="absolute inset-[1px] -z-10 rounded-xl bg-gray-900"></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className="absolute inset-0 m-auto max-w-xs h-[107px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 10.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) .49%, rgba(79, 70, 229, 0.4) 90.91%)" }}>
                </div> */}
            </section>
        </div>
    )
};

export default HomeFeature;