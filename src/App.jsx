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

function App() {
  return (
    <>
    <Router>
        {/* <SmoothScroll/> */}
      <div className="min-h-screen bg-gradient-to-b from-[#0a0515] to-[#150833]  text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vajra" element={<Vajra />} />
          <Route path="/minerva" element={<Minerva />} />
          <Route path="/bug-bounty" element={<BugBounty />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;