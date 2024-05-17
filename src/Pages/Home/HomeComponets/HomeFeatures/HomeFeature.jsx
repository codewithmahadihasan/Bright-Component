import React, { useState, useRef } from 'react';
import { FaPen } from 'react-icons/fa';
import { TbZoomInArea } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import featureCover from './feature-cover.svg';

const HomeFeature = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 20 });
    const cardRef = useRef(null);
    const shadowRef = useRef(null);

    const integrations = [
        {
            title: "Beautifully designed",
            desc: "Bright Component allows you to build beautiful and modern websites regardless of your design skills.",
            icon: <FaPen />
        },
        {
            title: "Fully Responsive",
            desc: "Responsive designed components and templates that look great on any screen.",
            icon: <TbZoomInArea />
        },
        {
            title: "Customizable",
            desc: "Copy and paste into your apps and experience the power of customizable components.",
            icon: <MdDashboardCustomize />
        },
    ];

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            const x = e.clientX - left; // x position within the element.
            const y = e.clientY - top; // y position within the element.

            if (shadowRef.current) {
                shadowRef.current.style.top = `${y}px`;
                shadowRef.current.style.left = `${x}px`;
                shadowRef.current.style.transform = "translate(-50%, -50%)";
                cardRef.current.style = `--cursor-x: ${x}px; --cursor-y: ${y}px`;
            }
        }
    };

    return (
        <div>
            <section className="py-16 bg-gray-900">
                <div className="max-w-screen-2xl lg:px-24 mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="text-gray-100 md:text-4xl font-extrabold text-2xl">Turn your ideas into reality</h1>
                        <p className="text-gray-100 mt-2">Bright Component offers all the vital building blocks you need to transform your idea into a great-looking startup.</p>
                    </div>
                    <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {integrations.map((item, idx) => (
                            <li
                                key={idx}
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                className="relative z-0 group  overflow-hidden h-full border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#22d3ee_0,transparent,transparent_70%)] group-hover:opacity-90"
                            >
                                <div className="space-y-3 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
                                    <div className="text-gray-500 w-9 h-9 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-zinc-100 font-semibold">{item.title}</h3>
                                    <p className="text-zinc-300">{item.desc}</p>
                                    <div>
                                        <img
                                            src={featureCover}
                                            alt="Float UI"
                                            className="absolute inset-0 -z-10"
                                        />
                                    </div>
                                </div>
                                <div
                                    ref={shadowRef}
                                    className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150"
                                ></div>
                                <div className="absolute inset-[1px] -z-10 rounded-xl bg-zinc-950"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default HomeFeature;
