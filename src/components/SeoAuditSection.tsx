import { useState } from "react";
import { Search, CheckCircle, Loader2, ArrowRight, Shield, Zap, BarChart2 } from "lucide-react";

export function SeoAuditSection() {
  const [formData, setFormData] = useState({
    website: "",
    email: "",
    name: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-graphite/50 to-midnight" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-acid/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="section-label">Free SEO Audit</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Your{" "}
              <span className="text-gradient">Free Instant SEO Audit</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Discover hidden opportunities and technical issues affecting your search rankings. 
              Our comprehensive audit reveals exactly what's holding your website back.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Search, text: "Complete technical SEO analysis" },
                { icon: BarChart2, text: "Keyword opportunity report" },
                { icon: Zap, text: "Performance & speed insights" },
                { icon: Shield, text: "Security & accessibility check" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-acid/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-acid" />
                  </div>
                  <span className="text-text-secondary">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-graphite/50 border border-border">
              <CheckCircle size={20} className="text-green-400" />
              <div>
                <p className="text-sm font-medium text-text-primary">100% Free • No Credit Card Required</p>
                <p className="text-xs text-text-muted">Report delivered to your inbox within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-acid/10 to-violet/10 rounded-2xl blur-xl" />
            <div className="relative p-8 rounded-2xl bg-graphite border border-border">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Audit Request Received!</h3>
                  <p className="text-text-secondary">
                    We'll analyze your website and send the comprehensive report to your email within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      Request Your Free Audit
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Fill in the form below and we'll send you a detailed SEO report.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="audit-name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name
                      </label>
                      <input
                        id="audit-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="audit-email" className="block text-sm font-medium text-text-primary mb-2">
                        Business Email
                      </label>
                      <input
                        id="audit-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="audit-website" className="block text-sm font-medium text-text-primary mb-2">
                        Website URL
                      </label>
                      <input
                        id="audit-website"
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="form-input"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Get My Free Audit
                          <ArrowRight size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-text-muted text-center">
                      By submitting, you agree to receive the audit report via email. 
                      No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
