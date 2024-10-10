/* eslint-disable no-unused-vars */
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
  return (
    <>
      <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-x-8 md:space-y-0">
        {/* Left Sidebar: Filter Section */}
        <div className="w-full md:w-1/3 bg-green-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Filter By</h3>

          {/* Location Filter */}
          <div className="mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-lg font-semibold">Location</label>
              <button className="text-green-500">-</button>
            </div>
            <select className="w-full p-2 border border-gray-300 rounded-lg bg-white">
              <option>Spain, Barcelona</option>
              <option>USA, New York</option>
              <option>USA, Alaska</option>
              <option>USA, California</option>
              <option>UK, London</option>
              <option>USA, Mountain View</option>
              <option>Germany, Berlin</option>
              <option>USA, Cupertino</option>
              <option>USA, Menlo Park</option>
              <option>UK, Cupertino</option>
              <option>USA, San Jose</option>
              <option>USA, New York</option>
              <option>USA, Palo Alto</option>
            </select>
          </div>

          {/* Job Type Filter */}
          <div className="mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-lg font-semibold">Job Type</label>
              <button className="text-green-500">-</button>
            </div>
            <ul>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Fulltime</span>
                </label>
                <span>12</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Part time</span>
                </label>
                <span>8</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Fixed-Price</span>
                </label>
                <span>4</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Freelance</span>
                </label>
                <span>4</span>
              </li>
            </ul>
          </div>

         {/*Experience*/}
         <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-lg font-semibold">Job Type</label>
              <button className="text-green-500">-</button>
            </div>
            <ul>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Fresher</span>
                </label>
                <span>6</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Intermediate</span>
                </label>
                <span>4</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>No Experience</span>
                </label>
                <span>6</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Internship</span>
                </label>
                <span>6</span>
              </li>
              <li className="flex justify-between items-center mb-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Expert</span>
                </label>
                <span>6</span>
              </li>
            </ul>
          </div>

          {/*Salary*/}
          <div className="border p-4 bg-green-50 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Salary</h2>
              <button className="text-green-600">−</button>
            </div>
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
                value="3500"
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
              value="3500"
            />

            <div className="flex justify-around mt-4">
              <button className="px-4 py-1 bg-white rounded-full">
                Weekly
              </button>
              <button className="px-4 py-1 bg-white rounded-full">
                Monthly
              </button>
              <button className="px-4 py-1 bg-white rounded-full">
                Hourly
              </button>
            </div>
          </div>
          {/*category Section*/}
          <div className="border p-4 bg-green-50 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Category</h2>
              <button className="text-green-600">−</button>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Developer</span>
                <span className="ml-auto text-black bg-white rounded-full">
                  6
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Coder</span>
                <span className="ml-auto text-black bg-white rounded-full">
                  2
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Finance</span>
                <span className="ml-auto text-black bg-white rounded-full">
                  6
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Accounting</span>
                <span className="ml-auto text-black bg-white rounded-full">
                  4
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Design</span>
                <span className="ml-auto text-black bg-white rounded-full">
                  2
                </span>
              </label>
            </div>
            <button className="w-full bg-gray-600 text-white py-2 mt-4 rounded-lg hover:bg-green-400">
              − Show More
            </button>
          </div>

          {/*Tag section*/}
          <div className="border p-4 bg-green-50 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Tags</h2>
              <button className="text-green-600">−</button>
            </div>
            <div className="flex flex-wrap mt-4 gap-2">
              <span className="bg-white px-3 py-1 rounded-full">java</span>
              <span className="bg-white px-3 py-1 rounded-full">developer</span>
              <span className="bg-white px-3 py-1 rounded-full">finance</span>
              <span className="bg-white px-3 py-1 rounded-full">
                accounting
              </span>
              <span className="bg-white py-1 rounded-full">design</span>
              <span className="bg-white px-3 py-1 rounded-full">seo</span>
              <span className="bg-white px-3 py-1 rounded-full">
                javascript
              </span>
              <span className="bg-white px-3 py-1 rounded-full">designer</span>
              <span className="bg-white px-3 py-1 rounded-full">web</span>
              <span className="bg-white px-3 py-1 rounded-full">frontend</span>
              <span className="bg-white px-3 py-1 rounded-full">data</span>
              <span className="bg-white px-3 py-1 rounded-full">analytics</span>
              <span className="bg-white px-3 py-1 rounded-full">ui</span>
              <span className="bg-white px-3 py-1 rounded-full">ux</span>
              <span className="bg-white px-3 py-1 rounded-full">marketing</span>
              <span className="bg-white px-3 py-1 rounded-full">
                management
              </span>
              <span className="bg-white px-3 py-1 rounded-full">software</span>
              <span className="bg-white px-3 py-1 rounded-full">
                engineering
              </span>
              <span className="bg-white px-3 py-1 rounded-full">writing</span>
              <span className="bg-white px-3 py-1 rounded-full">blogging</span>
              <span className="bg-white px-3 py-1 rounded-full">graphics </span>
              <span className="bg-white px-3 py-1 rounded-full">
                illustartion
              </span>
              <span className="bg-white px-3 py-1 rounded-full">product</span>
            </div>
          </div>

          

          {/* Reset Button */}
          <button className="bg-[#31795A] text-white w-full mt-6 h-[45px] rounded-lg hover:bg-green-500 font-semibold">
            Reset Filter
          </button>
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
                  <p className="text-xl font-semibold">
                    Animator and maya 3D
                  </p>
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
                  <p className="text-xl font-semibold">
                    Marketing SMM & SEO
                  </p>
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
                  <p className="text-xl font-semibold">
                    UI&UX Designer
                  </p>
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
