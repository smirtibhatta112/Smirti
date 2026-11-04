# Collaborative Live-Constructed Portfolio — Smirti Bhatta

A high-performance portfolio website for Smirti Bhatta (Full-Stack Developer & Creative Technologist) featuring an interactive "site under live construction" experience where vibrant Figma-style multi-user cursors draft, assemble, and snap components into place both automatically on arrival and interactively scrubbed as the user scrolls up and down.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The clarifying questions were answered in Phase 1:
> - **Professional Title & Focus**: Full-Stack Developer and Creative Technologist (Smirti Bhatta, `smirtibhatta112@gmail.com`).
> - **Visual Aesthetic & Theme**: Dark modern studio with jet black canvas (`#09090b`), subtle grid architecture, slate surfaces, and vibrant Figma-style multi-user cursors (Rose, Emerald, Cobalt, Amber, Violet).
> - **Construction Sequence**: Dual-mode engine featuring an automatic choreographed entrance sequence upon load, plus a 60fps scroll-scrubbed construction pipeline that builds components as the user scrolls down and reverses cleanly when scrolling up.
> - **Interactive Construction Console**: A discrete floating control dock allowing users to scrub the build timeline (0% to 100%), replay the entrance sequence, toggle cursor visibility, or switch between Blueprint Wireframe and Final Rendered modes.

---

## 1. Overview & Core Concept

### What It Does
When visitors land on the portfolio, the interface comes alive as if an elite design and engineering team is actively building the website in real-time. Colored cursors with name tags (e.g., *Smirti*, *Maya*, *Liam*, *Sofia*) sweep across the canvas, drawing selection boxes, snapping layout blocks into place, and assembling typography and graphics. As the user scrolls, the construction progresses through distinct phases (Wireframe Blueprint → Skeletal Structure → Populated Components → Interactive State), with full bi-directional scroll reversal.

### Target Audience & Persona
- Engineering leaders, creative directors, tech recruiters, and startup founders seeking a high-caliber Full-Stack Developer and Creative Technologist capable of both complex system engineering and avant-garde UI design.

### Key Value
- Demonstrates immediate technical mastery in performance, real-time animation math, DOM manipulation, responsive layouts, and creative UI engineering without relying on heavy video assets or external dependencies.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Initial Entry & Choreographed Build Reveal**:
   - The user arrives; the viewport initializes in a clean architectural grid state.
   - 4 vibrant cursors spawn with realistic easing curves, drafting the top navigation, measuring hero boundaries, and assembling the hero copy and interactive preview panel.
2. **Scroll-Scrubbed Construction Progression**:
   - Scrolling down advances the construction timeline smoothly across sections:
     - **Hero Stage**: Blueprint lines convert into high-contrast editorial typography and live playground.
     - **Projects Stage**: Cursors drag and drop Bento project cards into place, snapping borders, loading telemetry tags, and rendering project showcases.
     - **Stack & Architecture Stage**: Cursors organize skill nodes and interactive connection lines.
     - **Experience & Timeline Stage**: Cursors draw milestones and chronological path markers.
     - **Contact Stage**: Cursors construct the dispatch terminal.
   - Scrolling up reverses the transformations smoothly without layout shifts or performance drops.
3. **Interactive Project Exploration**:
   - Clicking any Bento project card opens an expansive Project Modal with architecture diagrams, stack highlights, and live demo links.
4. **Interactive Construction Dock**:
   - Users can pause, replay, scrub the construction slider from 0% to 100%, toggle cursors on/off, or switch between "Blueprint Mode" (showing vector guidelines, bounding boxes, and dimension measurements) and "Production Mode".

### Visual Identity & Theme
- **Color Palette (60-30-10 Strict Discipline)**:
  - **60% Dominant Canvas**: Deep obsidian dark studio (`#09090b`, `#030712`) with subtle dot-matrix drafting grid (`rgba(255,255,255,0.04)`).
  - **30% Structural Surfaces**: Neutral zinc/slate borders (`#27272a`, `#18181b`), clean card surfaces (`#121215`), and muted typography (`#a1a1aa`).
  - **10% Accents & Multi-Cursors**: High-energy Figma-style collaborator cursors:
    - *Smirti (Host / Lead)*: `#3B82F6` (Electric Cobalt)
    - *Maya (UI/UX)*: `#10B981` (Vibrant Emerald)
    - *Liam (Systems)*: `#F43F5E` (Hot Rose)
    - *Sofia (Motion)*: `#F59E0B` (Amber Gold)
    - *Kael (Cloud/DevOps)*: `#8B5CF6` (Bright Violet)
- **Typography**:
  - Headings & Display: `Outfit` / `Plus Jakarta Sans` with tight tracking (`tracking-tight`) and balanced line wraps (`text-wrap: balance`).
  - Code & Architectural Measurements: `JetBrains Mono` / monospace tabular numerals (`font-mono tabular-nums`).
  - Body & Descriptions: `Plus Jakarta Sans` (14px–16px, 1.6 line height).
- **Anti-Slop Discipline**:
  - Strict zero-pill metadata: unboxed inline text with `·` separators.
  - Strict 3-zone Top Bar Contract (Wordmark — 4 clean text links — 1 primary action button).
  - No decorative pulsing dots, no fake telemetry gibberish, no broken images.

---

## 3. Key Product Decisions & Trade-Offs

### Decision 1: Lightweight Mathematical Multi-Cursor Engine
- **Chosen Approach**: A custom React animation hook powered by normalized scroll offsets and `requestAnimationFrame` with spring interpolation, calculating Bezier paths for cursor movement, selection box scaling, and component opacity/transform stages.
- **Why**: Zero external heavy 3D or video dependencies; remains hyper-responsive at 60+ FPS on mobile and desktop while maintaining perfect bi-directional scrub fidelity.
- **Alternatives Considered**: Lottie/video files (inflexible, heavy download, cannot react to user clicks or inspect individual elements).

### Decision 2: Dual-Mode Construction (Auto Entrance + Scroll Scrub)
- **Chosen Approach**: On page load, an automatic 4-second entrance showcase kicks off; if the user scrolls at any moment, control seamlessly transitions into scroll-linked scrubbing.
- **Why**: Ensures passive visitors immediately enjoy the spectacle without needing to scroll first, while active scrollers receive direct tactile feedback.

### Decision 3: Blueprint vs. Production Interactive Toggle
- **Chosen Approach**: Providing an interactive floating dock with a Blueprint Wireframe switch that highlights layout bounding boxes, dimension labels (e.g. `1200 x 480`), and cursor vector guide lines.
- **Why**: Elevates the creative technologist theme, turning the portfolio into an engaging developer playground.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App Container                             │
│       (Dark Studio Canvas, Drafting Grid, Scroll State Observer)       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┴───────────────────────────────┐
    │                                                               │
┌───▼───────────────────────────┐               ┌───────────────────▼──────────────────┐
│     Multi-Cursor Overlay      │               │       Floating Construction Dock     │
│ - 5 Simulated Cursors         │               │ - Scrub Slider (0% - 100%)           │
│ - Name Badges & Selection Box │               │ - Auto Replay / Play / Pause         │
│ - Vector Drafting Guidelines  │               │ - Cursors Toggle & Blueprint Mode    │
└───┬───────────────────────────┘               └──────────────────────────────────────┘
    │
    ├───────────────────────────────────────────────────────────────┐
    │                                                               │
┌───▼──────────────────┐  ┌────────────────────────┐  ┌─────────────▼──────────┐
│  Top Bar (Contract)  │  │      Hero Section      │  │  Featured Bento Grid   │
│ - Smirti Bhatta      │  │ - Typographic Split    │  │ - 4 Architectural Proj │
│ - 4 Nav Links        │  │ - Live Terminal Canvas │  │ - Live Inspect Modal   │
│ - Contact CTA        │  │ - Key Metrics Bar      │  │ - Dynamic Tech Tags    │
└───┬──────────────────┘  └────────────────────────┘  └─────────────┬──────────┘
    │                                                               │
    ├───────────────────────────────────────────────────────────────┤
    │                                                               │
┌───▼──────────────────┐  ┌────────────────────────┐  ┌─────────────▼──────────┐
│ Stack Matrix System  │  │  Experience Timeline   │  │ Interactive Contact    │
│ - Frontend / Backend │  │ - Milestones & Roles   │  │ - Direct Dispatch Form │
│ - DevOps / Creative  │  │ - Clean Meta Separators│  │ - Email Copy & Links   │
└──────────────────────┘  └────────────────────────┘  └────────────────────────┘
```

### Component Breakdown
1. **`MultiCursorEngine.tsx`**: Manages cursor positions, target anchors, selection box interpolation, and cursor SVG indicators.
2. **`ConstructionDock.tsx`**: Floating bottom control console with play/pause, scrub slider, blueprint toggle, and cursor visibility.
3. **`Navbar.tsx`**: Strict 3-zone header compliant with the Top Bar Contract.
4. **`HeroSection.tsx`**: Split view with bold typography, dynamic interactive playground, and 4-column metric strip.
5. **`ProjectsSection.tsx`**: Dynamic Bento layout with interactive lightbox modal for detailed case studies.
6. **`SkillsMatrix.tsx`**: Categorized technical stack with live search/filter by layer (Frontend, Backend, Infrastructure, Creative Tech).
7. **`ExperienceTimeline.tsx`**: Clean chronological career timeline with key impact metrics.
8. **`ContactSection.tsx`**: Interactive contact terminal with live form validation, copy-to-clipboard, and direct mail link.
9. **`ProjectModal.tsx`**: High-detail dialog with architecture breakdown, key challenges, and code snippets.
