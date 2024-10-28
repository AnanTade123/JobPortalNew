import React from "react";

function EmailForm() {
  return (
    <>
      <p className="text-black text-[20px] font-semibold mt-10">
        Email James Brower.
      </p>
      <div className="w-[280px] h-[450px] mt-3 bg-[#EFF6F3] rounded-lg">
        <p className="text-[#000000B3] text-[15px] px-5 py-5">
          Your email address & profile will be shown to the recipient.
        </p>
        <form>
          <div className="flex gap-3 px-5 py-5">
            <label className="text-[13px] text-[#31595A]">Name</label>
            <input className="h-[40px]"></input>
          </div>
          <div className="flex gap-3 px-5 py-5">
            <label className="text-[13px] text-[#31595A]">Email</label>
            <input className="h-[40px]"></input>
          </div>
          <div className="flex gap-2 px-5 py-5 ">
            <label className="text-[13px] text-[#31595A]">Name</label>
            <textarea className="ml-5"></textarea>
          </div>
          <button className="bg-[#31595A] text=[13px] text-white px-6 py-2 w-[180px] mt-3 rounded-lg ml-20">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
