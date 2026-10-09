import { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Mail, AlertCircle, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config";

interface FormData {
  name: string;
  email: string;
  website: string;
  businessType: string;
  budget: string;
  services: string[];
  objective: string;
  details: string;
  contactMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    businessType: "",
    budget: "",
    services: [],
    objective: "",
    details: "",
    contactMethod: "email",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.objective.trim()) newErrors.objective = "Please describe your main objective";
    if (formData.services.length === 0) newErrors.services = "Please select at least one service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus("loading");

    // Simulate submission (no real backend configured)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Since no backend is configured, show the configuration notice
    setStatus("error");
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label">Contact</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Discuss Your <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Tell us about your business, your challenges, and your goals. The IFFI Media team will respond within 1-2 business days with an initial assessment of how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Backend status notice */}
              {!siteConfig.formConfig.backendConfigured && (
                <div className="mb-8 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
                  <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-primary font-medium">Form Configuration Notice</p>
                    <p className="text-xs text-text-secondary mt-1">
                      {siteConfig.formConfig.message} Please use the email contact in the sidebar, or configure a form backend (e.g., Formspree, Netlify Forms) to enable submissions.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name <span className="text-acid">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Business Email <span className="text-acid">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Website & Business Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-text-primary mb-2">
                      Website URL
                    </label>
                    <input
                      id="website"
                      type="url"
                      className="form-input"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-text-primary mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      className="form-input"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="">Select type...</option>
                      <option value="ecommerce">E-commerce / DTC</option>
                      <option value="saas">SaaS / Technology</option>
                      <option value="services">Professional Services</option>
                      <option value="local">Local Business</option>
                      <option value="startup">Startup</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
                    Monthly Marketing Budget Range
                  </label>
                  <select
                    id="budget"
                    className="form-input"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="">Select range...</option>
                    <option value="under-2k">Under $2,000/month</option>
                    <option value="2k-5k">$2,000 – $5,000/month</option>
                    <option value="5k-10k">$5,000 – $10,000/month</option>
                    <option value="10k-25k">$10,000 – $25,000/month</option>
                    <option value="25k-plus">$25,000+/month</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Required Services <span className="text-acid">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {siteConfig.services.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          formData.services.includes(service)
                            ? "border-acid bg-acid/5"
                            : "border-border hover:border-border-light"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                        />
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          formData.services.includes(service)
                            ? "bg-acid border-acid"
                            : "border-border-light"
                        }`}>
                          {formData.services.includes(service) && (
                            <CheckCircle2 size={12} className="text-midnight" />
                          )}
                        </div>
                        <span className="text-sm text-text-secondary">{service}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-xs text-red-400 mt-2">{errors.services}</p>
                  )}
                </div>

                {/* Objective */}
                <div>
                  <label htmlFor="objective" className="block text-sm font-medium text-text-primary mb-2">
                    Main Business Objective <span className="text-acid">*</span>
                  </label>
                  <input
                    id="objective"
                    type="text"
                    className="form-input"
                    placeholder="e.g., Increase qualified leads by 30% in 6 months"
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    aria-invalid={!!errors.objective}
                  />
                  {errors.objective && (
                    <p className="text-xs text-red-400 mt-1">{errors.objective}</p>
                  )}
                </div>

                {/* Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-text-primary mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    className="form-input min-h-[120px] resize-y"
                    placeholder="Tell me more about your current situation, challenges, and what success looks like for you..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                {/* Contact method */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "email", label: "Email" },
                      { value: "call", label: "Phone Call" },
                      { value: "video", label: "Video Call" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: option.value })}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          formData.contactMethod === option.value
                            ? "bg-acid text-midnight"
                            : "bg-graphite border border-border text-text-secondary hover:border-border-light"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-primary font-medium">Enquiry Sent</p>
                      <p className="text-xs text-text-secondary mt-1">
                        Thank you for reaching out. I'll respond within 1-2 business days.
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" && !siteConfig.formConfig.backendConfigured && (
                  <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
                    <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-primary font-medium">Form Not Connected</p>
                      <p className="text-xs text-text-secondary mt-1">
                        The form submission backend is not yet configured. Please send your enquiry directly to{" "}
                        <a href={`mailto:${siteConfig.email}`} className="text-acid hover:underline">
                          {siteConfig.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Direct contact */}
                <div className="p-6 rounded-lg bg-graphite border border-border">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-sm text-text-secondary hover:text-acid transition-colors"
                    >
                      <Mail size={16} className="text-acid" />
                      {siteConfig.email}
                    </a>
                    {siteConfig.whatsapp && (
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-text-secondary hover:text-acid transition-colors"
                      >
                        <svg className="w-4 h-4 text-acid" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                {/* What to expect */}
                <div className="p-6 rounded-lg bg-graphite border border-border">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">What to Expect</h3>
                  <ol className="space-y-3">
                    {[
                      "We'll review your enquiry within 1-2 business days",
                      "We'll schedule an initial discovery call",
                      "We'll assess fit and outline a proposed approach",
                      "If aligned, we'll define scope, timeline, and investment",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="w-5 h-5 rounded-full bg-acid/10 flex items-center justify-center flex-shrink-0 text-xs text-acid font-mono">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Quick links */}
                <div className="p-6 rounded-lg bg-graphite border border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Before You Reach Out</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services" className="text-sm text-text-secondary hover:text-acid transition-colors flex items-center gap-1">
                        Review services <ArrowUpRight size={12} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/work" className="text-sm text-text-secondary hover:text-acid transition-colors flex items-center gap-1">
                        View case studies <ArrowUpRight size={12} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-sm text-text-secondary hover:text-acid transition-colors flex items-center gap-1">
                        Learn about my approach <ArrowUpRight size={12} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
