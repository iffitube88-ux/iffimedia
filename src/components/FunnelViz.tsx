import { useEffect, useState } from "react";

export function FunnelViz() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stages = [
    { label: "Traffic & Visibility", value: 100, color: "bg-ice/20 border-ice/30" },
    { label: "Engagement", value: 65, color: "bg-violet/20 border-violet/30" },
    { label: "Qualified Leads", value: 35, color: "bg-acid/15 border-acid/25" },
    { label: "Conversions", value: 15, color: "bg-acid/30 border-acid/50" },
  ];

  return (
    <div className="relative p-6 rounded-xl bg-graphite border border-border">
      <div className="mb-6">
        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">Growth Funnel</p>
        <p className="text-lg font-semibold text-text-primary mt-1">Traffic → Revenue Pipeline</p>
      </div>

      <div className="space-y-4">
        {stages.map((stage, i) => (
          <div key={stage.label} className="relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-text-secondary">{stage.label}</span>
              <span className="text-xs font-mono text-text-muted">
                {animated ? `${stage.value}%` : "—"}
              </span>
            </div>
            <div className="h-8 rounded-md bg-graphite-lighter border border-border overflow-hidden">
              <div
                className={`h-full rounded-md ${stage.color} border transition-all duration-1000 ease-out`}
                style={{
                  width: animated ? `${stage.value}%` : "0%",
                  transitionDelay: `${i * 200}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Connection lines */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ice/50" />
            <span className="text-xs text-text-muted">Awareness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-violet/50" />
            <span className="text-xs text-text-muted">Consideration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-acid/50" />
            <span className="text-xs text-text-muted">Conversion</span>
          </div>
        </div>
      </div>

      {/* Demo label */}
      <div className="absolute top-3 right-3">
        <span className="text-[9px] font-mono text-text-muted bg-graphite-lighter px-1.5 py-0.5 rounded">
          ILLUSTRATIVE
        </span>
      </div>
    </div>
  );
}
