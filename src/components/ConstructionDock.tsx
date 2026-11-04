import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Eye, EyeOff, Compass, Layers, ChevronUp, ChevronDown } from 'lucide-react';
import { ConstructionEngineState } from '../types/portfolio';

interface ConstructionDockProps {
  engineState: ConstructionEngineState;
  setProgress: (val: number) => void;
  toggleAutoPlay: () => void;
  replayEntrance: () => void;
  toggleBlueprint: () => void;
  toggleCursors: () => void;
}

export const ConstructionDock: React.FC<ConstructionDockProps> = ({
  engineState,
  setProgress,
  toggleAutoPlay,
  replayEntrance,
  toggleBlueprint,
  toggleCursors,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getPhaseName = (p: number) => {
    if (p < 0.22) return '01. Hero & Technologist Canvas';
    if (p < 0.52) return '02. Bento Architecture & Projects';
    if (p < 0.72) return '03. Distributed Stack Matrix';
    if (p < 0.88) return '04. Engineering Milestones';
    return '05. Dispatch Terminal & Contact';
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl transition-all duration-200">
      <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800/80 rounded-2xl shadow-2xl p-3 px-4 text-zinc-300">
        {/* Top Mini Bar with collapse toggle */}
        <div className="flex items-center justify-between gap-4 pb-2 border-b border-zinc-800/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-zinc-200">
              LIVE CONSTRUCTION ENGINE
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline">·</span>
            <span className="text-xs font-mono text-blue-400 hidden sm:inline">
              {getPhaseName(engineState.progress)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 tabular-nums">
              {(engineState.progress * 100).toFixed(0)}% BUILT
            </span>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              title={isCollapsed ? 'Expand Dock' : 'Collapse Dock'}
            >
              {isCollapsed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Controls */}
        {!isCollapsed && (
          <div className="pt-2 flex flex-col gap-2.5">
            {/* Scrubber Range */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">0%</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.005"
                value={engineState.progress}
                onChange={e => setProgress(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
              />
              <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap">100%</span>
            </div>

            {/* Actions Strip */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleAutoPlay}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                    engineState.isAutoPlaying
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300'
                  }`}
                  title="Auto build loop"
                >
                  {engineState.isAutoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" /> Auto-Constructing
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" /> Auto Construct
                    </>
                  )}
                </button>

                <button
                  onClick={replayEntrance}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg font-medium bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 transition-colors"
                  title="Replay landing sequence"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Replay Intro
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleBlueprint}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                    engineState.isBlueprintMode
                      ? 'bg-amber-600 text-white'
                      : 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300'
                  }`}
                  title="Toggle architectural blueprint mode"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{engineState.isBlueprintMode ? 'Blueprint Mode ON' : 'Blueprint Mode'}</span>
                </button>

                <button
                  onClick={toggleCursors}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                    engineState.showCursors
                      ? 'bg-zinc-800/80 text-zinc-200'
                      : 'bg-zinc-900 text-zinc-500'
                  }`}
                  title="Show/hide 5 builder cursors"
                >
                  {engineState.showCursors ? (
                    <>
                      <Eye className="w-3.5 h-3.5 text-blue-400" /> Cursors (5)
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Cursors Hidden
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
