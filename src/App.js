// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './pages/AboutSection';
import HistorySection from './pages/HistorySection';
import RepositoriesSection from './pages/RepositoriesSection'; // For "Chapters"
import SignificanceSection from './pages/SignificanceSection'; // For "Features"
import { LanguageProvider } from './context/LanguageContext';

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
                
              </div>
            }
          />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/history" element={<HistorySection />} />
          <Route path="/chapters" element={<RepositoriesSection />} /> {/* Chapters route */}
          <Route path="/features" element={<SignificanceSection />} /> {/* Features route */}
          {/* Add other routes here as needed */}
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
