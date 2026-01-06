"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass" | "glass-hover";
}

export const Card = ({
    className,
    variant = "glass",
    children,
    ...props
}: CardProps) => {
    const variants = {
        default: "bg-black/50 border border-white/10",
        glass: "glass-card",
        "glass-hover":
            "glass-card hover:border-primary/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.2)] transition-all duration-300",
    };

    return (
        <motion.div
            className={cn("rounded-xl overflow-hidden", variants[variant], className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
