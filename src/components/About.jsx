import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col bg-blue-50  h-auto p-4 md:p-8">
        <div className="flex justify-center">
          <h1 className="mt-10 text-4xl font-serif md:text-5xl lg:text-6xl text-center">
            About Job Portal
          </h1>
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-center">
            Suitable Jobs | Our Mission
          </h3>
        </div>

        <div className="mt-6 md:mt-8 text-black text-base md:text-lg lg:text-xl font-serif text-center">
          <p>
            Our mission is to provide a seamless and reliable platform for job
            seekers and employers in the automotive industry. We strive to make
            <br className="hidden md:block" />
            the job search process efficient, transparent, and fulfilling for
            <br className="hidden md:block" />
            every candidate and employer.
          </p>
        </div>

        <div className="mt-10 md:mt-12 text-black text-2xl md:text-3xl lg:text-4xl font-serif text-center">
          Your Dream Job Starts Here
        </div>

        <div className="mt-6 md:mt-8 text-black text-base md:text-lg lg:text-xl font-serif text-center">
          <p>
            We are passionate about connecting talented individuals with
            exceptional career opportunities in the automotive industry. With
            <br className="hidden md:block" />
            years of experience in the field. Whether you're seeking to
            <br className="hidden md:block" />
            advance your career or make a fresh start, we're here to help you
            find the perfect role in the dynamic world of second-hand cars.
          </p>
        </div>

        <div className="mt-10 md:mt-12 text-black text-2xl md:text-3xl lg:text-4xl font-serif text-center">
          <p>What we offer</p>
        </div>

        <div className="mt-6 md:mt-8 text-black text-base md:text-lg lg:text-xl font-serif text-center">
          <p>
            <span className="font-bold">Diverse Job Listings: </span>
            We provide a wide range of job opportunities in various domains.
            <br className="hidden md:block" />
            <span className="font-bold">Career Assurance: </span>
            We carefully vet every job listing to ensure it aligns with industry
            standards, offering reliable and quality career opportunities.
            <br className="hidden md:block" />
            <span className="font-bold">Transparent Hiring Process: </span>
            We believe in transparency and honesty. Our job listings include
            detailed information about the company, role, and responsibilities.
          </p>
        </div>

        <div className="mt-10 md:mt-12 text-black text-2xl md:text-3xl lg:text-4xl font-serif text-center">
          <p>Why Choose Us</p>
        </div>

        <div className="mt-6 md:mt-8 text-black text-base md:text-lg lg:text-xl font-serif text-center">
          <p>
            <span className="font-bold">Trustworthiness: </span>
            We prioritize integrity and transparency in every interaction.
            <br className="hidden md:block" />
            <span className="font-bold">Convenience: </span>
            Our user-friendly platform makes it easy to browse, compare, and
            apply for jobs from the comfort of your home,
            <br className="hidden md:block" />
            ensuring a smooth and efficient job search experience.
            <br className="hidden md:block" />
            <span className="font-bold">Peace of Mind: </span>
            With our carefully vetted job listings and dedicated support,
            <br className="hidden md:block" />
            you can apply with confidence, knowing that you are pursuing
            opportunities with reputable companies backed by exceptional
            service.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
