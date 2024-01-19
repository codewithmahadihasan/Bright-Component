import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const components = {
    1: {
        name: 'SuccessAlert3',
        component: () => (
            <div className="py-10 bg-white bg-dark">
                <div className="container">
                    <div className="rounded-md bg-[#C4F9E2] p-4">
                        <p className="flex items-center text-sm font-medium text-[#004434]">
                            <span className="pr-3">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={10} cy={10} r={10} fill="#00B078" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Your item has been added successfully
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    2: {
        name: 'SuccessAlert2',
        component: () => (
            <div className="py-10 bg-white bg-dark">
                <div className="container">
                    <div className="border-green bg-green-light-6 flex w-full rounded-lg border-l-[6px] px-7 py-8 md:p-9">
                        <div className="bg-green mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_961_15637)">
                                    <path
                                        d="M8.99998 0.506248C4.3031 0.506248 0.506226 4.30312 0.506226 9C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9C17.5219 4.30312 13.6969 0.506248 8.99998 0.506248ZM8.99998 16.2562C5.00623 16.2562 1.77185 12.9937 1.77185 9C1.77185 5.00625 5.00623 1.77187 8.99998 1.77187C12.9937 1.77187 16.2562 5.03437 16.2562 9.02812C16.2562 12.9937 12.9937 16.2562 8.99998 16.2562Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.4187 6.38437L8.07183 9.64687L6.55308 8.15625C6.29996 7.90312 5.90621 7.93125 5.65308 8.15625C5.39996 8.40937 5.42808 8.80312 5.65308 9.05625L7.45308 10.8C7.62183 10.9687 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9687 8.69058 10.8L12.3187 7.3125C12.5718 7.05937 12.5718 6.66562 12.3187 6.4125C12.0656 6.15937 11.6718 6.15937 11.4187 6.38437Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_961_15637">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-full">
                            <h5 className="mb-3 text-lg font-semibold text-[#004434]">
                                Message Sent Successfully
                            </h5>
                            <p className="text-base leading-relaxed text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
};

const AllComponents = () => {
    //provide a json for a component , where show component and click to show code


    const [showCodeMap, setShowCodeMap] = useState({});

    const toggleCode = (id) => {
        setShowCodeMap((prevShowCodeMap) => ({
            ...prevShowCodeMap,
            [id]: !prevShowCodeMap[id],
        }));
    };

    return (
        <div className='bg-gray-900'>
            {/* <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
                {components.map((component) => (
                    <div key={component.id} >
                        <h2 style={{ fontSize: '1.2em', color: '#0070c9' }}>{component.name}</h2>
                        <p style={{ fontSize: '0.9em', marginBottom: '10px' }}>{component.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <button
                                style={{
                                    backgroundColor: '#0070c9',
                                    color: 'white',
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggleCode(component.id)}
                            >
                                {showCodeMap[component.id] ? 'Hide Code' : 'Show Code'}
                            </button>
                        </div>
                        {showCodeMap[component.id] &&
                            <div className=" mt-8 overflow-hidden">
                                <div className=" h-11 rounded-t-lg bg-gray-400 flex justify-start items-center space-x-1.5 px-3 w-80%">
                                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400"></span>

                                </div>

                                <div className="bg-gray-700 border-t-0 w-full max-h-[500px] overflow-auto">
                                    <pre className="text-white p-4">
                                        <code>{component.code}</code>
                                    </pre>
                                </div>

                            </div>}

                        <div className='rounded-xl '>{!showCodeMap[component.id] && component.example}</div>
                        <br />
                    </div>
                ))}
            </div> */}
            {/* <div className="w-1/3 ">
                <div className="block">
                    <div className="mb-10 cursor-pointer overflow-hidden rounded-lg border-[.5px] border-[#D8DFFF] bg-white transition-all duration-300 hover:shadow-features border-white/[.15] bg-tg-dark-gray shadow-features-dark hover:bg-tg-dark-gray/90 hover:shadow-features2">
                        <div className="overflow-hidden border-b-[.5px] border-[#d8dfff] border-white/[.15]">
                            <div className="relative h-[250px] w-full">
                                <span
                                    style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        overflow: "hidden",
                                        width: "initial",
                                        height: "initial",
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 0,
                                        padding: 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }}
                                >
                                    <img
                                        alt="preview"
                                        src="https://i.ibb.co/cKWL4vc/Web-Application-and-a-Website.png"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="h-auto w-full object-cover object-center"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            boxSizing: "border-box",
                                            padding: 0,
                                            border: "none",
                                            margin: "auto",
                                            display: "block",
                                            width: 0,
                                            height: 0,
                                            minWidth: "100%",
                                            maxWidth: "100%",
                                            minHeight: "100%",
                                            maxHeight: "100%"
                                        }}
                                        sizes="100vw"
                                        srcSet="https://i.ibb.co/cKWL4vc/Web-Application-and-a-Website.png"
                                    />

                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-6">
                            <span className="pr-4 text-lg font-semibold  duration-300 hover:text-primary text-white hover:text-primary">
                                Table Grid Style 1
                            </span>
                            <div className="flex items-center justify-center rounded bg-yellow-500 py-2 px-4 font-medium uppercase text-white">
                                <svg
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.3125 4.46743L11.3128 4.46722L11.3038 4.45685L8.41675 1.11047C8.41666 1.11035 8.41656 1.11024 8.41646 1.11013C8.24637 0.911896 7.9937 0.8 7.7399 0.8C7.48632 0.8 7.23387 0.911703 7.06378 1.10961L4.16018 4.42801C4.13162 4.45492 4.10843 4.45815 4.07876 4.44753L2.09982 3.49068C1.77993 3.31883 1.38971 3.38278 1.11809 3.60008C0.824196 3.83519 0.751307 4.20657 0.8294 4.54497L0.831013 4.55196L0.833122 4.55882L2.23312 9.10882L2.23338 9.10966C2.47839 9.89367 3.19047 10.4094 3.99928 10.4094H11.4587C12.2675 10.4094 12.9795 9.89367 13.2246 9.10966L13.2248 9.10882L14.6242 4.56089C14.7377 4.21702 14.6213 3.84709 14.3398 3.62195C14.0652 3.40227 13.6983 3.34313 13.3611 3.5111L11.3795 4.46922C11.3615 4.47543 11.3428 4.4763 11.3283 4.47342C11.3185 4.47144 11.314 4.46859 11.3125 4.46743ZM12.1203 8.77343L12.1199 8.77482C12.0371 9.05624 11.7694 9.24375 11.4805 9.24375H3.99928C3.69157 9.24375 3.4435 9.05904 3.3599 8.77482L3.35992 8.77481L3.35914 8.7723L2.13899 4.81664L3.56155 5.51098L3.56155 5.511L3.56366 5.512C4.05487 5.74467 4.65592 5.6439 5.02479 5.22233L5.02492 5.22218L7.73983 2.11351L10.433 5.20024L10.4331 5.20045C10.796 5.61519 11.3972 5.75024 11.899 5.48783L13.3223 4.79313L12.1203 8.77343Z"
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="0.4"
                                    />
                                    <path
                                        d="M12.3993 12.4969H3.08052C2.75131 12.4969 2.48677 12.7614 2.48677 13.0906C2.48677 13.4199 2.75131 13.6844 3.08052 13.6844H12.3993C12.7285 13.6844 12.993 13.4199 12.993 13.0906C12.993 12.7614 12.7285 12.4969 12.3993 12.4969Z"
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="0.4"
                                    />
                                </svg>
                                <span className="pl-1">PRO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="text-gray-600 body-font">
                <div className="">

                    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">

                        <div className=" flex flex-col justify-between pb-4  md:w-full sm:mb-0  cursor-pointer rounded-lg bg-white">
                            <div className="rounded-t-lg h-64">
                                <img
                                    alt="content"
                                    className="object-contain object-center h-full w-full"
                                    src="https://Bright Component.com/_next/image?url=https%3A%2F%2Fapi.Bright Component.com%2Fimages%2Fproduct%2Ff2c14302-9c3d-4513-90c3-e0458757c937.jpg&w=1920&q=75"
                                />
                            </div>

                            <Link to={'/component/name'} className="flex items-center justify-between  px-6 mt-4">
                                <span className="pr-4 text-lg font-semibold  duration-300 hover:text-primary text-black  hover:text-sky-500">
                                    Table Grid Style 1
                                </span>
                                <div className="flex items-center justify-center rounded bg-yellow-500 py-2 px-4 font-medium uppercase text-white">
                                    <svg
                                        width={15}
                                        height={14}
                                        viewBox="0 0 15 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.3125 4.46743L11.3128 4.46722L11.3038 4.45685L8.41675 1.11047C8.41666 1.11035 8.41656 1.11024 8.41646 1.11013C8.24637 0.911896 7.9937 0.8 7.7399 0.8C7.48632 0.8 7.23387 0.911703 7.06378 1.10961L4.16018 4.42801C4.13162 4.45492 4.10843 4.45815 4.07876 4.44753L2.09982 3.49068C1.77993 3.31883 1.38971 3.38278 1.11809 3.60008C0.824196 3.83519 0.751307 4.20657 0.8294 4.54497L0.831013 4.55196L0.833122 4.55882L2.23312 9.10882L2.23338 9.10966C2.47839 9.89367 3.19047 10.4094 3.99928 10.4094H11.4587C12.2675 10.4094 12.9795 9.89367 13.2246 9.10966L13.2248 9.10882L14.6242 4.56089C14.7377 4.21702 14.6213 3.84709 14.3398 3.62195C14.0652 3.40227 13.6983 3.34313 13.3611 3.5111L11.3795 4.46922C11.3615 4.47543 11.3428 4.4763 11.3283 4.47342C11.3185 4.47144 11.314 4.46859 11.3125 4.46743ZM12.1203 8.77343L12.1199 8.77482C12.0371 9.05624 11.7694 9.24375 11.4805 9.24375H3.99928C3.69157 9.24375 3.4435 9.05904 3.3599 8.77482L3.35992 8.77481L3.35914 8.7723L2.13899 4.81664L3.56155 5.51098L3.56155 5.511L3.56366 5.512C4.05487 5.74467 4.65592 5.6439 5.02479 5.22233L5.02492 5.22218L7.73983 2.11351L10.433 5.20024L10.4331 5.20045C10.796 5.61519 11.3972 5.75024 11.899 5.48783L13.3223 4.79313L12.1203 8.77343Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.4"
                                        />
                                        <path
                                            d="M12.3993 12.4969H3.08052C2.75131 12.4969 2.48677 12.7614 2.48677 13.0906C2.48677 13.4199 2.75131 13.6844 3.08052 13.6844H12.3993C12.7285 13.6844 12.993 13.4199 12.993 13.0906C12.993 12.7614 12.7285 12.4969 12.3993 12.4969Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.4"
                                        />
                                    </svg>
                                    <span className="pl-1">PRO</span>
                                </div>
                            </Link>
                        </div>
                        <div className=" flex flex-col justify-between pb-4  md:w-full sm:mb-0  cursor-pointer rounded-lg bg-white">
                            <div className="rounded-t-lg h-full">
                                <img
                                    alt="content"
                                    className="object-contain object-center h-full w-full"
                                    src="https://i.ibb.co/cKWL4vc/Web-Application-and-a-Website.png"
                                />
                            </div>

                            <Link to={'/component/name'} className="flex items-center justify-between  px-6 mt-4">
                                <span className="pr-4 text-lg font-semibold  duration-300 hover:text-primary text-black  hover:text-sky-500">
                                    Table Grid Style 1
                                </span>
                                <div className="flex items-center justify-center rounded bg-yellow-500 py-2 px-4 font-medium uppercase text-white">
                                    <svg
                                        width={15}
                                        height={14}
                                        viewBox="0 0 15 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.3125 4.46743L11.3128 4.46722L11.3038 4.45685L8.41675 1.11047C8.41666 1.11035 8.41656 1.11024 8.41646 1.11013C8.24637 0.911896 7.9937 0.8 7.7399 0.8C7.48632 0.8 7.23387 0.911703 7.06378 1.10961L4.16018 4.42801C4.13162 4.45492 4.10843 4.45815 4.07876 4.44753L2.09982 3.49068C1.77993 3.31883 1.38971 3.38278 1.11809 3.60008C0.824196 3.83519 0.751307 4.20657 0.8294 4.54497L0.831013 4.55196L0.833122 4.55882L2.23312 9.10882L2.23338 9.10966C2.47839 9.89367 3.19047 10.4094 3.99928 10.4094H11.4587C12.2675 10.4094 12.9795 9.89367 13.2246 9.10966L13.2248 9.10882L14.6242 4.56089C14.7377 4.21702 14.6213 3.84709 14.3398 3.62195C14.0652 3.40227 13.6983 3.34313 13.3611 3.5111L11.3795 4.46922C11.3615 4.47543 11.3428 4.4763 11.3283 4.47342C11.3185 4.47144 11.314 4.46859 11.3125 4.46743ZM12.1203 8.77343L12.1199 8.77482C12.0371 9.05624 11.7694 9.24375 11.4805 9.24375H3.99928C3.69157 9.24375 3.4435 9.05904 3.3599 8.77482L3.35992 8.77481L3.35914 8.7723L2.13899 4.81664L3.56155 5.51098L3.56155 5.511L3.56366 5.512C4.05487 5.74467 4.65592 5.6439 5.02479 5.22233L5.02492 5.22218L7.73983 2.11351L10.433 5.20024L10.4331 5.20045C10.796 5.61519 11.3972 5.75024 11.899 5.48783L13.3223 4.79313L12.1203 8.77343Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.4"
                                        />
                                        <path
                                            d="M12.3993 12.4969H3.08052C2.75131 12.4969 2.48677 12.7614 2.48677 13.0906C2.48677 13.4199 2.75131 13.6844 3.08052 13.6844H12.3993C12.7285 13.6844 12.993 13.4199 12.993 13.0906C12.993 12.7614 12.7285 12.4969 12.3993 12.4969Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.4"
                                        />
                                    </svg>
                                    <span className="pl-1">PRO</span>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-10 flex flex-col justify-between pb-4  md:w-full sm:mb-0  cursor-pointer rounded-lg bg-white">
                            <div className="rounded-t-lg h-full">
                                <img
                                    alt="content"
                                    className="object-contain object-center h-full w-full"
                                    src="https://i.ibb.co/cKWL4vc/Web-Application-and-a-Website.png"
                                />
                            </div>

                            <Link to={'/component/name'} className="flex items-center justify-between  px-6 mt-4">

                                <span className="pr-4 text-lg font-semibold  duration-300 hover:text-primary text-black  hover:text-sky-500">
                                    Contact Style 1
                                </span>
                                <div className="flex items-center justify-center rounded bg-sky-500 py-2 px-4 font-medium uppercase text-white">
                                    <svg
                                        width={16}
                                        height={17}
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.05 5.43242H15.0501L15.0499 5.42643C15.0219 4.72658 14.461 4.15742 13.775 4.15742H12.4971C12.7699 3.96382 12.981 3.7268 13.0903 3.43541C13.3213 2.82854 13.0731 2.21768 12.454 1.6243C11.7785 0.974795 11.0522 0.720513 10.3126 0.912153C9.67527 1.07498 9.16166 1.56452 8.76631 2.10653C8.45744 2.52998 8.21179 2.99784 8.02872 3.39873C7.8529 2.99721 7.61111 2.52971 7.30244 2.10653C6.90643 1.56362 6.38646 1.07465 5.73702 0.91206C4.99758 0.720604 4.27147 0.974878 3.59612 1.62421C2.97694 2.21763 2.72867 2.82854 2.95969 3.43546C3.06935 3.7276 3.2914 3.96457 3.56393 4.15742H2.125C1.41716 4.15742 0.85 4.72458 0.85 5.43242V7.33242C0.85 8.04026 1.41716 8.60742 2.125 8.60742H2.175V14.9324C2.175 15.8136 2.89051 16.5574 3.8 16.5574H12.3C13.1812 16.5574 13.925 15.8419 13.925 14.9324V8.59882C14.5613 8.52533 15.05 7.98949 15.05 7.33242V5.43242ZM12.7 14.9324V15.0764C12.6378 15.2515 12.4672 15.3824 12.275 15.3824H3.775C3.53284 15.3824 3.325 15.1746 3.325 14.9324V8.63242H12.7V14.9324ZM10.6102 2.07823L10.6103 2.07876L10.6224 2.07472C10.6716 2.05834 10.7238 2.05742 10.775 2.05742C11.0211 2.05742 11.3089 2.17976 11.6151 2.50949L11.615 2.50956L11.6189 2.51349C11.695 2.58959 11.8048 2.69978 11.8869 2.81592C11.9279 2.87386 11.9576 2.92725 11.9735 2.9732C11.9887 3.01741 11.9875 3.04363 11.9833 3.05811C11.9582 3.12252 11.8714 3.21311 11.6854 3.3149C11.5046 3.41388 11.2574 3.5087 10.9613 3.59461C10.435 3.74734 9.77106 3.86703 9.09006 3.93513C9.25195 3.58263 9.45865 3.19524 9.69424 2.86293C9.98804 2.44851 10.3044 2.15204 10.6102 2.07823ZM5.43302 2.04164L5.44659 2.04842L5.46135 2.05236C5.78296 2.13812 6.10061 2.43765 6.39001 2.84712C6.62285 3.17658 6.82487 3.55907 6.98527 3.91017C6.30415 3.84207 5.64013 3.72237 5.11367 3.56961C4.81758 3.4837 4.57044 3.38888 4.38959 3.2899C4.20361 3.18811 4.11682 3.09752 4.09172 3.03311C4.08748 3.01863 4.08627 2.99241 4.10154 2.9482C4.11742 2.90225 4.1471 2.84886 4.18809 2.79092C4.26952 2.67578 4.37807 2.5665 4.45409 2.49047C4.79728 2.1722 5.06026 2.03242 5.3 2.03242C5.33906 2.03242 5.36946 2.03254 5.39579 2.03493C5.40837 2.03607 5.41771 2.03757 5.42447 2.03913C5.43056 2.04053 5.43302 2.04164 5.43302 2.04164ZM13.85 7.33242C13.85 7.37333 13.837 7.39577 13.8252 7.40761C13.8134 7.41944 13.7909 7.43242 13.75 7.43242H2.125C2.07293 7.43242 2.025 7.39 2.025 7.33242V5.43242C2.025 5.41871 2.03337 5.39244 2.05919 5.36661C2.08501 5.34079 2.11128 5.33242 2.125 5.33242H13.75C13.8021 5.33242 13.85 5.37484 13.85 5.43242V7.33242Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="0.3"
                                        />
                                    </svg>
                                    <span className="pl-1">FREE</span>
                                </div>


                            </Link>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default AllComponents;