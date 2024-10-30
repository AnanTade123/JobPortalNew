import React from 'react';

const HeroSection2 = () => {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[60vh] flex items-center w-full overflow-hidden"
        style={{ 
          backgroundImage: 'url(src/assets/images/img_40.332e3f70.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          margin: 0, 
          padding: 0, 
          overflowX: 'hidden' // Prevent horizontal overflow
        }}
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
        <div className='flex flex-col gap-5 ml-auto '>
          <p className='text-white text-lg'>Find your dream job & earn from all world.</p>
          <div className='flex gap-5'>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-[#255741]">
                Looking for a job?
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-[#255741]">
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
