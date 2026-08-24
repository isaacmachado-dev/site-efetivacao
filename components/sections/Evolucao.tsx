import { SectionReveal } from "../SectionReveal";

const marcos = [
    {
        numero: "1",
        titulo: "Mês 1: Primeiros chamados",
        descricao:
            "Chegada na DSOP, muito sofrimento com o ERPFLEX e compras. Mas muita ajuda no começo, VALEU PEDRÃO, JON, CHARLES E WILL.",
    },
    {
        numero: "2",
        titulo: "Mês 3: Autonomia?",
        descricao:
            "Revisão do parque de máquinas e suportes fluindo naturalmente. OBRIGADO JON.",
    },
    {
        numero: "3",
        titulo: "Mês 6: Referência técnica",
        descricao:
            "Apoio em configurações de rede, primeiros protótipos de projetos e desenvolvimento de soluções, registrando intensidade e presença disponível.",
    },
    {
        numero: "4",
        titulo: "Mês 10: Dupla pronta para efetivar",
        descricao:
            "Entendimento e aptidão total para desenvolver demandas críticas e responsabilidades em tempo integral.",
    },
];

export function Evolucao() {
    return (
        <SectionReveal 
            className="flex flex-col gap-2"
        >
            <div 
                id="evolucao"
                className="mt-100 text-center text-brand-accent uppercase font-mono mb-5 text-sm font-semibold"
            >
                Nossa Evolução
            </div>

            <div className="text-center text-3xl font-semibold">
                Um resumo da nossa jornada
            </div>

            <div className="text-sm text-center">
                De novos ingressantes para...
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1340px] w-full mx-auto">

                {marcos.map((marco) => (
                    <div key={marco.numero} className="flex flex-col gap-4">

                        <div className="w-8 h-8 rounded-full bg-brand-main flex items-center justify-center">
                            <span className="text-sm font-bold text-white">{marco.numero}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-zinc-100">{marco.titulo}</span>
                            <span className="text-sm text-zinc-400">{marco.descricao}</span>
                        </div>

                    </div>
                ))}

            </div>

        </SectionReveal>
    );
}
