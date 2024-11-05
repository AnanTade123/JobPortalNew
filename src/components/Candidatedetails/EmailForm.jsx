import React, { useState } from "react";

function EmailForm() {
  // State for each input field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(formData); // Print the form data object in console
  };

  return (
    <>
      <p className="text-black text-[20px] font-semibold mt-10">
        Email James Brower
      </p>
      <div className="w-[280px] h-auto mt-3 bg-[#EFF6F3] rounded-lg">
        <p className="text-[#000000B3] text-[15px] px-5 py-5">
          Your email address & profile will be shown to the recipient.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 px-5 py-3">
            <label className="text-[13px] text-[#31595A]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-[40px] border border-[#CCCCCC] rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-3 px-5 py-3">
            <label className="text-[13px] text-[#31595A]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[40px] border border-[#CCCCCC] rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-3 px-5 py-3">
            <label className="text-[13px] text-[#31595A]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[100px] border border-[#CCCCCC] rounded-md p-2 resize-none"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="bg-[#31595A] text-[13px] text-white px-6 py-2 w-[180px] mt-3 rounded-lg mx-auto block"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
