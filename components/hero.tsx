'use client'

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <Card className="w-full h-[600px] bg-brand-secondary relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Right content: fundo absoluto atrás do texto no mobile; lado direito no desktop */}
        <div className="md:flex-1 md:order-2 absolute inset-0 md:relative md:inset-auto opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto">
          <SplineScene
            scene="/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            A DSOP merece <span className="text-brand-main ">mais</span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Dois estagiários. 10 meses. Centenas de chamados resolvidos e infraestruturas redefinidas. Descubra por que manter esse time é a melhor decisão estratégica.
          </p>

          <div className="mt-10 bg-brand-main w-full px-6 py-3 rounded-md flex flex-row box-shadow-md font-semibold text-white md:w-fit justify-between gap-2">
            <span>
              Ver os números 
            </span>
            <span>
              <ChevronRight />
            </span>
          </div>

        </div>
      </div>
    </Card>
  )
}
