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
import { SearchProvider } from './context/SearchContext'; // Import the SearchProvider
import FlipBook from './pages/VersesOfWisdom';
import VersesSection from './pages/VersesSection';
import Footer from './components/Footer'; // Import the Footer component
import SearchBar from './components/SearchBar'; // Import the SearchBar component

function App() {
  return (
    <Router>
      <LanguageProvider>
        <SearchProvider>
          <Header />
          <SearchBar /> {/* Include the SearchBar component here */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <HeroSection />
                  <FlipBook />
                  <VersesSection />
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
          <Footer /> {/* Add the Footer here */}
        </SearchProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
