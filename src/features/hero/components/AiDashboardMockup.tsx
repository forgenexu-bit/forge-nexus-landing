"use client";

import { GlassContainer } from "@/components/ui/GlassContainer";
import { dashboardMock } from "@/features/hero/data/hero-data";
import { Sparkles, TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const chartData = dashboardMock.chartSeries.map((value, index) => ({
  index,
  value,
}));

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value: number }[];
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-surface-border bg-background-deep/95 px-2.5 py-1.5 text-xs text-foreground shadow-lg">
      {payload[0].value} pts
    </div>
  );
}

/**
 * Mockup visual de un dashboard de IA: métricas clave + tendencia con
 * Recharts. Puramente ilustrativo (datos de ejemplo, no reales).
 */
export function AiDashboardMockup() {
  return (
    <div style={{ animationDelay: "0.2s" }} className="animate-fade-up">
      <GlassContainer className="w-full max-w-md p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {dashboardMock.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {dashboardMock.subtitle}
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-surface-border bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/80">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-emerald-400" />
            En vivo
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {dashboardMock.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-surface-border bg-white/[0.02] px-3 py-3"
            >
              <p className="text-[11px] text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 flex items-center gap-1 text-lg font-semibold text-foreground">
                {metric.value}
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                ) : null}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 h-28 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="heroTrend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C6FF" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#00C6FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: "#1e293b" }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00C6FF"
                strokeWidth={2}
                fill="url(#heroTrend)"
                // Recharts anima el trazo de izquierda a derecha por ~1.5s
                // por defecto. En el elemento más visible de la página (el
                // hero) eso deja ~1s donde el área se ve vacía justo al
                // cargar, lo cual parece un error. La desactivamos para que
                // la gráfica aparezca completa de inmediato.
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl border border-surface-border bg-white/[0.02] px-3 py-2.5">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-purple" />
          <p className="text-xs text-muted-foreground">{dashboardMock.insight}</p>
        </div>
      </GlassContainer>
    </div>
  );
}
