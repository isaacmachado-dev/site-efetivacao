'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    /** Direção de onde o conteúdo vem ao entrar na viewport */
    from?: "bottom" | "top" | "left" | "right";
    /** Duração da animação em segundos */
    duration?: number;
    id?: string;
}

/**
 * Wrapper de reveal on scroll
 * O conteúdo fica invisível e sobe/surge suavemente quando ~20% entra na
 * viewport, disparando uma única vez (once).
 */
export function SectionReveal({
    id,
    children,
    className,
    from = "bottom",
    duration = 0.6,
}: SectionRevealProps) {
    const offsets = {
        bottom: { y: 40 },
        top: { y: -20 },
        left: { x: -40 },
        right: { x: 40 },
    } as const;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offsets[from] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
