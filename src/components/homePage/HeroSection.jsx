import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    category: ''
  });

  const [stats, setStats] = useState({ jobs: 0, clients: 0, payout: 0 });

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle search button click
  const handleSearch = () => {
    console.log(searchData);
  };

  // Trigger animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Count-up effect for stats
  useEffect(() => {
    if (inView) {
      const intervalJobs = setInterval(() => {
        setStats(prev => ({
          jobs: Math.min(prev.jobs + 70000, 7000000),
          clients: Math.min(prev.clients + 100, 30000),
          payout: Math.min(prev.payout + 130000000, 13000000000)
        }));
      }, 50);

      return () => clearInterval(intervalJobs);
    }
  }, [inView]);

  // Utility function to format numbers
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + ' billion';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + ' million';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k+';
    } else {
      return num.toString();
    }
  };

  // Framer Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.section 
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden"
      style={{ margin: 0, padding: 0 }}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="src/assets/images/video.mov"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover' }}
      ></video>

      {/* Overlay for better contrast (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

      {/* Content on top of the video */}
      <div className="relative z-10 text-center text-white space-y-4" style={{ maxHeight: '100vh', overflow: 'hidden', padding: '0 16px' }}>
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        >
          Find & Hire Experts <br /> for any Job.
        </motion.h1>
        <motion.p
          className="lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.8, duration: 1 } }}
        >
          Unlock your potential with quality jobs & earn from world-leading brands.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        >
          {/* Input for job title */}
          <input
            type="text"
            name="jobTitle"
            placeholder="Your job title, keyword"
            className="p-4 w-80 lg:w-96 rounded-lg text-black focus:outline-none"
            onChange={handleInputChange}
          />

          {/* Select for category */}
          <select
            name="category"
            className="p-4 w-80 lg:w-96 rounded-lg text-black"
            onChange={handleInputChange}
            value={searchData.category}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Marketing">Marketing</option>
          </select>

          {/* Search Button */}
          <button
            className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.2, duration: 1 } }}
        >
          <div>
            <h2 className="text-3xl font-bold">{formatNumber(stats.jobs)}</h2>
            <p>Completed Jobs</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{formatNumber(stats.clients)}</h2>
            <p>Worldwide Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{formatNumber(stats.payout)}</h2>
            <p>Dollar Payout</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
