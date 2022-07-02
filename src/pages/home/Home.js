import React from 'react';
import '../../App.css';
import Cards from '../../components/pages/Cards';
import HeroSection from '../../components/heroSection/HeroSection';
import Footer from '../../components/footer/Footer.tsx';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
