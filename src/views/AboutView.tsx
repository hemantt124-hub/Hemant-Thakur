import React from 'react';
import { skillsData } from '../data/skillsData';
import { ArrowUpRight, CheckCircle2, Mail, Globe, MapPin, Terminal, Compass, Layers } from 'lucide-react';
import { PageType } from '../types';
import { WhatsAppIcon, WHATSAPP_LINK, WHATSAPP_PHONE } from '../components/WhatsAppIcon';

interface AboutViewProps {
  onNavigate: (page: PageType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold tracking-wide">
          <Terminal className="w-3.5 h-3.5" />
          <span>Professional Background & Philosophy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          About Hemant Thakur
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-normal">
          Digital Marketing Specialist, Web Developer, and SEO Strategist based in Delhi, India. Helping businesses scale with search authority, performance marketing, and modern web applications.
        </p>
      </div>

      {/* 2. Core Narrative & Personal Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            The Philosophy: Engineering Meets Digital Growth
          </h2>
          <p>
            In today's digital landscape, marketing and web development can no longer operate in isolation. A brilliant marketing campaign directed to a slow, poorly coded website leaks visitors and burns advertising capital. Conversely, an impeccably built website with no organic SEO framework or distribution strategy remains an invisible ghost town.
          </p>
          <p>
            My mission is to eliminate that friction. Operating out of Delhi NCR, I partner directly with founders, startups, and growing enterprises to craft end-to-end digital experiences where technical code quality and commercial customer acquisition reinforce each other.
          </p>
          <p>
            Whether auditing a site's technical crawl architecture, designing high-converting responsive interfaces, or structuring performance ad funnels across Google and Meta, I focus entirely on quantifiable outcomes: organic search rankings, conversion velocity, and real revenue generation.
          </p>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-3">
            <div className="text-xs font-bold text-violet-400 uppercase tracking-wider">
              Core Professional Tenets
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span><strong>No Artificial Fluff:</strong> Direct founder-to-specialist communication with zero agency red tape.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span><strong>Technical Integrity:</strong> Writing clean, semantic, accessible code that passes Core Web Vitals with flying colors.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span><strong>White-Hat Longevity:</strong> Sustainable organic growth strategies engineered to withstand Google core algorithm updates.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0c0c13] border border-slate-800 space-y-5">
            <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
              Quick Profile & Availability
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 text-xs block">Full Name</span>
                <span className="font-semibold text-white">Hemant Thakur</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Specialization</span>
                <span className="font-medium text-slate-200">
                  Digital Marketing · Web Development · Technical SEO
                </span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Location</span>
                <span className="font-medium text-slate-200 flex items-center gap-1.5 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>Delhi NCR, India (Available for Global Remote)</span>
                </span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Official Portfolio Domain</span>
                <span className="font-mono text-violet-400 flex items-center gap-1.5 pt-0.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>https://hemantthakur.in</span>
                </span>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">Direct Email</span>
                <a
                  href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
                  className="font-mono text-violet-300 hover:text-white transition-colors flex items-center gap-1.5 pt-0.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>hthemant124@gmail.com</span>
                </a>
              </div>
              <div>
                <span className="text-slate-400 text-xs block">WhatsApp Direct</span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 pt-0.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>{WHATSAPP_PHONE}</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex h-11 items-center justify-center gap-2 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:hthemant124@gmail.com?subject=Let's%20Work%20Together%20–%20Hemant%20Thakur"
                className="w-full inline-flex h-11 items-center justify-center gap-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-all"
              >
                <span>Email Me Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. My Approach Towards Disciplines */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
            Methodology & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How I Approach Marketing & Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Approach to Digital Marketing */}
          <div className="p-7 rounded-2xl bg-[#09090e] border border-slate-800/90 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-800/50 flex items-center justify-center">
              <Compass className="w-5 h-5 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-white">
              My Approach Towards Digital Marketing
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Digital marketing begins with buyer psychology, not just ad budgets. I start by auditing where high-intent potential customers congregate and what search queries reveal their readiness to buy.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold">1.</span>
                <span><strong>Intent-Driven Research:</strong> Analyzing high-commercial search queries and audience lookalike patterns.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold">2.</span>
                <span><strong>Aggressive Ad Account Structuring:</strong> Tight ad groups, relentless negative keyword pruning, and targeted creative hooks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold">3.</span>
                <span><strong>Full Funnel Attribution:</strong> Integrating server-side tracking (CAPI) to measure authentic cost-per-lead and ROAS.</span>
              </li>
            </ul>
          </div>

          {/* Approach to Web Development */}
          <div className="p-7 rounded-2xl bg-[#09090e] border border-slate-800/90 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center">
              <Layers className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">
              My Approach Towards Web Development
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I view websites as high-performance conversion machines. Code must be lightweight, semantic, and accessible so search engines crawl pages effortlessly and users experience zero friction.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">1.</span>
                <span><strong>Semantic & Clean Architecture:</strong> Building modular components with TypeScript and modern Tailwind CSS without bloated libraries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">2.</span>
                <span><strong>Core Web Vitals Obsession:</strong> Optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) for sub-second speeds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">3.</span>
                <span><strong>Conversion Psychology:</strong> Designing intuitive reading flows, high-contrast CTAs, and frictionless email contact triggers.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Skills & Technologies Grid */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
            Technical Arsenal
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Platforms I Work With
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            A balanced stack of modern engineering tools, performance advertising networks, and technical SEO platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0c0c13] border border-slate-800 space-y-4"
            >
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      skill.highlighted
                        ? 'bg-violet-950/60 text-violet-200 border-violet-800/60 font-medium'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Email CTA */}
      <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-violet-950/50 via-[#100d20] to-[#0a0714] border border-violet-800/40 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Interested in Working Together?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Whether you need a full digital marketing strategy, an SEO overhaul for your Delhi business, or a modern high-speed website, let's connect directly.
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
            href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20–%20Hemant%20Thakur"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-white text-slate-950 font-bold text-xs shadow-lg hover:bg-slate-100 transition-all hover:scale-105 whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Email Me (hthemant124@gmail.com)</span>
          </a>

          <button
            onClick={() => onNavigate('portfolio')}
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Explore Portfolio Showcase</span>
          </button>
        </div>
      </section>
    </div>
  );
};
