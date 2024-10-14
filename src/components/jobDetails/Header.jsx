import React from "react";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#244034] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <h1 className="text-white text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] mt-10 sm:mt-12 md:mt-14 lg:mt-16 font-serif">
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
