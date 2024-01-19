import React, { useEffect, useState } from 'react';

const AddComponent = () => {
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
                        className="mt-1 p-2  w-full  bg-gray-800 text-white border border-gray-700 rounded-md"
                    >
                        <option value="" disabled selected>Select an option</option>
                        {
                            motherCategory.map((category) => (
                                <option className='py-2 px-4' value={category.label}>{category.label}</option>
                            ))
                        }


                    </select>
                </div>
                <div>
                    <label htmlFor="motherCategory" className="text-white">
                        Select Plan
                    </label>
                    <select
                        name="motherCategory"
                        className="mt-1 p-2  w-full  bg-gray-800 text-white border border-gray-700 rounded-md"
                    >
                        <option value="free" >Free</option>
                        <option value="pro" >Pro</option>


                    </select>
                </div>

                <div>
                    <label htmlFor="demo-code" className="text-white block">
                        Demo Code
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="mt-1 p-2 h-40 w-full bg-gray-800 text-white border border-gray-700 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="text-white block">
                        Component Code
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        className="mt-1 h-40 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded-md"
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

export default AddComponent;