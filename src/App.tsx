import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import {
  getRouteMeta,
  getRoutePath,
  parseRouteFromPathname,
  SITE_URL,
} from './seo/routesMeta';

const AboutView = lazy(() =>
  import('./views/AboutView').then((m) => ({ default: m.AboutView }))
);
const ServicesView = lazy(() =>
  import('./views/ServicesView').then((m) => ({ default: m.ServicesView }))
);
const PortfolioView = lazy(() =>
  import('./views/PortfolioView').then((m) => ({ default: m.PortfolioView }))
);
const ContactView = lazy(() =>
  import('./views/ContactView').then((m) => ({ default: m.ContactView }))
);

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string | null) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    existing?.remove();
    return;
  }
  if (existing) {
    existing.setAttribute('href', href);
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }
}

function syncBreadcrumbJsonLd(page: PageType | 'not-found') {
  const existing = document.getElementById('route-breadcrumb-ldjson');
  if (page === 'home' || page === 'not-found') {
    existing?.remove();
    return;
  }
  const meta = getRouteMeta(page);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: meta.breadcrumbLabel,
        item: meta.canonical,
      },
    ],
  };

  if (existing) {
    existing.textContent = JSON.stringify(breadcrumb);
  } else {
    const script = document.createElement('script');
    script.id = 'route-breadcrumb-ldjson';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(script);
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageType | 'not-found'>(() => {
    if (typeof window === 'undefined') return 'home';
    return parseRouteFromPathname(window.location.pathname);
  });

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(parseRouteFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize document head SEO tags & subpage BreadcrumbList structured data
  useEffect(() => {
    if (activePage === 'not-found') {
      document.title = 'Page Not Found (404) | Hemant Thakur';
      upsertMetaTag(
        'name',
        'description',
        'The requested page could not be found on hemantthakur.in.'
      );
      upsertMetaTag('name', 'robots', 'noindex, nofollow');
      upsertCanonical(null);
      syncBreadcrumbJsonLd('not-found');
      return;
    }

    const meta = getRouteMeta(activePage);
    document.title = meta.title;
    upsertMetaTag('name', 'description', meta.description);
    upsertMetaTag('name', 'robots', 'index, follow');
    upsertCanonical(meta.canonical);
    upsertMetaTag('property', 'og:url', meta.canonical);
    upsertMetaTag('property', 'og:title', meta.title);
    upsertMetaTag('property', 'og:description', meta.description);
    upsertMetaTag('name', 'twitter:url', meta.canonical);
    upsertMetaTag('name', 'twitter:title', meta.title);
    upsertMetaTag('name', 'twitter:description', meta.description);
    syncBreadcrumbJsonLd(activePage);
  }, [activePage]);

  // Update URL history when navigating
  const navigateTo = (page: PageType) => {
    setActivePage(page);
    const newPath = getRoutePath(page);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col relative selection:bg-violet-600/30 selection:text-violet-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Background subtle grid pattern */}
      <div aria-hidden="true" className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Top Navigation */}
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      {/* Main Content View Container */}
      <main id="main-content" className="flex-1 relative z-10">
        {activePage === 'home' && <HomeView onNavigate={navigateTo} />}
        {activePage !== 'home' && activePage !== 'not-found' && (
          <Suspense
            fallback={
              <div className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
                Loading content...
              </div>
            }
          >
            {activePage === 'about' && <AboutView onNavigate={navigateTo} />}
            {activePage === 'services' && <ServicesView onNavigate={navigateTo} />}
            {activePage === 'portfolio' && <PortfolioView onNavigate={navigateTo} />}
            {activePage === 'contact' && <ContactView onNavigate={navigateTo} />}
          </Suspense>
        )}
        {activePage === 'not-found' && (
          <section className="pt-36 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-violet-400">
              Error 404
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Page Not Found
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              The page you requested does not exist on hemantthakur.in. Use the navigation above or return to the homepage.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home');
                }}
                className="inline-flex h-11 items-center justify-center px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all"
              >
                Back to Home
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('contact');
                }}
                className="inline-flex h-11 items-center justify-center px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                Contact Me
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Professional Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
