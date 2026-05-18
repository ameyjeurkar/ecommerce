"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [data, setData] = useState({});
    const router = useRouter();

    const handleChange = (id, value) => {
        // const data1 = JSON.parse(localStorage.getItem("signupData") || "{}");
        setData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const register = () => {
        localStorage.setItem("signupData", JSON.stringify(data));
        router.push("/login");
        
    }


    return (
        <div className="min-h-screen bg-[#2f2a3b] flex items-center justify-center p-6">
        <div className="w-full max-w-7xl bg-[#2b2638] rounded-2xl shadow-2xl flex overflow-hidden">

            <div className="w-1/2 lg:w-1/2 p-14 text-white">

            <h1 className="text-4xl font-semibold mb-3">
                Create an account
            </h1>

            <p className="text-gray-400 mb-8">
                Already have an account?{" "}
                <span className="underline cursor-pointer">Log in</span>
            </p>

            {/* FORM */}
            <div className="space-y-5">

                <div className="flex gap-4">
                <input
                    placeholder="First name"
                    name="firstname"
                    className="flex-1 bg-[#3b3548] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <input
                    placeholder="Last name"
                    name="lastname"
                    className="flex-1 bg-[#3b3548] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                </div>

                <input
                placeholder="Email"
                name="email"
                className="w-full bg-[#3b3548] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <div className="relative">
                <input
                    type={"password"}
                    placeholder="Enter your password"
                    name="password"
                    className="w-full bg-[#3b3548] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                </div>

                <button className="w-full bg-[coral] hover:bg-indigo-600 py-3 rounded-lg font-semibold" 
                    onClick={register}
                >
                Create account
                </button>
            </div>

            </div>
        </div>
        </div>
    );
}