import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on hash click or resize
  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 dark:bg-navy-950/85 bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-sm tracking-wider">
                  KB
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors">
                Krishan Beniwal
              </span>
              <span className="text-[11px] font-mono text-cyan-400 dark:text-cyan-400 text-cyan-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white dark:hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-[2px] left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2.5 rounded-xl border border-slate-700/60 dark:border-slate-700/60 border-slate-300 bg-slate-800/50 dark:bg-slate-800/50 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Krishan_Beniwal_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 text-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-navy-950/95 dark:bg-navy-950/95 bg-white/95 backdrop-blur-xl border-b border-slate-800/80 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/60 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Krishan_Beniwal_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
