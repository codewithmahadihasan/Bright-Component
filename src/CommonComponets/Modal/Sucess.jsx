import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Lottie from "lottie-react";
import success from "./Success.json";
import error from "./Error.json";
import warning from "./Warning.json";

const NotificationContainer = ({ children }) => {
    return (
        <div
        >
            {children}
        </div>
    );
};

const Notification = ({ title, text, icon, onClose }) => {

    console.log(title, text, icon);

    return (


        <div className="container mx-auto py-20">

            <div
                className={`fixed  z-50 top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 }`}
            >

                <div

                    className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                >


                    <div className='w-40 mx-auto'>
                        <Lottie
                            animationData={
                                icon === 'success' && success ||
                                icon === 'error' && error ||
                                icon === 'warning' && warning ||
                                success // Default animation data when icon is not specified or does not match known types
                            }
                            loop={false}
                        />
                    </div>
                    <p
                        className={`text-3xl font-semibold `}
                    >
                        {title}
                    </p>



                    <div className="w-1/2 px-3 mx-auto mt-4">
                        <button
                            onClick={() => onClose()}
                            className="block w-full rounded-lg border  p-3 text-center text-base border-red-500 font-medium text-black transition hover:border-red-600 hover:bg-red-600 "
                        >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div >



    );
};

export function showNotification(title, text, icon) {
    const notificationContainer = document.createElement('div');
    document.body.appendChild(notificationContainer);

    const onClose = () => {

        document.body.removeChild(notificationContainer);
    };



    const notificationElement = (
        <Notification
            title={title}
            text={text}
            icon={icon}
            onClose={onClose}
        />
    );

    // Render the React component into the notification container
    ReactDOM.render(
        <NotificationContainer>{notificationElement}</NotificationContainer>,
        notificationContainer
    );


}