// src/SmoothScroll.jsx
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import CSS for Locomotive Scroll

const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#smooth-scroll-container'),
      smooth: true, // Enable smooth scrolling
      getDirection: true, // Optional: get scroll direction for custom animations
    });

    // Cleanup the scroll instance on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-scroll-container" data-scroll-container>
      {/* This wraps all your scrollable content */}
    </div>
  );
};

export default SmoothScroll;
