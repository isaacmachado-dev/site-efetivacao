import Image from "next/image";

export function Protagonistas() {
    return (
        <>
            <div className="flex flex-col mt-100 gap-2">
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

           <div className=" mt-50 flex flex-col gap-10">
                <div className="md:mr-[10vw] flex flex-row gap-4 bg-brand-secondary p-10 rounded-3xl">
                    <div className="flex flex-col my-auto">
                        <span className="text-3xl font-semibold">Isaac</span>
                        <span className="mt-4 text-sm">Estagiário de Desenvolvimento</span>
                        
                        {/* Container das tags alterado para flex-col (coluna) */}
                        <div className="flex flex-col mt-5 gap-4">
                            
                            {/* Primeira linha com 2 itens */}
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Desenvolvedor
                                </span>
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Full-Stack
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC] mx-auto">
                                    Suporte N1-N3
                                </span>
                            </div>

                        </div>
                    </div>
                    <Image 
                        src="/rock-lee.jpg"
                        alt="Isaac"
                        width={200}
                        height={200}
                        className="rounded-md"
                    />
                </div>

                <div className="md:ml-[10vw] flex flex-row gap-5 bg-brand-secondary p-10 rounded-3xl">
                     <Image 
                        src="/robin.jpg"
                        alt="Isaac"
                        width={200}
                        height={200}
                        className="rounded-md"
                    />
                    
                    <div className="flex flex-col my-auto">
                        <span className="text-3xl font-semibold">Danilo</span>
                        <span className="mt-4 text-sm">Estagiário de Infraestrutura</span>
                        
                        <div className="flex flex-col mt-5 gap-4">
                            
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Desenvolvedor
                                </span>
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC]">
                                    Full-Stack
                                </span>
                            </div>
                            
                            <div className="flex flex-row gap-4">
                                <span className="rounded-xl px-2 py-1 bg-brand-main/20 text-[#C084FC] mx-auto">
                                    Suporte N1-N3
                                </span>
                            </div>

                        </div>
                    </div>
                   
                </div>

            </div>
        </>
    );
}