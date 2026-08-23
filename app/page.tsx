import { Hero } from "@/components/hero";
import { Protagonistas } from "@/components/protagonistas";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center bg-black p-4 md:p-10">
      <Hero />
      
      <Protagonistas />

    </main>
);
}
