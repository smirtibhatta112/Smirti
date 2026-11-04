import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceTimelineProps {
  progress: number;
  isBlueprintMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  progress,
  isBlueprintMode,
}) => {
  // Construction progress mapping for experience (0.65 to 0.88)
  const expReveal = Math.min(1, Math.max(0, (progress - 0.6) / 0.25));

  return (
    <section id="experience" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80">
      {/* Blueprint indicator */}
      {isBlueprintMode && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded">
          <span>FRAME: TIMELINE_TRACE_04</span>
          <span>·</span>
          <span>ENTRIES: {EXPERIENCES.length} CHRONOLOGICAL</span>
          <span>·</span>
          <span>INTERPOLATION: {(expReveal * 100).toFixed(0)}%</span>
        </div>
      )}

      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
          04. Engineering Track Record
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          Five years of shipping production software, managing real-time infrastructure, and leading
          cross-disciplinary frontend and backend engineering teams.
        </p>
      </div>

      {/* Chronological Vertical Track */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.id}
            className="relative transition-all duration-300"
            style={{
              opacity: isBlueprintMode ? 0.95 : Math.max(0.25, expReveal),
              transform: `translateY(${(1 - expReveal) * 12}px)`,
            }}
          >
            {/* Timeline node icon */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                idx === 0 ? 'bg-blue-500 border-zinc-950' : 'bg-zinc-800 border-zinc-950'
              }`}
            />

            {/* Role Header & Metadata (Anti-Slop §1.A: clean unboxed text) */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="text-blue-400 font-medium">{exp.period}</span>
                <span aria-hidden="true">·</span>
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Company Name */}
            <div className="text-sm font-semibold text-zinc-300 mb-4">
              {exp.company}
            </div>

            {/* Role Summary */}
            <p className="text-sm text-zinc-300 mb-4 max-w-3xl leading-relaxed">
              {exp.description}
            </p>

            {/* Quantitative Impact Points */}
            <div className="space-y-2 mb-4 max-w-3xl">
              {exp.impactMetrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            {/* Technologies list (clean separated text) */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-500 font-mono">
              <span className="text-zinc-400">Applied Stack:</span>
              {exp.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="text-zinc-400">
                  {tech}{tIdx < exp.technologies.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>

            {/* Blueprint coordinates */}
            {isBlueprintMode && (
              <div className="mt-2 text-[10px] font-mono text-blue-400/80">
                TIMELINE_NODE_{idx + 1} // OFFSET: Y+{(idx * 160)}px
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
