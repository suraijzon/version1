import React from "react";
import Navbar from "../components/Navbar";
import AiSeoHero from "../components/AiSeoHero";
import ThreeSteps from "../components/ThreeSteps";
import PublishSection from "../components/PublishSection";
import Footer from "../components/Footer";
import SoMuchMoreSection from "../components/SoMuchMoreSection";
import GrowNowSection from "../components/GrowNowSection";
import { Helmet } from "react-helmet";

const AiSeoServices = () => {
  return (
    <>
      <Helmet>
        <title>AI SEO Services | Intelligent Search Optimization</title>
        <meta
          name="description"
          content="Leverage artificial intelligence to optimize content, technical SEO, and entity authority for next-generation search engines."
        />
      </Helmet>
      <Navbar />
      {/* Hero Section */}
      <AiSeoHero />
      {/* 3 Steps Section */}
      <ThreeSteps />
      {/* Publish Section */}
      <PublishSection /> {/* ⬅ THIS WILL APPEAR AFTER 3 STEPS */}
      <SoMuchMoreSection />
      <GrowNowSection />
      <Footer />
    </>
  );
};

export default AiSeoServices;
