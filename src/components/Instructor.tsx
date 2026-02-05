'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';
import type { InstructorContent } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface InstructorProps {
    content: InstructorContent;
}

export default function Instructor({ content }: InstructorProps) {
    const { isRTL } = useLanguage();

    return (
        <section id="instructor" className="section-padding relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--brand-purple)] opacity-5 blur-[100px] rounded-full transform -translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                        className={`relative ${isRTL ? 'lg:order-2' : ''}`}
                    >
                        {/* Image Container with Glow Border */}
                        <div className="relative">
                            {/* Glow Effect Behind */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-purple-dark)] opacity-20 blur-xl transform scale-105" />

                            {/* Placeholder Image */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 rounded-full bg-[var(--brand-purple)] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                                            <span className="text-5xl">👨‍🏫</span>
                                        </div>
                                        <p className="text-[var(--text-muted)] text-sm">Instructor Photo</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -bottom-4 -right-4 lg:right-8 glass-card px-6 py-4 flex items-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-full bg-[var(--brand-purple)] flex items-center justify-center">
                                    <Award size={24} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[var(--text-primary)]">10+</div>
                                    <div className="text-sm text-[var(--text-muted)]">Years Experience</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                        className={isRTL ? 'lg:order-1 text-right' : ''}
                    >
                        {/* Section Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-glass)] mb-6">
                            <span className="text-sm font-medium text-[var(--brand-purple)]">
                                {content.title}
                            </span>
                        </div>

                        {/* Name & Role */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-2">
                            {content.name}
                        </h2>
                        <p className="text-lg text-[var(--brand-purple)] font-medium mb-6">
                            {content.role}
                        </p>

                        {/* Heading */}
                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-4">
                            {content.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                            {content.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {content.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    className="text-center p-4 rounded-xl bg-[var(--bg-glass)] border border-[var(--border-subtle)]"
                                >
                                    <div className="text-2xl md:text-3xl font-bold gradient-text-purple mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Featured In */}
                        <div className="flex items-center gap-4 text-[var(--text-muted)]">
                            <CheckCircle size={20} className="text-[var(--brand-purple)]" />
                            <span className="text-sm font-medium">{content.featuredText}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
