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
import Footer from "./components/Footer";

// Import pages
import GoogleSearchConsole from './pages/GoogleSearchConsole';
import AiSeoServices from './pages/AiSeoServices';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';

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
          <Route path="/services/seo/google-search-console" element={<GoogleSearchConsole />} />
          <Route path="/ai-seo" element={<AiSeoServices />} />
          
          {/* Contact Page */}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* User & Admin Pages */}
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;