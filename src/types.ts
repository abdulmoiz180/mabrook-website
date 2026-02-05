// Content Types for Mabrook Academy Landing Page

export interface NavigationLink {
  label: string;
  id: string;
}

export interface NavigationButtons {
  lang: [string, string];
  login: string;
  start: string;
}

export interface NavigationContent {
  links: NavigationLink[];
  buttons: NavigationButtons;
}

export interface HeroContent {
  badge: string;
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesContent {
  title: string;
  description: string;
  items: Feature[];
}

export interface InstructorContent {
  name: string;
  role: string;
  title: string;
  heading: string;
  description: string;
  featuredText: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  features: string[];
  button: string;
  isPopular: boolean;
}

export interface PricingContent {
  title: string;
  description: string;
  plans: PricingPlan[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  description: string;
  columns: FooterColumn[];
  social: {
    twitter: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  copyright: string;
}

export interface ContentData {
  navigation: NavigationContent;
  hero: HeroContent;
  features: FeaturesContent;
  instructor: InstructorContent;
  testimonials: TestimonialsContent;
  pricing: PricingContent;
  faq: FAQContent;
  footer: FooterContent;
}

export interface LocalizedContent {
  en: ContentData;
  ar: ContentData;
}

export type Language = 'en' | 'ar';
