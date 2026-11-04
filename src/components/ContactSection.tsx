import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Terminal, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  progress: number;
  isBlueprintMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ progress, isBlueprintMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Full-Stack Web App',
    message: '',
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Construction progress mapping for contact (0.80 to 1.0)
  const contactReveal = Math.min(1, Math.max(0, (progress - 0.78) / 0.22));

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 6000);
      setFormData({
        name: '',
        email: '',
        projectScope: 'Full-Stack Web App',
        message: '',
      });
    }, 1000);
  };

  const handleDownloadBlueprintBrief = () => {
    const briefContent = `=====================================================
SMIRTI BHATTA — CREATIVE TECHNOLOGIST & FULL-STACK
=====================================================
Email: ${PERSONAL_INFO.email}
Role: ${PERSONAL_INFO.title}
Status: Available for High-Impact Projects & Consulting

CORE EXPERTISE:
- Distributed Systems & Concurrency (Go, Node.js, WebSockets, ClickHouse)
- Spatial Canvas & Creative Frontend (React 19, TypeScript, WebGL, CRDTs)
- Cloud Infrastructure & SRE (Docker, Kubernetes, AWS, Cloudflare Edge)

SELECTED SHIPPED SYSTEMS:
1. HyperCanvas (Collaborative Infinite WebGL Canvas)
2. PulseCloud (Distributed Microservices Observability)
3. AuraSound (Web Audio DSP Generative Synthesizer)
4. Nexus Edge Engine (Headless Low-Latency Commerce)

Generated from interactive portfolio blueprint engine.
=====================================================`;

    const blob = new Blob([briefContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Smirti_Bhatta_Technical_Brief.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80">
      {/* Blueprint indicator */}
      {isBlueprintMode && (
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded">
          <span>FRAME: DISPATCH_TERMINAL_05</span>
          <span>·</span>
          <span>TARGET: {PERSONAL_INFO.email}</span>
          <span>·</span>
          <span>STATE: {contactReveal > 0.8 ? 'CONSTRUCTED' : 'ASSEMBLING'}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Outreach & Bio */}
        <div className="lg:col-span-5">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            05. Dispatch &amp; Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Let's build something remarkable together.
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed mb-8">
            Whether you need a principal full-stack engineer to architect high-throughput distributed
            services or a creative technologist to craft an interactive spatial canvas, I am open to
            collaborations, technical advisory, and full-time opportunities.
          </p>

          {/* Quick Contact Action Card */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">DIRECT INBOX</span>
              <span className="text-xs font-mono text-emerald-400">Response &lt; 24h</span>
            </div>

            <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="text-sm font-mono text-zinc-200 select-all truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-white transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client</span>
              </a>

              <button
                onClick={handleDownloadBlueprintBrief}
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
                title="Download technical summary brief"
              >
                <Download className="w-4 h-4" />
                <span>Brief</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dispatch Terminal Form */}
        <div className="lg:col-span-7">
          <div
            className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
              isBlueprintMode
                ? 'border-blue-500/80 bg-zinc-950 shadow-xl'
                : 'bg-zinc-900/40 border-zinc-800/80 shadow-2xl'
            }`}
            style={{
              opacity: isBlueprintMode ? 0.95 : Math.max(0.3, contactReveal),
              transform: `translateY(${(1 - contactReveal) * 10}px)`,
            }}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-medium text-zinc-300">
                  DISPATCH_TERMINAL.sh
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                SSL ENCRYPTED · TLS 1.3
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-zinc-950/80 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Message Transmitted Successfully
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Thank you for reaching out. Your dispatch has been logged and routed to Smirti Bhatta.
                  Expect a prompt response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project Scope / Engagement Type
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={e => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="Full-Stack Web App">Full-Stack Application Development</option>
                    <option value="Real-time / Spatial Canvas">Real-Time / Spatial Interactive Canvas</option>
                    <option value="Distributed Microservices">Distributed Systems &amp; Concurrency</option>
                    <option value="Full-Time Technical Lead">Full-Time Lead / Architect Role</option>
                    <option value="Technical Advisory">Technical Advisory &amp; Code Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project Brief / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architectural goals, timeline, or engineering challenge..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-colors shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="font-mono">TRANSMITTING PACKETS...</span>
                  ) : (
                    <>
                      <span>Transmit Message to Smirti Bhatta</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
