import { Link } from "react-router-dom";
import { 
  Search, 
  Video, 
  Mic, 
  BookOpen, 
  TrendingUp, 
  Target,
  ArrowUpRight 
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Organic SEO & Content Strategy",
      description: "Data-driven SEO strategies that drive sustainable organic growth through technical optimization, content marketing, and authority building.",
      features: ["Technical SEO Audit", "Content Strategy", "Link Building", "Local SEO"],
      color: "acid",
    },
    {
      icon: Video,
      title: "Video Production & Repurposing",
      description: "Professional video content creation and strategic repurposing across platforms to maximize reach and engagement.",
      features: ["Corporate Videos", "Social Media Content", "YouTube Strategy", "Video SEO"],
      color: "violet",
    },
    {
      icon: Mic,
      title: "Corporate Podcast Management",
      description: "End-to-end podcast production and management to establish thought leadership and build authentic audience connections.",
      features: ["Podcast Production", "Distribution Strategy", "Guest Booking", "Analytics"],
      color: "ice",
    },
    {
      icon: BookOpen,
      title: "Brand Storytelling & PR",
      description: "Compelling brand narratives and strategic PR campaigns that build credibility and drive meaningful engagement.",
      features: ["Brand Messaging", "Media Relations", "Press Releases", "Crisis Management"],
      color: "acid",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused paid advertising campaigns across Google, Meta, and other platforms to accelerate growth.",
      features: ["Google Ads", "Meta Ads", "Conversion Optimization", "Analytics"],
      color: "violet",
    },
    {
      icon: Target,
      title: "Digital Growth Strategy",
      description: "Comprehensive digital strategy that aligns all channels and tactics to achieve your business objectives.",
      features: ["Market Research", "Channel Strategy", "Budget Allocation", "KPI Framework"],
      color: "ice",
    },
  ];

  const colorClasses = {
    acid: {
      bg: "bg-acid/10",
      border: "border-acid/20",
      text: "text-acid",
      hover: "hover:border-acid",
    },
    violet: {
      bg: "bg-violet/10",
      border: "border-violet/20",
      text: "text-violet",
      hover: "hover:border-violet",
    },
    ice: {
      bg: "bg-ice/10",
      border: "border-ice/20",
      text: "text-ice",
      hover: "hover:border-ice",
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">Our Services</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From organic SEO to video production, we offer end-to-end digital marketing services 
            designed to scale your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-xl bg-graphite border border-border ${colors.hover} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${service.color}/5`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={colors.text} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:gap-3 transition-all`}
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </Link>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services" className="btn-primary text-base">
            View All Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
