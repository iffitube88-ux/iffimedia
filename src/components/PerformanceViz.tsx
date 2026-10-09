import { useEffect, useState } from "react";

export function PerformanceViz() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const dataPoints = [20, 35, 28, 45, 42, 58, 55, 72, 68, 85, 82, 95];
  const maxVal = 100;

  return (
    <div className="relative p-6 rounded-xl bg-graphite border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-mono text-text-muted uppercase tracking-wider">Campaign Performance</p>
          <p className="text-lg font-semibold text-text-primary mt-1">Growth Trajectory</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-acid rounded-full animate-pulse" />
          <span className="text-xs text-text-muted font-mono">Live</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48 mb-6">
        <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 40}
              x2="400"
              y2={i * 40}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}
          
          {/* Area fill */}
          <path
            d={`M 0 160 ${dataPoints
              .map((val, i) => {
                const x = (i / (dataPoints.length - 1)) * 400;
                const y = 160 - (val / maxVal) * 140;
                return `L ${x} ${y}`;
              })
              .join(" ")} L 400 160 Z`}
            fill="url(#gradient)"
            opacity={animated ? 0.3 : 0}
            style={{ transition: "opacity 1s ease" }}
          />
          
          {/* Line */}
          <path
            d={`M ${dataPoints
              .map((val, i) => {
                const x = (i / (dataPoints.length - 1)) * 400;
                const y = 160 - (val / maxVal) * 140;
                return `${x},${y}`;
              })
              .join(" L ")}`}
            fill="none"
            stroke="var(--color-acid)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={animated ? "0" : "1000"}
            strokeDashoffset={animated ? "0" : "1000"}
            style={{ transition: "stroke-dashoffset 2s ease" }}
          />

          {/* Data points */}
          {dataPoints.map((val, i) => {
            const x = (i / (dataPoints.length - 1)) * 400;
            const y = 160 - (val / maxVal) * 140;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === dataPoints.length - 1 ? 5 : 3}
                fill={i === dataPoints.length - 1 ? "var(--color-acid)" : "var(--color-graphite)"}
                stroke="var(--color-acid)"
                strokeWidth="2"
                opacity={animated ? 1 : 0}
                style={{ transition: `opacity 0.3s ease ${i * 0.1}s` }}
              />
            );
          })}

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-acid)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-acid)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Impressions", value: animated ? "2.4M" : "—" },
          { label: "Conversions", value: animated ? "12.8K" : "—" },
          { label: "Growth", value: animated ? "+47%" : "—" },
        ].map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-lg font-bold text-text-primary font-mono">{metric.value}</p>
            <p className="text-[10px] text-text-muted uppercase tracking-wider">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Demo label */}
      <div className="absolute top-3 right-3">
        <span className="text-[9px] font-mono text-text-muted bg-graphite-lighter px-1.5 py-0.5 rounded">
          ILLUSTRATIVE DATA
        </span>
      </div>
    </div>
  );
}
