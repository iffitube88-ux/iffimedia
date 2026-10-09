import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Search, Target, Users, BarChart2, Zap, ChevronRight } from "lucide-react";
import { siteConfig } from "../config";
import { caseStudies, services } from "../data";
import { PerformanceViz } from "../components/PerformanceViz";
import { FunnelViz } from "../components/FunnelViz";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-acid/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="animate-fade-in-up">
              <div className="section-label">Digital Growth Strategy</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Turn Digital Attention Into{" "}
                <span className="text-gradient">Measurable Growth.</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
                I help businesses grow through organic search, paid advertising, and conversion-focused strategy. No vanity metrics — just measurable commercial outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  {siteConfig.primaryCTA.text}
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/work" className="btn-secondary">
                  {siteConfig.secondaryCTA.text}
                  <ChevronRight size={18} />
                </Link>
              </div>
              
              {/* Service indicators */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["SEO", "Google Ads", "Meta Ads", "CRO", "Analytics"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right - Performance Visualization */}
            <div className="animate-fade-in-up stagger-2">
              <PerformanceViz />
            </div>
          </div>
        </div>
      </section>

      {/* Service Ticker */}
      <section className="border-y border-border bg-graphite/50 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              {siteConfig.services.map((service) => (
                <span key={service} className="text-sm text-text-muted font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-acid rounded-full" />
                  {service}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Funnel Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="section-label">The Growth Framework</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                From Traffic to Revenue:{" "}
                <span className="text-text-secondary">A Systematic Approach</span>
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Every marketing investment should trace back to business outcomes. I build strategies that move audiences from awareness through consideration to conversion — with measurement at every stage.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Search, label: "Attract", desc: "Organic search & paid media for qualified visibility" },
                  { icon: Target, label: "Convert", desc: "Optimized funnels that turn attention into action" },
                  { icon: TrendingUp, label: "Scale", desc: "Data-driven optimization to compound growth" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-graphite/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-acid" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">{item.label}</h3>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <FunnelViz />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Full-Spectrum Digital Growth
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From organic search to paid media, analytics to conversion optimization — integrated strategy that drives measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 8).map((service) => {
              const iconMap: Record<string, any> = {
                search: Search, target: Target, users: Users,
                "bar-chart-2": BarChart2, zap: Zap, "trending-up": TrendingUp,
                "layout-grid": BarChart2, "refresh-cw": TrendingUp,
              };
              const Icon = iconMap[service.icon] || Zap;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="hover-card p-6 rounded-lg bg-graphite border border-border group"
                >
                  <div className="w-10 h-10 rounded-lg bg-acid/10 flex items-center justify-center mb-4 group-hover:bg-acid/20 transition-colors">
                    <Icon size={20} className="text-acid" />
                  </div>
                  <h3 className="font-semibold text-text-primary text-sm mb-2">{service.title}</h3>
                  <p className="text-xs text-text-secondary line-clamp-2">{service.shortDescription}</p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="section-label">Methodology</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Strategy-First, Data-Driven, Always Measurable
              </h2>
              <p className="text-text-secondary leading-relaxed">
                I don't believe in one-size-fits-all marketing. Every engagement starts with understanding your business objectives, then building a strategy that connects channels to outcomes.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { step: "01", title: "Discover & Audit", desc: "Deep analysis of your current position, competitors, and opportunities across all digital channels." },
                { step: "02", title: "Strategize & Plan", desc: "Build an integrated strategy that aligns channels, budgets, and timelines to your business goals." },
                { step: "03", title: "Execute & Optimize", desc: "Launch campaigns with rigorous testing frameworks and continuous optimization cycles." },
                { step: "04", title: "Measure & Report", desc: "Transparent reporting that connects marketing activity to business outcomes you care about." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-5 rounded-lg border border-border bg-graphite/30 hover:border-border-light transition-colors">
                  <span className="text-2xl font-bold text-acid font-mono">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="text-3xl sm:text-4xl font-bold">Case Studies</h2>
            </div>
            <Link to="/work" className="btn-secondary text-sm">
              View All
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/work/${study.id}`}
                className="hover-card p-6 rounded-lg bg-graphite border border-border group"
              >
                <div className="flex items-center gap-2 mb-4">
                  {study.isDemo && (
                    <span className="text-[10px] font-mono text-text-muted bg-graphite-lighter px-2 py-0.5 rounded">
                      DEMO PROJECT
                    </span>
                  )}
                  <span className="text-xs text-text-muted font-mono">{study.industry}</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-3 group-hover:text-acid transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {study.challenge.slice(0, 120)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-text-muted bg-graphite-lighter px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-bold">What Clients Say</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-lg border border-border bg-graphite/30">
              <p className="text-text-secondary italic mb-4">
                "Testimonials will be added here when real client feedback is available. This section is reserved for genuine client experiences only."
              </p>
              <p className="text-sm text-text-muted">
                — Configuration pending
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-graphite/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Ready to Grow?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your Growth Engine
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you need SEO, paid media, conversion optimization, or a complete digital strategy — let's discuss how to turn your digital presence into measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              {siteConfig.primaryCTA.text}
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
