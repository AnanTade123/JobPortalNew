import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.role) {
      formErrors.role = "Role is required";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Account created!");

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "",
      });

      console.log("Form Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-[#EFF6F3] h-full flex justify-center items-center p-4">
      <div className="h-auto w-[696px] mt-20 mb-20 bg-white p-8 shadow-md rounded-3xl max-w-full">
        <h1 className="text-[#244034] font-serif text-[40px] mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#244034] font-medium mb-2">
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="James Brower"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#EFF6F3] rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-[#244034] font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="james@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#EFF6F3] rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-[#244034] font-medium mb-2">
              Password*
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#EFF6F3] rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-2xl top-11 text-gray-500"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-[#244034] font-medium mb-2">
              Role*
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={`w-full p-3 bg-[#EFF6F3] rounded-md border ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="employer">Employer</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
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

          <button
            type="submit"
            className="w-full bg-[#31595A] text-lg text-white py-3 rounded-md mt-4"
          >
            Sign Up
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
            <a
              href="#"
              className="text-[#31795a] font-semibold hover:underline hover:underline-offset-2 hover:decoration-[#31795a]"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
