import React from "react";

function Header() {
  return (
    <div className=" flex flex-col items-center bg-gradient-to-r from-[#345b4a] via-[#244034] to-[#345b4a] h-[250px] sm:h-[350px]  max-w-[1545px] mx-auto">
      <h1 className="text-white text-[35px] mt-20 sm:text-[45px] md:text-[55px] lg:text-[65px] font-serif">
        Candidate Profile
      </h1>

      <div className="flex gap-2">
        <p className="text-[18px] text-white">Home</p>
        <p className="text-[18px] text-white">Candidate Profile</p>
      </div>
    </div>
  );
}

export default Header;
