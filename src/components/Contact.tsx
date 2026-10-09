import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config";

export function Contact() {
  return (
    <section className="py-20 lg:py-32 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let's Start Your{" "}
              <span className="text-gradient">Growth Journey</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Ready to scale your digital presence? Book a free strategy call with our team 
              and discover how we can help you achieve measurable growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-graphite border border-border hover:border-acid/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-acid" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Email Us</p>
                  <p className="text-text-primary font-medium group-hover:text-acid transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href="tel:+971507091227"
                className="flex items-center gap-4 p-4 rounded-lg bg-graphite border border-border hover:border-acid/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-acid" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Call Us</p>
                  <p className="text-text-primary font-medium group-hover:text-acid transition-colors">
                    +971 50 709 1227
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-graphite border border-border">
                <div className="w-12 h-12 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-acid" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Location</p>
                  <p className="text-text-primary font-medium">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-text-muted mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", url: "https://facebook.com/iffimedia" },
                  { name: "Twitter", url: "https://twitter.com/iffimedia" },
                  { name: "LinkedIn", url: "https://linkedin.com/company/iffimedia" },
                  { name: "Instagram", url: "https://instagram.com/iffimedia" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-graphite border border-border flex items-center justify-center text-text-muted hover:text-acid hover:border-acid/50 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-xs font-bold">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-acid/10 to-violet/10 rounded-2xl blur-xl" />
            <div className="relative p-8 rounded-2xl bg-graphite border border-border">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-acid/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-acid" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Book Your Free Strategy Call
                </h3>
                <p className="text-text-secondary">
                  30-minute consultation to discuss your goals and how we can help.
                </p>
              </div>

              <div className="space-y-4">
                <Link to="/contact" className="btn-primary w-full justify-center text-base py-4">
                  Schedule Strategy Call
                  <ArrowUpRight size={20} />
                </Link>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-graphite text-text-muted">OR</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-base py-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-text-muted text-center">
                  ✓ Free consultation • ✓ No commitment required • ✓ Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
