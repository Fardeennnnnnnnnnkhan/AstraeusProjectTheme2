import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Vajra from './pages/Vajra';
import Minerva from './pages/Minerva';
import BugBounty from './pages/BugBounty';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/about';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
        {/* <SmoothScroll/> */}
      <div className="min-h-screen bg-gradient-to-b from-[#071630] to-[#071630]  text-white">
        <Navbar />
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/vajra" element={<Vajra />} />
          <Route path="/minerva" element={<Minerva />} />
          <Route path="/bug-bounty" element={<BugBounty />} />
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/about-us" element={<About/>}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;