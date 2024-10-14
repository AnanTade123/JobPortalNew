import React from 'react';

const JobList = () => {
  const jobs = [
    {
      title: 'Developer & expert in Java, C++',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/images/icon1.webp', // Placeholder image for the Developer role
    },
    {
      title: 'Animator & Expert in Maya 3D',
      type: 'Part time',
      date: '25 Jul 2024',
      company: 'Google',
      location: 'USA, New York',
      category: 'Finance, Accounting',
      image: 'src/assets/images/icon2.webp', // Placeholder image for the Animator role
    },
    {
      title: 'Marketing Specialist in SEO & SMM',
      type: 'Part time',
      date: '25 Jan 2024',
      company: 'Pinterest',
      location: 'USA, Alaska',
      category: 'Design, Artist',
      image: 'src/assets/images/icon3 (2).webp', // Placeholder image for the Marketing role
    },
    {
      title: 'Developer & expert in Javascript, C++',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/images/icon4.webp', // Placeholder image for the Developer role
    },
    {
      title: 'Lead & Product Designer',
      type: 'Fulltime',
      date: '18 Jul 2024',
      company: 'Slack',
      location: 'Spain, Barcelona',
      category: 'Developer, Coder',
      image: 'src/assets/images/icon5 (2).webp', // Placeholder image for the Developer role
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">New job listing</h2>
        <a href="#" className="text-green-600 hover:text-green-800 font-medium">
          Explore all jobs &rarr;
        </a>
      </div>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            {/* Job Image and Title Section */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <img
                src={job.image}
                alt={`${job.title} icon`}
                className="h-14 w-14 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="text-sm text-gray-600">{job.category}</p>
              </div>
            </div>

            {/* Job Details Section */}
            <div className="flex flex-col items-start md:items-center md:space-x-6 text-sm">
              <div className="flex flex-col items-start">
                <span
                  className={`${
                    job.type === 'Fulltime' ? 'text-green-600' : 'text-red-600'
                  } font-semibold text-lg`}
                >
                  {job.type}
                </span>
                <span className="text-gray-500">{job.date}</span>
                <span className="text-gray-500">by {job.company}</span>
              </div>
            </div>

            {/* Bookmark Icon and Apply Button */}
            <div className="flex items-center mt-4 md:mt-0">
              <svg
                className="h-6 w-6 text-gray-400 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v18l7-5 7 5V3H5z"
                />
              </svg>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-5 rounded-md">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;