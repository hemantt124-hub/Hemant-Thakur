export type PageType = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  category: 'marketing' | 'development' | 'seo';
  benefits: string[];
  deliverables: string[];
  approach: string;
  technologies: string[];
  inquirySubject: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web-dev' | 'seo' | 'performance' | 'digital-marketing';
  categoryLabel: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  workPerformed: string[];
  technologies: string[];
  liveUrl?: string;
  mockupType: 'browser' | 'analytics' | 'campaign';
  metrics?: { label: string; value: string }[];
  isVerifiedSlot?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; proficiency?: string; highlighted?: boolean }[];
}
