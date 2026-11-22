import React from 'react';
import { User, GraduationCap, Compass, Sparkles, Code, Cpu, Database, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const careerInterests = [
    { name: "Software Development", primary: true },
    { name: "Artificial Intelligence", primary: false },
    { name: "Machine Learning", primary: false },
    { name: "Generative AI & Agentic Systems", primary: false },
    { name: "Backend Development & APIs", primary: false },
    { name: "Data Science & Analytics", primary: false },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-900/40 dark:bg-navy-900/40">
      {/* Decorative lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Me</span>
          </h2>
          <p className="text-slate-400 text-base">
            Aspiring Software Developer with a specialization in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 bg-white/5 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Professional Summary
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a final-year <strong className="text-white font-semibold">B.Tech Computer Science and Engineering</strong> student specializing in <strong className="text-cyan-300 font-semibold">Artificial Intelligence and Machine Learning</strong> at <strong className="text-white font-semibold">Shri Vishwakarma Skill University</strong>.
                </p>
                <p>
                  I have a strong foundation in computer science fundamentals, object-oriented programming, data structures, algorithms, and software development principles.
                </p>
                <p>
                  I enjoy solving challenging programming problems, exploring emerging technologies, and developing practical software solutions. My interests include Artificial Intelligence, Generative AI, Machine Learning, and modern software engineering.
                </p>
                <p>
                  I have worked on AI-powered projects that combine intelligent systems with real-world applications. I am a quick learner with strong analytical thinking, logical reasoning, communication, and teamwork skills.
                </p>
                <p className="text-cyan-200/90 font-medium">
                  I continuously strive to improve my technical abilities and build impactful applications.
                </p>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-violet-950/40 border border-cyan-500/30 backdrop-blur-xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Career Objective
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    "{PERSONAL_INFO.careerObjective}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-400" />
                Academic Snapshot
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Degree</span>
                  <span className="text-slate-100 font-semibold text-right">{PERSONAL_INFO.degree}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Branch</span>
                  <span className="text-slate-100 font-semibold text-right">{PERSONAL_INFO.branch}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-cyan-300 font-semibold text-right max-w-[200px]">{PERSONAL_INFO.specialization}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">College</span>
                  <span className="text-slate-100 font-semibold text-right max-w-[220px]">{PERSONAL_INFO.college}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Graduation</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/40">
                    {PERSONAL_INFO.graduationYear} (Final-Year)
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    {PERSONAL_INFO.currentStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Career Interests Card */}
            <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-slate-100 flex items-center justify-between">
                <span>Career Interests</span>
                <span className="text-xs font-mono text-cyan-400">Primary: Software Dev</span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {careerInterests.map((interest) => (
                  <div
                    key={interest.name}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      interest.primary
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20 flex items-center gap-1.5 font-semibold'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700/60 hover:border-slate-600'
                    }`}
                  >
                    {interest.primary && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                    {interest.name}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
