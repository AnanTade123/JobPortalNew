import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
      {/* Left Section: Text */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
          World of talent at your fingertips
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Seamless Search</h3>
          <p className="text-gray-700">
            It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design
            to reflect your brand. It only takes 5 minutes.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Hire top talents</h3>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Protected payments, every time</h3>
        </div>
      </div>

      {/* Right Section: Overlapping Images */}
      <div className="md:w-1/2 flex flex-col items-center justify-center relative">
        {/* First Set of Images */}
        <div className="relative w-36 h-36 mb-8">
          <img
            src="src/assets/images/img_37.webp"
            alt="Designer, Brand, Logo"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full border-2 border-white">
            <img
              src="src/assets/images/screen_01 (1).webp"
              alt="Small Designer Image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Second Set of Images */}
        <div className="relative w-40 h-40 mb-8">
          <img
            src="src/assets/images/img_38.webp"
            alt="Payment Escrow System"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full border-2 border-white">
            <img
              src="src/assets/images/screen_02.webp"
              alt="Small Escrow Image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Third Set of Images */}
        <div className="relative w-36 h-36">
          <img
            src="src/assets/images/img_04.webp"
            alt="18k+ Candidates"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full border-2 border-white">
            <img
              src="src/assets/images/screen_03.webp"
              alt="Small Candidate Image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
