import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Binary, ExternalLink } from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-navy-900/40 dark:bg-navy-900/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Professional Development</span>
          </h2>
          <p className="text-slate-400 text-base">
            Structured technical mentorship programs and continuous professional upskilling.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/70 border border-emerald-500/30 hover:border-emerald-500/50 backdrop-blur-xl shadow-2xl p-7 sm:p-9 transition-all duration-300 group">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-t-3xl" />

            <div className="space-y-6">
              
              {/* Header with Organization and Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  {/* Organization Logo Placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg font-mono shadow-md group-hover:scale-105 transition-transform">
                    <span>AI</span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                      {CERTIFICATION_DATA.organization}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {CERTIFICATION_DATA.program}
                    </h3>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold self-start sm:self-auto shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{CERTIFICATION_DATA.status}</span>
                </div>
              </div>

              {/* Mentorship Program Designation Callout */}
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-slate-300 text-sm leading-relaxed">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Program Nature
                </span>
                {CERTIFICATION_DATA.description}
              </div>

              {/* Key Competencies Acquired */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Binary className="w-4 h-4 text-cyan-400" />
                  Core Competencies & Hands-on Workflows
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CERTIFICATION_DATA.skillsLearned.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Verification / Link Placeholder */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
                <span className="font-mono text-slate-400">
                  {CERTIFICATION_DATA.verifiedNote}
                </span>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Credential Verified</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
