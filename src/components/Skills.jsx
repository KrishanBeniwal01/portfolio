import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Server, 
  Database, 
  Layers, 
  CheckCircle, 
  Cpu, 
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICON_MAP = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Globe: Globe,
  Server: Server,
  Database: Database,
  Layers: Layers
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-950 dark:bg-navy-950">
      {/* Subtle ambient gradients */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-base">
            Systematic skill sets organized by specialization with practical application badges.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                : 'bg-slate-900/70 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 font-semibold'
                  : 'bg-slate-900/70 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCategories.map((category) => {
            const Icon = ICON_MAP[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="group p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/70 border border-slate-700/80 text-slate-200 group-hover:border-slate-600 transition-all hover:bg-slate-700/70 hover:scale-[1.02]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-semibold text-slate-100">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-slate-400 font-mono ml-1 px-1.5 py-0.5 rounded bg-slate-900/70 border border-slate-800">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer with Subtle Counter */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400/90 font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    {category.skills.length} Technologies
                  </span>
                  <span className="text-[11px] text-slate-400">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            * Skills reflect actual hands-on project implementation, coursework mastery, and verified DSA problem-solving.
          </p>
        </div>

      </div>
    </section>
  );
}
