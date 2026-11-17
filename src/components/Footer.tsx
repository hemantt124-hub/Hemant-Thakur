import React from 'react';
import { PageType } from '../types';
import { getRoutePath, OFFICIAL_SOCIALS } from '../seo/routesMeta';
import { Mail, Globe, ArrowUpRight, Linkedin, Instagram, MapPin } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_LINK, WHATSAPP_PHONE } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageType, e?: React.MouseEvent<HTMLAnchorElement>, hash?: string) => {
    if (e) e.preventDefault();
    onNavigate(page);
    if (hash) {
      window.history.replaceState(null, '', `${getRoutePath(page)}#${hash}`);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060608] text-slate-400 relative overflow-hidden">
      {/* Subtle background ambient radial light */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-violet-900/10 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">Hemant Thakur</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Digital Marketing Specialist, Web Developer, and Technical SEO Strategist based in Delhi, India. Helping brands achieve sustainable organic visibility, high-converting web applications, and measurable revenue growth.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" aria-hidden="true" />
              <span>Delhi NCR, India · Available for Remote &amp; Global Projects</span>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Hemant Thakur on WhatsApp"
                className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-500/80 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" loading="lazy" ariaHidden />
              </a>
              <a
                href={OFFICIAL_SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemant Thakur Official LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={OFFICIAL_SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemant Thakur Official Instagram Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={getRoutePath('home')}
                  onClick={(e) => handleNav('home', e)}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={getRoutePath('about')}
                  onClick={(e) => handleNav('about', e)}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href={getRoutePath('services')}
                  onClick={(e) => handleNav('services', e)}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={getRoutePath('portfolio')}
                  onClick={(e) => handleNav('portfolio', e)}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href={getRoutePath('contact')}
                  onClick={(e) => handleNav('contact', e)}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Key Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services#digital-marketing-delhi"
                  onClick={(e) => handleNav('services', e, 'digital-marketing-delhi')}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Digital Marketing Delhi
                </a>
              </li>
              <li>
                <a
                  href="/services#web-design-development"
                  onClick={(e) => handleNav('services', e, 'web-design-development')}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Web Design &amp; Development
                </a>
              </li>
              <li>
                <a
                  href="/services#seo-services-delhi"
                  onClick={(e) => handleNav('services', e, 'seo-services-delhi')}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Technical SEO Delhi
                </a>
              </li>
              <li>
                <a
                  href="/services#performance-marketing-delhi"
                  onClick={(e) => handleNav('services', e, 'performance-marketing-delhi')}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Performance Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services#social-media-marketing-delhi"
                  onClick={(e) => handleNav('services', e, 'social-media-marketing-delhi')}
                  className="hover:text-violet-300 transition-colors text-left inline-block"
                >
                  Social Media Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Direct Contact
            </h2>
            <a
              href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
              className="group block p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-violet-500/40 transition-colors"
            >
              <div className="text-xs text-slate-300 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
                <span>Primary Email</span>
              </div>
              <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors break-all">
                hthemant124@gmail.com
              </div>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50 hover:border-emerald-500/80 transition-colors"
            >
              <div className="text-xs text-slate-300 mb-1 flex items-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" loading="lazy" ariaHidden />
                <span className="text-emerald-400 font-medium">WhatsApp Direct</span>
              </div>
              <div className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                {WHATSAPP_PHONE}
              </div>
            </a>

            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                <span>Official Domain</span>
              </div>
              <div className="text-white font-mono">hemantthakur.in</div>
            </div>

            <a
              href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 hover:text-violet-300 pt-1 transition-colors"
            >
              <span>Send Business Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Hemant Thakur. All rights reserved.</p>
          <p className="text-slate-400">
            Delhi, India · Designed for Performance, Accessibility &amp; Organic Search Dominance
          </p>
        </div>
      </div>
    </footer>
  );
};
