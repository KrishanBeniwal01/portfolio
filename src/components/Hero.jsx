import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Terminal, Sparkles, Code2, Bot, Layers, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TYPING_ROLES = [
  "Software Developer",
  "AI/ML Enthusiast",
  "LangGraph & Multi-Agent Builder",
  "Full Stack Engineer",
  "DSA & Problem Solver"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = TYPING_ROLES[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
          setTypingSpeed(50);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-950 via-[#070e24] to-navy-950 dark:from-navy-950 dark:via-[#070e24] dark:to-navy-950"
    >
      {/* Background radial glow blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-violet-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm shadow-cyan-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Development Roles • Final-Year 2027</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Typing Title */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
                <span className="text-cyan-400 font-mono">&gt;</span>
                <span className="text-slate-100 min-h-[1.5em] inline-block font-mono">
                  {displayedText}
                </span>
                <span className="w-2.5 h-6 sm:h-7 bg-cyan-400 animate-pulse inline-block ml-0.5" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-cyan-200/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "{PERSONAL_INFO.tagline}"
            </p>

            {/* Hero Description */}
            <p className="text-slate-300 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.heroDescription} Final-year B.Tech CSE student specializing in AI & ML at Shri Vishwakarma Skill University.
            </p>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["Python", "FastAPI", "React.js", "LangGraph", "Multi-Agent AI", "C++ / DSA", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/60 border border-slate-700/60 text-slate-300 backdrop-blur-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* View Projects */}
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Download Resume */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Krishan_Beniwal_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-navy-900/80 border border-slate-700/80 hover:border-cyan-500/60 text-slate-100 hover:text-cyan-300 shadow-md backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* GitHub Profile Button */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 rounded-xl bg-navy-900/80 border border-slate-700/80 hover:border-cyan-500/60 text-slate-300 hover:text-white shadow-md backdrop-blur-md hover:scale-105 transition-all duration-300"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn Profile Button */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-navy-900/80 border border-slate-700/80 hover:border-blue-500/60 text-slate-300 hover:text-blue-400 shadow-md backdrop-blur-md hover:scale-105 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Glowing Outer Gradient Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse-subtle" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0b142d] to-[#050917] border border-cyan-500/25 p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Header Strip with Terminal Dots */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    krishan@developer:~$
                  </span>
                </div>

                {/* Profile Avatar Center */}
                <div className="relative flex justify-center py-2">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 shadow-xl shadow-cyan-500/20">
                    <div className="w-full h-full rounded-full bg-[#070d20] flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-1">
                        <Code2 className="w-8 h-8 text-cyan-400" />
                      </div>
                      <span className="font-extrabold text-white text-base tracking-wide">
                        Krishan Beniwal
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        CSE • AI & ML
                      </span>
                    </div>

                    {/* Orbiting Tech Badges */}
                    <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-purple-950/90 border border-purple-500/50 text-[10px] font-mono text-purple-300 shadow-lg flex items-center gap-1 backdrop-blur-md animate-bounce">
                      <Bot className="w-3 h-3 text-purple-400" />
                      LangGraph
                    </div>

                    <div className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-[10px] font-mono text-cyan-300 shadow-lg flex items-center gap-1 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      160+ Solved
                    </div>
                  </div>
                </div>

                {/* Quick Profile Summary Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left">
                    <div className="text-xs text-slate-400">Specialization</div>
                    <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      AI & ML
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left">
                    <div className="text-xs text-slate-400">Graduation</div>
                    <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                      <Layers className="w-4 h-4 text-violet-400" />
                      Class of 2027
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left">
                    <div className="text-xs text-slate-400">Primary Focus</div>
                    <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                      Software Dev
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-left">
                    <div className="text-xs text-slate-400">University</div>
                    <div className="text-xs font-bold text-slate-100 mt-0.5 truncate" title="Shri Vishwakarma Skill University">
                      SVSU
                    </div>
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="p-3 rounded-2xl bg-navy-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                  <div className="text-slate-500">// Ready to build scalable software</div>
                  <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">candidate</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-400">"AI + Software Eng"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">dsaPractice:</span>{" "}
                    <span className="text-amber-400">"Consistent"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openToOpportunities:</span>{" "}
                    <span className="text-cyan-400">true</span>
                  </div>
                  <div>{"}"};</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
