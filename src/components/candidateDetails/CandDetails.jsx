import React from "react";
import { useState } from "react";

import EmailForm from "./EmailForm";
import ProfileCard from "./ProfileCard";
// Testing change
function CandDetails() {
  const educationData = [
    {
      id: 1,
      institution: "University of Boston",
      degree: "Bachelor Degree of Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis.",
    },
    {
      id: 2,
      institution: "Design Collage",
      degree: "UI/UX Design Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ];

  const workExpData = [
    {
      id: 1,
      date: "02/03/18 - 13/05/20",
      designation: "Bachelor Degree of Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis.",
    },
    {
      id: 2,
      date: "02/07/20 - 13/09/22",
      designation: "UI/UX Design Course",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-20 max-w-[90%] mx-auto gap-8 lg:max-w-[1545px]">
      {/* Left Part */}
      <div className="lg:w-2/3 w-full flex flex-col gap-10 items-center">
        <div className="relative w-full lg:w-[850px] border border-gray-500 rounded-2xl p-6">
          <span className="absolute top-0 ml-12 bg-white text-[25px] text-black -translate-y-1/2 -translate-x-1/2 px-2">
            Overview
          </span>
          <div className="flex flex-col gap-5 mt-5 text-[18px] text-[#000000B3]">
            <p>
              Hello my name is Ariana Gande Connor and I’m a Financial
              Supervisor from Netherlands, Rotterdam. In pharetra orci
              dignissim, blandit mi semper, ultricies diam. Suspendisse
              malesuada suscipit nunc non volutpat. Sed porta nulla id orci
              laoreet tempor non consequat enim. Sed vitae aliquam velit.
              Aliquam Integer vehicula rhoncus molestie. Morbi ornare ipsum sed
              sem condimentum, et pulvinar tortor luctus. Suspendisse
              condimentum lorem ut elementum aliquam.
            </p>
            <p>
              Hello my name is Ariana Gande Connor and I’m a Financial
              Supervisor from Netherlands, Rotterdam. In pharetra orci
              dignissim, blandit mi semper, ultricies diam. Suspendisse
              malesuada suscipit nunc non volutpat. Sed porta nulla id orci
              laoreet tempor non consequat enim. Sed vitae aliquam velit.
              Aliquam Integer vehicula rhoncus molestie. Morbi ornare ipsum sed
              sem condimentum, et pulvinar tortor luctus. Suspendisse
              condimentum lorem ut elementum aliquam.
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-[850px] border border-gray-500 rounded-2xl p-6">
          <span className="absolute top-0 ml-12 bg-white text-[25px] text-black -translate-y-1/2 -translate-x-1/2 px-2">
            Education
          </span>
          <div className="space-y-8 mt-10">
            {educationData.map((item) => (
              <div key={item.id} className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-600 text-green-600">
                    {item.id}
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-green-700 text-sm font-semibold">
                    {item.institution}
                  </h3>
                  <h2 className="text-xl font-bold">{item.degree}</h2>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-[850px] border border-gray-500 rounded-2xl p-6">
          <span className="absolute top-0 ml-12 bg-white text-[25px] text-black -translate-y-1/2 -translate-x-1/2 px-2">
            Skills
          </span>
          <div className="flex flex-col space-y-4 mt-10">
            <div className="flex flex-wrap gap-4">
              {[
                "Figma",
                "HTML5",
                "Illustrator",
                "Adobe Photoshop",
                "Word Press",
              ].map((skill, idx) => (
                <button
                  key={idx}
                  className="bg-[#EFF6F3] text-[#005025] px-4 py-2 rounded-2xl text-[18px]"
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {["jQuery", "Web Design", "Adobe XD", "CSS"].map((skill, idx) => (
                <button
                  key={idx}
                  className="bg-[#EFF6F3] text-[#005025] px-4 py-2 rounded-2xl text-[18px]"
                >
                  {skill}
                </button>
              ))}
              <button className="bg-[#D2F34C] text-black h-10 w-10 rounded-full text-[18px]">
                3+
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[850px] border border-gray-500 rounded-2xl p-6">
          <span className="absolute top-0 ml-24 bg-white text-[25px] text-black -translate-y-1/2 -translate-x-1/2 px-2">
            Work Experience
          </span>
          <div className="space-y-8 mt-10">
            {workExpData.map((item) => (
              <div key={item.id} className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-600 text-green-600">
                    {item.id}
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-green-700 text-sm font-semibold">
                    {item.date}
                  </h3>
                  <h2 className="text-xl font-bold">{item.designation}</h2>
                  <p className="text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="lg:w-1/3 w-full px-4 lg:px-0">
        <ProfileCard />
        <EmailForm />
      </div>
    </div>
  );
}

export default CandDetails;
