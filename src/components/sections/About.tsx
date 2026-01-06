"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

export function About() {
    return (
        <SectionWrapper id="about" className="container mx-auto px-4 md:px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Main Bio Glass Pane - Spans 2 columns */}
                <motion.div
                    className="md:col-span-2 relative group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="glass-card p-8 md:p-10 rounded-3xl h-full relative border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-xl">
                                <Code2 className="text-purple-400" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-white">About Me</h2>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p className="font-light">
                                {PORTFOLIO_DATA.personal.bio}
                            </p>
                            <p>
                                I thrive on complexity. Whether it's optimizing <span className="text-cyan-400 font-semibold">distributed systems</span> or building pixel-perfect <span className="text-purple-400 font-semibold">user interfaces</span>, I focus on delivering speed and scalability.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Badge text="Full Stack" />
                                <Badge text="AI Engineer" />
                                <Badge text="System Design" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Column */}
                <div className="space-y-8 flex flex-col justify-center">
                    <StatCard
                        icon={<Zap className="text-yellow-400" />}
                        label="Years Experience"
                        value="1+"
                        delay={0.2}
                    />
                    <StatCard
                        icon={<Cpu className="text-cyan-400" />}
                        label="Projects Shipped"
                        value="10+"
                        delay={0.3}
                    />
                    <StatCard
                        icon={<Globe className="text-green-400" />}
                        label="Open Source"
                        value="Active"
                        delay={0.4}
                    />
                </div>

            </div>
        </SectionWrapper>
    );
}

function StatCard({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group"
        >
            <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between group-hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                        {icon}
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">{label}</div>
                    </div>
                </div>
                <div className="text-2xl font-bold text-white font-mono">{value}</div>
            </div>
        </motion.div>
    )
}

function Badge({ text }: { text: string }) {
    return (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
            {text}
        </span>
    )
}
