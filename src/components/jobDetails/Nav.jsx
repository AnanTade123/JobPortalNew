import React from "react";
import { BiSolidCategory } from "react-icons/bi";

function Nav() {
  return (
    <div className="bg-[#244034] h-[82px]">
      <div className="flex items-center justify-between h-full px-32">
        <nav className="flex items-center gap-20">
          <button className="flex items-center justify-center gap-2 font-bold text-[#D2F34C] bg-[#ffffff1a] w-[135px] h-[35px] rounded-2xl">
            <BiSolidCategory className="w-4 h-4" />
            <span className="text-[18px]">Category</span>
          </button>

          <ul className="flex items-center text-white text-[18px] gap-14 font-medium">
            <li className="hover:text-[#D2F34C]">Home</li>
            <li href="" className="hover:text-[#D2F34C]">
              Job
            </li>
            <li href="" className="hover:text-[#D2F34C]">
              Contact
            </li>
            <li href="" className="hover:text-[#D2F34C]">
              Dashboard
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-white  font-medium">
          <p className="hover:text-[#D2F34C] text-[18px]">Post Job</p>
          <span>|</span>
          <p className="text-[#D2F34C] text-[18px] hover:underline cursor-pointer">
            Login
          </p>

          <button className="h-[42px] w-[180px] text-[16px] bg-[#D2F34C] text-black rounded-3xl font-medium border border-transparent hover:bg-[#244034] hover:text-[#D2F34C] hover:border-[#D2F34C]  ">
            Hire Top Talents
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
