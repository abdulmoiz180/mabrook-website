'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { NavigationContent } from '@/types';

interface NavbarProps {
    content: NavigationContent;
}

export default function Navbar({ content }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, isRTL } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 glass"
        >
            <nav className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-bold gradient-text-purple"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Mabrook
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {content.links.map((link, index) => (
                        <motion.button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -2 }}
                        >
                            {link.label}
                        </motion.button>
                    ))}
                </div>

                {/* Right Side Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    {/* Language Toggle */}
                    <motion.button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--brand-purple)] transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Globe size={16} />
                        <span>{language === 'en' ? 'AR' : 'EN'}</span>
                    </motion.button>

                    {/* Get Started Button */}
                    <motion.button
                        onClick={() => scrollToSection('pricing')}
                        className="btn-primary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {content.buttons.start}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-[var(--text-primary)]"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden glass border-t border-[var(--border-subtle)]"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {content.links.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-left py-2 text-lg"
                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--border-subtle)]">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[var(--border-subtle)] text-sm font-medium"
                                >
                                    <Globe size={16} />
                                    <span>{language === 'en' ? 'العربية' : 'English'}</span>
                                </button>
                                <button
                                    onClick={() => scrollToSection('pricing')}
                                    className="btn-primary w-full text-center"
                                >
                                    {content.buttons.start}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
