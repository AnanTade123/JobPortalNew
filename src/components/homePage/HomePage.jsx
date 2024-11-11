import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Home from './Home'
import JobList from './JobList'
import TestimonialSlider from './TestimonialSlider'
import CollaborationSection from './CollaborationSection'
import HeroSection2 from './HeroSection2'
import Footer from './Footer'
import WhyChooseUs from './WhyChooseUs'



function HomePage() {
  return (
    <>
    {/*<Cookies/>*/}
    <Navbar/>
    <HeroSection/>
    <Home/>
    <JobList/>
    <WhyChooseUs/>
    <TestimonialSlider/>
    <CollaborationSection/>
    <HeroSection2/>
    <Footer/>
   
  
    </>
  )
}

export default HomePage