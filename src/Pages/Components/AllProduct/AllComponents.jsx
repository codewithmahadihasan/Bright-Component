import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // You can choose other themes if you prefer
import { CopyToClipboard } from 'react-copy-to-clipboard';

const components = [
    {
        id: 1,
        name: 'Test Component One',
        description: 'An alert indicating a successful action.',
        example: (
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
        code: `
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
        `
    },
    {
        id: 2,
        name: 'SuccessAlert2',
        description: 'An alert for a successfully sent message.',
        example: (
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
        code: `
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
        `
    },
];

const AllComponents = () => {
    const [showCodeMap, setShowCodeMap] = useState({});
    const [copied, setCopied] = useState({});

    const toggleCode = (id) => {
        setShowCodeMap((prevShowCodeMap) => ({
            ...prevShowCodeMap,
            [id]: !prevShowCodeMap[id],
        }));
    };


    const handleCopy = (id) => {
        setCopied((prevCopied) => ({
            ...prevCopied,
            [id]: true,
        }));
        setTimeout(() => {
            setCopied((prevCopied) => ({
                ...prevCopied,
                [id]: false,
            }));
        }, 1500);
    };

    return (
        <div className='bg-gray-900'>
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
                {components.map((component) => (
                    <div key={component.id}>
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
                            <div className="mt-8 overflow-hidden">
                                <div className="h-11 rounded-t-lg bg-gray-400 flex justify-start items-center space-x-1.5 px-3 w-80%">

                                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                                    <div>
                                        <CopyToClipboard text={component.code} onCopy={() => handleCopy(component.id)}>
                                            <button>{copied[component.id] ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg> : <svg className='text-blue-500 h-4 ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg>}</button>
                                        </CopyToClipboard>
                                    </div>

                                </div>
                                <div className="bg-gray-700 border-t-0 w-full max-h-[500px] overflow-auto">
                                    <SyntaxHighlighter language="javascript" style={vs2015}>
                                        {component.code}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        }
                        <div className='rounded-xl'>{!showCodeMap[component.id] && component.example}</div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllComponents;
