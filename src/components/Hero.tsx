import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-animated opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-acid/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ice/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/50 border border-border backdrop-blur-sm mb-8 animate-fade-in-up">
          <Sparkles size={16} className="text-acid" />
          <span className="text-sm text-text-secondary font-medium">
            Premium Digital Media & SEO Agency
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up stagger-1">
          We Scale Digital Brands Through{" "}
          <span className="text-gradient">Organic SEO & Modern Content Media</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
          Transform your digital presence with data-driven SEO strategies, compelling video content, 
          and brand storytelling that drives measurable growth and authentic engagement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-3">
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get Free SEO Audit
            <ArrowUpRight size={20} />
          </Link>
          <Link to="/work" className="btn-secondary text-base px-8 py-4">
            <Play size={20} />
            Explore Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50 animate-fade-in-up stagger-4">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10x", label: "Average ROI" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-acid mb-2">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-acid rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
