import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Cpu, Layers, GitBranch, HeartPulse, Activity } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  const isArogya = project.id === 'arogya-sarthi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-navy-950 border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Project Description */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </div>

        {/* Medical Disclaimer for Arogya Sarthi */}
        {isArogya && project.medicalDisclaimer && (
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-amber-300">Ethical Healthcare Notice:</strong>
              {project.medicalDisclaimer}
            </div>
          </div>
        )}

        {/* Interactive Architecture Breakdown */}
        {project.architectureHighlights && (
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Architectural Agents & Pipelines
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                  <div className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {arch.agent}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {arch.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Key Technical Implementations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technology Stack & Cloud Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-slate-800/80 border border-slate-700 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons in Modal */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>{project.githubButtonText || "View on GitHub"}</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-medium bg-transparent hover:bg-slate-800 text-slate-300 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
