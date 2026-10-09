// Centralized brand and site configuration
// Edit this file to update all brand details across the site

export const siteConfig = {
  // Brand Identity
  brandName: "Digital Growth Lab",
  brandTagline: "Turn Digital Attention Into Measurable Growth",
  professionalTitle: "Digital Marketing Strategist",
  // personalName: "[Your Name]", // TODO: Add your real name
  
  // Contact (edit with real details)
  email: "hello@example.com", // TODO: Replace with real email
  phone: null, // TODO: Add if available
  whatsapp: null, // TODO: Add if available
  location: null, // TODO: Add if available
  
  // Social (edit with real URLs)
  social: {
    linkedin: null, // TODO: Add LinkedIn URL
    twitter: null, // TODO: Add Twitter/X URL
    instagram: null, // TODO: Add Instagram URL
  },
  
  // Domain
  domain: "https://example.com", // TODO: Replace with real domain
  
  // Primary CTA
  primaryCTA: {
    text: "Discuss Your Growth",
    href: "/contact",
  },
  secondaryCTA: {
    text: "Explore My Work",
    href: "/work",
  },

  // SEO Defaults
  seo: {
    defaultTitle: "Digital Growth Lab — SEO, Google Ads & Meta Ads Strategy",
    defaultDescription: "Turn digital attention into measurable growth. Expert SEO, Google Ads, Meta Ads, and conversion optimization strategy for ambitious businesses.",
    ogImage: null, // TODO: Add OG image URL
  },

  // Services offered
  services: [
    "SEO & Organic Growth",
    "Google Search Ads",
    "Google Performance Max",
    "Meta Ads (Facebook & Instagram)",
    "Retargeting & Audience Strategy",
    "Landing Page & Conversion Optimization",
    "Tracking, Analytics & Reporting",
    "Digital Growth Strategy",
  ],

  // Analytics & Tracking (disabled until real IDs provided)
  tracking: {
    ga4Id: null, // Google Analytics 4 Measurement ID
    gtmId: null, // Google Tag Manager ID
    googleAdsId: null, // Google Ads Conversion ID
    metaPixelId: null, // Meta Pixel ID
  },

  // Form Configuration Status
  formConfig: {
    backendConfigured: false,
    message: "Form submissions are not yet connected to a backend. Please use the email contact below.",
  },
};

export type SiteConfig = typeof siteConfig;
