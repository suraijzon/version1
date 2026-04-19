'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Solution from '../components/Solution';
import SuccessSection from '../components/SuccessSection';
import ProcessSection from '../components/ProcessSection';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseSleekIT from '../components/WhyChooseSleekIT';
import ContactSection from '../components/ContactSection';
import ReviewSection from '../components/ReviewSection';
import TrustBar from '../components/TrustBar';
import ExpertPopup from '../components/ExpertPopup';

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Solution />
      <SuccessSection />
      <ProcessSection />
      <WhoWeAre />
      <WhyChooseSleekIT />
      <ContactSection />
      <ReviewSection />
      <Footer />
      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default HomePage;
