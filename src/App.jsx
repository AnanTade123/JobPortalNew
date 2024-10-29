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
