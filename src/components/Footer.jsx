import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 p-[1.5px]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-sm">
                    KB
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Aspiring Software Developer specializing in Artificial Intelligence and Machine Learning. Building scalable, intelligent solutions with clean engineering practices.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Info */}
          <div className="md:col-span-2 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>

            <span className="text-[11px] font-mono text-slate-500">
              India • 2026 / 2027
            </span>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Krishan Beniwal. All rights reserved.
          </p>

          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted with React, Vite, Tailwind CSS & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
