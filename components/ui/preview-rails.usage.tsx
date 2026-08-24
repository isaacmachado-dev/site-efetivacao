"use client";

import { PreviewRail } from "@/components/motion/preview-rail";

export const previewRailItems = [
  {
    id: "inicio",
    label: "Início",
    href: "#",
  },
  {
    id: "protagonistas",
    label: "Protagonistas",
    href: "#protagonistas",
  },
  {
    id: "crescimento",
    label: "Crescimento",
    href: "#crescimento",
  },
  {
    id: "gargalos",
    label: "Gargalos",
    href: "#gargalos",
  },
  {
    id: "evolucao",
    label: "Evolução",
    href: "#evolucao",
  },
];

export function PreviewRailPreview() {
  return (
    <div className="flex w-full flex-col gap-8">
      <PreviewRail
        items={previewRailItems}
        defaultActiveId="inicio"
        className="mx-auto h-[360px] w-full max-w-2xl"
        previewClassName="
          text-white 
          [&_[data-slot='preview-rail-title']]:text-black/80
          [&_[data-slot='preview-rail-title']]:font-semibold
          [&_[data-slot='preview-rail-title']]:text-sm
          [&_[data-slot='preview-rail-title']]:uppercase
          [&_[data-slot='preview-rail-title']]:font-mono

        "
        />
   
    </div>
  );
}
