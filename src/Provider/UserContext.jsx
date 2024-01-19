import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setLoading(true);
        deleteCookie('BrightUser')
        setUser('');
        setLoading(false);
    };


    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };


    const setCookie = (name, value, options = {}) => {



        const path = options.path || '/';
        const cookieString = `${name}=${encodeURIComponent(value)};  path=${path}`;

        document.cookie = cookieString;
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    };

    const checkUserCookie = () => {
        const userCookie = getCookie('brightUser');
        if (userCookie) {
            const userData = JSON.parse(userCookie);
            setUser(userData);
        }
        setLoading(false);
    };



    useEffect(() => {
        const unsubscribe = () => {
            checkUserCookie();
        };

        unsubscribe();

        return () => {
            // Optional cleanup if needed
        };
    }, []); // Empty dependency array ensures that this effect runs only once

    const authInfo = {
        user,
        setUser,
        logOut,
        setCookie,
        loading,
        setLoading,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;