'use client';

import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Instructor from '@/components/Instructor';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import content from '@/app/data/content.json';
import type { LocalizedContent } from '@/types';

const typedContent = content as LocalizedContent;

function LandingPage() {
  const { language } = useLanguage();
  const localizedContent = typedContent[language];

  return (
    <>
      <Navbar content={localizedContent.navigation} />

      <main>
        <Hero content={localizedContent.hero} />
        <Features content={localizedContent.features} />
        <Instructor content={localizedContent.instructor} />
        <Testimonials content={localizedContent.testimonials} />
        <Pricing content={localizedContent.pricing} />
        <FAQ content={localizedContent.faq} />
      </main>

      <Footer content={localizedContent.footer} />
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
