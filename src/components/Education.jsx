import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950 dark:bg-navy-950">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-base">
            Formal engineering degree with deep specialization in Computer Science & Artificial Intelligence.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-8">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-navy-950 shadow-md shadow-cyan-500/50" />

            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl space-y-6 transition-all duration-300">
              
              {/* Institution and Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    {EDUCATION_DATA.institution}
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Graduation: {EDUCATION_DATA.graduationYear}
                  </span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {EDUCATION_DATA.status}
                  </span>
                </div>
              </div>

              {/* Degree & Branch Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/70">
                  <span className="text-xs text-slate-400 block font-mono">Degree & Major</span>
                  <span className="text-base font-bold text-slate-100 mt-1 block">
                    {EDUCATION_DATA.degree} – {EDUCATION_DATA.branch}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/70">
                  <span className="text-xs text-slate-400 block font-mono">Specialization</span>
                  <span className="text-base font-bold text-cyan-300 mt-1 block">
                    {EDUCATION_DATA.specialization}
                  </span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  Key Academic Highlights
                </span>
                <ul className="space-y-2 text-sm text-slate-300">
                  {EDUCATION_DATA.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Coursework Badges */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  Core Computer Science & AI Coursework
                </span>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
