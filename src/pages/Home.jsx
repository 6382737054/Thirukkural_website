import React from 'react';
import HeroSection from '../components/HeroSection'; // Import your HeroSection component
import About from './AboutSection';

const Home = () => {
  return (
    <>
      
      <HeroSection />

      {/* Add more sections here */}
      <About/>
 
    </>
  );
};

export default Home;
