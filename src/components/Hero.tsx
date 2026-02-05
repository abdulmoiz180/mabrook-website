'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Sparkles } from 'lucide-react';
import type { HeroContent } from '@/types';

interface HeroProps {
    content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow Effects */}
            <div className="hero-glow top-1/4 left-1/4 animate-pulse-glow" />
            <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(152, 85, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(152, 85, 255, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container-custom relative z-10 text-center py-20 lg:py-32">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-sm mb-8"
                >
                    <Sparkles size={16} className="text-[var(--brand-purple)]" />
                    <span className="text-sm font-medium text-[var(--text-secondary)]">
                        {content.badge}
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
                >
                    <span className="text-[var(--text-primary)]">{content.titlePrefix}</span>
                    <br />
                    <span className="gradient-text-purple">{content.titleSuffix}</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {content.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#pricing"
                        className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {content.ctaPrimary}
                    </motion.a>

                    <motion.button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        className="btn-secondary flex items-center justify-center gap-3 text-lg px-8 py-4 w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isVideoPlaying ? (
                            <>
                                <Pause size={20} className="text-[var(--brand-purple)]" />
                                <span>Pause Video</span>
                            </>
                        ) : (
                            <>
                                <Play size={20} className="text-[var(--brand-purple)]" />
                                <span>{content.ctaSecondary}</span>
                            </>
                        )}
                    </motion.button>
                </motion.div>

                {/* Video Modal Placeholder (shown when playing) */}
                {isVideoPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-12 relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] aspect-video max-w-4xl mx-auto bg-[var(--bg-card)]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-[var(--brand-purple)] bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                                    <Play size={40} className="text-[var(--brand-purple)] ml-1" />
                                </div>
                                <p className="text-[var(--text-muted)]">Video Player Placeholder</p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
                >
                    {[
                        { value: '10,000+', label: 'Students' },
                        { value: '45+', label: 'Countries' },
                        { value: '94%', label: 'Success Rate' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text-purple mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-[var(--border-subtle)] flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0], y: [0, 8] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--brand-purple)]"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
