import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Server, Cloud } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Hero Visual */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 aspect-video bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-300 mt-1">{project.tagline}</p>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-zinc-400 mb-1">{metric.label}</span>
                <span className="text-xl font-bold font-mono text-white tabular-nums">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Deep Architectural Narrative */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2">
              System Architecture &amp; Engineering Decisions
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* 3-Pillar Technology Breakdown */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              Production Stack Composition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Frontend */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2 mb-3 text-blue-400 text-xs font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>Frontend &amp; Interface</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.frontend.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-zinc-300 bg-zinc-800/80 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 text-xs font-semibold">
                  <Server className="w-4 h-4" />
                  <span>Backend &amp; Concurrency</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.backend.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-zinc-300 bg-zinc-800/80 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2 mb-3 text-purple-400 text-xs font-semibold">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud &amp; DevOps</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.infrastructure.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-zinc-300 bg-zinc-800/80 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hard Engineering Challenges Overcome */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">
              Key Engineering Challenges Overcome
            </h3>
            <div className="space-y-2.5">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
