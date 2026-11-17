import type { PageType } from '../types.ts';

export const SITE_URL = 'https://hemantthakur.in';

export const OFFICIAL_SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/hemant-thakur-199430219/',
  instagram: 'https://www.instagram.com/xhemantx/',
} as const;

export interface RouteSeoMeta {
  page: PageType;
  path: string;
  fileName: string;
  title: string;
  description: string;
  canonical: string;
  breadcrumbLabel: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

export const ROUTES_SEO: RouteSeoMeta[] = [
  {
    page: 'home',
    path: '/',
    fileName: 'index.html',
    title: 'Freelance Digital Marketer in Delhi | Hemant Thakur',
    description:
      'Hire Hemant Thakur, a freelance digital marketer in Delhi offering SEO, website development, Google Ads and social media marketing services.',
    canonical: `${SITE_URL}/`,
    breadcrumbLabel: 'Home',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    page: 'about',
    path: '/about',
    fileName: 'about.html',
    title: 'About Hemant Thakur | Freelance Digital Marketer & Web Developer in Delhi',
    description:
      'Learn about Hemant Thakur, a freelance digital marketer, SEO specialist, and web developer based in Delhi helping brands grow online.',
    canonical: `${SITE_URL}/about`,
    breadcrumbLabel: 'About',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    page: 'services',
    path: '/services',
    fileName: 'services.html',
    title: 'Digital Marketing, SEO & Web Development Services in Delhi | Hemant Thakur',
    description:
      'Explore freelance digital marketing, technical SEO, website development, Google Ads performance marketing, and social media services in Delhi.',
    canonical: `${SITE_URL}/services`,
    breadcrumbLabel: 'Services',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    page: 'portfolio',
    path: '/portfolio',
    fileName: 'portfolio.html',
    title: 'Portfolio & Live Case Studies | Hemant Thakur',
    description:
      'Explore real websites and digital projects developed and optimized by Hemant Thakur across creative agencies, publishing, hospitality, and e-commerce.',
    canonical: `${SITE_URL}/portfolio`,
    breadcrumbLabel: 'Portfolio',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    page: 'contact',
    path: '/contact',
    fileName: 'contact.html',
    title: 'Contact Hemant Thakur | Freelance Digital Marketer in Delhi',
    description:
      'Contact Hemant Thakur directly in Delhi via email (hthemant124@gmail.com) or WhatsApp (+91 8595639475) for SEO, digital marketing, and web development.',
    canonical: `${SITE_URL}/contact`,
    breadcrumbLabel: 'Contact',
    changefreq: 'monthly',
    priority: '0.8',
  },
];

export const getRouteMeta = (page: PageType): RouteSeoMeta => {
  return ROUTES_SEO.find((r) => r.page === page) ?? ROUTES_SEO[0];
};

export const getRoutePath = (page: PageType): string => {
  return getRouteMeta(page).path;
};

export const parseRouteFromPathname = (pathname: string): PageType | 'not-found' => {
  const clean = pathname.replace(/\.html$/i, '').replace(/^\/+|\/+$/g, '').toLowerCase();
  if (clean === '' || clean === 'index') return 'home';
  if (clean === 'about') return 'about';
  if (clean === 'services') return 'services';
  if (clean === 'portfolio') return 'portfolio';
  if (clean === 'contact') return 'contact';
  return 'not-found';
};
