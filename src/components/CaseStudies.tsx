import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Users, Target, Calendar, Tag } from "lucide-react";
import { caseStudies } from "../data";

export function CaseStudies() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label">Case Studies</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              See how we've helped businesses achieve measurable growth through strategic digital marketing.
            </p>
          </div>
          <Link to="/work" className="btn-secondary text-sm flex-shrink-0">
            View All Case Studies
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/work/${study.id}`}
              className="group relative p-6 rounded-xl bg-graphite border border-border hover:border-acid/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-acid/5"
            >
              {/* Demo Badge */}
              {study.isDemo && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono text-violet bg-violet/10 px-2 py-1 rounded border border-violet/20">
                    DEMO
                  </span>
                </div>
              )}

              {/* Industry & Period */}
              <div className="flex items-center gap-3 mb-4 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Tag size={12} />
                  {study.industry}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {study.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-acid transition-colors">
                {study.title}
              </h3>

              {/* Challenge */}
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {study.challenge}
              </p>

              {/* Channels */}
              <div className="flex flex-wrap gap-2 mb-4">
                {study.channels.slice(0, 3).map((channel) => (
                  <span
                    key={channel}
                    className="text-[10px] font-mono text-acid bg-acid/10 px-2 py-1 rounded"
                  >
                    {channel}
                  </span>
                ))}
              </div>

              {/* Results Preview */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {study.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-acid font-mono">{result.value}</div>
                        <div className="text-[10px] text-text-muted">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-text-muted group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-6 rounded-xl bg-graphite/50 border border-border">
            <div className="text-left">
              <p className="text-lg font-semibold text-text-primary mb-1">
                Ready to see similar results?
              </p>
              <p className="text-sm text-text-secondary">
                Let's discuss how we can help your business grow.
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
