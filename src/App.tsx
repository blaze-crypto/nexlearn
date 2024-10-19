import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ImageToText from './pages/ImageToText';
import TestMaker from './pages/TestMaker';
import EssayChecker from './pages/EssayChecker';
import FileConverter from './pages/FileConverter';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/image-to-text" element={<ImageToText />} />
              <Route path="/test-maker" element={<TestMaker />} />
              <Route path="/essay-checker" element={<EssayChecker />} />
              <Route path="/file-converter" element={<FileConverter />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;