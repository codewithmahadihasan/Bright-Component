import React, { useState } from 'react';
import Logo from '../../../assets/Black And White Rakia Design Studio Logo.png';
import { FaEye } from 'react-icons/fa';
import { TbEyeOff } from 'react-icons/tb';
import BrightAlert from 'bright-alert'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');

    const navigate = useNavigate()



    const checkPasswordStrength = (password) => {

        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

        // Calculate the total strength based on criteria
        let strength = 0;

        if (password.length >= minLength) {
            strength += 1;
        }

        if (hasUppercase) {
            strength += 1;
        }

        if (hasLowercase) {
            strength += 1;
        }

        if (hasDigit) {
            strength += 1;
        }

        if (hasSpecialChar) {
            strength += 1;
        }

        if (strength === 5) {
            return 'Strong';
        } else if (strength >= 3) {
            return 'Moderate';
        } else {
            return 'Weak';
        }
    };


    const handlePasswordChange = (e) => {
        setPassword(e);
    };

    const passwordStrength = checkPasswordStrength(password);

    const SubmitData = (e) => {
        setLoading(true)
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const data = {
            name,
            email,
            password
        }
        fetch('https://brightcomponent-backend-v1.vercel.app/api/v1/auth/sign-up', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ data })
        }).then((res) => res.json()).then((data) => {
            setLoading(false)
            if (data.error) {
                BrightAlert(`${data.message}`, '', 'warning');
            }
            else {
                BrightAlert(`${data.message}`, '', 'success');
                navigate('/sign-in')
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
                                Name
                            </p>
                            <input
                                type="text"
                                placeholder='Type your name'
                                name='name'
                                required
                                className="w-full rounded-lg border  bg-white px-6 py-4 text-body-color outline-none duration-300 placeholder:text-gray-500 focus:border-[#0B64B4] text-gray-300 focus-visible:shadow-none border-white border-opacity-10 font-mono bg-white/5 focus:border-white/50"
                            />
                        </div>
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
                                    placeholder='Type your password'
                                    value={password}
                                    onChange={(e) => handlePasswordChange(e.target.value)}
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

                        <div className="flex gap-4">
                            <p
                                className={`h-2 rounded-xl w-full ${passwordStrength === "Weak" || passwordStrength === "Moderate" || passwordStrength === "Strong"
                                    ? 'bg-green-500'
                                    : 'bg-gray-300'
                                    }`}
                            ></p>
                            <div
                                className={`h-2 rounded-xl w-full ${passwordStrength === 'Moderate' || passwordStrength === 'Strong' ? 'bg-green-400' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`h-2 rounded-xl w-full ${passwordStrength === 'Strong' ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                            ></div>
                        </div>
                        <p className="">Already have an account? <Link to={'/sign-in'} className="mb-2 font-semibold  text-[#0B64B4] hover:text-[#0B64B4]">Sign in</Link></p>

                        <button disabled={loading} className="w-full disabled:bg-sky-400 disabled:cursor-not-allowed cursor-pointer items-center justify-center rounded-lg bg-[#0B64B4] px-8 py-4 text-lg font-semibold text-white duration-300 hover:bg-[#4a99de]">{!loading ? "Sign Up" : "loading.."}</button>
                    </form>

                </div>
            </main>
        </div>
    );
};

export default SignUp;