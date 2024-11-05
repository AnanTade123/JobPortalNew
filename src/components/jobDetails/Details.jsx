import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaRegCopy } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Details() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const jobSections = [
    {
      id: 1,
      title: "Overview",
      content: [
        "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Please indicate which location(s) you're interested.",
      ],
    },
    {
      id: 2,
      title: "Job Description",
      content: [
        "As a Product Designer at WillowTree, you’ll give form to ideas by being the voice and owner of product decisions. You’ll drive the design direction, and then make it happen!",
        "We understand our responsibility to create a diverse, equitable, and inclusive place within the tech industry, while pushing to make our industry more representative.",
      ],
    },
    {
      id: 3,
      title: "Responsibilities",
      content: [
        "Collaborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Managers.",
        "Co-lead ideation sessions, workshops, demos, and presentations with clients on-site.",
        "Push for and create inclusive, accessible design for all.",
        "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.",
        "Sketch, wireframe, build IA, motion design, and run usability tests.",
        "Design pixel perfect responsive UI’s and understand that adopting common interface pattern is better for UX than reinventing the wheel.",
        "Ensure content strategy and design are perfectly in-sync.",
        "Give and receive design critique to help constantly refine and push our work.",
      ],
    },
    {
      id: 4,
      title: "Required Skills",
      content: [
        "You’ve been designing digital products for 2+ years.",
        "A portfolio that exemplifies strong visual design and a focus on defining the user experience.",
        "You’ve proudly shipped and launched several products.",
        "You have some past experience working in an agile environment – Think two-week sprints.",
        "Experience effectively presenting and communicating your design decisions to clients and team members.",
        "Up-to-date knowledge of design software like Figma, Sketch, etc.",
      ],
    },
    {
      id: 5,
      title: "Benefits",
      content: [
        "We are a remote-first company.",
        "Vacation stipend.",
        "Unlimited paid vacation and paid company holidays.",
        "Monthly wellness/gym stipend.",
        "Experience effectively presenting and communicating your design decisions to clients and team members.",
      ],
    },
  ];

  const handleApplyNowClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmApply = () => {
    setIsModalOpen(false);
    alert("You have successfully applied!"); // Replace with actual apply logic
  };

  const handleCancelApply = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20 px-4 lg:px-20 max-w-[1540px] mx-auto">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full p-4">
        <div className="flex gap-1 text-[16px]">
          <p className="text-[#00000080]">18 Jul 2024 by </p>
          <p className="text-[#212529]">Slack</p>
        </div>

        <p className="text-[24px] sm:text-[36px]">
          Developer & expert in Java C++
        </p>

        <div className="flex space-x-4 mt-5">
          <button className="w-[120px] h-[35px] bg-[#31795A1F] flex items-center justify-center space-x-2">
            <IoLogoFacebook />
            <span>Facebook</span>
          </button>
          <button className="w-[120px] h-[35px] bg-[#31795A1F] flex items-center justify-center space-x-2">
            <FaTwitter />
            <span>Twitter</span>
          </button>
          <button className="w-[120px] h-[35px] bg-[#31795A1F] flex items-center justify-center space-x-2">
            <FaRegCopy />
            <span>Copy</span>
          </button>
        </div>

        {/* Job Sections */}
        <div>
          {jobSections.map((section) => (
            <div
              key={section.id}
              className="mt-8 p-6 lg:p-10 border border-black rounded-3xl"
            >
              <div className="flex gap-2 items-center">
                <div className="h-[25px] w-[25px] bg-[#31795a] rounded-full text-white flex items-center justify-center">
                  {section.id}
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold">
                  {section.title}
                </h3>
              </div>

              {section.title === "Responsibilities" ? (
                <ul className="text-[16px] lg:text-[17px] text-[#000000B3] mt-5 list-none space-y-3">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <GoDotFill className="text-green-500 h-2.5 w-2.5 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[16px] lg:text-[17px] text-[#000000B3] mt-5 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full p-4">
        <div className="bg-[#EFF6F3] rounded-3xl p-6">
          <div className="flex justify-center w-full">
            <img
              src="src/assets/images/logo.jpg"
              alt="logo"
              className="mt-8 lg:mt-16 w-24 lg:w-auto"
            />
          </div>
          <div className="flex justify-center w-full">
            <p className="mt-5 text-[17px]">Slack</p>
          </div>
          <div className="flex justify-center w-full mt-6 lg:mt-10">
            <button className="bg-[#244034] h-[40px] w-[160px] text-white rounded-3xl">
              Visit Website
            </button>
          </div>
          <hr className="w-3/4 mt-10 lg:mt-16 border-t-2 border-gray-300 my-4 mx-auto" />

          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="space-y-4">
              <div>
                <p className="text-[#24403499] text-[15px]">Salary</p>
                <p className="text-[15px]">900/Monthly</p>
              </div>
              <div>
                <p className="text-[#24403499] text-[15px]">Location</p>
                <p className="text-[15px]">Pune</p>
              </div>
              <div>
                <p className="text-[#24403499] text-[15px]">Date</p>
                <p className="text-[15px]">8 Oct 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[#24403499] text-[15px]">Expertise</p>
                <p className="text-[15px]">Fresher</p>
              </div>
              <div>
                <p className="text-[#24403499] text-[15px]">Job Type</p>
                <p className="text-[15px]">Fulltime</p>
              </div>
              <div>
                <p className="text-[#24403499] text-[15px]">Experience</p>
                <p className="text-[15px]">Fresher</p>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <button className="h-[24px] w-[47px] text-[12px] text-[#0000007A] border border-gray-500 rounded-3xl">
                Java
              </button>
              <button className="h-[24px] w-[84px] text-[12px] text-[#0000007A] border border-gray-500 rounded-3xl">
                Developer
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-4">
            <button
              onClick={handleApplyNowClick}
              className="h-[45px] w-[275px] rounded-3xl text-black font-bold bg-[#D2F34C] text-[14px] border border-transparent hover:bg-[#244034] hover:text-[#D2F34C] hover:border-[#D2F34C]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#EFF6F3] rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-center mb-4">
              Confirmation
            </h3>
            <p className="text-center">Are you sure you want to apply?</p>
            <div className="flex justify-around mt-6">
              <button
                onClick={handleConfirmApply}
                className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={handleCancelApply}
                className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
