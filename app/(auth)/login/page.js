"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [data, setData] = useState({});
  const router = useRouter();

  const handleChange = (id, value) => {
    setData((prev) => ({ ...prev, [id]: value }));
  }

  const login = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: data.firstname,
        password: data.password
      })
    });
    const isLoggedInResponse = await response.json();
    console.log("LOGGED IN: ", isLoggedInResponse, isLoggedInResponse.success);
    if (isLoggedInResponse.success) {
      router.replace("/home");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen bg-[#2f2a3b] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-[#2b2638] rounded-2xl shadow-2xl flex overflow-hidden">

        <div className="w-full lg:w-1/2 p-14 text-white">

          <h1 className="text-4xl font-semibold mb-3">
            Login to your account
          </h1>

          <p className="text-gray-400 mb-8">
            Don't have an account?{" "}
            <span className="underline cursor-pointer">Create account</span>
          </p>

          {/* FORM */}
          <div className="space-y-5">

            <div className="flex gap-4">
              <form onSubmit={login}>
                <input
                  type={"text"}
                  placeholder="First name"
                  name="firstname"
                  className="flex-1 bg-[#3b3548] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
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

              <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg font-semibold">
                Login
              </button>
              </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}