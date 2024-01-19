import React, { useContext, useState } from 'react';
import Logo from '../../../assets/Black And White Rakia Design Studio Logo.png';
import { FaEye } from 'react-icons/fa';
import { TbEyeOff } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import BrightAlert from 'bright-alert';
import { AuthContext } from '../../../Provider/UserContext';



const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const { setUser, setCookie } = useContext(AuthContext)




    const SubmitData = (e) => {
        setLoading(true)
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const data = {
            email,
            password
        }
        fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/auth/sign-in', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            setLoading(false)
            console.log(data);
            if (data.error) {

                BrightAlert({ message: 'Message', icon: 'info', title: 'Alert', timeDuration: 2000 })
            }
            else {
                setUser(data.user)
                setCookie('brightUser', JSON.stringify(data.user), { path: '/' });
                BrightAlert(`${data.message}`, '', 'success');
                navigate('/')
            }
        })
    }

    return (
        <div>
            <main className="w-full h-screen  flex bg-gray-900 flex-col items-center justify-center px-4">

                <div className="max-w-xl rounded-xl p-14  w-full text-gray-600 bg-gray-800  ">

                    <div className="text-center">
                        <img src={Logo} width={300} className="mx-auto" />

                    </div>
                    <form
                        onSubmit={SubmitData}
                        onChange={(e) => e.target.value}
                        className="mt-8 space-y-5"
                    >

                        <div>
                            <p className="mb-2 font-semibold text-white ">
                                Email
                            </p>
                            <input
                                placeholder='Type your email'
                                type="email"
                                name='email'
                                required
                                className="w-full font-mono rounded-lg border  bg-white px-6 py-4 text-body-color outline-none duration-300 placeholder:text-gray-500 focus:border-[#0B64B4] text-gray-300 focus-visible:shadow-none border-white border-opacity-10 bg-white/5 focus:border-white/50"
                            />
                        </div>
                        <div>
                            <p className="mb-2 font-semibold text-white">Password</p>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    name='password'
                                    placeholder='Type your password'
                                    className="w-full rounded-lg border bg-white px-6 py-4 text-body-color font-mono outline-none duration-300 placeholder:text-gray-500 focus:border-[#0B64B4] text-gray-300 focus-visible:shadow-none border-white border-opacity-10 bg-white/5 focus:border-white/50"
                                />
                                <button
                                    type="button"

                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                >
                                    {showPassword ? (
                                        <TbEyeOff onClick={() => setShowPassword(!showPassword)} className="h-4 w-4 text-gray-300" />
                                    ) : (
                                        <FaEye onClick={() => setShowPassword(!showPassword)} className="h-4 w-4 text-gray-300" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <p className="">Are you have no account? <Link to={'/sign-up'} className="mb-2 font-semibold  text-[#0B64B4] hover:text-[#0B64B4]">Sign up</Link></p>

                        <button disabled={loading} className="w-full disabled:bg-sky-400 disabled:cursor-not-allowed cursor-pointer items-center justify-center rounded-lg bg-[#0B64B4] px-8 py-4 text-lg font-semibold text-white duration-300 hover:bg-[#4a99de]">{!loading ? "Sign In" : "loading.."}</button>
                    </form>

                </div>
            </main>
        </div>
    );
};

export default SignIn;