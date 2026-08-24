import { SectionReveal } from "../SectionReveal";

export function Gargalos() {
    return (
        <SectionReveal className="flex flex-col gap-2">
            <div 
                id="gargalos"
                className="mt-100 text-center text-brand-accent uppercase font-mono mb-5 text-sm font-semibold"
            >

                TI Sem Gargalos
            </div>

            <div className="text-center text-3xl font-semibold">
                Impacto Direto no Time
            </div>

            <div className="text-sm text-center">
                Como a nossa elegibilidade a efetivos é só vantagem.
            </div>

            <div className="mt-20 flex flex-col md:flex-row gap-8 max-w-[1280px] w-full mx-auto">

                <div className="flex-1 flex flex-col gap-4 bg-white/5 rounded-[20px] p-8">
                    <span className="text-sm font-semibold text-brand-accent">Backlog Reduzido

                    </span>
                    <span className="text-3xl font-extrabold text-zinc-100">Zerinho do TI</span>
                    <span className="text-sm text-zinc-400">
                        A manutenção preventiva passa a ser o padrão, evitando incidentes de infraestrutura antes que eles ocorram.
                    </span>
                </div>

                <div className="flex-1 flex flex-col gap-4 bg-white/5 rounded-[20px] p-8">
                    <span className="text-sm font-semibold text-brand-accent">Eficiência de funções durante a operação </span>
                    <span className="text-3xl font-extrabold text-zinc-100">Dedicação integral</span>
                    <span className="text-sm text-zinc-400">
                        Ainda sim, problemas acontecem. Mas com dedicação integral, conseguimos antecipar gargalos e manter a operação fluindo perfeitamente, mesmo assumindo novos projetos simultâneos.
                    </span>
                </div>

            

            </div>

        </SectionReveal>
    );
}
