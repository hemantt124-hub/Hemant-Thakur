import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import {
  TrendingUp,
  Target,
  Code2,
  Search,
  Zap,
  Share2,
  CheckCircle2,
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Check,
  Sparkles
} from 'lucide-react';
import { PageType, ServiceItem } from '../types';
import { WhatsAppIcon, WHATSAPP_LINK } from '../components/WhatsAppIcon';

interface ServicesViewProps {
  onNavigate: (page: PageType) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService: ServiceItem =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const getIcon = (id: string) => {
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities & Delhi NCR Specialization</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Professional Digital Services
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-normal">
          Engineered for brands and businesses seeking organic Google visibility, sub-second web performance, and profitable paid customer acquisition.
        </p>
      </div>

      {/* 2. Interactive Service Navigator (Tabs on Desktop & Mobile selector) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800">
        {servicesData.map((service) => {
          const isSelected = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 cursor-pointer text-center gap-1.5 ${
                isSelected
                  ? 'bg-gradient-to-b from-violet-600/30 to-indigo-600/20 border border-violet-500/50 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {getIcon(service.id)}
              <span className="text-xs font-semibold truncate w-full text-center">
                {service.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Selected Service Spotlight Card */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c0c14] via-[#09090f] to-[#060609] border border-violet-800/40 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          {/* Service Title Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-400 uppercase tracking-wider">
                {getIcon(activeService.id)}
                <span>Specialized Service Vertical</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h2>
              <p className="text-slate-400 text-sm italic">{activeService.tagline}</p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Me</span>
              </a>

              <a
                href={`mailto:hthemant124@gmail.com?subject=${encodeURIComponent(activeService.inquirySubject)}`}
                className="inline-flex h-11 items-center justify-center gap-2 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs shadow-md transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-slate-300" />
                <span>Email Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description & Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-white">Service Overview & Value</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeService.description}
              </p>

              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                  Strategic Approach
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  {activeService.approach}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Deliverables Checklist */}
              <div className="p-5 rounded-2xl bg-[#0e0e17] border border-slate-800/80 space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Platforms & Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Benefits List */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <h3 className="text-base font-bold text-white">Commercial Benefits & Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeService.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Catalog of All 6 Services (Full Cards) */}
      <section className="space-y-12">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
            Exhaustive Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Comprehensive Service Breakdowns
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Read through the complete operational scope for each vertical below.
          </p>
        </div>

        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0f] border border-slate-800 hover:border-violet-500/30 transition-colors space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/50 flex items-center justify-center">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-xs text-slate-400">{service.tagline}</p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 shrink-0">
                  vertical_0{index + 1}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Core Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    My Approach & Execution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    {service.approach}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.technologies.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Target Market: Delhi NCR, Pan-India & Global Digital Campaigns
                </div>
                <a
                  href={`mailto:hthemant124@gmail.com?subject=${encodeURIComponent(service.inquirySubject)}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enquire for {service.shortTitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Email CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-950/40 via-[#120f24] to-[#0a0715] border border-violet-800/40 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Need a Custom Solution for Your Business?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Every business has unique growth constraints. Let's discuss your targets and formulate a bespoke scope combining development, SEO, and paid media.
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
            href="mailto:hthemant124@gmail.com?subject=Custom%20Service%20Enquiry%20–%20Hemant%20Thakur"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-lg hover:bg-slate-100 transition-all hover:scale-105 whitespace-nowrap"
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
