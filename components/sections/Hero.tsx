'use client'

import { Card } from "@/components/ui/card";
import KineticGrid from "@/components/ui/kinetic-grid";
import { SplineScene } from "@/components/ui/splite";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  // Só carrega o Spline 3D em telas md+ (desktop). No mobile: imagem estática.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Card className="w-full h-[80svh] bg-brand-secondary relative overflow-hidden">
      {/* Fundo cinético: grid interativo que deforma com o cursor */}
      <KineticGrid className="-z-0" />

      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      /> */}

      <div className="flex flex-col md:flex-row h-full">
        {/* Right content: fundo absoluto atrás do texto no mobile; lado direito no desktop */}
        <div className="md:flex-1 md:order-2 absolute inset-0 md:relative md:inset-auto opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto">
          {isDesktop ? (
            <SplineScene
              scene="/scene.splinecode"
              className="w-full h-full"
            />
          ) : (
            <img
              src="/hero-mobile.webp"
              alt=""
              aria-hidden
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        {/* Left content */}
        <div 
          id="inicio"
          className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            A DSOP merece <span className="text-brand-main ">mais</span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Dois estagiários. 10 meses. Centenas de chamados resolvidos e infraestruturas redefinidas. Descubra por que manter esse time é a melhor decisão estratégica.
          </p>

          <a
            href="#protagonistas"
            className="mt-10 bg-brand-main w-full px-6 py-3 rounded-md flex flex-row box-shadow-md font-semibold text-white md:w-fit justify-between gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer scroll-smooth"
          >
            <span>
              Conhecer
            </span>
            <span>
              <ChevronRight />
            </span>
          </a>

        </div>
      </div>
    </Card>
  )
}
