import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer

const JobList = () => {
  const jobs = [
    {
      title: 'Developer & expert in java c++ ',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/Images/icon1.webp',
    },
    {
      title: 'Animator & Expert maya 3D',
      type: 'Fulltime',
      date: '25 Jul 2024',
      company: 'Slack',
      location: 'USA,New York',
      category: 'Accounting',
      image: 'src/assets/Images/icon2.webp',
    },
    {
      title: 'Marketing Specialist in SEO ',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/Images/icon3 (2).webp',
    },
    {
      title: 'Developer & Expert in javascript ',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/Images/icon4.webp',
    },
    {
      title: 'Developer & expert in Java, C++',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/Images/icon5 (2).webp',
    },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const exploreVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  const jobVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  // Intersection Observer Hook for scrolling
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const headerControls = useAnimation();
  const exploreControls = useAnimation();
  const jobControls = useAnimation();

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      headerControls.start('visible');
      exploreControls.start('visible');
      jobControls.start('visible');
    }
  }, [inView, headerControls, exploreControls, jobControls]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 overflow-hidden" ref={ref}>
      {/* Header section with animations */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        {/* Animate "New job listing" text from left */}
        <motion.h2
          className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-0"
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
        >
          New job listing
        </motion.h2>

        {/* Animate "Explore all jobs" from right */}
        <motion.a
          href="#"
          className="text-green-600 hover:text-green-800 font-medium"
          initial="hidden"
          animate={exploreControls}
          variants={exploreVariants}
        >
          Explore all jobs &rarr;
        </motion.a>
      </div>

      {/* Job listings with upward animation */}
      <div className="space-y-6 sm:space-y-8">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0"
            initial="hidden"
            animate={jobControls}
            variants={jobVariants}
          >
            {/* Job Image and Title Section */}
            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6 w-full sm:w-auto">
              {/* Job image */}
              <img
                src={job.image}
                alt={`${job.title} icon`}
                className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-full"
              />
              {/* Job title */}
              <h3 className="text-lg sm:text-2xl font-semibold w-full sm:w-60">{job.title}</h3>
            </div>

            {/* Job Details Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col items-start sm:items-start w-full sm:w-auto">
                <span
                  className={`${
                    job.type === 'Fulltime' ? 'text-green-600' : 'text-red-600'
                  } font-semibold text-base sm:text-lg`}
                >
                  {job.type}
                </span>
                <span className="text-gray-500">
                  {job.date} by {job.company}
                </span>
              </div>
              {/* Location and Category */}
              <div className="flex flex-col items-start sm:items-start w-full sm:w-auto">
                <p className="text-sm sm:text-base text-gray-600">{job.location}</p>
                <p className="text-sm sm:text-base text-gray-600">{job.category}</p>
              </div>
            </div>

            {/* Bookmark Icon and Apply Button */}
            <div className="flex items-center space-x-3 sm:space-x-4 mt-4 sm:mt-0">
              {/* Bookmark icon */}
              <svg
                className="h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v18l7-5 7 5V3H5z"
                />
              </svg>
              {/* Apply button */}
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-5 rounded-md">
                Apply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
