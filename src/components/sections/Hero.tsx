"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TechIcons } from "@/components/ui/TechIcons";
import { ArrowRight, Download, Sparkles } from "lucide-react";

// --- Components for Hero Internal Use ---


const Typewriter = ({ words, delay = 100, pause = 1500 }: { words: string[], delay?: number, pause?: number }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), pause);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : delay, parseInt((Math.random() * 30).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, delay, pause]);

    return (
        <span className="inline-block min-w-[280px] text-left">
            {words[index].substring(0, subIndex)}
            <span className={`inline-block w-[3px] h-[1em] bg-purple-400 ml-1 align-middle ${blink ? "opacity-100" : "opacity-0"}`}></span>
        </span>
    );
};

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-[#030014] pb-20 pt-40 md:pt-20"
        >


            {/* Hero Glows */}
            <div className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-blob" />
            <div className="absolute bottom-[0%] right-[20%] w-[30vw] h-[30vw] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000" />

            {/* Main Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-10 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.3)] hover:bg-purple-500/10 transition-colors"
                >
                    <Sparkles size={14} className="text-yellow-400" />
                    <span>Open for Opportunities</span>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                        Hi, I am <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-gradient-x bg-300% leading-tight">
                            Shubham Kumar
                        </span>
                    </h1>
                    <div className="text-2xl md:text-4xl font-light text-gray-300 mt-4 h-[60px] md:h-auto">
                        I am a <Typewriter words={["Full Stack Developer", "Frontend Developer", "Backend Developer", "DevOps Engineer"]} />
                    </div>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Crafting <span className="text-white font-semibold">immersive digital experiences</span> with scalable architecture and premium aesthetics.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <a href="#contact">
                        <Button size="lg" variant="glow" icon={<ArrowRight size={20} />} className="min-w-[160px]">
                            Hire Me
                        </Button>
                    </a>
                    <a href="https://drive.google.com/file/d/1JcRJcQNabToWvfifJHpfzOAkjhnaqtHm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="ghost" icon={<Download size={20} />} className="min-w-[160px]">
                            Download CV
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Parallax Elements (Tech Stack) */}
            <motion.div style={{ y: y1, x: -50 }} className="absolute left-[10%] top-[25%] hidden lg:block pointer-events-none">
                <FloatingIcon icon={<TechIcons.React className="w-20 h-20 text-cyan-400" />} />
            </motion.div>

            <motion.div style={{ y: y2, x: 50 }} className="absolute right-[10%] top-[30%] hidden lg:block pointer-events-none">
                <FloatingIcon icon={<TechIcons.NextJS className="w-20 h-20 text-white" />} />
            </motion.div>

            <motion.div style={{ y: y1, x: 50 }} className="absolute left-[20%] bottom-[20%] hidden lg:block pointer-events-none">
                <FloatingIcon icon={<TechIcons.TypeScript className="w-16 h-16 text-blue-500" />} />
            </motion.div>

            <motion.div style={{ y: y2, x: -50 }} className="absolute right-[20%] bottom-[25%] hidden lg:block pointer-events-none">
                <FloatingIcon icon={<TechIcons.Node className="w-16 h-16 text-green-500" />} />
            </motion.div>

        </section>
    );
}

function FloatingIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass-card p-5 rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                {icon}
            </div>
        </div>
    );
}
