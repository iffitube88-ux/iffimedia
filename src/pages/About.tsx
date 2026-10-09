import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Award, Code, Briefcase, Lightbulb } from "lucide-react";
import { siteConfig } from "../config";
import { Logo } from "../components/Logo";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">About</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Are <span className="text-gradient">IFFI Media</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                A digital growth agency focused on strategy and performance. We help businesses grow through data-driven marketing — combining strategic thinking with hands-on execution across SEO, paid media, and conversion optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Work With Me
                  <ArrowUpRight size={18} />
                </Link>
                <Link to="/work" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Agency visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl bg-graphite border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Logo size={80} />
                  </div>
                  <p className="text-sm text-text-muted">
                    IFFI Media<br />
                    <span className="text-xs">Digital Growth Agency</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 lg:py-24 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  IFFI Media was built on a simple belief: digital marketing should be strategic, measurable, and directly connected to business outcomes. We don't chase trends — we build growth systems that compound over time.
                </p>
                <p>
                  Our approach combines deep expertise in organic search, paid media, and conversion optimization with a relentless focus on data and experimentation. Every recommendation we make is backed by evidence.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Working Philosophy</h2>
              <div className="space-y-4">
                {[
                  { icon: Lightbulb, title: "Strategy First", desc: "Every tactic serves a strategic objective tied to business outcomes." },
                  { icon: Code, title: "Data-Driven", desc: "Decisions are informed by evidence, not assumptions or trends." },
                  { icon: Briefcase, title: "Commercially Focused", desc: "Marketing activity must connect to revenue, growth, or efficiency." },
                  { icon: Award, title: "Transparent & Honest", desc: "Clear reporting, realistic expectations, and no manufactured urgency." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-graphite border border-border">
                    <div className="w-10 h-10 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-acid" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm">{item.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skills */}
            <div className="p-6 rounded-lg bg-graphite border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Award size={20} className="text-acid" />
                Skills & Expertise
              </h3>
              <ul className="space-y-2">
                {[
                  "Search Engine Optimization (SEO)",
                  "Google Ads (Search, Performance Max, Display)",
                  "Meta Ads (Facebook & Instagram)",
                  "Conversion Rate Optimization (CRO)",
                  "Analytics & Measurement (GA4, Tag Manager)",
                  "Paid Media Strategy & Budget Allocation",
                  "Content Strategy & Marketing",
                  "Digital Growth Strategy",
                ].map((skill) => (
                  <li key={skill} className="text-sm text-text-secondary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-acid rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4">
                [Add your real certifications and qualifications here]
              </p>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-lg bg-graphite border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Code size={20} className="text-acid" />
                Tools & Platforms
              </h3>
              <ul className="space-y-2">
                {[
                  "Google Ads & Google Ads Editor",
                  "Meta Business Suite & Ads Manager",
                  "Google Analytics 4 & Tag Manager",
                  "Google Search Console",
                  "SEMrush / Ahrefs / Screaming Frog",
                  "Looker Studio / Data Studio",
                  "Hotjar / Microsoft Clarity",
                  "WordPress / Webflow / Shopify",
                ].map((tool) => (
                  <li key={tool} className="text-sm text-text-secondary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-violet rounded-full" />
                    {tool}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4">
                [Edit to reflect tools you actually use]
              </p>
            </div>

            {/* Industries */}
            <div className="p-6 rounded-lg bg-graphite border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-acid" />
                Industries Served
              </h3>
              <ul className="space-y-2">
                {[
                  "E-commerce & DTC Brands",
                  "B2B SaaS & Technology",
                  "Professional Services",
                  "Local Services Businesses",
                  "Healthcare & Wellness",
                  "Education & Online Courses",
                ].map((industry) => (
                  <li key={industry} className="text-sm text-text-secondary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-ice rounded-full" />
                    {industry}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4">
                [Edit to reflect your actual industry experience]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-graphite/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Grow Together</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Ready to turn your digital presence into measurable business growth? Let's have a conversation about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
              <Mail size={18} />
              {siteConfig.email}
            </a>
          </div>
          {siteConfig.location && (
            <p className="mt-4 text-sm text-text-muted flex items-center justify-center gap-1">
              <MapPin size={14} />
              {siteConfig.location}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
