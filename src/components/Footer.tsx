import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { siteConfig } from "../config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "SEO Services", href: "/services#seo-organic-growth" },
      { label: "Google Ads", href: "/services#google-search-ads" },
      { label: "Meta Ads", href: "/services#meta-ads" },
      { label: "Video Production", href: "/services" },
      { label: "Podcast Management", href: "/services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Admin", href: "/admin/login" },
    ],
    resources: [
      { label: "Free SEO Audit", href: "/contact" },
      { label: "Blog", href: "/insights" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com/iffimedia", icon: "F" },
    { name: "Twitter", url: "https://twitter.com/iffimedia", icon: "X" },
    { name: "LinkedIn", url: "https://linkedin.com/company/iffimedia", icon: "in" },
    { name: "Instagram", url: "https://instagram.com/iffimedia", icon: "Ig" },
    { name: "YouTube", url: "https://youtube.com/@iffimedia", icon: "Yt" },
  ];

  return (
    <footer className="bg-graphite border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <Logo size={40} />
              <span className="font-bold text-text-primary text-xl tracking-tight">
                IffiMedia
              </span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              {siteConfig.brandTagline}. Premium digital media agency specializing in 
              organic SEO, video production, and content strategy for ambitious brands.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-acid transition-colors"
              >
                <span className="text-acid">✉</span>
                {siteConfig.email}
              </a>
              <a
                href="tel:+971507091227"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-acid transition-colors"
              >
                <span className="text-acid">☎</span>
                +971 50 709 1227
              </a>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="text-acid">📍</span>
                Dubai, United Arab Emirates
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-midnight border border-border flex items-center justify-center text-text-muted hover:text-acid hover:border-acid/50 transition-all hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-acid transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-acid transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-acid transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {currentYear} IffiMedia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-text-muted hover:text-acid transition-colors">
              Get in touch
            </Link>
            <span className="text-text-muted">•</span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-acid transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
