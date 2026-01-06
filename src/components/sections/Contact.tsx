"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <SectionWrapper id="contact" className="container mx-auto px-4 md:px-6 py-32 relative">

            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-800/10 to-blue-800/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center justify-center text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 tracking-tighter mb-8">
                        LET'S TALK
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12"
                >
                    Have a project in mind? Looking for a new team member?
                    <br className="hidden md:block" />
                    Let’s create something <span className="text-purple-400">extraordinary</span> together.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 justify-center items-center"
                >
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="mailto:shubham_shk07@gmail.com">
                            <Button size="lg" variant="glow" icon={<Mail size={22} />} className="text-lg px-8 py-6 h-auto">
                                Email Me
                            </Button>
                        </a>
                        <a href={PORTFOLIO_DATA.personal.links.linkedin} target="_blank">
                            <Button size="lg" variant="outline" icon={<Linkedin size={22} />} className="text-lg px-8 py-6 h-auto">
                                LinkedIn
                            </Button>
                        </a>
                    </div>

                    <div className="text-gray-400 text-lg">
                        Or call me at: <span className="text-white font-medium">+91 8987205708</span>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p>© 2026 Shubham Kumar. Crafted with Next.js & Framer Motion.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-purple-400 cursor-pointer transition-colors">GitHub</span>
                    <span className="hover:text-cyan-400 cursor-pointer transition-colors">Twitter</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                </div>
            </footer>
        </SectionWrapper>
    );
}
