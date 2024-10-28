import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer

// Custom Left Arrow Component
const PreviousArrow = ({ onClick }) => (
  <motion.button
    className="text-black"
    onClick={onClick}
    style={{ marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
    initial={{ opacity: 0, x: 50 }} // Start from right side
    animate={{ opacity: 1, x: 0 }} // Animate to visible position
    transition={{ duration: 0.5, delay: 1 }} // Delay for smoother appearance
  >
    <span className="text-3xl">&#8249;</span> {/* Unicode for left arrow */}
  </motion.button>
);

// Custom Right Arrow Component
const NextArrow = ({ onClick }) => (
  <motion.button
    className="text-black"
    onClick={onClick}
    style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
    initial={{ opacity: 0, x: 50 }} // Start from right side
    animate={{ opacity: 1, x: 0 }} // Animate to visible position
    transition={{ duration: 0.5, delay: 1 }} // Delay for smoother appearance
  >
    <span className="text-3xl">&#8250;</span> {/* Unicode for right arrow */}
  </motion.button>
);

const jobs = [
  {
    title: 'Video Edition & 3D work',
    img: 'src/assets/images/img_16.42102f6a (1).jpg', 
  },
  {
    title: 'Design & Development',
    img: 'src/assets/images/img_17.31b5cbce.jpg', 
  },
  {
    title: 'Customer Help & Sales',
    img: 'src/assets/images/img_18.bfe28328.jpg', 
  },
  {
    title: 'Business Marketing',
    img: 'src/assets/images/img_19.93ec8f12.jpg', 
  },
];

const Home = () => {
  const sliderRef = useRef(null);

 
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Slider settings with custom arrows
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // At screen width < 1024px (tablet)
        settings: {
          slidesToShow: 2, // Show 2 slides
        }
      },
      {
        breakpoint: 768, // At screen width < 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
        }
      }
    ]
  };

  // Framer Motion Variants for job cards
  const jobVariants = {
    hidden: { opacity: 0, x: -50 }, // Start from the left side
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 }, // Stagger animation for each card
    }),
  };

  // Variant for the "Trending Job" text
  const trendingJobTextVariant = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } // Animate to visible position
  };

  return (
    <div ref={ref} className="container mx-auto px-4 py-8 w-full overflow-hidden"> {/* Prevents vertical overflow */}
      {/* Header Section with Arrows */}
      <header className="flex justify-between items-center mb-8 text-[#255741]">
        {/* Animate Trending Job Text */}
        <motion.h1 
          className="text-3xl font-bold"
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
          variants={trendingJobTextVariant} // Apply the animation variant
        >
          Trending Job
        </motion.h1>
        <div className="flex items-center">
          <PreviousArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </header>

      {/* Slider Section */}
      <Slider ref={sliderRef} {...settings}>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-4  "
           
          >
            <div className="relative shadow-lg rounded-lg overflow-hidden    ">
              {/* Image */}
              <div className=' w-full h-72 z-10 absolute bg-opacity-0 hover:bg-opacity-35 bg-black '></div>
              <img
                className="w-full h-72 object-cover -z-10 relative"
                src={job.img}
                alt={job.title}
              />

              {/* Title positioned at the bottom of the image */}
              <h2 className="absolute bottom-0 left-0 w-full z-20  text-white text-lg font-bold p-2 text-center">
                {job.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
