import React from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  constructionProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, constructionProgress }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-display flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <span>Smirti Bhatta</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('stack')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Tech Matrix
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-blue-600/20"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Progress hairline indicator */}
      <div className="h-0.5 bg-zinc-900 w-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-rose-500 transition-all duration-75"
          style={{ width: `${Math.min(100, Math.max(0, constructionProgress * 100))}%` }}
        />
      </div>
    </header>
  );
};
