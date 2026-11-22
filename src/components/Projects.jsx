import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Bot, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Info, 
  GitPullRequest,
  HeartPulse,
  Stethoscope,
  Terminal,
  ArrowRight
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-900/30 dark:bg-navy-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Software & AI Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-impact software solutions combining multi-agent AI systems, full-stack architectures, and live deployments.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            const isPrReviewer = project.id === 'ai-pr-reviewer';
            const isArogya = project.id === 'arogya-sarthi';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Accent Top Gradient Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentGradient}`} />

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* Left: Project Details & Features */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Meta Pill and Category */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor} flex items-center gap-1.5`}>
                          {isArogya && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                          )}
                          {isPrReviewer && <Bot className="w-3.5 h-3.5 text-purple-400" />}
                          {project.badge}
                        </span>

                        <span className="text-xs font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2.5 pt-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          Key Architectural Features:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                          {project.keyFeatures.slice(0, 6).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Technology Stack:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 border border-slate-700/80 text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {/* Live Demo Button (Only for Arogya Sarthi) */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{project.liveButtonText || "Live Demo"}</span>
                          </a>
                        )}

                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700/80 hover:border-slate-600 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <Github className="w-4 h-4 text-slate-300" />
                          <span>{project.githubButtonText}</span>
                        </a>

                        {/* Expandable Project Details Button */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                        >
                          <span>Detailed Breakdown</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                    {/* Right: Specialized Visual Identity Graphic */}
                    <div className="lg:col-span-5 flex justify-center w-full">
                      
                      {/* Project 1 Visual: Multi-Agent PR Review Diagram */}
                      {isPrReviewer && (
                        <div className="w-full rounded-2xl bg-gradient-to-br from-navy-950 to-slate-950 border border-purple-500/30 p-5 sm:p-6 shadow-xl space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <span className="text-xs font-mono text-purple-300 flex items-center gap-1.5 font-bold">
                              <GitPullRequest className="w-4 h-4 text-purple-400" />
                              LangGraph Multi-Agent Architecture
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                              Celery & Redis Worker
                            </span>
                          </div>

                          {/* Agent Flow Nodes */}
                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-300">1. GitHub Webhook Trigger</span>
                              <span className="text-emerald-400">PR Opened</span>
                            </div>

                            <div className="pl-4 py-0.5 border-l-2 border-purple-500/40 text-[11px] text-purple-400">
                              ↓ LangGraph State Graph Dispatch
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-200">
                                <span className="font-bold text-white block">OWASP Security</span>
                                Vulnerability scan
                              </div>
                              <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-200">
                                <span className="font-bold text-white block">Architecture</span>
                                Coupling & modularity
                              </div>
                              <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-200">
                                <span className="font-bold text-white block">Static Analysis</span>
                                AST & logic checks
                              </div>
                              <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-200">
                                <span className="font-bold text-white block">Code Quality</span>
                                Idiomatic style
                              </div>
                            </div>

                            <div className="pl-4 py-0.5 border-l-2 border-purple-500/40 text-[11px] text-purple-400">
                              ↓ Synthesize & Post Inline Comments
                            </div>

                            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/50 flex items-center justify-between text-purple-200">
                              <span className="font-semibold">Post-Merge Vector Learner</span>
                              <span className="text-xs text-emerald-400 font-bold">Active</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Project 2 Visual: Arogya Sarthi Healthcare & AI Dashboard */}
                      {isArogya && (
                        <div className="w-full rounded-2xl bg-gradient-to-br from-navy-950 via-[#071a1d] to-slate-950 border border-teal-500/30 p-5 sm:p-6 shadow-xl space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <span className="text-xs font-mono text-teal-300 flex items-center gap-1.5 font-bold">
                              <HeartPulse className="w-4 h-4 text-emerald-400" />
                              Arogya Sarthi Diagnostic Pipeline
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
                              LIVE ON VERCEL
                            </span>
                          </div>

                          {/* Healthcare Mockup Dashboard Elements */}
                          <div className="space-y-3 text-xs">
                            <div className="p-3 rounded-xl bg-slate-900/90 border border-teal-500/20 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Stethoscope className="w-4 h-4 text-teal-400" />
                                <span className="font-semibold text-slate-100">AI Symptom Evaluation</span>
                              </div>
                              <span className="text-xs font-mono text-emerald-400">Gemini & ML</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">Triage Urgency</span>
                                <span className="text-teal-300 font-bold text-xs">Color-Coded Status</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                                <span className="text-slate-400 block text-[10px]">Report Generator</span>
                                <span className="text-cyan-300 font-bold text-xs">Automated PDF</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                              <div className="flex justify-between items-center text-slate-300 text-xs">
                                <span>Multi-Tier Architecture</span>
                                <span className="text-teal-400 font-mono">MERN + Flask</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full w-4/5" />
                              </div>
                            </div>

                            {/* Medical Disclaimer Alert */}
                            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-[11px] leading-tight">
                              <strong>Ethical Notice:</strong> Preliminary screening tool; does not replace consultation with a licensed medical professional.
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
