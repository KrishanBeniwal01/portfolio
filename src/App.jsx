import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingJourney from './components/CodingJourney';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'certifications',
  'coding',
  'strengths',
  'contact'
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Depth Bar */}
      <ScrollProgress />

      {/* Persistent Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CodingJourney />
        <Strengths />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Floating System Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
