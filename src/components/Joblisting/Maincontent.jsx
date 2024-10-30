/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import imgs from "../../assets/Images/media_22.png";
import img1 from "../../assets/Images/media_23.png";
import img2 from "../../assets/Images/media_24.png";
import img3 from "../../assets/Images/media_25.png";
import img4 from "../../assets/Images/media_26.png";
import img5 from "../../assets/Images/media_33.png";
import img6 from "../../assets/Images/media_34.png";
import img7 from "../../assets/Images/media_35.png";
import img8 from "../../assets/Images/MarketingManager.png"
import img9 from "../../assets/Images/Softwareeng.png"
import img10 from "../../assets/Images/ContentWriter.png"
import img11 from "../../assets/Images/GraphicsDesigner.png"
import img12 from "../../assets/Images/Accountant.png"
import img13 from "../../assets/Images/ProductManager.png"
import img14 from "../../assets/Images/Datasciexp.png"
import img15 from "../../assets/Images/Entrysoft.png"
import img16 from "../../assets/Images/Juniorfrontdev.png"
import img17 from "../../assets/Images/Entrylevnetwork.png"
import img18 from "../../assets/Images/Embsofteng.png"
import img19 from "../../assets/Images/appseceng.png"
import img20 from "../../assets/Images/newgradsofteng.png"
import img21 from "../../assets/Images/MLeng.png"
import img22 from "../../assets/Images/entrysofteng.png"
import img23 from "../../assets/Images/vpproductmanage.png"
import img24 from "../../assets/Images/Technicalproman.png"
import img25 from "../../assets/Images/Busaccmanag.png"
import img26 from "../../assets/Images/Learninganddevelopment.png"
import img27 from "../../assets/Images/ChiefHR.png"

export default function Maincontent() {

  const jobs = [
    {
      title: "Developer in java and c++",
      type: "Fulltime",
      location: "Spain, Barcelona",
      salary: "$900 / Monthly",
      experience: "Fresher",
      imgSrc: imgs,
    },
    {
      title: "Animator and maya 3D",
      type: "Part time",
      location: "USA, NewYork",
      salary: "$100 / Weekly",
      experience: "Intermediate",
      imgSrc: img1,
    },
    {
      title: "Marketing SMM & SEO",
      type: "Part time",
      location: "USA, Alaska",
      salary: "$50 / Hourly",
      experience: "No-Experience",
      imgSrc: img2,
    },
    {
      title: "Developer in Javascript",
      type: "Full time",
      location: "USA, California",
      salary: "$800 / Monthly",
      experience: "Internship",
      imgSrc: img3,
    },
    {
      title: "Lead Product Designer",
      type: "Full time",
      location: "UK, London",
      salary: "$1200 / Monthly",
      experience: "Expert",
      imgSrc: img4,
    },
    {
      title: "Websites  Developers",
      type: "Fixed Price",
      location: "USA, Mountain view",
      salary: "$1500 / Monthly",
      experience: "Fresher",
      imgSrc: img5,
    },
    {
      title: "Jr Data Scientist",
      type: "freelance",
      location: "Germany, Berlin",
      salary: "$2500 / Weekly",
      experience: "Intermediate",
      imgSrc: img6,
    },
    {
      title: "UI/UX Designer",
      type: "Full time",
      location: "USA, Cupertino",
      salary: "$1800 / Monthly",
      experience: "No-Experience",
      imgSrc: img7,
    },
    {
      title: "Marketing Mgr",
      type: "Full time",
      location: "USA, Menlo Park",
      salary: "$3000 / Monthly",
      experience: "Internship",
      imgSrc: img8,
    },
    {
      title: "Software Engineer",
      type: "Part time",
      location: "USA, Redmond",
      salary: "$200 / Weekly",
      experience: "Expert",
      imgSrc: img9,
    },
    {
      title: "Contents Writers",
      type: "Freelance",
      location: "USA, Cupertino",
      salary: "$800 / Weekly",
      experience: "Internship",
      imgSrc: img10,
    },
    {
      title: "Graphic Designer",
      type: "Part time",
      location: "USA, San Jose",
      salary: "$1800 / Monthly",
      experience: "Expert",
      imgSrc: img11,
    },
    {
      title: "Accountant",
      type: "Full time",
      location: "USA, NewYork",
      salary: "$2500 / Monthly",
      experience: "No-Experience",
      imgSrc: img12,
    },
    {
      title: "Product Manager",
      type: "Fixed-Price",
      location: "USA, Palo Alto",
      salary: "$3500 / Monthly",
      experience: "Fresher",
      imgSrc: img13,
    },
    {
      title: "Data Sci Expert",
      type: "Full time",
      location: "Spain, Bercelona",
      salary: "$450 / Monthly",
      experience: "Fresher",
      imgSrc: img14,
    },
    {
      title: "Junior Devel",
      type: "Part time",
      location: "USA, NewYork",
      salary: "$500 / Weekly",
      experience: "Intermediate",
      imgSrc: img15,
    },
    {
      title: "Jr Front End Dev",
      type: "Part time",
      location: "USA, Alaska",
      salary: "$350 / Hourly",
      experience: "No-Experience",
      imgSrc: img16,
    },
    {
      title: "Entry level Net Eng",
      type: "Full time",
      location: "USA, California",
      salary: "$980 / Monthly",
      experience: "Internship",
      imgSrc: img17,
    },
    {
      title: "Embeded Softw Eng",
      type: "Full time",
      location: "UK, London",
      salary: "$1650 / Monthly",
      experience: "Expert",
      imgSrc: img18,
    },
    {
      title: "Appn Security Eng",
      type: "Fixed-Price",
      location: "USA, Mountain View",
      salary: "$1200 / Monthly",
      experience: "Fresher",
      imgSrc: img19,
    },
    {
      title: "Grad Soft Eng",
      type: "Freelance",
      location: "Germany, Berlin",
      salary: "$2300 / Weekly",
      experience: "Intermediate",
      imgSrc: img20,
    },
    {
      title: "M L Engineer",
      type: "Full time",
      location: "USA, Cupertino",
      salary: "$1700 / Monthly",
      experience: "No-Experience",
      imgSrc: img21,
    },
    {
      title: "Entry Soft Eng",
      type: "Part time",
      location: "USA, menlo Park",
      salary: "$3000 / Monthly",
      experience: "Internship",
      imgSrc: img22,
    },
    {
      title: "VP  Manager",
      type: "Part time",
      location: "USA, Alaska",
      salary: "$50 / Hourly",
      experience: "No-Experience",
      imgSrc: img23,
    },
    {
      title: "Tech Project Manager",
      type: "Freelance",
      location: "UK, Cupertino",
      salary: "$800 / Weekly",
      experience: "Internship",
      imgSrc: img24,
    },
    {
      title: "Business Acc Manager",
      type: "Part time",
      location: "USA, San Jose",
      salary: "$1800 / Monthly",
      experience: "Expert",
      imgSrc: img25,
    },
    {
      title: "Develop Manager",
      type: "Full time",
      location: "USA, NewYork",
      salary: "$2500 / Monthly",
      experience: "No-Experience",
      imgSrc: img26,
    },
    {
      title: "Human Resource officer",
      type: "Fixed-Price",
      location: "USA, Palo Alto",
      salary: "$3500 / Monthly",
      experience: "Fresher",
      imgSrc: img27,
    },
  ];

  const jobsPerPage = 8; // Number of jobs per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Get the jobs for the current page
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  // Handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };



  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animation
  }, []);

  const [showFilters, setShowFilters] = useState(false);
  const [showLocation, setShowLocation] = useState(true);
  const [showJobType, setShowJobType] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showSalary, setShowSalary] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showTags, setShowTags] = useState(true);

  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState([]);
  const [experience, setExperience] = useState([]);
  const [salary, setSalary] = useState(0);
  const [category, setCategory] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Function to toggle selection in a checkbox list
  const toggleSelection = (setter, state, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Function to toggle tag selection
  const toggleTagSelection = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  // Function to log all selected filters to the console
  const handleApplyFilters = () => {
    const selectedFilters = {
      location,
      jobType,
      experience,
      salary,
      category,
      selectedTags,
    };
    console.log("Selected Filters:", selectedFilters);
  };

  // Function to reset all filters
  const handleReset = () => {
    setLocation("");
    setJobType([]);
    setExperience([]);
    setSalary(0);
    setCategory([]);
    setSelectedTags([]);
    console.log("Filters have been reset.");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-x-8 md:space-y-0">
        {/* Left Sidebar: Filter Section */}
        <div className="w-full md:w-1/3 lg:w-1/5 bg-green-50 p-4 md:p-6 rounded-lg lg:ml-14">

          <h3 className="text-xl md:text-2xl font-semibold mb-4">Filter By</h3>

          {/* Dropdown Button for Small and Medium Screens */}
          <button
            className="md:hidden bg-green-500 text-white py-2 px-4 rounded-lg mb-4 w-full text-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Filter Options */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            {/* Location Filter */}
            <div className="mb-4 md:mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-semibold">Location</label>
                <button
                  className="text-green-500"
                  onClick={() => setShowLocation(!showLocation)}
                >
                  {showLocation ? "−" : "+"}
                </button>
              </div>
              {showLocation && (
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Select Location</option>
                  <option>Spain, Barcelona</option>
                  <option>USA, New York</option>
                  <option>USA, Alaska</option>
                  <option>USA, California</option>
                  <option>UK, London</option>
                  <option>USA, Mountain View</option>
                  <option>Germany, Berlin</option>
                </select>
              )}
            </div>

            {/* Job Type Filter */}
            <div className="mb-4 md:mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-semibold">Job Type</label>
                <button
                  className="text-green-500"
                  onClick={() => setShowJobType(!showJobType)}
                >
                  {showJobType ? "−" : "+"}
                </button>
              </div>
              {showJobType && (
                <ul>
                  {["Fulltime", "Part time", "Fixed-Price", "Freelance"].map(
                    (type) => (
                      <li
                        key={type}
                        className="flex justify-between items-center mb-2"
                      >
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={jobType.includes(type)}
                            onChange={() =>
                              toggleSelection(setJobType, jobType, type)
                            }
                          />
                          <span>{type}</span>
                        </label>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            {/* Experience Filter */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-semibold">Experience</label>
                <button
                  className="text-green-500"
                  onClick={() => setShowExperience(!showExperience)}
                >
                  {showExperience ? "−" : "+"}
                </button>
              </div>
              {showExperience && (
                <ul>
                  {[
                    "Fresher",
                    "Intermediate",
                    "No Experience",
                    "Internship",
                    "Expert",
                  ].map((exp) => (
                    <li
                      key={exp}
                      className="flex justify-between items-center mb-2"
                    >
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={experience.includes(exp)}
                          onChange={() =>
                            toggleSelection(setExperience, experience, exp)
                          }
                        />
                        <span>{exp}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Salary Filter */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Salary</h2>
                <button
                  className="text-green-600"
                  onClick={() => setShowSalary(!showSalary)}
                >
                  {showSalary ? "−" : "+"}
                </button>
              </div>
              {showSalary && (
                <>
                  <div className="flex space-x-2 mt-4">
                    <input
                      type="text"
                      value="0"
                      className="w-16 border text-center rounded-lg p-1"
                      readOnly
                    />
                    <span> - </span>
                    <input
                      type="text"
                      value={salary}
                      className="w-16 border text-center rounded-lg p-1"
                      readOnly
                    />
                    <span>USD</span>
                  </div>
                  <input
                    type="range"
                    className="w-full mt-4"
                    min="0"
                    max="5000"
                    step="100"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">Category</h2>
                <button
                  className="text-green-600"
                  onClick={() => setShowCategory(!showCategory)}
                >
                  {showCategory ? "−" : "+"}
                </button>
              </div>
              {showCategory && (
                <ul className="mt-4 space-y-2">
                  {[
                    "Developer",
                    "Coder",
                    "Finance",
                    "Accounting",
                    "Design",
                  ].map((cat) => (
                    <li key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={category.includes(cat)}
                        onChange={() =>
                          toggleSelection(setCategory, category, cat)
                        }
                      />
                      <span className="ml-2">{cat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tags Filter */}
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">Tags</h2>
                <button
                  className="text-green-600"
                  onClick={() => setShowTags(!showTags)}
                >
                  {showTags ? "−" : "+"}
                </button>
              </div>
              {showTags && (
                <div className="flex flex-wrap mt-4 gap-2 cursor-pointer">
                  {[
                    "java",
                    "developer",
                    "finance",
                    "accounting",
                    "design",
                    "seo",
                    "javascript",
                    "designer",
                    "web",
                    "frontend",
                    "data",
                    "analytics",
                    "ui",
                    "ux",
                    "marketing",
                    "management",
                    "software",
                    "engineering",
                    "writing",
                    "blogging",
                    "graphics",
                    "illustration",
                    "product",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full cursor-pointer ${
                        selectedTags.includes(tag)
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                      onClick={() => toggleTagSelection(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Reset and Apply Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-[#31795A] text-white w-full mt-6 h-[45px] rounded-lg hover:bg-green-500 font-semibold"
              onClick={handleReset}
            >
              Reset Filter
            </button>
            <button
              className="bg-[#31795A] text-white w-full mt-6 h-[45px] rounded-lg hover:bg-green-500 font-semibold"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Right Section: Job Listings */}
        <div className="w-full md:w-2/3 px-4 lg:pl-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-lg mb-4 md:mb-0">
          All <strong>{jobs.length}</strong> jobs found
        </p>
        <div className="flex items-center space-x-2 md:space-x-4">
          <label className="text-lg">Sort:</label>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option>Price Short</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <button className="p-2 bg-gray-200 rounded-md">🔲</button>
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {currentJobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md lg:h-[130px]"
            data-aos="fade-up"
          >
            <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
              <span className="text-3xl">
                <img src={job.imgSrc} alt="" />
              </span>
              <div>
                <p className="text-green-500 font-semibold">{job.type}</p>
                <p className="text-xl font-semibold">{job.title}</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end mb-4 md:mb-0">
              <p className="text-lg">{job.location}</p>
              <p className="text-gray-500">
                {job.salary} . {job.experience}
              </p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <FaBookmark className="text-gray-500" />
              <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                APPLY
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-between mt-4">
        {/* Pagination Numbers */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "text-white bg-green-600"
                  : "text-gray-600 bg-gray-200"
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Pagination Info */}
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{(currentPage - 1) * jobsPerPage + 1}</span>{" "}
          to{" "}
          <span className="font-semibold">
            {Math.min(currentPage * jobsPerPage, jobs.length)}
          </span>{" "}
          of <span className="font-semibold">{jobs.length}</span>
        </div>
      </div>
    </div>
      </div>

      <div>
  {/* Horizontal line */}
  <span className="block w-full border-t border-gray-600 mt-8 sm:mt-16 md:mt-28"></span>

  <h1
    className="text-3xl sm:text-4xl md:text-5xl font-serif px-4 sm:px-8 md:px-44 mt-0 sm:mt-14"
    data-aos="fade-up"
  >
    Most Complete Job Portal
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-thin px-4 sm:px-8 md:px-44 mt-4">
    Signup and start finding your job or talents
  </p>

  <div className="flex flex-col sm:flex-row justify-center md:justify-start lg:justify-end items-center px-4 sm:px-8 md:px-44 mt-8 sm:mt-16 md:mt-12 lg:-mt-16 space-y-4 sm:space-y-0 md:space-x-6 lg:space-x-4">
    {/* "Looking for job?" Button */}
    <button className="w-44 h-12 border border-black text-lg rounded-lg hover:bg-[#244034] hover:text-white">
      Looking for job?
    </button>

    {/* "Post a Job" Button */}
    <button className="w-40 h-12 border border-black text-lg rounded-lg bg-[#D2F34C] hover:bg-[#244034] hover:text-white">
      Post a Job
    </button>
  </div>

  {/* Horizontal line */}
  <span className="block w-full border-t border-gray-600 mt-8 sm:mt-16 md:mt-12"></span>
</div>

    </>
  );
}
