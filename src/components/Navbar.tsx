import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { getRoutePath } from '../seo/routesMeta';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_LINK } from './WhatsAppIcon';

interface NavbarProps {
  activePage: PageType | 'not-found';
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => handleNavClick('home', e)}
            className="group flex items-center gap-2 text-left cursor-pointer transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            aria-label="Hemant Thakur – Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group-hover:text-violet-300 transition-colors">
              Hemant Thakur
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.page}
                href={getRoutePath(link.page)}
                onClick={(e) => handleNavClick(link.page, e)}
                aria-current={activePage === link.page ? 'page' : undefined}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative cursor-pointer text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 ${
                  activePage === link.page
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {activePage === link.page && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (WhatsApp + Email CTA) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Hemant Thakur on WhatsApp"
              className="inline-flex h-9 items-center justify-center gap-1.5 px-3.5 text-xs font-semibold text-emerald-300 bg-[#25D366]/15 hover:bg-[#25D366] hover:text-white border border-[#25D366]/40 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" ariaHidden />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
              className="inline-flex h-9 items-center justify-center gap-2 px-4 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-violet-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Actions & Hamburger Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Hemant Thakur on WhatsApp"
              className="w-9 h-9 flex items-center justify-center text-emerald-300 hover:text-white bg-[#25D366]/20 border border-[#25D366]/40 rounded-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" ariaHidden />
            </a>

            <a
              href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
              aria-label="Email Hemant Thakur"
              className="w-9 h-9 flex items-center justify-center text-violet-400 hover:text-white bg-violet-950/40 border border-violet-800/40 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg bg-slate-900/60 border border-slate-800 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800/80 bg-[#070709]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.page}
                href={getRoutePath(link.page)}
                onClick={(e) => handleNavClick(link.page, e)}
                aria-current={activePage === link.page ? 'page' : undefined}
                className={`flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg transition-colors text-left ${
                  activePage === link.page
                    ? 'text-white bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/70'
                }`}
              >
                <span>{link.label}</span>
                {activePage === link.page && (
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/60 space-y-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" ariaHidden />
              <span>Let&apos;s Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="mailto:hthemant124@gmail.com?subject=Business%20Enquiry%20%E2%80%93%20Hemant%20Thakur"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
              <span>Email Me Directly</span>
            </a>

            <div className="pt-1 text-center text-[11px] text-slate-400 font-mono">
              WhatsApp: +91 8595639475
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
