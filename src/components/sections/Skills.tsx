"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Code2, Smartphone, Server, Brain } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Arsenal",
        icon: <Code2 className="w-6 h-6 text-purple-400" />,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Three.js", "Vite"],
    },
    {
        title: "Backend Core",
        icon: <Server className="w-6 h-6 text-cyan-400" />,
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "Supabase", "Redis"],
    },
    {
        title: "Dev & AI Tools",
        icon: <Brain className="w-6 h-6 text-yellow-400" />,
        skills: ["Docker", "AWS", "Git", "Cicd", "OpenAI API", "Hugging Face", "Vercel", "Figma"],
    },
];

export function Skills() {
    return (
        <SectionWrapper id="skills" className="container mx-auto px-4 md:px-6 py-20">
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        Technical Tools
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My weaponry of choice for building scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

function SkillCard({ category, index }: { category: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                    {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: string) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:border-purple-500/30 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}
