import React from 'react';

const HeroSection2 = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center w-full"
        style={{ backgroundImage: 'url(src/assets/images/img_40.332e3f70.jpg)' }} 
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Complete job portal for everyone.
            </h1>
          </div>
          <div className="md:w-1/2 text-white text-center lg:text-right mt-6 lg:mt-0">
  {/* Paragraph */}
  <p className="text-lg md:text-xl mb-4 ">
    Find your dream job & earn from all world.
  </p>

  {/* Buttons */}
  <div className="flex justify-center lg:justify-end space-x-4 px-14">
    <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-gray-200 hover:text-black">
      Looking for a job?
    </button>
    <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400">
      Start Hiring
    </button>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection2;