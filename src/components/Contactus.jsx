import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export default function Contactus() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  
  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Feedback:", feedback);

    
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <>
      <div className="relative px-4 py-8 lg:py-16">
        <div className="flex justify-center lg:absolute lg:top-[40px] lg:left-[650px]">
          <h1 className="font-sans text-3xl lg:text-4xl font-bold">Contact Us</h1>
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="text-base sm:text-lg text-[#757575] lg:absolute lg:left-[150px] lg:top-[150px] text-center lg:text-left">
            We would love to speak with you. Fill out the form provided below or <br />
            email us your request to
          </p>
          <a
            href="mailto:techsupport@Jobportal.com"
            className="block text-center lg:text-left text-blue-500 hover:text-blue-700 text-base sm:text-lg lg:absolute lg:left-[345px] lg:top-[178px]"
          >
            support@jobp.com
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:block lg:mt-16">
          <div className="flex items-start lg:absolute lg:left-[150px] lg:top-[270px]">
            <div className="w-[48px] h-[48px] bg-[#183460] text-white rounded-md flex justify-center items-center">
              <CiLocationOn className="text-3xl" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg text-[#212121]">Our Address</h1>
              <p className="text-[#757575] text-sm sm:text-md">
                JobPortal Headquarters<br />
                123 Phoenix bizhub<br />
                Whitefield Bangalore, 441122<br />
                India
              </p>
            </div>
          </div>

          <div className="flex items-start lg:absolute lg:left-[150px] lg:top-[430px]">
            <div className="w-[48px] h-[48px] bg-[#183460] text-white rounded-md flex justify-center items-center">
              <MdPhoneInTalk className="text-3xl" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg text-[#212121]">Contact</h1>
              <p className="text-[#757575] text-sm sm:text-md">
                Name: Arif Pathan<br />
                Mobile: 7755994123<br />
                Mail: arif.pathan@reddifmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start lg:absolute lg:left-[150px] lg:top-[570px]">
            <div className="w-[48px] h-[48px] bg-[#183460] text-white rounded-md flex justify-center items-center">
              <FaRegClock className="text-2xl" />
            </div>
            <div className="ml-4">
              <h1 className="text-lg text-[#212121]">Working Hours</h1>
              <p className="text-[#757575] text-sm sm:text-md">
                Monday - Friday: 08:00AM - 09:00PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:absolute lg:left-[800px] lg:top-[210px]">
          <h1 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
            Have Questions? Shoot us an email.
          </h1>
          <div className="flex flex-col space-y-4 mt-4">
            <input
              type="text"
              className="bg-white h-[42px] w-full lg:w-[570px] rounded-md border-2 border-gray-400 shadow-lg px-4"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="bg-white h-[42px] w-full lg:w-[570px] rounded-md border-2 border-gray-400 shadow-lg px-4"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="bg-white h-[170px] w-full lg:w-[570px] rounded-md border-2 border-gray-400 shadow-lg px-4"
              placeholder="Please Share Your Feedback What We Can Improve..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              className="h-[42px] w-full lg:w-[570px] bg-[#183460] text-white rounded-md"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}