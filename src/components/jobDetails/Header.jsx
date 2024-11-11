import React from "react";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-r from-[#345b4a] via-[#244034] to-[#345b4a] h-[250px] sm:h-[350px] md:h-[350px] lg:h-[350px] max-w-[1540px] mx-auto">
        <h1 className="text-white text-[35px] mt-20 sm:text-[45px] md:text-[55px] lg:text-[65px] sm:mt-12 md:mt-20 lg:mt-20 font-serif">
          Job Details
        </h1>
        <p className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-white font-serif text-center px-4 sm:px-8 md:px-12 lg:px-16">
          Here will be your company job details & requirements
        </p>
      </div>
    </>
  );
}

export default Header;
