import React, { useState } from 'react';
import { Search, Code2, Server, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

interface SkillsMatrixProps {
  progress: number;
  isBlueprintMode: boolean;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ progress, isBlueprintMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Construction progress mapping for skills (0.45 to 0.72)
  const stackReveal = Math.min(1, Math.max(0, (progress - 0.4) / 0.28));

  const categories = ['All', 'Frontend & Spatial', 'Backend & Distributed', 'Cloud & Infrastructure', 'Creative Tech'];

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="stack" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80">
      {/* Blueprint indicator */}
      {isBlueprintMode && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded">
          <span>FRAME: TECH_MATRIX_03</span>
          <span>·</span>
          <span>NODES: {SKILLS.length} LOADED</span>
          <span>·</span>
          <span>QUERY: "{searchQuery || '*'}"</span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            03. Architectural Stack &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Technical Competence Matrix
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            A comprehensive overview of production tooling, runtime engines, and architectural
            patterns applied across real-time distributed platforms.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 border border-zinc-800/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedSkill(skill)}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              selectedSkill?.name === skill.name
                ? 'border-blue-500 bg-blue-950/20'
                : isBlueprintMode
                ? 'border-blue-500/60 bg-zinc-950'
                : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700'
            }`}
            style={{
              opacity: isBlueprintMode ? 0.95 : Math.max(0.2, stackReveal),
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400">
                  {skill.category}
                </span>
                <span className="text-xs font-mono text-blue-400 tabular-nums font-semibold">
                  {skill.level}%
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1.5">
                {skill.name}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {skill.highlight}
              </p>
            </div>

            {/* Proficiency Meter */}
            <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-3">
              <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                L5 EXPERT
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Skill Detail Callout */}
      {selectedSkill && (
        <div className="mt-8 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <span>ACTIVE INSPECTOR NODE</span>
              <span>·</span>
              <span>{selectedSkill.category}</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              {selectedSkill.name} in Production Architecture
            </h4>
            <p className="text-xs text-zinc-300 mt-1">
              {selectedSkill.highlight}. Applied extensively in multi-tenant cloud backends,
              real-time rendering pipelines, and enterprise microservices.
            </p>
          </div>

          <button
            onClick={() => setSelectedSkill(null)}
            className="px-4 py-2 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors whitespace-nowrap"
          >
            Close Inspector
          </button>
        </div>
      )}
    </section>
  );
};
