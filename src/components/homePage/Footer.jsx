import { FaWhatsapp, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

export default function Footer() {
  return (
    <footer className="bg-[#255741] text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">jobi</h2>
          </div>

          {/* Sections for desktop layout */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-3 lg:flex gap-20 lg:space-x-10">
            {/* Services Section */}
            <div>
              <h4 className="mb-4 font-semibold text-xl text-white">Services</h4>
              <ul>
                <li className="mb-2">
                  <Link to="/browse-jobs" className="hover:text-green-400">Browse Jobs</Link>
                </li>
                <li className="mb-2">
                  <Link to="/companies" className="hover:text-green-400">Companies</Link>
                </li>
                <li className="mb-2">
                  <Link to="/candidates" className="hover:text-green-400">Candidates</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-green-400">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="font-semibold mb-4 text-xl text-white">Company</h4>
              <ul>
                <li className="mb-2">
                  <Link to="/about" className="hover:text-green-400">About us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/blogs" className="hover:text-green-400">Blogs</Link>
                </li>
                <li className="mb-2">
                  <Link to="/faqs" className="hover:text-green-400">FAQ's</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-green-400">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h4 className="font-semibold mb-4 text-xl text-white">Support</h4>
              <ul>
                <li className="mb-2">
                  <Link to="/terms-of-use" className="hover:text-green-400">Terms of use</Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-conditions" className="hover:text-green-400">Terms & conditions</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy" className="hover:text-green-400">Privacy</Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-green-400">Cookie policy</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="font-semibold mb-4 text-xl text-white">Newsletter</h4>
              <p className="text-sm mb-4">Join & get important news regularly</p>
              <form className="flex items-center lg:flex-row lg:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email*"
                  className="p-2 bg-[#FFFFFF0A] rounded-l-md w-full lg:w-36 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#FFFFFF33] text-white px-4 py-2 rounded-r-md w-full lg:w-auto"
                >
                  Send
                </button>
              </form>
              <p className="text-sm mt-2">We only send interesting and relevant emails.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-green-400">Privacy & Terms</Link>
            <Link to="/contact" className="hover:text-green-400">Contact Us</Link>
          </div>
          <div className="text-gray-500 text-sm">
            <p>Copyright © 2023 jobi inc.</p>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-2 mt-4 md:mt-0 text-lg">
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
      </div>
    </footer>
  );
}
