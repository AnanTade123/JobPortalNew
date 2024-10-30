import { useState } from "react";


export default function Header(){
      // State for storing location and category
  const [filters, setFilters] = useState({
    location: '',
    category: ''
  });

  // Handler for location change
  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, location: newLocation };
      console.log("Selected Filters:", updatedFilters); // Log the combined filters object
      return updatedFilters;
    });
  };

  // Handler for category change
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, category: newCategory };
      console.log("Selected Filters:", updatedFilters); // Log the combined filters object
      return updatedFilters;
    });
  };
    return(
        <>
<div className="bg-[#244034] w-full h-[280px] relative">
        {/* Main Title */}
        <h1 className="text-[28px] md:text-[40px] lg:text-[58px] text-white font-semibold font-serif absolute top-[30px] md:top-[20px] lg:top-[20px] left-[145px] md:left-[320px] lg:left-[620px] text-center lg:text-left">
          Candidates
        </h1>

        {/* Subtitle */}
        <p className="text-white text-md md:text-xl lg:text-2xl absolute left-8 md:left-[210px] lg:left-[500px] top-[80px] md:top-[90px] lg:top-[110px]">
          Find you desire talents & make your work done
        </p>

        {/* Search Box */}
        <div className="w-[80%] lg:w-[881px] rounded-lg absolute left-10 sm:left-[20px] md:left-[80px] lg:left-[320px] top-[140px] md:top-[150px] lg:top-[170px] h-auto">
          <div className="flex flex-wrap bg-white rounded-lg shadow-md">
            {/* Location Input */}
            <div className="flex-1 px-4 py-3 lg:py-4 border-b lg:border-b-0 lg:border-r border-gray-300 h-auto sm:h-auto lg:h-[80px]">
              <label htmlFor="location" className="block text-gray-500 text-sm mb-1">
                Location
              </label>
              <select
                id="location"
                className="text-lg lg:text-xl outline-none w-full bg-white"
                value={filters.location}
                onChange={handleLocationChange} // Call location change handler
              >
                <option value="">Select Location</option>
                <option>Spain, Barcelona</option>
                <option>USA, New York</option>
                <option>USA, Alaska</option>
                <option>USA, California</option>
                <option>UK, London</option>
                <option>USA, Mountain View</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="flex-1 px-4 py-3 lg:py-4 border-b lg:border-b-0 lg:border-r border-gray-300 h-auto sm:h-auto lg:h-[80px]">
              <label htmlFor="category" className="block text-gray-500 text-sm mb-1">
                Category
              </label>
              <select
                id="category"
                className="text-lg lg:text-xl outline-none w-full bg-white"
                value={filters.category}
                onChange={handleCategoryChange} // Call category change handler
              >
                <option value="">Select Category</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-lime-400 text-black font-semibold px-6 py-3 w-full sm:w-auto h-[50px] sm:h-[60px] lg:w-[120px] lg:h-[80px] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none md:h-[80px]">
              SEARCH
            </button>
          </div>
        </div>
      </div>
        </>
    )
}