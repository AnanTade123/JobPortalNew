import { useState } from "react";


export default function Signin() {
  // State to store email, password, role, password visibility, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for role
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "", role: "" });

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate form fields
  const validateForm = () => {
    const newErrors = { email: "", password: "", role: "" };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (validateForm()) {
      const userData = {
        email: email,
        password: password,
        role: role,
      };

      console.log("User Data:", userData); // Log the entire object

      // Clear the input fields after submission
      setEmail("");
      setPassword("");
      setRole("");
      setErrors({ email: "", password: "", role: "" }); // Reset errors
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-serif text-center mb-4">Hi, Welcome Back!</h2>
          <p className="text-center text-gray-500 mb-6">
            Still do not have an account?{" "}
            <a href="#" className="text-green-600">Sign up</a>
          </p>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="james@example.com"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-green-600`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="password">
                Password*
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter Password"
                  className={`w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-green-600`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isPasswordVisible ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-5-9-5s3.515-4.57 8.572-4.933m2.303 2.303A3 3 0 118.39 8.39m-1.061 1.06a9.993 9.993 0 0112.282 2.764M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                      ></path>
                    )}
                  </svg>
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Role Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-thin mb-2" htmlFor="role">
                Role*
              </label>
              <select
                id="role"
                className={`w-full px-3 py-2 border ${
                  errors.role ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-green-600`}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select your role</option>
                <option value="Employee">Employee</option>
                <option value="Employer">Employer</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>

            <div className="flex  justify-end mb-6">
             
              <a href="#" className="text-sm text-green-600">Forget Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              SIGN IN
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            
          </form>
          <p className="text-center text-gray-500 mt-6">
            Do not have an account?{" "}
            <a href="#" className="text-green-600">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}
