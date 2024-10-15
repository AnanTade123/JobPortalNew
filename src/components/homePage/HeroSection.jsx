function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="src/assets/images/video.mov" // Replace with your video file path
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for better contrast (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

      {/* Content on top of the video */}
      <div className="relative z-10 text-center text-white space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold">Find & Hire Experts <br /> for any Job.</h1>
        <p className="lg:text-lg">Unlock your potential with quality jobs & earn from world-leading brands.</p>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
          <input type="text" placeholder="Your job title, keyword" className="p-4 w-80 lg:w-96 rounded-lg text-black focus:outline-none" />
          <select className="p-4 w-80 lg:w-96 rounded-lg text-black">
            <option>Category</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Marketing</option>
          </select>
          <button className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600">Search</button>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">7 million</h2>
            <p>Completed Jobs</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">30k+</h2>
            <p>Worldwide Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">13 billion</h2>
            <p>Dollar Payout</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
