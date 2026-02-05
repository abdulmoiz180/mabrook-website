'use client';

import { motion } from 'framer-motion';
import {
    TrendingUp,
    ShoppingCart,
    Video,
    Bot,
    Briefcase,
    Globe,
    LucideIcon
} from 'lucide-react';
import type { FeaturesContent } from '@/types';

interface FeaturesProps {
    content: FeaturesContent;
}

const iconMap: Record<string, LucideIcon> = {
    TrendingUp,
    ShoppingCart,
    Video,
    Bot,
    Briefcase,
    Globe,
};

export default function Features({ content }: FeaturesProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    } as const;

    return (
        <section id="features" className="section-padding relative">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent opacity-50" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        <span className="text-[var(--text-primary)]">{content.title.split('—')[0]}</span>
                        {content.title.includes('—') && (
                            <span className="gradient-text-purple"> — {content.title.split('—')[1]}</span>
                        )}
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {content.description}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {content.items.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Globe;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-8 card-hover group"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-xl bg-[var(--brand-purple)] bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                                    <Icon
                                        size={28}
                                        className="text-[var(--brand-purple)] group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-purple-light)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
