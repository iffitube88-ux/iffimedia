import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Target, Users, BarChart2, Zap, LayoutGrid, RefreshCw, TrendingUp, CheckCircle2 } from "lucide-react";
import { services } from "../data";
import { siteConfig } from "../config";

const iconMap: Record<string, any> = {
  search: Search, target: Target, users: Users,
  "bar-chart-2": BarChart2, zap: Zap, "trending-up": TrendingUp,
  "layout-grid": LayoutGrid, "refresh-cw": RefreshCw,
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label">Services</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Marketing Services That Drive{" "}
              <span className="text-gradient">Real Growth</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              From organic search to paid media, analytics to conversion optimization — each service is designed to connect directly to your business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Zap;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Service info */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-acid/10 flex items-center justify-center">
                        <Icon size={24} className="text-acid" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Problem */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">
                        The Business Problem
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">
                        The Approach
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {service.approach}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables & Metrics */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="p-6 rounded-lg bg-graphite border border-border">
                      {/* Deliverables */}
                      <div className="mb-6">
                        <h3 className="text-xs font-mono text-acid uppercase tracking-wider mb-3">
                          Work Delivered
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                              <CheckCircle2 size={14} className="text-acid mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Success Metrics */}
                      <div className="mb-6 pt-6 border-t border-border">
                        <h3 className="text-xs font-mono text-acid uppercase tracking-wider mb-3">
                          How Success Is Measured
                        </h3>
                        <ul className="space-y-2">
                          {service.successMetrics.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                              <BarChart2 size={14} className="text-violet mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal Client */}
                      <div className="pt-6 border-t border-border">
                        <h3 className="text-xs font-mono text-acid uppercase tracking-wider mb-2">
                          Ideal Client
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {service.idealClient}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-graphite/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Every business is different. Let's discuss your specific challenges and goals to determine the right approach for your growth.
          </p>
          <Link to="/contact" className="btn-primary">
            {siteConfig.primaryCTA.text}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
