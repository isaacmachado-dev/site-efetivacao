import { Crescimento } from "@/components/sections/Crescimento";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impacto } from "@/components/sections/Impacto";
import { Jornada } from "@/components/sections/Jornada";
import { Protagonistas } from "@/components/sections/Protagonistas";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center p-4 md:p-10">
      
      <Hero />

      <Protagonistas />

      <Crescimento />

      <Impacto />

      <Jornada />

      <Footer />

    </main>
);
}
