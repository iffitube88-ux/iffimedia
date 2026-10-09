import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "SEO Strategy", href: "/services#seo-organic-growth" },
    { label: "Case Studies", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Logo size={36} />
            <span className="font-bold text-text-primary tracking-tight text-lg">
              IffiMedia
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-text-secondary hover:text-acid transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acid group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+971507091227"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-acid transition-colors"
            >
              <Phone size={16} />
              +971 50 709 1227
            </a>
            <Link to="/contact" className="btn-primary text-sm">
              Book Strategy Call
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-acid transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-graphite/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-text-secondary hover:text-acid py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:+971507091227"
                className="flex items-center gap-2 text-sm text-text-secondary"
              >
                <Phone size={16} />
                +971 50 709 1227
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Book Strategy Call
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
