// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './pages/AboutSection'; // Import the AboutSection component
import HistorySection from './pages/HistorySecion';
import { LanguageProvider } from './context/LanguageContext';
import RepositoriesSection from './pages/RepositoriesSection';
import SignificanceSection from './pages/SignificanceSection';

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
                <AboutSection />
                <HistorySection /> {/* Include History Section here */}
                <RepositoriesSection/>
                <SignificanceSection/>
              </div>
            }
          />
          {/* Add other routes here as needed */}
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
