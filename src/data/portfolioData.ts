import { Project, SkillItem, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Smirti Bhatta',
  title: 'Full-Stack Developer & Creative Technologist',
  tagline: 'Engineering real-time distributed backends and crafting high-fidelity spatial web experiences where architectural rigor meets creative code.',
  email: 'smirtibhatta112@gmail.com',
  location: 'San Francisco, CA / Remote',
  avatar: '/src/assets/images/avatar_technologist_1793761849120.jpg',
  status: 'Open for high-impact roles & technical consulting',
  metrics: [
    { value: '05+', label: 'Years Experience' },
    { value: '24+', label: 'Shipped Systems' },
    { value: '99.98%', label: 'Production Uptime' },
    { value: '60 FPS', label: 'Canvas Motion Target' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'X / Twitter', url: 'https://twitter.com' },
    { name: 'Email', url: 'mailto:smirtibhatta112@gmail.com' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'hypercanvas',
    title: 'HyperCanvas',
    tagline: 'Real-time multi-agent collaborative whiteboard & spatial computing engine',
    category: 'Spatial Systems & WebSockets',
    year: '2026',
    image: '/src/assets/images/project_hypercanvas_1793761850791.jpg',
    description: 'An infinite collaborative infinite canvas powered by WebGL and conflict-free replicated data types (CRDTs), supporting 50+ concurrent users per room with sub-16ms latency.',
    longDescription: 'HyperCanvas solves the multi-user concurrent layout conflict problem through Yjs CRDTs paired with an optimized WebGL batch renderer. The system decouples viewport matrix rendering from state resolution, providing smooth 60fps pan and zoom alongside real-time multi-cursor telemetry, parametric vector connectors, and AI node orchestration.',
    architecture: {
      frontend: ['React 19', 'TypeScript', 'HTML5 Canvas / WebGL', 'Yjs CRDTs', 'Tailwind CSS'],
      backend: ['Node.js', 'Go (Room Sync Microservice)', 'WebSockets (ws)', 'Redis Pub/Sub'],
      infrastructure: ['Docker', 'AWS ECS Fargate', 'Cloudflare Workers (Edge Routing)'],
    },
    metrics: [
      { label: 'Sync Latency', value: '< 16ms' },
      { label: 'Concurrent Users / Room', value: '50+' },
      { label: 'Render Budget', value: '60 FPS' },
    ],
    challenges: [
      'Engineered an incremental spatial hash grid (quadtree) to prune off-screen elements from WebGL draw calls, reducing CPU usage by 68%.',
      'Implemented optimistic local state mutation with automatic rollback on remote vector collision reconciliation.',
    ],
    liveUrl: 'https://hypercanvas.demo',
    githubUrl: 'https://github.com/smirtibhatta/hypercanvas',
  },
  {
    id: 'pulsecloud',
    title: 'PulseCloud Observability',
    tagline: 'Distributed microservices tracing and real-time topology monitor',
    category: 'Distributed Systems & Data Viz',
    year: '2025',
    image: '/src/assets/images/project_pulsecloud_1793761851400.jpg',
    description: 'A cloud-native telemetry platform streaming P99 latency graphs, distributed trace waterfall charts, and automatic anomaly detection for 40+ microservices.',
    longDescription: 'PulseCloud ingests OpenTelemetry spans across containerized clusters and synthesizes an interactive force-directed graph of service dependencies. Built for Site Reliability Engineers, it provides instant root-cause analysis with automated blast radius analysis and sub-second log aggregation.',
    architecture: {
      frontend: ['React', 'TypeScript', 'D3.js Force Simulation', 'Tailwind CSS', 'Zustand'],
      backend: ['Go', 'gRPC', 'ClickHouse (Trace Storage)', 'Kafka'],
      infrastructure: ['Kubernetes (EKS)', 'Prometheus', 'Grafana Agent', 'Terraform'],
    },
    metrics: [
      { label: 'Ingestion Throughput', value: '250k spans/sec' },
      { label: 'P99 Query Time', value: '42ms' },
      { label: 'Microservices Mapped', value: '40+' },
    ],
    challenges: [
      'Transitioned trace storage from Elasticsearch to ClickHouse, resulting in a 4.2x reduction in infrastructure compute cost and 8x faster query aggregations.',
      'Designed a non-blocking Web Worker pipeline for client-side D3 physics calculations, preventing UI thread freezing during high-volume node updates.',
    ],
    liveUrl: 'https://pulsecloud.demo',
    githubUrl: 'https://github.com/smirtibhatta/pulsecloud',
  },
  {
    id: 'aurasound',
    title: 'AuraSound Synthesizer',
    tagline: 'Web Audio API generative soundscape and frequency visualizer',
    category: 'Creative Tech & Audio DSP',
    year: '2025',
    image: '/src/assets/images/project_aurasound_1793761851859.jpg',
    description: 'A modular in-browser generative audio synthesizer featuring polyphonic oscillators, algorithmic FM modulation, and a reactive GLSL frequency visualizer.',
    longDescription: 'AuraSound blends digital signal processing with interactive web graphics. Users can design spatial harmonic soundscapes using node-based modulation matrices, recorded directly into uncompressed WAV files or mapped to external MIDI controllers via the Web MIDI API.',
    architecture: {
      frontend: ['Web Audio API', 'AudioWorklet DSP', 'WebGL / GLSL Shaders', 'React', 'TypeScript'],
      backend: ['Node.js', 'WebAssembly (C++ DSP Core)'],
      infrastructure: ['Vercel Edge Network', 'Cloudflare CDN'],
    },
    metrics: [
      { label: 'DSP Latency', value: '< 4ms' },
      { label: 'Polyphony Voices', value: '16 voices' },
      { label: 'Frame Rate', value: '60 FPS GLSL' },
    ],
    challenges: [
      'Authored custom AudioWorklet processors running on dedicated audio threads to guarantee click-free real-time synthesis without main thread hitching.',
      'Mapped real-time FFT frequency buckets to custom GLSL shader vertex displacement for responsive audio-reactive visuals.',
    ],
    liveUrl: 'https://aurasound.demo',
    githubUrl: 'https://github.com/smirtibhatta/aurasound',
  },
  {
    id: 'nexuscommerce',
    title: 'Nexus Edge Engine',
    tagline: 'Ultra-low latency headless commerce platform with smart caching',
    category: 'Full-Stack Performance',
    year: '2024',
    image: '/src/assets/images/project_pulsecloud_1793761851400.jpg', // Fallback styled container supported
    description: 'A globally distributed headless commerce storefront achieving 99+ Google Lighthouse scores with edge-side session hydration and instant cart reconciliation.',
    longDescription: 'Nexus Edge reimagines modern e-commerce through localized edge computing. By compiling catalog metadata into KV distributed cache nodes and streaming server-rendered fragments, product pages load in under 120ms globally while maintaining real-time inventory counts.',
    architecture: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      backend: ['TypeScript', 'GraphQL Mesh', 'PostgreSQL', 'Stripe API'],
      infrastructure: ['Cloudflare Workers & KV', 'Upstash Redis', 'Vercel Edge'],
    },
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Global TTFB', value: '< 85ms' },
      { label: 'Conversion Lift', value: '+34%' },
    ],
    challenges: [
      'Implemented optimistic UI cart transitions with server-side reconciliation via WebSocket push, cutting abandoned cart drop-offs by 22%.',
      'Architected zero-downtime database migrations across sharded PostgreSQL read-replicas during high-traffic flash launches.',
    ],
    liveUrl: 'https://nexuscommerce.demo',
    githubUrl: 'https://github.com/smirtibhatta/nexus-engine',
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend & Spatial
  { name: 'TypeScript & JavaScript', category: 'Frontend & Spatial', level: 98, highlight: 'Type-level generics, AST transformers, strict typing', iconName: 'Code' },
  { name: 'React 19 & Next.js', category: 'Frontend & Spatial', level: 96, highlight: 'Server Actions, streaming SSR, concurrent rendering', iconName: 'Layers' },
  { name: 'WebGL & Canvas API', category: 'Frontend & Spatial', level: 88, highlight: 'GLSL shaders, custom 2D/3D render loops, scene graphs', iconName: 'Box' },
  { name: 'Tailwind CSS & Design Systems', category: 'Frontend & Spatial', level: 95, highlight: 'Custom variants, token architecture, WCAG AA fidelity', iconName: 'Palette' },
  { name: 'Motion & Physics Animation', category: 'Frontend & Spatial', level: 92, highlight: 'Spring mechanics, scroll-linked interpolation, 60fps budget', iconName: 'Zap' },

  // Backend & Distributed
  { name: 'Node.js & Go', category: 'Backend & Distributed', level: 94, highlight: 'High-throughput microservices, concurrency, memory profiling', iconName: 'Server' },
  { name: 'WebSockets & Real-time Sync', category: 'Backend & Distributed', level: 92, highlight: 'CRDT resolution, binary protocols, reconnect state machines', iconName: 'Radio' },
  { name: 'PostgreSQL & Drizzle / Prisma', category: 'Backend & Distributed', level: 90, highlight: 'Schema indexing, connection pooling, complex JSON aggregations', iconName: 'Database' },
  { name: 'Redis & Message Queues', category: 'Backend & Distributed', level: 88, highlight: 'Pub/sub streaming, distributed locking, cache invalidation', iconName: 'Cpu' },
  { name: 'GraphQL & RESTful APIs', category: 'Backend & Distributed', level: 92, highlight: 'Schema federation, DataLoader batching, OpenAPI contracts', iconName: 'Network' },

  // Cloud & Infrastructure
  { name: 'Docker & Kubernetes', category: 'Cloud & Infrastructure', level: 86, highlight: 'Multi-stage builds, Helm charts, rolling deployments', iconName: 'Container' },
  { name: 'AWS & Cloudflare Edge', category: 'Cloud & Infrastructure', level: 88, highlight: 'ECS, S3, CloudFront, Workers KV, edge compute', iconName: 'Cloud' },
  { name: 'CI/CD & DevOps Automation', category: 'Cloud & Infrastructure', level: 90, highlight: 'GitHub Actions, automated e2e testing, preview pipelines', iconName: 'GitBranch' },
  { name: 'OpenTelemetry & Monitoring', category: 'Cloud & Infrastructure', level: 84, highlight: 'Distributed tracing, Prometheus metrics, structured logs', iconName: 'Activity' },

  // Creative Tech
  { name: 'Web Audio API & DSP', category: 'Creative Tech', level: 86, highlight: 'AudioWorklet threads, polyphonic routing, FFT analysis', iconName: 'Volume2' },
  { name: 'Figma to Production Code', category: 'Creative Tech', level: 96, highlight: 'Pixel-perfect token translation, component system architecture', iconName: 'Figma' },
  { name: 'Interactive Data Visualizations', category: 'Creative Tech', level: 90, highlight: 'Custom D3 layouts, animated graph nodes, Voronoi maps', iconName: 'BarChart' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Creative Technologist & Full-Stack Lead',
    company: 'Studio Kinetic',
    period: '2024 — Present',
    location: 'San Francisco, CA (Hybrid)',
    description: 'Leading technical architecture for interactive web experiences, real-time spatial computing tools, and high-concurrency client platforms.',
    impactMetrics: [
      'Architected custom multi-user collaborative canvas utilized by 120k+ monthly active creators with sub-20ms sync latency.',
      'Spearheaded transition to distributed edge rendering, improving core web vitals by 45% and slashing cloud hosting costs by 32%.',
      'Mentored team of 6 engineers across TypeScript design patterns, WebGL shader optimization, and automated testing.',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Go', 'WebSockets', 'WebGL', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Software Engineer',
    company: 'Synthetix Lab',
    period: '2022 — 2024',
    location: 'New York, NY (Remote)',
    description: 'Designed and shipped high-performance cloud telemetry dashboards and real-time developer observability tooling.',
    impactMetrics: [
      'Engineered distributed tracing collector in Go capable of processing 250k telemetry spans per second with zero dropped packets.',
      'Created non-blocking virtualized data table rendering 100,000+ live streaming log rows at continuous 60fps.',
      'Unified 14 isolated UI components into a centralized enterprise design system with automated visual regression tests.',
    ],
    technologies: ['Go', 'TypeScript', 'React', 'D3.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Systems Engineer',
    company: 'CloudCraft Technologies',
    period: '2020 — 2022',
    location: 'Austin, TX',
    description: 'Built customer-facing cloud infrastructure management consoles and interactive network topology visualizers.',
    impactMetrics: [
      'Refactored legacy monolith dashboard to modern modular React architecture, reducing bundle size by 58%.',
      'Implemented real-time bidirectional WebSocket events for live cloud resource provisioning and status alerts.',
      'Authored comprehensive UI testing suite reaching 94% code coverage across critical user flows.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'WebSockets', 'GraphQL', 'Jest', 'Tailwind'],
  },
];
