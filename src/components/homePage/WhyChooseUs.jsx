import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WhyChooseUs = () => {
  const [showSeamlessSearch, setShowSeamlessSearch] = useState(false);
  const [showHireTopTalents, setShowHireTopTalents] = useState(false);
  const [showProtectedPayments, setShowProtectedPayments] = useState(false);

  return (
    <div className="hidden lg:flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center px-16 space-y-12">
        {/* Subtitle */}
        <p className="text-lg text-green-600 font-semibold">Why choose us?</p>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#255741] leading-tight">
          World of talent at <br /> your fingertips
        </h2>

        {/* Features List */}
        <div className="space-y-12">
          {/* Seamless Search */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowSeamlessSearch(!showSeamlessSearch)}
            >
              <h3 className="text-lg font-semibold text-[#255741]">Seamless Search</h3>
              {showSeamlessSearch ? <FaChevronUp className="text-green-700" /> : <FaChevronDown className="text-green-700" />}
            </div>
            {showSeamlessSearch && (
              <p className="text-gray-600 mt-2">
                Discover and connect with top talent efficiently through our streamlined search functionality.
              </p>
            )}
          </div>

          {/* Hire Top Talents */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowHireTopTalents(!showHireTopTalents)}
            >
              <h3 className="text-lg font-semibold text-[#255741]">Hire top talents</h3>
              {showHireTopTalents ? <FaChevronUp className="text-green-700" /> : <FaChevronDown className="text-green-700" />}
            </div>
            {showHireTopTalents && (
              <p className="text-gray-600 mt-2">
                Access a wide network of skilled professionals to meet your hiring needs.
              </p>
            )}
          </div>

          {/* Protected Payments */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowProtectedPayments(!showProtectedPayments)}
            >
              <h3 className="text-lg font-semibold text-[#255741]">Protected payments, every time</h3>
              {showProtectedPayments ? <FaChevronUp className="text-green-700" /> : <FaChevronDown className="text-green-700" />}
            </div>
            {showProtectedPayments && (
              <p className="text-gray-600 mt-2">
                Enjoy secure transactions and peace of mind with our reliable payment protection system.
              </p>
            )}
          </div>
        </div>
     
        {/* Learn More Button */}
        <div className=''>
        <button className="bg-green-600 hover:bg-[#255741] text-white text-sm font-semibold px-4 py-2 rounded">
          Learn More
        </button></div>
      </div>

      {/* Right Section (Unchanged) */}
      <div className="w-1/2">
        <div className="relative w-full h-auto mt-20">
          {/* First Image */}
          <img 
            src="src/assets/images/img_37.webp" 
            alt="" 
            className="w-[300px] h-[200px]" 
          />

          {/* Second Image (Overlay) */}
          <img 
            src="src/assets/images/screen_01 (1).webp" 
            alt="" 
            className="absolute top-0 left-14 w-[500px] h-[200px]" 
          />
        </div>
        <div className="flex gap-5">
          <img 
            src="src/assets/Images/img_38.webp" 
            alt="" 
            className="mt-5 h-[195px] w-[175px]"
          />
          <div className="relative w-full h-auto">
            {/* First Image */}
            <img 
              src="src/assets/Images/img_04.webp" 
              alt=""  
              className="mt-5 w-[296px] h-[323px]" 
            />

            {/* Second Image (Overlay at Top Right) */}
            <img 
              src="src/assets/images/screen_02.webp" 
              alt=""  
              className="absolute top-0 right-0 w-[325px] h-[160px] m-0" 
            />

            {/* Third Image (Overlay at Bottom Left of the First Image) */}
            <img 
              src="src/assets/images/screen_03.webp" 
              alt=""  
              className="absolute top-0 right-16 h-[200px] w-[418px] m-52" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
