import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solution from "./components/Solution";
import SuccessSection from "./components/SuccessSection";
import ProcessSection from "./components/ProcessSection";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseSleekIT from "./components/WhyChooseSleekIT";
import ContactSection from "./components/ContactSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

// Import pages
import GoogleSearchConsole from './pages/GoogleSearchConsole';
import AiSeoServices from './pages/AiSeoServices';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';
import AIOptimizationPage from "./pages/AIOptimizationPage";
import AIWebAppPage from "./pages/AIWebAppPage";
import EcommercePage from "./pages/EcommercePage";
import AISoftwareServices from './pages/AISoftwareServices';
import FullStackWebDev from './pages/FullStackWebDev';
import AIWebsiteDesign from './pages/AIWebsiteDesign';
import AboutUs from './pages/AboutUs';
import SEOServices from './pages/SEOServices';
import CaseStudies from './pages/CaseStudies';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import WebsiteMaintenance from './pages/WebsiteMaintenance';


// Home Page Component
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <SuccessSection />
      <ProcessSection />
      <WhoWeAre />
      <WhyChooseSleekIT /> 
      <ContactSection />
      <ReviewSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Service Pages */}
          <Route path="/google-search---console" element={<GoogleSearchConsole />} />
          <Route path="/ai-seo" element={<AiSeoServices />} />
          <Route path="/ai-software-development" element={<AISoftwareServices />} />
          <Route path="/full-stack-web-development" element={<FullStackWebDev />} />
          <Route path="/ai-website-design" element={<AIWebsiteDesign />} />
          <Route path="/ai-search-optimization" element={<AIOptimizationPage />} />
          <Route path="/ai-web-app" element={<AIWebAppPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          
          {/* Contact Page */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          

          {/* User & Admin Pages */}
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;