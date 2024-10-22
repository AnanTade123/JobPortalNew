import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
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
          <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-[#255741]">Post a job</button>
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
  );
}

export default Navbar;
