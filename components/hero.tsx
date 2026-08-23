'use client'

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            A DSOP merece <span>mais</span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Dois estagiários. 10 meses. Centenas de chamados resolvidos e infraestruturas redefinidas. Descubra por que manter esse time é a melhor decisão estratégica.
          </p>

          <div className="mt-10 bg-brand-main w-fit px-6 py-3 rounded-md flex flex-row box-shadow-md font-semibold">
            <span>
              Ver os números
            </span>
            <span>
              <ChevronRight />
            </span>

          </div>

        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
