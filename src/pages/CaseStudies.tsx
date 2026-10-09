import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ExternalLink, Calendar, Tag, AlertCircle } from "lucide-react";
import { caseStudies } from "../data";
import { siteConfig } from "../config";

// Archive page
export function CaseStudiesArchive() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const allTags = Array.from(new Set(caseStudies.flatMap((s) => s.tags)));
  const filtered = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter((s) => s.tags.includes(activeFilter));

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label">Case Studies</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Selected <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Demonstrating strategic thinking, execution quality, and measurable outcomes across industries and channels.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === "All"
                  ? "bg-acid text-midnight"
                  : "bg-graphite border border-border text-text-secondary hover:text-acid hover:border-acid"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === tag
                    ? "bg-acid text-midnight"
                    : "bg-graphite border border-border text-text-secondary hover:text-acid hover:border-acid"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo notice */}
          <div className="mb-8 p-4 rounded-lg bg-violet/5 border border-violet/20 flex items-start gap-3">
            <AlertCircle size={18} className="text-violet flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-text-primary font-medium">Demo Projects</p>
              <p className="text-xs text-text-secondary mt-1">
                These are illustrative case studies created to demonstrate the structure and approach. Real client results will replace these when verified campaign data is available.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((study) => (
              <Link
                key={study.id}
                to={`/work/${study.id}`}
                className="hover-card group p-6 rounded-lg bg-graphite border border-border flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  {study.isDemo && (
                    <span className="text-[10px] font-mono text-violet bg-violet/10 px-2 py-0.5 rounded border border-violet/20">
                      DEMO
                    </span>
                  )}
                  <span className="text-xs text-text-muted font-mono">{study.industry}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-acid transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 flex-1 line-clamp-3">
                  {study.challenge}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.channels.map((ch) => (
                    <span key={ch} className="text-[10px] font-mono text-acid bg-acid/10 px-2 py-0.5 rounded">
                      {ch}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Calendar size={12} />
                      {study.period}
                    </span>
                    <ArrowUpRight size={16} className="text-text-muted group-hover:text-acid transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No case studies match this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Individual case study page
export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/work" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back nav */}
      <div className="border-b border-border bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-acid transition-colors">
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              {study.isDemo && (
                <span className="text-xs font-mono text-violet bg-violet/10 px-3 py-1 rounded border border-violet/20">
                  DEMO PROJECT
                </span>
              )}
              <span className="text-sm text-text-muted font-mono flex items-center gap-1">
                <Tag size={14} />
                {study.industry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {study.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {study.channels.map((ch) => (
                <span key={ch} className="tag">{ch}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">Business Challenge</h2>
                <p className="text-text-secondary leading-relaxed">{study.challenge}</p>
              </div>

              {/* Strategy */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">Strategy</h2>
                <p className="text-text-secondary leading-relaxed">{study.strategy}</p>
              </div>

              {/* Execution */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-3">Campaign Execution</h2>
                <p className="text-text-secondary leading-relaxed">{study.execution}</p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.results.map((result) => (
                    <div key={result.label} className="p-4 rounded-lg bg-graphite border border-border">
                      <p className="text-2xl font-bold text-acid font-mono">{result.value}</p>
                      <p className="text-xs text-text-muted mt-1">{result.label}</p>
                    </div>
                  ))}
                </div>
                {study.isDemo && (
                  <p className="text-xs text-text-muted mt-3 flex items-center gap-1">
                    <AlertCircle size={12} />
                    These are illustrative values for a demo project, not verified client results.
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg bg-graphite border border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-4">Project Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs text-text-muted uppercase tracking-wider">Client</dt>
                      <dd className="text-sm text-text-primary mt-0.5">{study.client}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted uppercase tracking-wider">Industry</dt>
                      <dd className="text-sm text-text-primary mt-0.5">{study.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted uppercase tracking-wider">Period</dt>
                      <dd className="text-sm text-text-primary mt-0.5">{study.period}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted uppercase tracking-wider">Channels</dt>
                      <dd className="text-sm text-text-primary mt-0.5">{study.channels.join(", ")}</dd>
                    </div>
                  </dl>
                </div>

                <Link to="/contact" className="btn-primary w-full justify-center">
                  Discuss Your Project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
