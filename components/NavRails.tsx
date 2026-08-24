'use client'

import { PreviewRailPreview } from "@/components/ui/preview-rails.usage";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Altura da hero (h-[600px]) + padding vertical do main (~40px em cada lado)
const HERO_HEIGHT = 680;

export function NavRail() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > HERO_HEIGHT);
        onScroll(); // estado correto se a página já carregar rolada
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            aria-hidden={!visible}
            className={cn(
                "fixed top-50 ml-10 mr-auto z-50 transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            <PreviewRailPreview />
        </nav>
    );
}
