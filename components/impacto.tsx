export function Impacto() {
    return (
        <div className="flex flex-col mt-100 gap-2">
            <div className="text-center text-brand-accent">
                TI Sem Gargalos
            </div>

            <div className="text-center text-3xl font-semibold">
                Impacto Direto no Time
            </div>

            <div className="text-sm text-center">
                Como a nossa permanência como efetivos transforma os gargalos em soluções robustas.
            </div>

            <div className="mt-50 flex flex-row gap-8 max-w-[1280px] w-full mx-auto">

                <div className="flex-1 flex flex-col gap-4 bg-white/5 rounded-[20px] p-8">
                    <span className="text-sm font-semibold text-brand-accent">Tempo de Resposta ↓</span>
                    <span className="text-3xl font-extrabold text-zinc-100">42% mais rápido</span>
                    <span className="text-sm text-zinc-400">
                        Com dedicação total, a triagem e a resolução dos chamados urgentes passam a ser instantâneas.
                    </span>
                </div>

                <div className="flex-1 flex flex-col gap-4 bg-white/5 rounded-[20px] p-8">
                    <span className="text-sm font-semibold text-brand-accent">Backlog Reduzido ↓</span>
                    <span className="text-3xl font-extrabold text-zinc-100">Zeradinho em TI</span>
                    <span className="text-sm text-zinc-400">
                        A manutenção preventiva passa a ser o padrão, evitando incidentes de infraestrutura antes que eles ocorram.
                    </span>
                </div>

            </div>

        </div>
    );
}
