'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import type { PricingContent } from '@/types';

interface PricingProps {
    content: PricingContent;
}

export default function Pricing({ content }: PricingProps) {
    return (
        <section id="pricing" className="section-padding relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-purple)] opacity-5 blur-[120px] rounded-full" />

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
                        {content.description}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {content.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 ${plan.isPopular
                                    ? 'bg-gradient-to-b from-[var(--brand-purple)] from-0% via-[var(--bg-card)] via-20% to-[var(--bg-card)] border-2 border-[var(--brand-purple)] glow-purple'
                                    : 'glass-card'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <div className="popular-badge flex items-center gap-1">
                                    <Sparkles size={12} />
                                    <span>Most Popular</span>
                                </div>
                            )}

                            {/* Plan Title */}
                            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 mt-2">
                                {plan.title}
                            </h3>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold gradient-text-purple">
                                    €{plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-[var(--text-muted)]">/{plan.period}</span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 my-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[var(--brand-purple)] bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check size={12} className="text-[var(--brand-purple)]" />
                                        </div>
                                        <span className="text-[var(--text-secondary)]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all ${plan.isPopular
                                        ? 'btn-primary'
                                        : 'bg-[var(--bg-glass)] border border-[var(--border-subtle)] hover:border-[var(--brand-purple)] text-[var(--text-primary)]'
                                    }`}
                            >
                                {plan.button}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-[var(--text-muted)] inline-flex items-center gap-2">
                        <Check size={16} className="text-green-500" />
                        7-day money-back guarantee • Secure payment • Instant access
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
