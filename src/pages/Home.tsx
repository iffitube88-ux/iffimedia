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
              <p className="text-lg sm:text-xl text-text-secondary max-w-xl mb-4 leading-relaxed">
                IFFI Media is a results-driven digital marketing agency specializing in SEO, Google Ads, Meta Ads, and conversion optimization. We help businesses across UAE and worldwide achieve measurable growth through data-driven strategies.
              </p>
              <p className="text-base text-text-muted max-w-xl mb-8 leading-relaxed">
                Our comprehensive digital marketing services include organic search optimization, paid advertising management, landing page conversion optimization, and advanced analytics. We focus on delivering ROI-focused solutions that generate qualified leads and drive revenue growth.
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

      {/* Why Choose IFFI Media */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Why Choose Us</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The IFFI Media Difference
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

          <div className="mt-12 text-center">
            <Link to="/about" className="btn-secondary">
              Learn More About Our Approach
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About IFFI Media Section */}
      <section className="py-20 lg:py-32 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">About IFFI Media</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your Trusted Digital Marketing Partner in UAE
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed">
                IFFI Media is a premier digital marketing agency based in the UAE, specializing in search engine optimization, Google Ads management, Meta advertising, and conversion rate optimization. We serve businesses across Dubai, Abu Dhabi, Sharjah, and worldwide, helping them achieve sustainable growth through proven digital marketing strategies.
              </p>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Our team of certified digital marketing experts combines technical expertise with creative strategy to deliver measurable results. We understand that every business is unique, which is why we develop customized marketing solutions tailored to your specific goals, industry, and target audience.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With years of experience managing successful SEO campaigns, Google Ads accounts, and Meta advertising strategies, we've helped numerous businesses increase their online visibility, generate qualified leads, and maximize their return on investment. Our data-driven approach ensures that every marketing dollar is spent wisely and every strategy is backed by performance data.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-graphite border border-border">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  To empower businesses with cutting-edge digital marketing solutions that drive measurable growth, increase online visibility, and maximize ROI through innovative strategies and data-driven decision making.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-graphite border border-border">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  To be the leading digital marketing agency in the UAE and beyond, recognized for delivering exceptional results, fostering long-term client partnerships, and setting new standards in digital marketing excellence.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-graphite border border-border">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Our Values</h3>
                <p className="text-text-secondary leading-relaxed">
                  Transparency, integrity, and results. We believe in honest communication, ethical marketing practices, and delivering measurable outcomes that directly impact your bottom line. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Our Digital Marketing Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed">
              IFFI Media offers comprehensive digital marketing services designed to help businesses succeed online. From search engine optimization to paid advertising, we provide end-to-end solutions that drive traffic, generate leads, and increase conversions. Our integrated approach ensures all your digital marketing efforts work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-graphite border border-border">
              <Search size={32} className="text-acid mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">Search Engine Optimization (SEO)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our SEO services help your business rank higher in search engine results, driving organic traffic and increasing visibility. We implement proven SEO strategies including technical optimization, on-page SEO, content marketing, and link building to improve your search rankings for relevant keywords.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Technical SEO audits and optimization</li>
                <li>• Keyword research and strategy development</li>
                <li>• On-page optimization and content creation</li>
                <li>• Link building and authority development</li>
                <li>• Local SEO for UAE businesses</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-graphite border border-border">
              <Target size={32} className="text-acid mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">Google Ads Management</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Maximize your ROI with our expert Google Ads management services. We create and optimize paid search campaigns that target your ideal customers at the right time with the right message. Our certified Google Ads specialists manage campaigns of all sizes, from small business advertising to enterprise-level accounts.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Google Search Ads campaign management</li>
                <li>• Google Shopping Ads for e-commerce</li>
                <li>• Display Ads and remarketing campaigns</li>
                <li>• Performance Max campaign optimization</li>
                <li>• Conversion tracking and analytics setup</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-graphite border border-border">
              <Users size={32} className="text-acid mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">Meta Ads (Facebook & Instagram)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Reach your target audience with precision using our Meta advertising services. We create compelling Facebook and Instagram ad campaigns that build brand awareness, generate leads, and drive sales. Our team specializes in audience targeting, creative development, and campaign optimization for maximum performance.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Facebook Ads campaign creation and management</li>
                <li>• Instagram advertising and story ads</li>
                <li>• Audience research and targeting strategy</li>
                <li>• Creative ad design and copywriting</li>
                <li>• Retargeting and lookalike audience campaigns</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-graphite border border-border">
              <TrendingUp size={32} className="text-acid mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-3">Conversion Rate Optimization (CRO)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Turn more visitors into customers with our conversion optimization services. We analyze your website performance, identify conversion barriers, and implement data-driven improvements to increase your conversion rates. Our CRO strategies help you get more value from your existing traffic.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Landing page optimization and design</li>
                <li>• A/B testing and multivariate testing</li>
                <li>• User experience (UX) improvements</li>
                <li>• Call-to-action optimization</li>
                <li>• Form optimization and checkout flow</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-32 bg-graphite/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label">Industries We Serve</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Digital Marketing Across Industries
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              IFFI Media has extensive experience delivering digital marketing solutions across diverse industries. Our team understands the unique challenges and opportunities in each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "E-commerce & Retail",
              "Real Estate",
              "Healthcare & Medical",
              "Education & Training",
              "Hospitality & Tourism",
              "Finance & Banking",
              "Technology & SaaS",
              "Professional Services",
              "Restaurant & Food",
              "Fitness & Wellness",
              "Legal Services",
              "Manufacturing"
            ].map((industry) => (
              <div key={industry} className="p-4 rounded-lg bg-graphite border border-border text-center hover:border-acid transition-colors">
                <p className="text-sm font-medium text-text-primary">{industry}</p>
              </div>
            ))}
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
            Whether you need SEO, paid media, conversion optimization, or a complete digital strategy — IFFI Media will help you turn your digital presence into measurable business growth. Contact us today for a free consultation.
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
