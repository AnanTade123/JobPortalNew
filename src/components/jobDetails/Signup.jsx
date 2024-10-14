import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Signup() {
  const [selected, setSelected] = useState("candidates");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#EFF6F3] h-full flex justify-center items-center p-4">
      <div className="h-auto w-[696px] mt-20 mb-20 bg-white p-8 shadow-md rounded-2xl max-w-full">
        <h1 className="text-[#244034] font-serif text-[40px] mb-6 text-center">
          Create Account
        </h1>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setSelected("candidates")}
            className={`flex-1 h-12 py-2 text-center rounded-full transition duration-200 ${
              selected === "candidates"
                ? "bg-white text-[#31795a] border-[#31795a]"
                : "bg-gray-200 text-gray-500 border-gray-300"
            } border-2`}
          >
            Candidates
          </button>
          <button
            onClick={() => setSelected("employer")}
            className={`flex-1 h-12 py-2 text-center rounded-full transition duration-200 ${
              selected === "employer"
                ? "bg-white text-[#31795a] border-[#31795a]"
                : "bg-gray-200 text-gray-500 border-gray-300"
            } border-2`}
          >
            Employer
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-[#244034] font-medium mb-2">
              Name*
            </label>
            <input
              type="text"
              placeholder="James Brower"
              className="w-full p-3 bg-[#EFF6F3] rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-[#244034] font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              placeholder="james@example.com"
              className="w-full p-3 bg-[#EFF6F3] rounded-md border border-gray-300"
            />
          </div>

          <div className="relative">
            <label className="block text-[#244034] font-medium mb-2">
              Password*
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full p-3 bg-[#EFF6F3] rounded-md border border-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1 border-gray-300" />
            <p className="text-sm text-gray-600">
              By hitting the Register button, you agree to the{" "}
              <a href="#" className="text-[#244034] underline">
                Terms conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-[#244034] underline">
                Privacy Policy
              </a>
            </p>
          </div>

          <button className="w-full bg-[#244034] text-white py-3 rounded-md mt-4">
            Register
          </button>
        </form>

        <div className="flex flex-col items-center mt-8">
          <div className="flex items-center w-full mb-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <div className="flex space-x-4 mb-6 flex-wrap justify-center">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:shadow-md transition">
              <FcGoogle className="mr-3" />
              <span className="text-gray-700">Signup with Google</span>
            </button>

            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:shadow-md transition">
              <FaFacebook className="text-blue-600 mr-3" />
              <span className="text-gray-700">Signup with Facebook</span>
            </button>
          </div>

          <p className="text-gray-600">
            Have an account?{" "}
            <a href="#" className="text-[#31795a] font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
