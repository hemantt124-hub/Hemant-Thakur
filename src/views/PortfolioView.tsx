import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem, PageType } from '../types';
import {
  ExternalLink,
  Info,
  CheckCircle2,
  Mail,
  ArrowUpRight,
  Sparkles,
  Layers,
  X,
  Globe
} from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../components/WhatsAppIcon';

interface PortfolioViewProps {
  onNavigate: (page: PageType) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'web-dev' | 'seo' | 'performance' | 'digital-marketing'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold tracking-wide">
          <Layers className="w-3.5 h-3.5" />
          <span>Selected Works & Case Studies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          My Work & Portfolio
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-normal">
          Structured showcases of websites, technical SEO campaigns, and performance marketing frameworks.
        </p>
      </div>

      {/* 2. Verified Case Studies Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-slate-900/80 to-[#0e0e18] border border-violet-800/40 text-slate-300 text-xs sm:text-sm flex items-start gap-3 shadow-lg">
        <Sparkles className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-semibold text-white">Verified Client Projects & Live Case Studies</div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Live web platforms and digital campaigns developed, managed, or contributed to by Hemant Thakur—featuring film and creative communications agencies, digital lifestyle publications, heritage ethnic fashion e-commerce, luxury retreats, and flagship experiential event platforms.
          </p>
        </div>
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/60 border border-slate-800 w-fit">
        <button
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Projects ({portfolioData.length})
        </button>
        <button
          onClick={() => setFilter('web-dev')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filter === 'web-dev'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setFilter('seo')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filter === 'seo'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Technical SEO
        </button>
        <button
          onClick={() => setFilter('performance')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filter === 'performance'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Performance Marketing
        </button>
        <button
          onClick={() => setFilter('digital-marketing')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            filter === 'digital-marketing'
              ? 'bg-violet-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Digital Marketing
        </button>
      </div>

      {/* 4. Project Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#0a0a0f] border border-slate-800/90 overflow-hidden shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Browser Chrome Bar */}
            <div className="bg-[#11111a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="text-[11px] font-mono text-slate-300 px-3 py-0.5 rounded bg-black/40 border border-slate-800 truncate max-w-[220px]">
                {project.liveUrl || 'https://hemantthakur.in'}
              </div>
              <div className="text-[11px] text-violet-400 font-mono">LIVE</div>
            </div>

            {/* Project Card Content */}
            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Role: {project.role}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Work Highlight */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Work Performed
                  </div>
                  <ul className="space-y-1.5">
                    {project.workPerformed.slice(0, 3).map((work, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center space-y-0.5">
                        <div className="text-xs font-bold text-white font-mono">{metric.value}</div>
                        <div className="text-[10px] text-slate-300 truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-4 py-2.5 rounded-xl shadow-md shadow-violet-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
                >
                  <span>Case Study Details →</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#0e0e16] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Hemant's Role: {selectedProject.role}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Scope & Work Performed
              </h4>
              <ul className="space-y-2">
                {selectedProject.workPerformed.map((work, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-violet-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Website</span>
                </a>
              )}

              <a
                href={`mailto:hthemant124@gmail.com?subject=${encodeURIComponent(`Inquiry regarding ${selectedProject.title} – Hemant Thakur`)}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Discuss a Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Post-Portfolio Email CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-950/40 via-[#100d20] to-[#070512] border border-violet-800/40 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Ready to Build or Scale Your Project?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          From custom full-stack web builds to high-yield SEO and performance marketing campaigns, let's explore how we can collaborate.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xl shadow-emerald-950/40 transition-all hover:scale-105 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp (+91 8595639475)</span>
          </a>

          <a
            href="mailto:hthemant124@gmail.com?subject=Project%20Inquiry%20–%20Hemant%20Thakur"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-xl hover:bg-slate-100 transition-all hover:scale-105 whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Email Me (hthemant124@gmail.com)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
