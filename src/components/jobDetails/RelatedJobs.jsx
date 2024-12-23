import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiBookmarkMinus } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const jobData = [
  {
    id: 1,
    logo: "src/assets/images/logo.jpg",
    type: "Fulltime",
    title: "Developer and expert in java c++",
    salary: "$900",
    duration: "/ monthly",
    location: "Spain, Barcelona",
  },
  {
    id: 2,
    logo: "src/assets/images/ios.jpg",
    type: "Part time",
    title: "Software Engineer",
    salary: "$200",
    duration: "/ weekly",
    location: "USA, Redmond",
  },
  {
    id: 3,
    logo: "src/assets/images/media.jpg",
    type: "Fixed price",
    title: "Web Developer",
    salary: "$1500",
    duration: "/ monthly",
    location: "USA, Mountain View",
  },
  {
    id: 4,
    logo: "src/assets/images/logo.jpg",
    type: "Fulltime",
    title: "Backend Developer",
    salary: "$1100",
    duration: "/ monthly",
    location: "Germany, Berlin",
  },
  {
    id: 5,
    logo: "src/assets/images/ios.jpg",
    type: "Part time",
    title: "Frontend Developer",
    salary: "$500",
    duration: "/ weekly",
    location: "India, Bangalore",
  },
  {
    id: 6,
    logo: "src/assets/images/media.jpg",
    type: "Contract",
    title: "DevOps Engineer",
    salary: "$1200",
    duration: "/ monthly",
    location: "Canada, Toronto",
  },
];

function RelatedJobs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalJobs = jobData.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", checkMobileScreen);
    checkMobileScreen();

    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);

  const getNextIndex = (index, offset = 1) =>
    (index + offset + totalJobs) % totalJobs;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => getNextIndex(prevIndex, -1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayedJobs = () => {
    if (isMobile) {
      return [jobData[currentIndex]];
    } else {
      return [
        jobData[currentIndex],
        jobData[getNextIndex(currentIndex, 1)],
        jobData[getNextIndex(currentIndex, 2)],
      ];
    }
  };

  const displayedJobs = getDisplayedJobs();

  return (
    <>
      <div className="h-auto bg-[#eff6f3] mt-28 pb-20 max-w-[1540px] mx-auto">
        <div className="flex flex-col lg:flex-row ml-5 lg:ml-20">
          <div className="mt-20 lg:ml-10 text-center lg:text-left">
            <h3 className="text-[30px] lg:text-[45px] text-black font-semibold">
              Related Jobs
            </h3>
          </div>
          <div className="flex gap-4 mt-8 lg:ml-auto lg:mr-32 justify-center lg:justify-start lg:mt-20">
            <FaArrowLeft
              onClick={handlePrev}
              className="cursor-pointer hover:text-gray-700"
            />
            <FaArrowRight
              onClick={handleNext}
              className="cursor-pointer hover:text-gray-700"
            />
          </div>
        </div>

        <div className="overflow-hidden flex justify-center gap-5 mt-10 lg:mt-20 px-5 lg:px-0">
          <AnimatePresence initial={false} mode="popLayout">
            {displayedJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="h-auto w-[300px] lg:w-[400px] bg-white mx-2 rounded-lg shadow-md"
                custom={1}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between p-4">
                  <img
                    src={job.logo}
                    alt="logo"
                    className="h-[40px] lg:h-[45px] w-[40px] lg:w-[45px]"
                  />
                  <CiBookmarkMinus className="text-[25px] lg:text-[30px]" />
                </div>

                <div className="px-4">
                  <button className="h-[24px] lg:h-[27px] w-auto lg:w-[90px] bg-[#E7F6EF] text-[#31795A] text-[12px] lg:text-[13px] font-bold px-2 rounded-md">
                    {job.type}
                  </button>
                  <p className="text-[18px] lg:text-[22px] mt-4 font-bold">
                    {job.title}
                  </p>
                  <div className="flex gap-1 mt-3 lg:mt-5">
                    <p className="text-[#212529] text-[14px] lg:text-[15px]">
                      {job.salary}
                    </p>
                    <p className="text-[#AAAAAA] text-[14px] lg:text-[15px]">
                      {job.duration}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4">
                  <p className="text-black font-semibold text-[16px] lg:text-[18px]">
                    {job.location}
                  </p>
                  <button className="h-[27px] w-auto lg:w-[80px] rounded-3xl bg-[#31595A] text-white text-[14px] lg:text-[15px] px-4">
                    APPLY
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center mt-16 lg:mt-24 max-w-[1440px] mx-auto"
        data-aos="fade-up"
      >
        <div className="text-center lg:text-left px-5 lg:ml-28">
          <p className="text-[35px] lg:text-[50px] font-serif">
            Most complete job portal
          </p>
          <p className="text-[18px] lg:text-[25px] text-[#000000B3] mt-4">
            Signup and start finding your job or talents.
          </p>
        </div>

        <div className="flex gap-2 mt-6 lg:ml-auto lg:mr-28">
          <button className="h-[45px] lg:h-[50px] w-auto lg:w-[164px] text-[#244034] text-[15px] lg:text-[17px] rounded-xl font-semibold border border-black hover:bg-[#244034] hover:text-white px-4">
            Looking for job?
          </button>
          <button className="bg-[#D2F34C] h-[45px] lg:h-[50px] w-auto lg:w-[150px] rounded-xl text-[#244034] text-[15px] lg:text-[17px] font-semibold hover:bg-[#244034] hover:text-white px-4">
            Post a job
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-20 max-w-[1440px] mx-auto">
        <hr className="border-t border-gray-300 my-4 mx-5 lg:mx-16" />
      </div>
    </>
  );
}

export default RelatedJobs;
