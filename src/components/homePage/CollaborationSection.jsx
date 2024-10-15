import React from 'react';

const CollaborationSection = () => {
  return (
    <section className="bg-white py-12 lg:py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        <div className="relative w-full lg:w-1/2 h-80 lg:h-96 flex justify-center items-center mb-12 lg:mb-0">
          {/* Centered Jobi Icon */}
          <div className="absolute w-20 h-20 lg:w-28 lg:h-28 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
            <img
              src="src/assets/images/jobi.webp" 
              alt="Jobi Logo"
              className="w-16 h-16 lg:w-24 lg:h-24"
            />
          </div>

          {/* Google Icon */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
               style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img
              src="src/assets/images/google.webp" 
              alt="Google"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>

          {/* Instagram Icon */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
               style={{ top: '35%', left: '10%', transform: 'translate(-50%, -50%)' }}>
            <img
              src="src/assets/images/insta.webp" 
              alt="Instagram"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>

          {/* Messenger Icon */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
               style={{ top: '35%', right: '10%', transform: 'translate(50%, -50%)' }}>
            <img
              src="src/assets/images/messenger.webp" 
              alt="Messenger"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>

          {/* Google Drive Icon */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
               style={{ bottom: '10%', left: '50%', transform: 'translate(-50%, 50%)' }}>
            <img
              src="src/assets/images/drive.webp" 
              alt="Google Drive"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>

          {/* Slack Icon */}
          <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
               style={{ bottom: '35%', right: '10%', transform: 'translate(50%, 50%)' }}>
            <img
              src="src/assets/images/slack.webp" 
              alt="Slack"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="lg:w-1/2 text-left lg:pl-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Collaboration with <br className="hidden lg:block" /> Top Brands.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
            We collaborate with a number of top-tier companies on imagining the future of work. Have a look at how we work with leading brands to innovate the workplace.
          </p>
          <a
            href="#"
            className="text-green-500 font-semibold hover:text-green-600 inline-flex items-center"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection; 

