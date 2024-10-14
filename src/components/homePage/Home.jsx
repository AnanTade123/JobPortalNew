import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow Component
const PreviousArrow = ({ onClick }) => (
  <button
    className="text-black"
    onClick={onClick}
    style={{ marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
  >
    <span className="text-3xl">&#8249;</span> {/* Unicode for left arrow */}
  </button>
);

// Custom Right Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    className="text-black"
    onClick={onClick}
    style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
  >
    <span className="text-3xl">&#8250;</span> {/* Unicode for right arrow */}
  </button>
);

const jobs = [
  {
    title: 'Video Edition & 3D work',
    img: 'src/assets/images/img_16.42102f6a (1).jpg', // replace with actual image path
  },
  {
    title: 'Design & Development',
    img: 'src/assets/images/img_17.31b5cbce.jpg', // replace with actual image path
  },
  {
    title: 'Customer Help & Sales',
    img: 'src/assets/images/img_18.bfe28328.jpg', // replace with actual image path
  },
  {
    title: 'Business Marketing',
    img: 'src/assets/images/img_19.93ec8f12.jpg', // replace with actual image path
  },
];

const Home = () => {
  const sliderRef = useRef(null); // Create a reference for the slider

  // Slider settings with custom arrows
  const settings = {
    dots: false, // We won't use dots, we'll use arrows
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides on larger screens
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section with Arrows */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Trending Job</h1>
        <div className="flex items-center">
          <PreviousArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </header>

      {/* Slider Section */}
      <Slider ref={sliderRef} {...settings}>
        {jobs.map((job, index) => (
          <div key={index} className="p-4">
            <div className="relative shadow-lg rounded-lg overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-72 object-cover"
                src={job.img}
                alt={job.title}
              />

              {/* Title positioned at the bottom of the image */}
              <h2 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-bold p-2 text-center">
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
