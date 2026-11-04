import React, { useState } from 'react';
import { Terminal, ArrowUpRight, Sparkles, Code2, Cpu, Globe, MousePointer2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  progress: number;
  isBlueprintMode: boolean;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  progress,
  isBlueprintMode,
  onExploreProjects,
  onContactClick,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'specs'>('architecture');
  const [interactiveCounter, setInteractiveCounter] = useState(1);
  const [interactiveRipple, setInteractiveRipple] = useState<{ x: number; y: number } | null>(null);

  // Construction reveal calculation for hero (0.0 to 0.3)
  const heroReveal = Math.min(1, Math.max(0, progress / 0.18));
  const wireframeOpacity = isBlueprintMode ? 1 : Math.max(0, 1 - heroReveal * 1.5);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setInteractiveRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setInteractiveCounter(prev => prev + 1);
    setTimeout(() => setInteractiveRipple(null), 800);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Blueprint indicator tag when in blueprint mode */}
      {isBlueprintMode && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded">
          <span>FRAME: HERO_CANVAS_01</span>
          <span>·</span>
          <span>COORDINATES: (0, 0, 1440, 720)</span>
          <span>·</span>
          <span>ASSEMBLY_STATE: {heroReveal >= 0.8 ? 'CONSTRUCTED' : 'DRAFTING'}</span>
        </div>
      )}

      {/* 2-Column Split: Typographic Impact (Left) & Live Sandbox Canvas (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Natural human editorial kicker (no pills, no mechanical code prefixes) */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4 tracking-wide uppercase">
            <span>Engineering &amp; Creative Code</span>
            <span aria-hidden="true">·</span>
            <span>San Francisco, CA</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Available For Projects</span>
          </div>

          {/* Oversized display headline with balanced text */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.08] transition-all duration-200"
            style={{
              textWrap: 'balance',
              opacity: isBlueprintMode ? 0.9 : Math.max(0.4, heroReveal),
              transform: `translateY(${(1 - heroReveal) * 8}px)`,
            }}
          >
            Engineering distributed backends &amp; real-time{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              spatial canvases.
            </span>
          </h1>

          {/* Lead bio paragraph */}
          <p
            className="text-base sm:text-lg text-zinc-300 mb-8 max-w-2xl leading-relaxed transition-opacity duration-200"
            style={{ opacity: Math.max(0.3, heroReveal) }}
          >
            I am <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong>, a {PERSONAL_INFO.title}.
            I bridge high-throughput cloud architectures (Go, Node.js, WebSockets, ClickHouse) with
            cutting-edge browser engineering (WebGL, Canvas, React 19, CRDTs), building systems that are
            both computationally robust and aesthetically unforgettable.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-xl font-medium text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
            >
              Initialize Contact Terminal
            </button>
          </div>

          {/* Wireframe construction measurement tags */}
          {(isBlueprintMode || wireframeOpacity > 0.2) && (
            <div className="mt-6 flex items-center gap-4 text-[11px] font-mono text-zinc-600">
              <span>W: 760px</span>
              <span>·</span>
              <span>H: Auto</span>
              <span>·</span>
              <span>P: py-32 px-6</span>
              <span>·</span>
              <span>STATE: {heroReveal > 0.9 ? 'FINALIZED' : 'INTERPOLATING'}</span>
            </div>
          )}
        </div>

        {/* Right Column: Live Technologist Sandbox Canvas */}
        <div className="lg:col-span-5 flex flex-col">
          <div
            onClick={handleCanvasClick}
            className={`relative flex-1 min-h-[420px] rounded-2xl bg-zinc-900/90 border transition-all duration-300 overflow-hidden cursor-crosshair select-none ${
              isBlueprintMode
                ? 'border-blue-500/80 shadow-lg shadow-blue-950/50'
                : 'border-zinc-800/80 hover:border-zinc-700 shadow-2xl'
            }`}
          >
            {/* Architectural Grid pattern */}
            <div className="absolute inset-0 drafting-grid opacity-70" />

            {/* Ripple when user clicks */}
            {interactiveRipple && (
              <span
                className="absolute rounded-full border border-blue-400 bg-blue-500/20 pointer-events-none animate-ping"
                style={{
                  left: interactiveRipple.x - 20,
                  top: interactiveRipple.y - 20,
                  width: 40,
                  height: 40,
                }}
              />
            )}

            {/* Sandbox Header Bar */}
            <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-zinc-400 ml-2">sandbox.spatial.ts</span>
              </div>

              {/* Functional Tab Buttons */}
              <div className="flex items-center gap-1 p-0.5 bg-zinc-900 rounded-lg border border-zinc-800">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('architecture');
                  }}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    activeTab === 'architecture' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Visual
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('code');
                  }}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    activeTab === 'code' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Code
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab('specs');
                  }}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    activeTab === 'specs' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Bio
                </button>
              </div>
            </div>

            {/* Sandbox Body Content */}
            <div className="relative z-10 p-5 flex flex-col justify-between h-[calc(100%-48px)]">
              {activeTab === 'architecture' && (
                <div className="flex flex-col justify-between h-full">
                  {/* Top node cluster */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                      <div className="flex items-center gap-2 mb-1.5 text-blue-400">
                        <Cpu className="w-4 h-4" />
                        <span className="text-xs font-mono font-medium">Distributed Sync</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Sub-16ms CRDT delta broadcast with WebSocket multiplexing.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                      <div className="flex items-center gap-2 mb-1.5 text-emerald-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-xs font-mono font-medium">Spatial WebGL</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Quadtree viewport culling supporting 50+ concurrent cursors.
                      </p>
                    </div>
                  </div>

                  {/* Center interactive canvas arena */}
                  <div className="relative my-4 p-4 rounded-xl border border-dashed border-zinc-700/60 bg-zinc-950/40 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 mb-2">
                      <MousePointer2 className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
                      <span>Click to spawn telemetry pulses</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                      {interactiveCounter} Interactions Registered
                    </div>
                    <div className="mt-1 text-[11px] text-zinc-500">
                      Live state synced to animation loop · 60 FPS
                    </div>
                  </div>

                  {/* Bottom collaborator note */}
                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Active Studio Session</span>
                    </div>
                    <span className="font-mono text-zinc-500">5 Builders Connected</span>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="h-full flex flex-col">
                  <pre className="text-xs font-mono text-zinc-300 p-3 rounded-xl bg-zinc-950/90 border border-zinc-800/80 overflow-x-auto leading-relaxed flex-1">
                    <code>{`// Core Spatial Synchronizer
export class CollaborativeCanvas {
  private socket: WebSocket;
  private crdtDoc: Y.Doc;

  constructor(room: string) {
    this.crdtDoc = new Y.Doc();
    this.socket = new WebSocket(\`wss://mesh/\${room}\`);
    this.bindVectorObservers();
  }

  // 60 FPS interpolated rendering
  public render(delta: number): void {
    this.quadtree.cullOffscreen();
    this.batchRenderGL(this.activeCursors);
  }
}`}</code>
                  </pre>
                  <div className="mt-2 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                    <span>Clean strict TypeScript</span>
                    <span>Zero unhandled rejections</span>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-16 h-16 rounded-xl object-cover border border-zinc-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{PERSONAL_INFO.name}</h4>
                      <p className="text-xs text-zinc-400 mb-1">{PERSONAL_INFO.title}</p>
                      <span className="text-[11px] font-mono text-blue-400">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed">
                    "I build software that balances technical resilience with expressive interface craft.
                    Whether tuning Go microservices or writing GLSL shaders, I prioritize clarity,
                    performance, and craftsmanship."
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800">
                    <span>Base: San Francisco, CA</span>
                    <span>Status: Available</span>
                  </div>
                </div>
              )}
            </div>

            {/* Corner Blueprint Tag */}
            {isBlueprintMode && (
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-blue-400/80 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-800/50">
                SANDBOX_VP_480x420
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full-width 4-Column KPI Metric Strip below split (Mandatory from Domain Reference §2.B) */}
      <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {PERSONAL_INFO.metrics.map((metric, i) => (
          <div
            key={i}
            className="flex flex-col transition-all duration-200"
            style={{
              opacity: Math.max(0.3, heroReveal),
              transform: `translateY(${(1 - heroReveal) * 10}px)`,
            }}
          >
            <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white mb-1 tabular-nums">
              {metric.value}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
