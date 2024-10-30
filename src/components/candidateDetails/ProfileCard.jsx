import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialTwitter, TiWarning } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";

function ProfileCard() {
  return (
    <>
      <div className="w-[280px] h-[950px] bg-[#EFF6F3] rounded-lg">
        <div className="flex flex-col  items-center gap-3 justify-center ">
          <div className="h-[80px] w-[80px] bg-white rounded-full mt-10"></div>
          <p className="text-black text-[18px] font-bold">James Browser</p>
          <p className="text-[#008FDF] text-[16px] ">Invite</p>
        </div>
        <div className="flex flex-col ">
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Location:</p>
            <p className="text-[#244034] text-[15px] font-bold">
              Spain, Barcelona
            </p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Age:</p>
            <p className="text-[#244034] text-[15px] font-bold">28</p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Email:</p>
            <p className="text-[#244034] text-[15px] font-bold">
              me@support.com
            </p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Qualification:</p>
            <p className="text-[#244034] text-[15px] font-bold">
              Master Degree
            </p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Gender:</p>
            <p className="text-[#244034] text-[15px] font-bold">Male</p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Expected Salary:</p>
            <p className="text-[#244034] text-[15px] font-bold">
              $3k-$4k per month
            </p>
          </div>
          <hr className="border-gray-300 my-5 mx-5" />
          <div className="flex flex-col gap-2 ml-5">
            <p className="text-[#24403499] text-[15px]">Social:</p>
            <div className="flex gap-2">
              <div>
                <FaFacebook />
              </div>
              <div>
                <AiOutlineInstagram />
              </div>
              <div>
                <TiSocialTwitter />
              </div>
              <div>
                <IoLogoLinkedin />
              </div>
            </div>
          </div>

          <button className="text-white bg-[#32595A] mt-8 px-2 py-3 mx-5 my-5 rounded-lg">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
