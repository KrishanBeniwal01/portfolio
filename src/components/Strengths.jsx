import React from 'react';
import { 
  Brain, 
  Workflow, 
  Target, 
  Zap, 
  Compass, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PROFESSIONAL_STRENGTHS } from '../data/portfolioData';

const STRENGTH_ICONS = {
  Brain: Brain,
  Workflow: Workflow,
  Target: Target,
  Zap: Zap,
  Compass: Compass,
  MessageSquare: MessageSquare,
  Users: Users,
  CheckCircle2: CheckCircle2,
  Sparkles: Sparkles
};

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 relative overflow-hidden bg-navy-900/30 dark:bg-navy-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Strengths</span>
          </h2>
          <p className="text-slate-400 text-base">
            Key cognitive, technical, and collaborative traits that drive high-quality software engineering.
          </p>
        </div>

        {/* 9 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONAL_STRENGTHS.map((strength, index) => {
            const Icon = STRENGTH_ICONS[strength.icon] || Sparkles;
            return (
              <div
                key={strength.title}
                className="group p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-violet-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>0{index + 1} / 09</span>
                  <span className="text-cyan-400/80">Verified Trait</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
