import { NavRail } from "@/components/NavRails";
import { Crescimento } from "@/components/sections/Crescimento";
import { Evolucao } from "@/components/sections/Evolucao";
import { Footer } from "@/components/sections/Footer";
import { Gargalos } from "@/components/sections/Gargalos";
import { Hero } from "@/components/sections/Hero";
import { Protagonistas } from "@/components/sections/Protagonistas";

export default function Home() {
  return (
    
    <>
      <NavRail />
      <main className="flex flex-col min-h-screen w-full items-center justify-center p-4 md:p-30">

        <Hero />

        <Protagonistas />

        <Crescimento />

        <Gargalos />

        <Evolucao />

        <Footer />

      </main>

    </>
);
}
