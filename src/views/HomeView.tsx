import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { PageType } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Code2,
  Search,
  Target,
  Share2,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Mail,
  Check
} from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_LINK } from '../components/WhatsAppIcon';

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'digital-marketing-delhi':
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
      case 'freelance-digital-marketing-delhi':
        return <Target className="w-5 h-5 text-indigo-400" />;
      case 'web-design-development':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'seo-services-delhi':
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 'performance-marketing-delhi':
        return <Zap className="w-5 h-5 text-violet-400" />;
      case 'social-media-marketing-delhi':
        return <Share2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Introduction: The Dual Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0e0e15] to-[#09090e] border border-slate-800/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                Personal Brand & Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
                Bridging Creative Web Engineering with Measurable Performance Marketing
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most agencies disconnect development from search visibility, or run paid ads into poorly constructed landing pages that fail Core Web Vitals. I operate at the intersection of both disciplines—writing clean, semantic, lightning-fast code while orchestrating search and performance funnels designed to deliver concrete ROI.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                <span className="text-slate-300">· Technical Precision</span>
                <span className="text-slate-300">· Organic Search Dominance</span>
                <span className="text-slate-300">· Data-Backed Ad Scaling</span>
                <span className="text-slate-300">· Direct Founder Accountability</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Primary Location</div>
                <div className="text-base font-semibold text-white">Delhi NCR, India</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Working Model</div>
                <div className="text-base font-semibold text-white">Direct Freelance & Retainer</div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors pt-2 cursor-pointer"
              >
                <span>Read Full Professional Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
                Specialized Offerings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Services Built for Commercial Impact
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
            >
              <span>Explore All 6 Detailed Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Targeted digital solutions designed specifically for businesses, founders, and enterprises seeking organic dominance and paid acquisition efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#0b0b10] border border-slate-800/90 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-violet-950/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/50 border border-violet-800/40 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">0{index + 1}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <a
                  href={`mailto:hthemant124@gmail.com?subject=${encodeURIComponent(service.inquirySubject)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-900/40 hover:bg-violet-800/60 px-3 py-1.5 rounded-lg border border-violet-700/50 transition-colors"
                >
                  <Mail className="w-3 h-3 text-violet-300" />
                  <span>Enquire Service</span>
                </a>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs text-slate-400 hover:text-violet-300 transition-colors cursor-pointer"
                >
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
                Featured Work & Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Selected Client Work & Live Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
            >
              <span>View All 5 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world websites and digital platforms built, optimized, or scaled for agencies, publications, heritage brands, and hospitality retreats.
          </p>
        </div>

        {/* Featured Project Cards in Browser Window Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0a0a0f] border border-slate-800/90 overflow-hidden shadow-xl hover:border-violet-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Browser Window Chrome */}
              <div className="bg-[#12121b] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-300 px-3 py-0.5 rounded bg-black/40 border border-slate-800 truncate max-w-[200px]">
                  {project.liveUrl}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono">LIVE</div>
              </div>

              {/* Card Body */}
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

                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center space-y-0.5">
                          <div className="text-xs font-bold text-white font-mono">{metric.value}</div>
                          <div className="text-[10px] text-slate-300">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>View Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Case Study Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. "Why Work With Me?" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
            Value & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work With Hemant Thakur?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Eliminating agency fluff in favor of rigorous engineering, clear communication, and commercial results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#09090e] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
            </div>
            <h3 className="text-base font-bold text-white">Direct Execution</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You collaborate directly with Hemant Thakur. No intermediate account executives or outsourced hand-offs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090e] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-base font-bold text-white">Engineering Quality</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every website is constructed with semantic, accessible HTML5, responsive CSS, and Core Web Vitals speed scores.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090e] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-violet-400" />
            </div>
            <h3 className="text-base font-bold text-white">White-Hat SEO</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sustainable search engine optimization designed to build long-term topical authority that resists algorithm shifts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#09090e] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-base font-bold text-white">Data Attribution</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transparent Google Analytics 4, Meta CAPI, and Looker Studio dashboards so every marketing rupee is accounted for.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Closing High-Conversion CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-violet-950/60 via-[#131024] to-[#0a0717] border border-violet-800/50 text-center shadow-2xl">
          {/* Subtle glow circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/50 text-violet-300 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Communication · No Intermediaries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let's discuss your ideas and explore how we can build something impactful together. Reach out directly via email for a consultation or proposal.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Let's Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-white text-slate-950 font-bold text-sm shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Email Me Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View Contact Details</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-mono pt-1">
              <span>Email: hthemant124@gmail.com</span>
              <span>·</span>
              <span className="text-emerald-400">WhatsApp: +91 8595639475</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
