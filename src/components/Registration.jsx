// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaWhatsapp, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Registration() {
    const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    education: "",
    skills: "",
    companyName: "",
    workExperience: "",
    termsAccepted: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logs the form data as a single object

    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      location: "",
      education: "",
      skills: "",
      companyName: "",
      workExperience: "",
      termsAccepted: false,
    });
  };

  return (
    <>
        {/* Navbar */}
        <header className="bg-black shadow-lg w-full overflow-hidden"> {/* Removed vertical scroll */}
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <img src="src/assets/images/logo_06.webp" alt="Logo" className="h-10" />
        
        {/* Nav Links */}
        <nav className="hidden lg:flex space-x-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-green-500 text-white">Home</a>
          <a href="#" className="hover:text-green-500 text-white">Job</a>
          <a href="#contact" className="hover:text-green-500 text-white">Contact</a>
          <a href="#" className="hover:text-green-500 text-white">Dashboard</a>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="border border-white px-5 py-2 rounded-full hover:bg-green-600 text-white">Login/Sign up</button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-gray-600">Post a job</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden bg-[#255741] text-black border-white px-3 py-3" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black shadow-md w-full overflow-hidden"> {/* Prevents vertical overflow */}
          <nav className="p-4 space-y-2 text-gray-800">
            <a href="#" className="hover:text-green-500 text-white">Home</a><br />
            <a href="#" className="hover:text-green-500 text-white">Job</a><br />
            <a href="#contact" className="hover:text-green-500 text-white">Contact</a><br />
            <a href="#" className="hover:text-green-500 text-white">Dashboard</a>
          </nav>
          <div className="p-1 space-y-2">
            <button className="w-full border border-white px-4 py-2 rounded hover:bg-green-500 text-white">Login/Sign up</button><br />
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Post a job</button>
          </div>
        </div>
      )}
    </header>
      {/* Top Section */}
      <div className="flex items-center justify-center h-52 bg-[#33644f]">
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold mb-2">Register</h1>
          <p className="text-lg">
            Create an account & Start posting or hiring Companies
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-center text-2xl font-semibold">Register</h2>

          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
              Employee
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="James Browser"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="james@example.com"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferable Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Education
              </label>
              <input
                type="text"
                name="education"
                placeholder="Education"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                placeholder="Skill"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work Experience
              </label>
              <input
                type="text"
                name="workExperience"
                placeholder="Work Experience"
                className="w-full px-4 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
                value={formData.workExperience}
                onChange={handleChange}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="termsAccepted"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-gray-600">
                By clicking the Register button you agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              REGISTER
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mt-6">
            <div className="border-t w-full"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="border-t w-full"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 border rounded-md hover:bg-gray-200">
              <img
                src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 border rounded-md hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Sign up with Facebook
            </button>
          </div>

          {/* Sign in Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Have an account?{" "}
            <a href="#" className="text-blue-600 underline">
              Sign in
            </a>
          </p>
        </div>
        
        
      </div>
      {/*Footer*/}
      <footer className="bg-[#255741] text-white py-8 w-full ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-4">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">jobi</h2>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="mb-4 font-semibold text-xl text-white">Services</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Browse Jobs</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Companies</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Candidates</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">Company</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">About us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Blogs</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">Support</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Terms of use</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Terms & conditions</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Cookie policy</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-semibold mb-4 text-xl text-white">Newsletter</h4>
          <p className="text-sm mb-4">Join & get important news regularly</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email*"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none w-full sm:w-1/2 md:w-1/2 "
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md"
            >
              Send
            </button>
          </form>
          <p className="text-sm mt-2">We only send interesting and relevant emails.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mt-4 md:mt-0">
           <a href="#" className="hover:text-green-400">Privacy & Terms</a>
          <a href="#" className="hover:text-green-400">Contact Us</a>
        </div>
        <div className="text-gray-500 text-sm">
        <p>Copyright © 2023 jobi inc.</p>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-2 mt-4 md:mt-0 text-lg ">
          <a href="#" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-green-400">
            <FaGoogle />
          </a>
          <a href="#" className="hover:text-green-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-green-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
