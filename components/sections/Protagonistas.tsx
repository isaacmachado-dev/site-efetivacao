import Image from "next/image";
import { SectionReveal } from "../SectionReveal";

export function Protagonistas({ className }: { className?: string }) {
    return (
        <>
            <div id="protagonistas" className="flex flex-col mt-100 mb-20 gap-2 scroll-mt-10">
                <div className="text-center text-brand-accent">
                    Os protagonistas
                </div>

                <div className="text-center text-3xl font-semibold">
                    Quem faz acontecer
                </div>

                <div className="text-sm">
                    Conheça a dupla dinâmica por trás de entregas de DEV, Infra, Suporte, Audiovisual e Editorial da DSOP.
                </div>
            </div>

           <SectionReveal className={`flex flex-col gap-10 ${className ?? ""}`}>
                <div className="md:mr-[10vw] flex flex-row gap-4 bg-brand-secondary p-10 rounded-3xl">
                    <div className="flex flex-col my-auto">
                        <span className="text-3xl font-semibold">Isaac</span>
                        <span className="mt-4 text-sm text-brand-accent">Estagiário de Desenvolvimento</span>
                        
                        {/* Container das tags alterado para flex-col (coluna) */}
                        <div className="flex flex-col mt-5 gap-4">
                            
                            <div className="flex flex-col md:flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Desenvolvedor
                                </span>
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Full-Stack
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC] w-full md:text-center">
                                    Suporte N1-N3
                                </span>
                            </div>

                        </div>
                    </div>
                    <Image 
                        src="/isaac-pro.jpg"
                        alt="Isaac"
                        width={150}
                        height={150}
                        className="w-[150px] h-[150px] shrink-0 self-center rounded-full object-cover"
                    />
                </div>

                <div className="md:ml-[10vw] flex flex-row gap-5 bg-brand-secondary p-10 rounded-3xl">
                     <Image 
                        src="/danilo.jpg"
                        alt="Danilo Neri"
                        width={200}
                        height={200}
                        className="w-[200px] h-[200px] shrink-0 self-center rounded-full object-cover"
                    />
                    
                    <div className="flex flex-col my-auto">
                        <span className="text-3xl font-semibold">Danilo</span>
                        <span className="mt-4 text-sm text-brand-accent">Estagiário de Infraestrutura</span>
                        
                        <div className="flex flex-col mt-5 gap-4">
                            
                            <div className="flex flex-col md:flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    GLPI-Admin
                                </span>
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Redes
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC] w-full md:text-center">
                                    Suporte N1-N3
                                </span>
                            </div>

                        </div>
                    </div>
                   
                </div>

            </SectionReveal>
        </>
    );
}
