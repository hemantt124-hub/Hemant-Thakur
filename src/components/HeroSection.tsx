import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ArrowUpRight, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';
import { WhatsAppIcon, WHATSAPP_LINK } from './WhatsAppIcon';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero: Typography Left, 3D Canvas Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subheading, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Digital Growth Specialist · Based in Delhi, India</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-indigo-300">Hemant Thakur</span>.
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-violet-300/90 tracking-tight text-balance">
              Digital Marketing Specialist <span className="text-slate-600 font-normal">|</span> Web Developer <span className="text-slate-600 font-normal">|</span> SEO Strategist
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
              I help businesses build a stronger digital presence through strategic digital marketing, search engine optimization, performance marketing, social media marketing, and modern web experiences.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Let's Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-6 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Explore My Work</span>
              </button>
            </div>

            {/* Direct Email note & Delhi badge */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Zero agency overhead</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Direct email inquiries</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Delhi NCR & Global Delivery</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              <Hero3DCanvas />

              {/* Minimal caption anchor adhering to anti-slop rules */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center text-[11px] text-slate-400 select-none">
                Interactive 3D geometry · Move cursor to orbit
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof metrics strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Delhi NCR</div>
            <div className="text-xs text-slate-400">Base & Local Market Focus</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-violet-400 tracking-tight">Full-Stack</div>
            <div className="text-xs text-slate-400">Web Design & Modern Code</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-400 tracking-tight">Technical SEO</div>
            <div className="text-xs text-slate-400">Schema & High-Intent Rankings</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">ROAS Driven</div>
            <div className="text-xs text-slate-400">Performance & Paid Media</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-300 transition-colors text-xs">
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
