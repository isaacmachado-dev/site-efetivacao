import { Crescimento } from "@/components/crescimento";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Impacto } from "@/components/impacto";
import { Jornada } from "@/components/jornada";
import { Protagonistas } from "@/components/protagonistas";

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
