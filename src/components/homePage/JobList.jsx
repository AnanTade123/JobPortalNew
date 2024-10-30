import React from 'react';
import { CiBookmarkMinus } from "react-icons/ci";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

function JobList() {
  const jobData = [
    {
      id: 1,
      title: "Developer & expert in java c++",
      type: "Fulltime",
      date: "18 Jul 2024",
      company: "Slack",
      location: "Spain, Barcelona",
      role: "Developer, Coder",
      imgSrc: "src/assets/Images/icon1.webp"
    },
    {
      id: 2,
      title: 'Animator & Expert maya 3D',
      type: 'Fulltime',
      date: '25 Jul 2024',
      company: 'Slack',
      location: 'USA, New York',
      role: 'Accounting',
      imgSrc: 'src/assets/Images/icon2.webp',
    },
    {
      id: 3,
      title: 'Marketing Specialist in SEO',
      type: 'Parttime',
      date: '18 Jul 2024',
      company: 'Amazon',
      location: 'Spain, Barcelona',
      role: 'Developer, Coder',
      imgSrc: 'src/assets/Images/icon3 (2).webp',
    },
    {
      id: 4,
      title: 'Developer & Expert in javascript',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Google',
      location: 'Spain, Barcelona',
      role: 'Developer, Coder',
      imgSrc: 'src/assets/Images/icon4.webp',
    },
    {
      id: 5,
      title: 'Developer & expert in Java, C++',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      role: 'Developer, Coder',
      imgSrc: 'src/assets/Images/icon5 (2).webp',
    },
  ];

  return (
    <>
      {/* Heading with left-to-right and right-to-left animation */}
      <motion.div
        className="flex flex-col sm:flex-row text-[#255741] ml-5 mr-5 sm:ml-10 sm:mr-10 justify-between items-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="lg:text-[40px] sm:text-[60px] md:text-[80px] font-bold mb-4 sm:mb-0 text-center sm:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          New job listing
        </motion.p>

        {/* Link to JobList Route */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/joblist"
            className="text-green-600 hover:text-green-800 font-medium text-center sm:text-right"
          >
            Explore all jobs &rarr;
          </Link>
        </motion.div>
      </motion.div>

      {/* Job listings with bottom-to-top animation */}
      <motion.div
        className='flex flex-col gap-5 ml-5 mr-5 sm:ml-10 sm:mr-10'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 50
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.2,
              duration: 0.5
            }
          }
        }}
      >
        {jobData.map((job) => (
          <motion.div
            key={job.id}
            className='grid grid-cols-2 lg:gap-5 sm:grid-cols-5 gap-4 sm:gap-0 items-center border border-gray-300 p-4 h-auto sm:h-[100px] w-full'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Column 1: Image */}
            <div className='flex justify-center sm:justify-start'>
              <img src={job.imgSrc} alt={job.title} className='w-12 h-12 sm:w-16 sm:h-16' />
            </div>
            {/* Column 2: Job Title */} 
            <div className='text-center sm:text-left text-[14px] sm:text-[18px] font-medium'>
              {job.title}
            </div>
            {/* Column 3: Job Type and Date */}
            <div className='flex flex-col items-center ml-5 sm:items-start text-center sm:text-left text-[12px] sm:text-[16px]'>
              <p className='text-green-600'>{job.type}</p>
              <p className='text-[#000000B3]'>{job.date} by {job.company}</p>
            </div>
            {/* Column 4: Location and Role */}
            <div className='flex flex-col items-center sm:items-start text-center sm:text-left text-[12px] sm:text-[16px]'>
              <p className='text-[#000000B3]'>{job.location}</p>
              <p>{job.role}</p>
            </div>
            {/* Column 5: Bookmark and Apply Button */}
            <div className='flex justify-center sm:justify-end items-center gap-2'>
              <div className='flex items-center justify-center rounded-full bg-white border border-gray-300 h-8 w-8'>
                <CiBookmarkMinus className='h-6 w-6' />
              </div>
              {/* Link to JobDetails with dynamic job id */}
              <Link to="/jobdetails">
                <button className="bg-green-500 hover:bg-[#255741] text-white text-[12px] sm:text-[14px] h-8 w-20 sm:w-24 rounded-3xl">
                  Apply
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default JobList;
