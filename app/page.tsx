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
      <div className="p-4 md:p-15">
        <Hero />
      </div>


      <NavRail />
      <main className="flex flex-col min-h-screen w-full items-center justify-center p-4 md:p-30">


        <Protagonistas />

        <Crescimento />

        <Gargalos />

        <Evolucao />

        <Footer />

      </main>

    </>
);
}
