import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { SeoAuditSection } from "../components/SeoAuditSection";
import { CaseStudies } from "../components/CaseStudies";
import { Contact } from "../components/Contact";
import { FunnelViz } from "../components/FunnelViz";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Search, Target, ChevronRight } from "lucide-react";
import { siteConfig } from "../config";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

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

      {/* Services Section */}
      <Services />

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
                Every marketing investment should trace back to business outcomes. We build strategies that move audiences from awareness through consideration to conversion — with measurement at every stage.
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

      {/* SEO Audit Section */}
      <SeoAuditSection />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Methodology */}
      <section className="py-20 lg:py-32 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="section-label">Methodology</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Strategy-First, Data-Driven, Always Measurable
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We don't believe in one-size-fits-all marketing. Every engagement starts with understanding your business objectives, then building a strategy that connects channels to outcomes.
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

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Why Choose Us</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The IffiMedia Difference
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We don't just run campaigns — we build growth systems that deliver measurable, sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Strategy-First Approach",
                description: "Every tactic serves a clear business objective. We start with your goals, then build the roadmap to get there."
              },
              {
                icon: "📊",
                title: "Data-Driven Decisions",
                description: "No guesswork. Every recommendation is backed by data, testing, and proven performance metrics."
              },
              {
                icon: "🚀",
                title: "Full-Funnel Expertise",
                description: "From awareness to conversion, we optimize every stage of your customer journey for maximum impact."
              },
              {
                icon: "🔍",
                title: "Transparent Reporting",
                description: "Clear, honest reporting that connects marketing activity directly to your business outcomes."
              },
              {
                icon: "⚡",
                title: "Rapid Execution",
                description: "We move fast without sacrificing quality. Launch, learn, optimize — continuously."
              },
              {
                icon: "🤝",
                title: "True Partnership",
                description: "We're an extension of your team, not just a vendor. Your success is our success."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="hover-card p-6 rounded-lg bg-graphite border border-border group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-acid transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-graphite/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label">Ready to Grow?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your Growth Engine
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you need SEO, paid media, conversion optimization, or a complete digital strategy — IffiMedia will help you turn your digital presence into measurable business growth.
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
