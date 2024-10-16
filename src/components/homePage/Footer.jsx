import { FaWhatsapp, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
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
              <a href="#" className="hover:text-green-400">FAQ's</a>
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
  );
}
