
// import CandidateDetails from "./components/candidateDetails/CandidateDetails";

// import HomePage from "./components/homePage/HomePage"

// import HomePage from "./components/homePage/HomePage"

//import Contactus from "./Components/Contactus"

//import Header from './components/Joblisting/Header';
//import Maincontent from './components/Joblisting/Maincontent';

// import Signup from "./components/jobDetails/Signup";

//import Signin from "./components/Joblisting/Signin";
import JobDetails from "./components/jobDetails/JobDetails";

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage'; 
import JobDetails from './components/jobDetails/JobDetails';
import Signin from './components/Joblisting/Signin';
import Contactus from './components/Contactus';
import About from './components/About';
import Cookies from './components/Cookies'
import Joblist from './components/Joblisting/Joblist';


function App() {
  return (
    <>

      {/* <CandidateDetails /> */}

      <JobDetails />

      {/* <HomePage/> */}
      {/* <Header />
      <Details />
      <RelatedJobs /> */}
      {/* <Signup /> */}
      {/* <Header/> */}
      {/* <Maincontent/> */}
      {/* <Signin /> */}
      {/* <Contactus/> */}

      {/* <HomePage/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/cookie-policy" element={<Cookies />} />
        <Route path="/joblist" element={<Joblist />} />
       
      </Routes>

    </>
  );
}

export default App;
