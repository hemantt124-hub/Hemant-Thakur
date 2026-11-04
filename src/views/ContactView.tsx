import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Clock, Globe, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { PageType } from '../types';
import { WhatsAppIcon, WHATSAPP_LINK, WHATSAPP_PHONE } from '../components/WhatsAppIcon';

interface ContactViewProps {
  onNavigate: (page: PageType) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = 'hthemant124@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 8595639475');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const inquiryPresets = [
    {
      title: 'Web Design & Development',
      desc: 'Build a high-performance modern website or web application with sub-second Core Web Vitals.',
      subject: 'Inquiry: Web Design & Development – Hemant Thakur',
      waMessage: 'Hi Hemant, I would like to discuss a Web Design & Development project with you.'
    },
    {
      title: 'SEO Services in Delhi',
      desc: 'Technical SEO audits, keyword research, and white-hat organic growth architectures.',
      subject: 'Inquiry: SEO Growth Strategy – Hemant Thakur',
      waMessage: 'Hi Hemant, I would like to discuss SEO Services in Delhi for my business.'
    },
    {
      title: 'Performance Marketing',
      desc: 'High-intent Google Ads and Meta Ads campaigns with server-side conversion tracking.',
      subject: 'Inquiry: Performance Marketing Consultation – Hemant Thakur',
      waMessage: 'Hi Hemant, I would like to discuss Performance Marketing and paid ad scaling.'
    },
    {
      title: 'Freelance Marketing Growth',
      desc: 'Direct founder-level marketing execution for startups and growing businesses in Delhi.',
      subject: 'Inquiry: Freelance Marketing Partnership – Hemant Thakur',
      waMessage: 'Hi Hemant, I would like to discuss a freelance digital marketing partnership.'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Contact · Direct Founder Attention</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
          Have a Project in Mind?
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-normal">
          Let's discuss your ideas and explore how we can build something impactful together.
        </p>
      </div>

      {/* 2. Dual Direct Contact Hub (WhatsApp + Email) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card A: WhatsApp Direct Chat */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a1a12] via-[#09140e] to-[#070b09] border border-emerald-700/40 shadow-2xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-300">
              <WhatsAppIcon className="w-8 h-8 text-[#25D366]" size={32} />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Instant Direct Messaging
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                Chat on WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                Fastest way to start a quick discussion, ask questions, or schedule a strategy call directly with Hemant Thakur.
              </p>
            </div>

            {/* Phone Number Display with Copy */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-emerald-800/40 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                  WhatsApp Direct Number
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-emerald-300 select-all">
                  {WHATSAPP_PHONE}
                </span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Let's Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-[11px] text-slate-400">
              Pre-filled: "Hi, I would like to discuss my project with you."
            </div>
          </div>
        </div>

        {/* Card B: Email Direct Consultation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#120f24] via-[#0d0a1c] to-[#070512] border border-violet-800/40 shadow-2xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-violet-950/80 border border-violet-700/40 flex items-center justify-center text-violet-300">
              <Mail className="w-7 h-7 text-violet-300" />
            </div>

            <div>
              <span className="text-xs font-bold text-violet-400 uppercase tracking-wider block">
                Official Business Inquiries
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                Direct Email Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                Ideal for detailed project scopes, RFP submissions, technical requirements, and formal business proposals.
              </p>
            </div>

            {/* Email Address Display with Copy */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-violet-800/40 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Primary Email Address
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-violet-300 select-all break-all">
                  {email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-violet-950/60 hover:bg-violet-900 border border-violet-700/50 text-violet-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={`mailto:${email}?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Email Me →</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <Clock className="w-3 h-3 text-violet-400" />
              <span>Response within 24 business hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry Intent Presets */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
            Quick Inquiry Options
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Choose What You Want to Discuss
          </h2>
          <p className="text-slate-400 text-sm">
            Select a project category below to connect immediately via your preferred channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inquiryPresets.map((preset, idx) => {
            const waUrl = `https://wa.me/918595639475?text=${encodeURIComponent(preset.waMessage)}`;
            const mailUrl = `mailto:${email}?subject=${encodeURIComponent(preset.subject)}`;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0a10] border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {preset.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {preset.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-emerald-300 text-xs font-semibold transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={mailUrl}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-violet-950/60 hover:bg-violet-900 border border-violet-800/60 text-violet-200 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-violet-400" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Location & Working Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-[#0c0c13] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <MapPin className="w-4 h-4 text-violet-400" />
            <span>Operating Location</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Based in Delhi NCR, India. Partnering with local Delhi businesses as well as national and international clients worldwide.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c13] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>Official Domain</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Registered at <span className="text-violet-300 font-mono">https://hemantthakur.in</span>. Dedicated portfolio & service hub.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c13] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-violet-400" />
            <span>Direct Integrity</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            No middle agents or sales pipelines. Every email or WhatsApp message opens a direct conversation with Hemant Thakur.
          </p>
        </div>
      </section>
    </div>
  );
};
