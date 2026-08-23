"use client";

import confetti from "canvas-confetti";
import { useState } from "react";
import { ChartBarStacked } from "./ui/chart-bar-stacked";

export function Crescimento() {
    const [efetivacao, setEfetivacao] = useState(false);

    const handleToggle = () => {
        const newState = !efetivacao;
        setEfetivacao(newState);
        
        // Dispara o confete apenas quando o botão for ATIVADO
        if (newState) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.9 }
            });
        }
    };
    
    return (
        <>
            <div className="flex flex-col mt-100 gap-3 items-center mb-20">
                <div className="text-center text-brand-accent font-semibold text-sm">
                    Crescimento Exponencial
                </div>

                <div className="text-center text-4xl font-bold text-zinc-100">
                    O Ponto de Virada
                </div>

                <div className="text-center text-lg text-zinc-400">
                    Com a efetivação, passamos da jornada parcial (6h) para o tempo integral (8h). Veja a matemática.
                </div>
            </div>

            <div className="flex flex-col gap-10">

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col gap-6 max-w-[500px] mx-auto">

                        {/* Cards de jornada */}
                        <div className="flex flex-row gap-4">
                            <div className={`transition-all duration-500 flex-1 flex flex-col gap-2 rounded-2xl p-6 ${efetivacao ? 'border border-transparent bg-white/5 text-zinc-400 scale-90 mr-2' : 'border border-brand-main/30 bg-brand-main/10 text-[#c084fc]'}`}>
                                <span className="text-sm font-semibold">Estagiário</span>
                                <span className="text-3xl font-extrabold">6h diárias</span>
                            </div>
                            <div className={`transition-all duration-500 flex-1 flex flex-col gap-2 rounded-2xl p-6 ${efetivacao ? 'border border-brand-main/30 bg-brand-main/10 scale-110 text-[#c084fc]' : 'border border-transparent bg-white/5 text-zinc-400'}`}>
                                <span className="text-sm font-semibold">Efetivo</span>
                                <span className="text-3xl font-extrabold">8h diárias</span>
                            </div>
                        </div>

                        {/* Card +33% Capacidade */}
                        <div 
                            className={`flex flex-col gap-3 rounded-[20px] p-8 transition-all duration-500 ${
                                efetivacao ? 'bg-brand-main/10 border border-brand-main/30 scale-105' : 'bg-white/5 border border-transparent'
                            }`}
                        >
                            {efetivacao && (
                                <span className="text-5xl font-extrabold text-brand-accent">
                                    +33% Capacidade
                                </span>
                                )
                            }
                           
                            <div className="text-base text-zinc-400 flex flex-col gap-3">
                                <p>
                                    Aumentamos nossa disponibilidade de atuação direta e imediata. Mais horas significam mais projetos e chamados entregues.
                                </p>
                                
                                {/* A Sacadinha: Só aparece quando ativado!
                                {efetivacao && (
                                    <p className="text-[#c084fc] font-medium italic animate-fade-in">
                                        * Tradução sincera: Mais tempo na operação = menos dores de cabeça. 🤝
                                    </p>
                                )} */}
                            </div>
                        </div>

                        {/* Toggle Ativar Efetivação DSOP */}
                        <button
                            type="button"
                            onPointerDown={(e) => { e.preventDefault(); handleToggle(); }}
                            onClick={handleToggle}
                            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                            className={`relative z-50 flex flex-row items-center justify-between gap-3 w-full text-left transition-colors duration-200 rounded-2xl p-4 cursor-pointer touch-manipulation select-none ${efetivacao ? 'bg-brand-main/10 border border-brand-main/30 md:scale-105' : 'bg-white/5 border border-transparent hover:bg-white/10'}`}
                        >
                            <span className="font-semibold text-zinc-100">
                                Visualizar Efetivação DSOP
                            </span>

                            <div
                                className={`shrink-0 w-16 h-9 rounded-full p-1 flex items-center transition-colors duration-300 ease-in-out ${
                                    efetivacao ? 'bg-brand-main' : 'bg-zinc-600'
                                }`}
                            >
                                {/* Bolinha branca que desliza */}
                                <div
                                    className={`w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
                                        efetivacao ? 'translate-x-7' : 'translate-x-0'
                                    }`}
                                />
                            </div>
                        </button>

                    </div>

                    <ChartBarStacked efetivacao={efetivacao} />

                </div>

            </div>
        </>
    );
}