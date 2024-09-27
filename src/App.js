// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './pages/AboutSection';
import HistorySection from './pages/HistorySection';
import RepositoriesSection from './pages/RepositoriesSection'; // Chapters route
import SignificanceSection from './pages/SignificanceSection'; // Features
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import { LanguageProvider } from './context/LanguageContext';
import FlipBook from './pages/VersesOfWisdom';
import VersesSection from './pages/VersesSection';


function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
               <FlipBook/>
               <VersesSection/>
               
              </div>
            }
          />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/history" element={<HistorySection />} />
          <Route path="/chapters" element={<RepositoriesSection />} />
          <Route path="/features" element={<SignificanceSection />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Contact Page route */}
          {/* Add other routes here as needed */}
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
