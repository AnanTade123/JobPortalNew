export default function Header() {
  return (
    <>
      <div className="bg-[#244034] w-full h-[400px] relative ">
        {/* Main Title */}
        <h1 className="text-[28px] md:text-[40px] lg:text-[58px] text-white font-semibold font-serif absolute top-[50px] md:top-[20px] lg:top-[90px] left-4 md:left-[320px] lg:left-[620px] text-center lg:text-left">
          Job Listing
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl lg:text-2xl absolute left-4 md:left-[250px] lg:left-[500px] top-[130px] md:top-[80px] lg:top-[200px] text-center lg:text-left ">
          We delivered blazing fast & striking work solution
        </p>

        {/* Search Box */}
        <div className="w-[80%] lg:w-[881px] rounded-lg absolute left-10 sm:left-[20px] md:left-[80px] lg:left-[320px] top-[180px] md:top-[150px] lg:top-[260px] h-auto">
  <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md">
    {/* Location Input */}
    <div className="flex-1 px-4 py-3 lg:py-7 border-b lg:border-b-0 lg:border-r border-gray-300 h-[60px] sm:h-[80px] lg:h-[115.5px]">
      <label htmlFor="location" className="block text-gray-500 text-sm mb-1">
        What are you looking for?
      </label>
      <select
        id="What are you looking for"
        className="text-lg lg:text-xl outline-none w-full bg-white"
      >
        <option>Spain, Barcelona</option>
        <option>USA, New York</option>
        <option>USA, Alaska</option>
        <option>USA, California</option>
        <option>UK, London</option>
        <option>USA, Mountain View</option>
      </select>
    </div>

    {/* Category Dropdown */}
    <div className="flex-1 px-4 py-3 lg:py-7 border-b lg:border-b-0 lg:border-r border-gray-300 h-[60px] sm:h-[60px] lg:h-[115.5px]">
      <label htmlFor="category" className="block text-gray-500 text-sm mb-1">
        Category
      </label>
      <select
        id="category"
        className="text-lg lg:text-xl outline-none w-full bg-white"
      >
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
      </select>
    </div>

    {/* Search Button */}
    <button className="bg-lime-400 text-black font-semibold px-6 py-3 w-full h-[50px] sm:h-[60px] lg:w-[140px] lg:h-[115.5px] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
      SEARCH
    </button>
  </div>
</div>

      </div>
    </>
  );
}
