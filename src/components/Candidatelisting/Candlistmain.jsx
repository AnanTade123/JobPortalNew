/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaList } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import img1 from "../../assets/Images/cand1.jpg";
import img2 from "../../assets/Images/cand2.jpg";
import img3 from "../../assets/Images/cand3.jpg";
import img4 from "../../assets/Images/cand4.jpg";
import img5 from "../../assets/Images/cand5.jpg";
import img6 from "../../assets/Images/cand6.jpg";
import img7 from "../../assets/Images/cand7.jpg";
import img8 from "../../assets/Images/cand8.jpg";
import img9 from "../../assets/Images/cand9.jpg";


export default function Candlistmain(){
    const candidates = [
        {
          name: "Julia Ark",
          title: "Graphic Designer",
          location: "California, US",
          salary: "$30k/yr",
          imgSrc: img1,
          skills: ["Photoshop", "Illustrator", "InDesign"],
        },
        {
          name: "Lucille Whitley",
          title: "Javascript Developer",
          location: "London, UK",
          salary: "$3k/mo",
          imgSrc: img2,
          skills: ["JavaScript", "React.js", "Node.js"],
        },
        {
          name: "John Doe",
          title: "UI/UX Designer",
          location: "Dubai, UAE",
          salary: "$30k/wk",
          imgSrc: img3,
          skills: ["Figma", "Sketch", "Prototyping"],
        },
        {
          name: "Larry Evans",
          title: "Graphic Designer",
          location: "New York, US",
          salary: "$30k-$50k/mo",
          imgSrc: img4,
          skills: ["Photoshop", "CorelDRAW", "InDesign"],
        },
        {
          name: "Devin Anderson",
          title: "Full Stack Developer",
          location: "Berlin, Germany",
          salary: "$4k/mo",
          imgSrc: img5,
          skills: ["JavaScript", "React.js", "Node.js", "MongoDB"],
        },
        {
          name: "Sylvia Schenk",
          title: "Content Writer",
          location: "Paris, France",
          salary: "$2k/mo",
          imgSrc: img6,
          skills: ["SEO Writing", "Copywriting", "Editing"],
        },
        {
          name: "Shani Miller",
          title: "Backend Developer",
          location: "Sydney, Aust",
          salary: "$5k/mo",
          imgSrc: img7,
          skills: ["Node.js", "Express", "MongoDB"],
        },
        {
          name: "Mark Benson",
          title: "Product Manager",
          location: "Singapore",
          salary: "$8k/mo",
          imgSrc: img8,
          skills: ["Agile", "Product Roadmap", "Scrum"],
        },
        {
          name: "Maan Reese",
          title: "Data Entry",
          location: "California",
          salary: "$8k/mo",
          imgSrc: img9,
          skills: ["Telemarketing", "Finance", "Sales"],
        },
        {
          name: "Ralph Espino",
          title: "Artist",
          location: "France",
          salary: "$9k/mo",
          imgSrc: img3,
          skills: ["Design", "Digital", "UI"],
        },
      ];
    
      const jobsPerPage = 8; // Number of candidates per page
      const [currentPage, setCurrentPage] = useState(1);
    
      const [sortOption, setSortOption] = useState("New");
    
      const handleSortChange = (e) => {
        setSortOption(e.target.value);
      };
    
      // Calculate the total number of pages
      const totalPages = Math.ceil(candidates.length / jobsPerPage);
    
      // Get the candidates for the current page
      const currentJobs = candidates.slice(
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
    return(
        <>
        <div className="container mx-auto p-4 ">
      <div className="flex items-center justify-between bg-white p-4 rounded-md ">
      {/* Filter Button */}
      <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
        <FiFilter className="mr-2" />
        Filter
      </button>

      {/* Candidates Count */}
      <p className="text-gray-600 text-sm">
        All <span className="text-black font-semibold">1,270</span> candidates found
      </p>

      {/* Sorting and View Icons */}
      <div className="flex items-center space-x-4">
        {/* Sorting Dropdown */}
        <div className="flex items-center space-x-2">
          <p className="text-gray-600">Sort:</p>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="New">New</option>
            <option value="Popular">Popular</option>
            <option value="Rating">Rating</option>
          </select>
        </div>

        {/* View Icon (List) */}
        <button className="text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-100">
          <FaList />
        </button>
      </div>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentJobs.map((candidate, index) => (
            <div
              className="job-card border p-4 rounded-lg shadow-md hover:shadow-lg"
              key={index}
              data-aos="fade-up"
            >
              <div className="flex flex-col items-center">
                <img
                  src={candidate.imgSrc}
                  alt={candidate.title}
                  className="w-24 h-24 object-cover rounded-full mb-2"
                />
                <h3 className="text-lg font-semibold text-center">{candidate.name}</h3>
                <p className="text-gray-600 text-center">{candidate.title}</p>

                {/* Skills Section */}
                <div className="flex flex-col items-center mt-2">
                  <p className="text-gray-600 ">Skills:</p>
                  <p className="text-black ">{candidate.skills.join(", ")}</p>
                </div>

                {/* Location Section */}
                <div className="flex flex-col items-center mt-2">
                  <p className="text-gray-600 ">Location:</p>
                  <p className="text-black ">{candidate.location}</p>
                </div>

                {/* Salary Section */}
                <div className="flex flex-col items-center mt-2">
                  <p className="text-gray-600 ">Salary:</p>
                  <p className="text-black ">{candidate.salary}</p>
                </div>
              </div>

              {/* Buttons: View Profile and Message */}
              <div className="flex justify-center mt-4 space-x-2">
                <button className="bg-[#31795A] text-white px-4 py-2 rounded-full hover:bg-green-600">
                  View Profile
                </button>
                <button className="bg-white text-[#31795A] px-4 py-2 rounded-full hover:bg-green-600 border border-gray-700 hover:text-white">
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination mt-6 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 mx-1 border rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
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
      </div>
        </>
    )
}