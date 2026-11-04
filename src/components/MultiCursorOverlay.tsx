import React from 'react';
import { CursorState } from '../types/portfolio';

interface MultiCursorOverlayProps {
  cursors: CursorState[];
  showCursors: boolean;
  isBlueprintMode: boolean;
  progress: number;
}

export const MultiCursorOverlay: React.FC<MultiCursorOverlayProps> = ({
  cursors,
  showCursors,
  isBlueprintMode,
  progress,
}) => {
  if (!showCursors) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* Blueprint grid mode guidelines */}
      {isBlueprintMode && (
        <div className="absolute inset-0 blueprint-grid opacity-60">
          <div className="absolute top-4 left-6 text-xs font-mono text-blue-400 bg-blue-950/80 border border-blue-500/40 px-2 py-1 rounded">
            SYS: BLUEPRINT ACTIVE · PROGRESS {(progress * 100).toFixed(1)}% · VIEWPORT 1440 × 900
          </div>
        </div>
      )}

      {/* Render each collaborator cursor */}
      {cursors.map(cursor => {
        return (
          <div
            key={cursor.id}
            className="absolute transition-transform duration-75 ease-out"
            style={{
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
              transform: 'translate(-2px, -2px)',
            }}
          >
            {/* Guide crosshairs in blueprint mode */}
            {isBlueprintMode && (
              <>
                <div
                  className="absolute -top-[1000px] left-0 w-px h-[2000px] opacity-25"
                  style={{ backgroundColor: cursor.color }}
                />
                <div
                  className="absolute top-0 -left-[1000px] h-px w-[2000px] opacity-25"
                  style={{ backgroundColor: cursor.color }}
                />
              </>
            )}

            {/* Selection Bounding Box when drafting */}
            {cursor.isDrafting && cursor.selectionBox && (
              <div
                className="absolute border border-dashed rounded-lg transition-all duration-150"
                style={{
                  borderColor: cursor.color,
                  width: `${cursor.selectionBox.width}px`,
                  height: `${cursor.selectionBox.height}px`,
                  top: '18px',
                  left: '18px',
                  backgroundColor: `${cursor.color}08`,
                }}
              >
                {/* Corner resize handle dots */}
                <span
                  className="absolute -top-1 -left-1 w-2 h-2 rounded-sm border"
                  style={{ backgroundColor: '#09090b', borderColor: cursor.color }}
                />
                <span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-sm border"
                  style={{ backgroundColor: '#09090b', borderColor: cursor.color }}
                />
                <span
                  className="absolute -bottom-1 -left-1 w-2 h-2 rounded-sm border"
                  style={{ backgroundColor: '#09090b', borderColor: cursor.color }}
                />
                <span
                  className="absolute -bottom-1 -right-1 w-2 h-2 rounded-sm border"
                  style={{ backgroundColor: '#09090b', borderColor: cursor.color }}
                />

                {/* Dimension label */}
                <div
                  className="absolute -top-6 left-0 text-[10px] font-mono tracking-tight px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap text-white"
                  style={{ backgroundColor: cursor.color }}
                >
                  {cursor.selectionBox.label}
                </div>
              </div>
            )}

            {/* SVG Cursor Pointer Arrow */}
            <svg
              className="w-5 h-5 drop-shadow-md"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill={cursor.color}
                stroke="#09090b"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            {/* Cursor Name Badge & Action Tag */}
            <div
              className="absolute left-4 top-3 px-2 py-1 rounded-md shadow-lg text-white whitespace-nowrap flex items-center gap-1.5"
              style={{ backgroundColor: cursor.color }}
            >
              <span className="text-[11px] font-medium tracking-tight">
                {cursor.name}
              </span>
              <span className="text-[9px] opacity-90 font-mono tracking-normal bg-black/25 px-1 py-0.2 rounded">
                {cursor.actionText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
