'use client';

import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Linkedin, Heart } from 'lucide-react';
import type { FooterContent } from '@/types';

interface FooterProps {
    content: FooterContent;
}

const socialIcons = {
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
};

export default function Footer({ content }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="#"
                            className="text-2xl font-bold gradient-text-purple inline-block mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Mabrook Academy
                        </motion.a>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-sm">
                            {content.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {Object.entries(content.social).map(([platform, url]) => {
                                const Icon = socialIcons[platform as keyof typeof socialIcons];
                                if (!Icon) return null;

                                return (
                                    <motion.a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-[var(--bg-glass)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand-purple)] hover:border-[var(--brand-purple)] transition-colors"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {content.columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-[var(--text-secondary)] hover:text-[var(--brand-purple)] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--border-subtle)]">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-[var(--text-muted)]">
                            {content.copyright}
                        </p>
                        <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                            Made with <Heart size={14} className="text-red-500 fill-current" /> for ambitious learners
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
