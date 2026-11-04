export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  architecture: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
  };
  metrics: {
    label: string;
    value: string;
  }[];
  challenges: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend & Spatial' | 'Backend & Distributed' | 'Cloud & Infrastructure' | 'Creative Tech';
  level: number; // 1-100
  highlight: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  impactMetrics: string[];
  technologies: string[];
}

export interface CursorState {
  id: string;
  name: string;
  color: string;
  badgeBg: string;
  role: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  targetX: number;
  targetY: number;
  isDrafting: boolean;
  actionText: string;
  selectionBox?: {
    width: number;
    height: number;
    label: string;
  };
}

export interface ConstructionEngineState {
  progress: number; // 0 to 1
  isAutoPlaying: boolean;
  isBlueprintMode: boolean;
  showCursors: boolean;
  speed: number;
  activeSection: string;
}
