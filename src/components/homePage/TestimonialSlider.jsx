import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    title: "Great work!!",
    rating: 5,
    text: "Great service, highly recommend. Friendly staff and excellent quality products. Will definitely be returning!",
    score: 2,
    name: "JohnDoe",
    city: "Sydney",
  },
  {
    title: "Impressive!",
    rating: 5,
    text: "Absolutely amazing! The service was impeccable, and the products exceeded my expectations. I'll be back!",
    score: 2,
    name: "James Stephens",
    city: "USA",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Create a ref for the component

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  return (
    <div className="font-sans relative w-full" ref={ref}>
      <section
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/assets/images/testimonial.jpg")',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="flex justify-center items-center mb-4">
            <motion.h2
              className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white m-6 sm:m-8 md:m-12 text-center"
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              What do our clients <br className="hidden sm:block" /> think of us?
            </motion.h2>

            <motion.span
              onClick={handlePrev}
              className="text-white text-3xl sm:text-4xl cursor-pointer hover:text-gray-400 ml-4 sm:ml-6"
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              ←
            </motion.span>

            <motion.span
              onClick={handleNext}
              className="text-white text-3xl sm:text-4xl cursor-pointer hover:text-gray-400 ml-2 sm:ml-4"
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              →
            </motion.span>
          </div>

          <div className="flex justify-center items-center overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-4 min-h-[250px] bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 mx-4 mb-8 md:mb-12`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Slide up when visible
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-green-500 text-lg sm:text-xl font-bold mb-2">
                      {testimonial.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-yellow-500 text-md sm:text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-3xl sm:text-4xl text-gray-300 font-bold">
                    {testimonial.score}
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{testimonial.text}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {testimonial.name}, {testimonial.city}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
