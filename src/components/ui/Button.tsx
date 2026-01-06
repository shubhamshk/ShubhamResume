"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    isLoading?: boolean;
}

// Combining HTMLButtonProps and MotionProps
type CombinedProps = ButtonProps & Omit<HTMLMotionProps<"button">, "ref">;

export const Button = React.forwardRef<HTMLButtonElement, CombinedProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            icon,
            isLoading,
            children,
            ...props
        },
        ref
    ) => {
        const variants = {
            primary:
                "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(112,66,248,0.5)] border border-transparent",
            secondary: "bg-secondary text-black hover:bg-secondary/90",
            outline:
                "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
            ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5",
            glow: "bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-[0_0_15px_rgba(112,66,248,0.1)] hover:shadow-[0_0_30px_rgba(112,66,248,0.4)] hover:bg-white/10 hover:border-white/30",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {/* Optional: Add a subtle shine effect on hover for glow variant */}
                {variant === 'glow' && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000" />
                    </div>
                )}

                {isLoading && (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
