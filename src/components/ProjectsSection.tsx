import React, { useState } from 'react';
import { ArrowUpRight, Code2, Layers, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  progress: number;
  isBlueprintMode: boolean;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  progress,
  isBlueprintMode,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  // Construction progress mapping for projects (0.22 to 0.52)
  const projectReveal = Math.min(1, Math.max(0, (progress - 0.18) / 0.28));

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80">
      {/* Blueprint Mode Frame Tag */}
      {isBlueprintMode && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded">
          <span>FRAME: BENTO_GRID_02</span>
          <span>·</span>
          <span>COORDINATES: (0, 720, 1440, 1200)</span>
          <span>·</span>
          <span>CELLS: 4 ASSEMBLED</span>
        </div>
      )}

      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          {/* Natural Human Editorial Title */}
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            02. Featured Engineering Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Selected Production Systems
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            A curated selection of distributed architectures, high-performance web applications,
            and real-time spatial computing environments.
          </p>
        </div>

        {/* Filter Tabs (Interactive buttons, not pills) */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setFilter('spatial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'spatial'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Spatial &amp; Canvas
          </button>
          <button
            onClick={() => setFilter('distributed')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'distributed'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Distributed Systems
          </button>
          <button
            onClick={() => setFilter('creative')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filter === 'creative'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Creative DSP
          </button>
        </div>
      </div>

      {/* Dynamic Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          // Dynamic span for Bento rhythm: First card is large (2 columns on lg)
          const isWide = idx === 0 || idx === 3;

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                isWide ? 'lg:col-span-2' : 'lg:col-span-1'
              } ${
                isBlueprintMode
                  ? 'border-blue-500/80 bg-zinc-950/90 shadow-md'
                  : 'bg-zinc-900/50 hover:bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700 shadow-xl'
              }`}
              style={{
                opacity: isBlueprintMode ? 0.95 : Math.max(0.25, projectReveal),
                transform: `scale(${isBlueprintMode ? 1 : 0.96 + projectReveal * 0.04})`,
              }}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Hover Inspect Indicator */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm">
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators (Anti-Slop §1.A) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-400">{project.metrics[0].label}: {project.metrics[0].value}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Highlights Footer */}
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.architecture.frontend.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-zinc-400 font-mono text-[11px]">
                        {t}{i < 2 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium text-xs">
                    View Case Study &rarr;
                  </span>
                </div>
              </div>

              {/* Wireframe blueprint coordinates tag */}
              {isBlueprintMode && (
                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-blue-400 bg-blue-950/90 px-1.5 py-0.5 rounded border border-blue-800/60">
                  CARD_INDEX_{idx + 1} · BOUNDS ({isWide ? '840x480' : '420x480'})
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
