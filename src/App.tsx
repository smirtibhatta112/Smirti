/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useConstructionEngine } from './hooks/useConstructionEngine';
import { MultiCursorOverlay } from './components/MultiCursorOverlay';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConstructionDock } from './components/ConstructionDock';
import { Project } from './types/portfolio';

export default function App() {
  const {
    engineState,
    cursors,
    setProgress,
    toggleAutoPlay,
    replayEntrance,
    toggleBlueprint,
    toggleCursors,
  } = useConstructionEngine();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-100 relative ${engineState.isBlueprintMode ? 'blueprint-active' : ''}`}>
      {/* 5-Collaborator Multi-Cursor Overlay */}
      <MultiCursorOverlay
        cursors={cursors}
        showCursors={engineState.showCursors}
        isBlueprintMode={engineState.isBlueprintMode}
        progress={engineState.progress}
      />

      {/* Top Bar adhering strictly to Top Bar Contract */}
      <Navbar
        onNavigate={scrollToSection}
        constructionProgress={engineState.progress}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection
          progress={engineState.progress}
          isBlueprintMode={engineState.isBlueprintMode}
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        <ProjectsSection
          progress={engineState.progress}
          isBlueprintMode={engineState.isBlueprintMode}
          onSelectProject={setSelectedProject}
        />

        <SkillsMatrix
          progress={engineState.progress}
          isBlueprintMode={engineState.isBlueprintMode}
        />

        <ExperienceTimeline
          progress={engineState.progress}
          isBlueprintMode={engineState.isBlueprintMode}
        />

        <ContactSection
          progress={engineState.progress}
          isBlueprintMode={engineState.isBlueprintMode}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating Interactive Construction Dock */}
      <ConstructionDock
        engineState={engineState}
        setProgress={setProgress}
        toggleAutoPlay={toggleAutoPlay}
        replayEntrance={replayEntrance}
        toggleBlueprint={toggleBlueprint}
        toggleCursors={toggleCursors}
      />
    </div>
  );
}
