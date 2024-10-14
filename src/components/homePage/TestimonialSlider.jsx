import React, { useState } from 'react';

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
  {
    title: "Fantastic!",
    rating: 5,
    text: "Loved the experience. Great team and products. Highly recommended!",
    score: 2,
    name: "Sarah Lee",
    city: "New York",
  },
  {
    title: "Amazing!",
    rating: 5,
    text: "Best service I’ve ever received. Will definitely recommend to others.",
    score: 2,
    name: "Mike Wilson",
    city: "Los Angeles",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="font-sans py-16 relative">
      {/* Testimonial Section with Full-Screen Background Image */}
      <section
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/assets/images/testimonial.jpg")',
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute h-screen w-screen mt-[65px] inset-0 bg-black bg-opacity-40"></div>

        {/* Header with arrows after the heading */}
        <div className="flex justify-center items-center mb-10 relative z-10">
          {/* Header */}
          <h2 className="relative text-4xl font-bold text-white">
            What’s our clients <br /> think of us?
          </h2>

          {/* Left Arrow after the heading */}
          <span
            onClick={handlePrev}
            className="text-white text-4xl cursor-pointer hover:text-gray-400 ml-6"
          >
            ←
          </span>

          {/* Right Arrow after the heading */}
          <span
            onClick={handleNext}
            className="text-white text-4xl cursor-pointer hover:text-gray-400 ml-2"
          >
            →
          </span>
        </div>

        {/* Testimonial Cards (Display One on Mobile and Two on Larger Screens) */}
        <div className="relative z-10 flex justify-center overflow-x-hidden">
          <div className="flex space-x-4">
            {testimonials.map((testimonial, index) => {
              const isVisible = index === currentIndex || index === (currentIndex + 1) % testimonials.length;

              return (
                <div
                  key={index}
                  className={`p-4 min-h-[250px] bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 transition-all duration-300 ${
                    isVisible ? 'block' : 'hidden'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-green-500 text-xl font-bold mb-2">
                        {testimonial.title}
                      </h3>
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="text-yellow-500 text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Top-Right Cart Number */}
                    <span className="text-4xl text-gray-300 font-bold">
                      {testimonial.score}
                    </span>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.name}, {testimonial.city}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
