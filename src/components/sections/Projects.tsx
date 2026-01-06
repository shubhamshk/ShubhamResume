"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_DATA.projects.map((project, index) => (
                    <Card key={index} variant="glass-hover" className="flex flex-col h-full group">
                        {/* Visual Header (Gradient Placeholder since no screenshots yet) */}
                        {/* Visual Header */}
                        <div className="h-48 relative overflow-hidden group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/40 group-hover:after:transition-all">
                            {/* @ts-ignore - image property exists in data but type might need update */}
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <div className="h-full w-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                                    <Code2 size={64} className="text-white/20" />
                                </div>
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 4).map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">+{project.tech.length - 4}</span>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button variant="outline" size="sm" className="w-full" icon={<Github size={16} />}>
                                        Code
                                    </Button>
                                </a>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                                    <Button variant="primary" size="sm" className="w-full" icon={<ExternalLink size={16} />}>
                                        Live
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
}
