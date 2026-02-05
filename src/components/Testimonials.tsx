'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { TestimonialsContent } from '@/types';

interface TestimonialsProps {
    content: TestimonialsContent;
}

export default function Testimonials({ content }: TestimonialsProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    } as const

    return (
        <section id="testimonials" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-transparent to-[var(--bg-secondary)] opacity-30" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        {content.title}
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {content.items.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card p-8 relative group card-hover"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={48} className="text-[var(--brand-purple)]" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={i < testimonial.rating ? 'star-filled fill-current' : 'star-empty'}
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 relative z-10">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-purple-dark)] flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[var(--text-primary)]">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-[var(--text-muted)]">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
