import React, { useEffect, useState } from 'react';
import BrightAlert from 'bright-alert';

const AddComponentCategory = () => {

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        handleFile(selectedFile);
    };

    const handleFile = (selectedFile) => {
        setFile(selectedFile);
        setFileName(selectedFile.name);

        // Simulate loading, you can replace this with actual upload logic
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating a 2-second loading delay
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    const [motherCategory, setMotherCategory] = useState([])

    useEffect(() => {
        fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/category//mother-category/get').then((res) => res.json()).then((data) => {

            setMotherCategory(data.category)
        })
    }, [motherCategory])



    const uploadCategory = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const motherCategory = e.target.motherCategory.value;
        const description = e.target.description.value;

        try {
            const imageurl = await UploadImage(file);
            const data = {
                imageurl,
                name,
                motherCategory,
                description
            };
            fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/category/component', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((data) => {
                if (data.error) {
                    BrightAlert(`${data.message}`, '', 'error')
                }
                else {
                    BrightAlert(``, '', 'success')
                }
            })
        } catch (error) {
            console.error('Error uploading image:', error);

        }
    };

    const UploadImage = (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const url = `https://brightcomponent-backend-v1.vercel.app/api/v1/image/upload-image`;

        return fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.imageUrl) {
                    return data.imageUrl;
                } else {
                    throw new Error('Image upload failed');
                }
            });
    };


    return (
        <div className="bg-gray-900 p-6 rounded-lg w-full shadow-md border border-opacity-90">
            <form onSubmit={uploadCategory} method="post" className="space-y-4">
                <div>
                    <div>
                        <label htmlFor="file" className="block text-sm  text-gray-300">
                            File
                        </label>
                        <label
                            htmlFor="dropzone-file"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className="flex flex-col items-center w-full  h-40  mt-2 text-center  border-2 border-gray-300 border-dashed cursor-pointer bg-gray-800  rounded-xl relative"
                        >
                            {file && (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="File Preview"
                                    className=" w-full p-2  h-40 relative object-cover mb-2 rounded-md"
                                />
                            )}
                            {!fileName && <div className='mt-10'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8  text-gray-100"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                    />
                                </svg>
                            </div>}
                            <div className='absolute rounded-xl bg-opacity-80  bg-black w-full h-full'>
                                <div>
                                    <h2 className="mt-20 font-medium tracking-wide  text-gray-200">
                                        Category File
                                    </h2>
                                    <p className="mt-2 text-xs tracking-wide  text-gray-400">
                                        {fileName || 'Upload or drag & drop your file SVG, PNG, JPG, or GIF.'}

                                    </p>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"

                                    />
                                </div>
                            </div>
                        </label>
                    </div>

                </div>

                <div>
                    <label htmlFor="name" className="text-white block">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="mt-1 p-2 bg-gray-800 w-full text-white border border-gray-700 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="motherCategory" className="text-white">
                        Mother Category
                    </label>
                    <select
                        name="motherCategory"
                        className="mt-1 p-2 px-10 w-full  bg-gray-800 text-white border border-gray-700 rounded-md"
                    >
                        <option value="" disabled selected>Select an option</option>
                        {
                            motherCategory.map((category) => (
                                <option value={category.label}>{category.label}</option>
                            ))
                        }


                    </select>
                </div>

                <div>
                    <label htmlFor="description" className="text-white block">
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="mt-1 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:shadow-outline-sky active:bg-sky-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddComponentCategory;


//     const components = [
//         {
//             id: 1,
//             name: 'Button',
//             description: 'A button is an element that triggers an action when clicked.',
//             example: <section className="relative z-10 bg-primary py-[120px]">
//                 <div className="container mx-auto">
//                     <div className="-mx-4 flex">
//                         <div className="w-full px-4">
//                             <div className="mx-auto max-w-[400px] text-center">
//                                 <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
//                                     404
//                                 </h2>
//                                 <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
//                                     Oops! That page can’t be found
//                                 </h4>
//                                 <p className="mb-8 text-lg text-white">
//                                     The page you are looking for it maybe deleted
//                                 </p>
//                                 <a
//                                     href="javascript:void(0)"
//                                     className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-[]"
//                                 >
//                                     Go To Home
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
//                     <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
//                     <div className="flex h-full w-1/3">
//                         <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
//                         <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
//                     </div>
//                     <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
//                 </div>
//             </section>,
//             code: `import React from "react";

// const Error = () => {
//   return (
//     <>
//       <section className="relative z-10 bg-primary py-[120px]">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[400px] text-center">
//                 <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
//                   404
//                 </h2>
//                 <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
//                   Oops! That page can’t be found
//                 </h4>
//                 <p className="mb-8 text-lg text-white">
//                   The page you are looking for it maybe deleted
//                 </p>
//                 <a
//                   href="javascript:void(0)"
//                   className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
//                 >
//                   Go To Home
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
//           <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
//           <div className="flex h-full w-1/3">
//             <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
//             <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
//           </div>
//           <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Error;`,
//         },
//         {
//             id: 2,
//             name: 'Input',
//             description: 'An input field allows the user to enter text. It can be used as a single line or multiline input.',
//             example: <main>
//                 <div className=" px-4 flex items-center justify-start  md:px-8">
//                     <div className="max-w-lg mx-auto text-center">
//                         <div className="pb-6">
//                             <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
//                         </div>
//                         <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
//                             Page not found
//                         </h3>
//                         <p className="text-gray-600 mt-3">
//                             Sorry, the page you are looking for could not be found or has been removed.
//                         </p>
//                     </div>
//                 </div>
//             </main>,
//             code: `export default () => {
//     return (
//         <main>
//             <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
//                 <div className="max-w-lg mx-auto text-center">
//                     <div className="pb-6">
//                         <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
//                     </div>
//                     <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
//                         Page not found
//                     </h3>
//                     <p className="text-gray-600 mt-3">
//                         Sorry, the page you are looking for could not be found or has been removed.
//                     </p>
//                 </div>
//             </div>
//         </main>
//     )
// }`,
//         },
//     ];
