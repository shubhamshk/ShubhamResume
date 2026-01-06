"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export function Experience() {
    return (
        <SectionWrapper id="experience" className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Professional Journey
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 md:-ml-px h-full" />

                {PORTFOLIO_DATA.experience.map((job, index) => (
                    <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Timeline Dot */}
                        <div className={`absolute left-[-5px] md:left-1/2 md:-ml-[5px] mt-1.5 w-[11px] h-[11px] rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10`} />

                        {/* Content Spacer for Desktop */}
                        <div className="hidden md:block w-1/2" />

                        {/* Card Content */}
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8 md:pl-0 md:pr-12' : 'pl-8 md:pl-12'}`}>
                            <Card variant="glass-hover" className="p-6 relative group transform transition-all duration-300 hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Briefcase size={40} />
                                </div>

                                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                                    {job.period}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                                <h4 className="text-lg text-purple-300 mb-4">{job.company} <span className="text-gray-500 text-sm">| {job.type}</span></h4>

                                <ul className="space-y-2">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
