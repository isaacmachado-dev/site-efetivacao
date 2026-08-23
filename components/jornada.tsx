const marcos = [
    {
        numero: "1",
        titulo: "Mês 1: Primeiros chamados",
        descricao:
            "Adaptação rápida à cultura DSOP, mapeamento inicial do parque físico e primeiros chamados resolvidos.",
    },
    {
        numero: "2",
        titulo: "Mês 3: Autonomia total",
        descricao:
            "Configurações avançadas de rede, desenvolvimento de pequenas automações e suporte N2 fluindo naturalmente.",
    },
    {
        numero: "3",
        titulo: "Mês 6: Referência técnica",
        descricao:
            "Consolidação na arquitetura de chamados do GLPI e responsabilidade direta pela estabilidade das APIs.",
    },
    {
        numero: "4",
        titulo: "Mês 10: Prontos para efetivar",
        descricao:
            "Entendimento completo das dores da empresa e aptidão total para liderar demandas críticas em tempo integral.",
    },
];

export function Jornada() {
    return (
        <div className="flex flex-col mt-100 gap-2">
            <div className="text-center text-brand-accent">
                Nossa Evolução
            </div>

            <div className="text-center text-3xl font-semibold">
                A Jornada de 10 Meses
            </div>

            <div className="text-sm text-center">
                De novos ingressantes a pilares técnicos. Uma retrospectiva rápida da nossa curva de aprendizado.
            </div>

            <div className="mt-50 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1340px] w-full mx-auto">

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

        </div>
    );
}
