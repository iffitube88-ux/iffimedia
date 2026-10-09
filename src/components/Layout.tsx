import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-acid rounded-sm flex items-center justify-center">
              <span className="text-midnight font-bold text-sm">DG</span>
            </div>
            <span className="font-semibold text-text-primary hidden sm:block">
              {siteConfig.brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-acid ${
                  location.pathname === link.href
                    ? "text-acid"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-sm">
              {siteConfig.primaryCTA.text}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-acid transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-graphite border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block text-lg font-medium py-2 transition-colors ${
                  location.pathname === link.href
                    ? "text-acid"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                {siteConfig.primaryCTA.text}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-acid rounded-sm flex items-center justify-center">
                <span className="text-midnight font-bold text-sm">DG</span>
              </div>
              <span className="font-semibold text-text-primary">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-md mb-6">
              {siteConfig.brandTagline}. Specializing in SEO, Google Ads, Meta Ads, and conversion optimization for ambitious businesses.
            </p>
            <div className="flex gap-4">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-acid transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-acid transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-text-secondary hover:text-acid transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-sm text-text-secondary hover:text-acid transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-sm text-text-secondary hover:text-acid transition-colors">About</Link></li>
              <li><Link to="/insights" className="text-sm text-text-secondary hover:text-acid transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-acid transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-text-secondary hover:text-acid transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-text-muted hover:text-acid transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Subtle noise texture */}
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-graphite/95 backdrop-blur-md border-t border-border p-3 pb-4">
        <Link to="/contact" className="btn-primary w-full justify-center text-sm">
          {siteConfig.primaryCTA.text}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
