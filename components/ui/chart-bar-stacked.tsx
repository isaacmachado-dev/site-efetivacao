"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const API_URL = "https://dsop.app.n8n.cloud/webhook/glpi-total-chamados"

// Total hoje foi acumulado em 10 meses de estágio.
// Projeção efetivada: +33% de capacidade/mês sobre a média mensal atual.
const MESES_TRABALHADOS = 10
const FATOR_EFETIVACAO = 1.33

type UsuarioAPI = {
    nome: string
    email: string
    user_id: string
    total_chamados: number
    solucionados: number
    fechados: number
    solucionados_ou_fechados: number
    percentual_resolvido: number
}

type ChartUser = {
    user: string
    chamados_solucionados_ou_fechados: number
    chamados_abertos: number
}

// Fallback caso a API do n8n esteja fora do ar (últimos valores conhecidos)
const FALLBACK: UsuarioAPI[] = [
    { nome: "Danilo", email: "danilo.neri@dsop.com.br", user_id: "470", total_chamados: 587, solucionados: 6, fechados: 560, solucionados_ou_fechados: 566, percentual_resolvido: 96.42 },
    { nome: "Isaac", email: "isaac.silva@dsop.com.br", user_id: "471", total_chamados: 562, solucionados: 7, fechados: 539, solucionados_ou_fechados: 546, percentual_resolvido: 97.15 },
]

function montarChartData(usuarios: UsuarioAPI[], projetado: boolean): ChartUser[] {
    return usuarios.map((u) => {
        const solucionados = projetado
            ? Math.round(u.solucionados_ou_fechados * FATOR_EFETIVACAO)
            : u.solucionados_ou_fechados
        const abertos = projetado
            ? Math.round(u.total_chamados * FATOR_EFETIVACAO) - solucionados
            : u.total_chamados - u.solucionados_ou_fechados
        return { user: u.nome, chamados_solucionados_ou_fechados: solucionados, chamados_abertos: abertos }
    })
}

const chartConfig = {
  chamados_solucionados_ou_fechados: {
    label: "Fechados",
    color: "var(--chart-1)",
  },
  chamados_abertos: {
    label: "Abertos",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartBarStacked({ efetivacao }: { efetivacao?: boolean }) {
  const [usuarios, setUsuarios] = useState<UsuarioAPI[]>(FALLBACK)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.usuarios) && data.usuarios.length > 0) {
          setUsuarios(data.usuarios)
        }
      })
      .catch(() => {/* mantém fallback */})
  }, [])

  const chartDataAtual = montarChartData(usuarios, false)
  const chartDataProjetado = montarChartData(usuarios, true)

  const total_atual = usuarios.reduce((acc, u) => acc + u.total_chamados, 0)
  const media_mensal_efetivado = (total_atual / MESES_TRABALHADOS) * FATOR_EFETIVACAO
  const capacidade_anual_efetivado = media_mensal_efetivado * 12

  return (
    // A MUDANÇA ESTÁ AQUI NA LINHA ABAIXO: Adicionados w-full, flex-1 e min-w-0
    <Card className={`flex flex-col w-full flex-1 min-w-0 transition-all duration-500 ease-out ${efetivacao ? 'border border-brand-main/30 bg-brand-main/10 z-10' : 'border border-transparent z-0'}`}>
      <CardHeader>
        <CardTitle className={`text-zinc-400 ${efetivacao ? 'text-[#c084fc]' : 'text-zinc-400'}`}>Número de chamados</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">

        {/* Crossfade: dois charts sobrepostos, transição só de altura do wrapper + opacidade.
            Evita os labels do eixo "atravessarem" as barras durante o resize do Recharts. */}
        <div className="relative">
          <div className={`transition-[height] duration-700 ease-in-out will-change-[height] transform-gpu ${efetivacao ? 'h-[220px]' : 'h-[150px]'}`}>
            <ChartContainer
                config={chartConfig}
                className={`absolute inset-0 w-full !aspect-auto transition-opacity duration-500 will-change-[opacity] transform-gpu ${efetivacao ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <BarChart accessibilityLayer data={chartDataAtual}>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis
                  dataKey="user"
                  tickLine={true}
                  tickMargin={5}
                  axisLine={false}
                  tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 700 }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="chamados_solucionados_ou_fechados"
                  stackId="a"
                  fill="var(--color-chamados_solucionados_ou_fechados)"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="chamados_abertos"
                  stackId="a"
                  fill="var(--color-chamados_abertos)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>

            <ChartContainer
                config={chartConfig}
                className={`absolute inset-0 w-full !aspect-auto transition-opacity duration-500 will-change-[opacity] transform-gpu ${efetivacao ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <BarChart accessibilityLayer data={chartDataProjetado}>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis
                  dataKey="user"
                  tickLine={true}
                  tickMargin={5}
                  axisLine={false}
                  tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 700 }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="chamados_solucionados_ou_fechados"
                  stackId="a"
                  fill="var(--color-chamados_solucionados_ou_fechados)"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="chamados_abertos"
                  stackId="a"
                  fill="var(--color-chamados_abertos)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-auto ">
        <div className="font-bold flex flex-col items-start gap-2">
            <span className="text-brand-accent transition-colors duration-500">
                {efetivacao ? "Capacidade para novos atendimentos" : "Total de chamados hoje"}
            </span>
            <span className={`text-3xl font-extrabold transition-all duration-500 ${efetivacao ? 'text-[#c084fc]' : 'text-white'}`}>
                {efetivacao ? `${Math.floor(capacidade_anual_efetivado / 100) * 100}+` : total_atual}
            </span>
            <span className={`text-xs font-medium transition-colors duration-500 ${efetivacao ? 'text-zinc-400' : 'text-transparent'}`}>
                novos atendimentos/ano com a efetivação
            </span>
        </div>
      </CardFooter>
    </Card>
  )
}
