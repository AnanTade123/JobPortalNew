/* eslint-disable no-unused-vars */
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

export default function Maincontent() {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTagSelection = (tag) => {
    const isSelected = selectedTags.includes(tag);
    const newTags = isSelected
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    console.log("Selected Tags:", newTags); // Log selected tags in array format
  };

  // State for each filter
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState([]);
  const [experience, setExperience] = useState([]);
  const [salary, setSalary] = useState(3500);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);

  const [showLocation, setShowLocation] = useState(false);
  const [showJobType, setShowJobType] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showFilters, setShowFilters] = useState(false); 

  // Function to handle filter application
  const applyFilters = () => {
    const filters = {
      location,
      jobType,
      experience,
      salary,
      category,
      tags,
    };
    console.log("Applied Filters:", filters);
  };

  // Function to handle reset
  const handleReset = () => {
    setLocation("");
    setJobType([]);
    setExperience([]);
    setSalary(3500);
    setCategory([]);
    setTags([]);
    console.log("Filters Reset");
  };

  // Helper function to toggle checkbox selections
  const toggleSelection = (setState, state, value) => {
    setState((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };
  return (
    <>
      <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-x-8 md:space-y-0">
        {/* Left Sidebar: Filter Section */}
        <div className="w-full md:w-1/3 bg-green-50 p-4 md:p-6 rounded-lg">
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
          onClick={() => {
            setShowLocation(!showLocation);
            console.log("Location filter toggled:", showLocation);
          }}
        >
          {showLocation ? "−" : "+"}
        </button>
      </div>
      {showLocation && (
        <select
          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            console.log("Selected Location:", e.target.value);
          }}
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
          onClick={() => {
            setShowJobType(!showJobType);
            console.log("Job Type filter toggled:", showJobType);
          }}
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
                    onChange={() => {
                      toggleSelection(setJobType, jobType, type);
                      console.log("Selected Job Type:", type);
                    }}
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
          onClick={() => {
            setShowExperience(!showExperience);
            console.log("Experience filter toggled:", showExperience);
          }}
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
                  onChange={() => {
                    toggleSelection(setExperience, experience, exp);
                    console.log("Selected Experience Level:", exp);
                  }}
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
          onClick={() => {
            setShowSalary(!showSalary);
            console.log("Salary filter toggled:", showSalary);
          }}
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
            onChange={(e) => {
              setSalary(e.target.value);
              console.log("Selected Salary:", e.target.value);
            }}
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
          onClick={() => {
            setShowCategory(!showCategory);
            console.log("Category filter toggled:", showCategory);
          }}
        >
          {showCategory ? "−" : "+"}
        </button>
      </div>
      {showCategory && (
        <ul className="mt-4 space-y-2">
          {["Developer", "Coder", "Finance", "Accounting", "Design"].map(
            (cat) => (
              <li key={cat} className="flex items-center">
                <input
                  type="checkbox"
                  checked={category.includes(cat)}
                  onChange={() => {
                    toggleSelection(setCategory, category, cat);
                    console.log("Selected Category:", cat);
                  }}
                />
                <span className="ml-2">{cat}</span>
              </li>
            )
          )}
        </ul>
      )}
    </div>

    {/* Tags Filter */}
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Tags</h2>
        <button
          className="text-green-600"
          onClick={() => {
            setShowTags(!showTags);
            console.log("Tags filter toggled:", showTags);
          }}
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
  </div>
</div>



        {/* Right Section: Job Listings */}
        <div className="w-full md:w-2/3 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-lg mb-4 md:mb-0">
              All <strong>28</strong> jobs found
            </p>
            <div className="flex items-center space-x-2 md:space-x-4">
              <label className="text-lg">Sort:</label>
              <select className="p-2 border border-gray-300 rounded-lg">
                <option>Price Short</option>
              </select>
              <button className="p-2 bg-gray-200 rounded-md">🔲</button>
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {/* Job 1 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={imgs} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Fulltime</p>
                  <p className="text-xl font-semibold">
                    Developer java and c++
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">Spain, Barcelona</p>
                <p className="text-gray-500">$900 / Monthly . Fresher</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job2*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img1} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Part time</p>
                  <p className="text-xl font-semibold">Animator and maya 3D</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">USA, NewYork</p>
                <p className="text-gray-500">$100 / Weekly . Intermediate</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job 3*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img2} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Part time</p>
                  <p className="text-xl font-semibold">Marketing SMM & SEO</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">USA, Alaska</p>
                <p className="text-gray-500">$50 / Hourly . No-Experience</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job3*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img3} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Fulltime</p>
                  <p className="text-xl font-semibold">
                    Developer javascript c+
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">USA, California</p>
                <p className="text-gray-500">$800 / Monthly . Internship</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job4*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img4} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Fulltime</p>
                  <p className="text-xl font-semibold">
                    Lead & Product Designer
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">UK,London</p>
                <p className="text-gray-500">$1200 / Monthly . Expert</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job5*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img5} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Fixed-Price</p>
                  <p className="text-xl font-semibold">
                    Web Developer & applica
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">USA, Mountainview</p>
                <p className="text-gray-500">$1500 / Monthly . Fresher</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*Job6*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img6} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Freelance</p>
                  <p className="text-xl font-semibold">
                    Data Scientist analyst
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">Germany,Berlin</p>
                <p className="text-gray-500">$2500 / Weekly . Intermediate</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>

            {/*job7*/}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                <span className="text-3xl">
                  <img src={img1} alt="" />
                </span>
                <div>
                  <p className="text-green-500 font-semibold">Fulltime</p>
                  <p className="text-xl font-semibold">UI&UX Designer</p>
                </div>
              </div>
              <div className="flex flex-col md:items-end mb-4 md:mb-0">
                <p className="text-lg">USA, Cupertino</p>
                <p className="text-gray-500">$1800 / Monthly . No-Experience</p>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <FaBookmark className="text-gray-500" />
                <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="text-center md:text-left mt-20 ">
            <h1 className="font-serif text-2xl md:text-4xl text-black lg:text-6xl">
              Most Complete Job Portal.
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 mt-2">
              Signup and find your jobs and talents
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <button className="w-full md:w-auto px-4 py-2 border border-black text-lg rounded-lg hover:bg-[#244034] hover:text-white">
              Looking for job?
            </button>
            <button className="w-full md:w-auto px-4 py-2 border border-black text-lg rounded-lg bg-[#D2F34C] hover:bg-[#244034] hover:text-white">
              Post a job
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
