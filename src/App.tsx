import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PortfolioView } from './views/PortfolioView';
import { ContactView } from './views/ContactView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');

  // Parse path on initial load (supporting direct URL hits and GitHub Pages redirects)
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
      if (path === 'about') setActivePage('about');
      else if (path === 'services') setActivePage('services');
      else if (path === 'portfolio') setActivePage('portfolio');
      else if (path === 'contact') setActivePage('contact');
      else setActivePage('home');
    };

    parsePath();

    // Handle browser back/forward buttons
    const handlePopState = () => parsePath();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL history and document title when navigating
  const navigateTo = (page: PageType) => {
    setActivePage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }

    // Dynamic SEO title per page
    switch (page) {
      case 'home':
        document.title =
          'Hemant Thakur – Digital Marketing Specialist & Web Developer in Delhi';
        break;
      case 'about':
        document.title =
          'About Hemant Thakur – Digital Marketing & Web Development Specialist';
        break;
      case 'services':
        document.title =
          'Digital Marketing, SEO & Web Development Services in Delhi – Hemant Thakur';
        break;
      case 'portfolio':
        document.title = 'Portfolio & Case Studies – Hemant Thakur';
        break;
      case 'contact':
        document.title =
          'Contact Hemant Thakur – Direct Business & Project Inquiries';
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col relative selection:bg-violet-600/30 selection:text-violet-200">
      {/* Background subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Top Navigation */}
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      {/* Main Content View Container */}
      <main className="flex-1 relative z-10">
        {activePage === 'home' && <HomeView onNavigate={navigateTo} />}
        {activePage === 'about' && <AboutView onNavigate={navigateTo} />}
        {activePage === 'services' && <ServicesView onNavigate={navigateTo} />}
        {activePage === 'portfolio' && <PortfolioView onNavigate={navigateTo} />}
        {activePage === 'contact' && <ContactView onNavigate={navigateTo} />}
      </main>

      {/* Professional Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
