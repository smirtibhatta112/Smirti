import { useState, useEffect, useRef, useCallback } from 'react';
import { CursorState, ConstructionEngineState } from '../types/portfolio';

// Initial cursor configurations with vibrant Figma-style colors
const INITIAL_CURSORS: CursorState[] = [
  {
    id: 'smirti',
    name: 'Smirti (Lead)',
    color: '#3B82F6', // Cobalt Blue
    badgeBg: 'bg-blue-600',
    role: 'Creative Technologist',
    x: 20,
    y: 15,
    targetX: 25,
    targetY: 20,
    isDrafting: true,
    actionText: 'Drafting Hero Typography & Grid',
    selectionBox: { width: 340, height: 160, label: 'Hero Container · 1280 × 640' },
  },
  {
    id: 'maya',
    name: 'Maya',
    color: '#10B981', // Emerald
    badgeBg: 'bg-emerald-600',
    role: 'Design Systems',
    x: 82,
    y: 25,
    targetX: 75,
    targetY: 30,
    isDrafting: false,
    actionText: 'Snapping Architectural Guides',
    selectionBox: { width: 220, height: 180, label: 'Canvas Sandbox · 480 × 420' },
  },
  {
    id: 'liam',
    name: 'Liam',
    color: '#F43F5E', // Rose
    badgeBg: 'bg-rose-600',
    role: 'Systems Architect',
    x: 45,
    y: 55,
    targetX: 50,
    targetY: 60,
    isDrafting: true,
    actionText: 'Mounting Bento Project Grid',
    selectionBox: { width: 480, height: 260, label: 'HyperCanvas Node · 640 × 380' },
  },
  {
    id: 'sofia',
    name: 'Sofia',
    color: '#F59E0B', // Amber
    badgeBg: 'bg-amber-600',
    role: 'Motion & Physics',
    x: 70,
    y: 75,
    targetX: 65,
    targetY: 80,
    isDrafting: false,
    actionText: 'Tuning Spring Mechanics',
    selectionBox: { width: 320, height: 140, label: 'Skills Matrix · 860 × 320' },
  },
  {
    id: 'kael',
    name: 'Kael',
    color: '#8B5CF6', // Violet
    badgeBg: 'bg-purple-600',
    role: 'DevOps & Edge',
    x: 30,
    y: 90,
    targetX: 35,
    targetY: 92,
    isDrafting: true,
    actionText: 'Wiring Dispatch Terminal',
    selectionBox: { width: 420, height: 200, label: 'Contact Terminal · 720 × 440' },
  },
];

export function useConstructionEngine() {
  const [engineState, setEngineState] = useState<ConstructionEngineState>({
    progress: 0,
    isAutoPlaying: true,
    isBlueprintMode: false,
    showCursors: true,
    speed: 1,
    activeSection: 'hero',
  });

  const [cursors, setCursors] = useState<CursorState[]>(INITIAL_CURSORS);
  const userInteractedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const autoPlayStartRef = useRef<number>(Date.now());
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  // Dynamic cursor trajectory interpolation based on normalized progress (0 to 1)
  const computeCursorPositions = useCallback((progress: number): CursorState[] => {
    // Stage thresholds:
    // 0.0 - 0.25: Hero construction
    // 0.25 - 0.55: Projects assembly
    // 0.55 - 0.75: Stack matrix
    // 0.75 - 0.90: Experience timeline
    // 0.90 - 1.00: Contact & terminal

    const t = progress; // 0 to 1

    return INITIAL_CURSORS.map((cursor, idx) => {
      let x = cursor.x;
      let y = cursor.y;
      let actionText = cursor.actionText;
      let isDrafting = false;
      let box = cursor.selectionBox;

      // Parametric motion paths with smooth sine/cosine waves
      if (idx === 0) {
        // Smirti (Lead cursor - navigates down the spine of the page)
        x = 20 + Math.sin(t * Math.PI * 4) * 18 + t * 15;
        y = 12 + t * 82;
        if (t < 0.25) {
          actionText = 'Typing Hero Title & Bio';
          isDrafting = true;
          box = { width: 380, height: 180, label: 'Hero Header · 1280 × 540' };
        } else if (t < 0.55) {
          actionText = 'Aligning HyperCanvas Architecture';
          isDrafting = true;
          box = { width: 520, height: 320, label: 'Project Showcase · 840 × 480' };
        } else if (t < 0.8) {
          actionText = 'Linking Distributed Nodes';
          isDrafting = false;
          box = { width: 320, height: 160, label: 'Node Cluster · 420 × 200' };
        } else {
          actionText = 'Compiling Contact Endpoint';
          isDrafting = true;
          box = { width: 440, height: 240, label: 'Terminal Ready · 680 × 360' };
        }
      } else if (idx === 1) {
        // Maya (Design systems - focuses on right-hand components and alignments)
        x = 75 - Math.cos(t * Math.PI * 3.5) * 16;
        y = 18 + t * 76;
        if (t < 0.3) {
          actionText = 'Balancing Visual Padding';
          isDrafting = true;
          box = { width: 300, height: 260, label: 'Interactive Sandbox · 460 × 420' };
        } else if (t < 0.65) {
          actionText = 'Setting Bento Glass Tokens';
          isDrafting = false;
          box = { width: 400, height: 280, label: 'PulseCloud Card · 580 × 340' };
        } else {
          actionText = 'Calibrating WCAG AA Contrast';
          isDrafting = true;
          box = { width: 360, height: 180, label: 'Input Fields · 540 × 240' };
        }
      } else if (idx === 2) {
        // Liam (Systems - assembles bento cards and timeline items)
        x = 35 + Math.sin(t * Math.PI * 5 + 1) * 22;
        y = 28 + t * 68;
        if (t < 0.25) {
          actionText = 'Measuring Viewport Baseline';
          isDrafting = false;
        } else if (t < 0.55) {
          actionText = 'Snapping Grid Anchors';
          isDrafting = true;
          box = { width: 460, height: 220, label: 'AuraSound Card · 580 × 320' };
        } else if (t < 0.85) {
          actionText = 'Tracing Experience Milestones';
          isDrafting = true;
          box = { width: 420, height: 140, label: 'Studio Kinetic · 2024' };
        } else {
          actionText = 'Synchronizing WebSockets';
          isDrafting = false;
        }
      } else if (idx === 3) {
        // Sofia (Motion & physics - bounces dynamically across interactive controls)
        x = 60 + Math.cos(t * Math.PI * 4 + 2) * 25;
        y = 38 + t * 56;
        if (t < 0.5) {
          actionText = 'Checking 60 FPS Render Loop';
          isDrafting = false;
        } else if (t < 0.8) {
          actionText = 'Arranging Skill Nodes';
          isDrafting = true;
          box = { width: 280, height: 120, label: 'TypeScript / React · 98%' };
        } else {
          actionText = 'Validating Dispatch Form';
          isDrafting = false;
        }
      } else {
        // Kael (Edge & DevOps - inspects metrics and footer)
        x = 48 - Math.sin(t * Math.PI * 3) * 28;
        y = 45 + t * 52;
        if (t < 0.4) {
          actionText = 'Hydrating 99.98% Metrics';
          isDrafting = true;
          box = { width: 260, height: 90, label: 'KPI Strip · 1280 × 110' };
        } else if (t < 0.8) {
          actionText = 'Optimizing Cloud Spans';
          isDrafting = false;
        } else {
          actionText = 'Verifying Direct Mailer Stream';
          isDrafting = true;
          box = { width: 340, height: 160, label: 'SMTP Bridge · Secure' };
        }
      }

      // Clamp values within viewport boundaries (5% to 92%)
      const clampedX = Math.max(4, Math.min(94, x));
      const clampedY = Math.max(6, Math.min(94, y));

      return {
        ...cursor,
        x: clampedX,
        y: clampedY,
        isDrafting,
        actionText,
        selectionBox: box,
      };
    });
  }, []);

  // Sync scroll position to target progress
  useEffect(() => {
    const handleScroll = () => {
      userInteractedRef.current = true;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = Math.max(0, Math.min(1, window.scrollY / totalHeight));
        targetProgressRef.current = scrolled;
        setEngineState(prev => ({
          ...prev,
          isAutoPlaying: false,
          progress: scrolled,
          activeSection:
            scrolled < 0.22 ? 'hero' :
            scrolled < 0.52 ? 'projects' :
            scrolled < 0.72 ? 'stack' :
            scrolled < 0.88 ? 'experience' : 'contact',
        }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main animation / interpolation loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (engineState.isAutoPlaying && !userInteractedRef.current) {
        // Auto-play entrance sequence over 4.5 seconds
        const elapsed = (Date.now() - autoPlayStartRef.current) / 1000;
        const cycleDuration = 6.0;
        const normalized = Math.min(1, elapsed / cycleDuration);

        // Smooth cubic ease-out
        const eased = 1 - Math.pow(1 - normalized, 3);
        currentProgressRef.current = eased;
        targetProgressRef.current = eased;

        setEngineState(prev => ({
          ...prev,
          progress: eased,
          activeSection:
            eased < 0.22 ? 'hero' :
            eased < 0.52 ? 'projects' :
            eased < 0.72 ? 'stack' :
            eased < 0.88 ? 'experience' : 'contact',
        }));

        if (normalized >= 1) {
          // Finished auto-intro
          setEngineState(prev => ({ ...prev, isAutoPlaying: false }));
        }
      } else {
        // Smooth lerp towards target scroll progress
        const diff = targetProgressRef.current - currentProgressRef.current;
        if (Math.abs(diff) > 0.001) {
          currentProgressRef.current += diff * Math.min(1, dt * 10);
        } else {
          currentProgressRef.current = targetProgressRef.current;
        }
      }

      setCursors(computeCursorPositions(currentProgressRef.current));
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [engineState.isAutoPlaying, computeCursorPositions]);

  // Controls for floating dock
  const setProgress = (val: number) => {
    userInteractedRef.current = true;
    targetProgressRef.current = Math.max(0, Math.min(1, val));
    currentProgressRef.current = targetProgressRef.current;
    setEngineState(prev => ({
      ...prev,
      progress: targetProgressRef.current,
      isAutoPlaying: false,
    }));

    // Optionally scroll window to match
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      window.scrollTo({
        top: val * totalHeight,
        behavior: 'smooth',
      });
    }
  };

  const toggleAutoPlay = () => {
    setEngineState(prev => {
      const next = !prev.isAutoPlaying;
      if (next) {
        userInteractedRef.current = false;
        autoPlayStartRef.current = Date.now();
      }
      return { ...prev, isAutoPlaying: next };
    });
  };

  const replayEntrance = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    userInteractedRef.current = false;
    autoPlayStartRef.current = Date.now();
    targetProgressRef.current = 0;
    currentProgressRef.current = 0;
    setEngineState(prev => ({
      ...prev,
      progress: 0,
      isAutoPlaying: true,
      activeSection: 'hero',
    }));
  };

  const toggleBlueprint = () => {
    setEngineState(prev => ({ ...prev, isBlueprintMode: !prev.isBlueprintMode }));
  };

  const toggleCursors = () => {
    setEngineState(prev => ({ ...prev, showCursors: !prev.showCursors }));
  };

  return {
    engineState,
    cursors,
    setProgress,
    toggleAutoPlay,
    replayEntrance,
    toggleBlueprint,
    toggleCursors,
  };
}
