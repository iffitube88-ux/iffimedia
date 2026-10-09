// Centralized brand and site configuration
// Edit this file to update all brand details across the site

export const siteConfig = {
  // Brand Identity
  brandName: "IFFI Media",
  brandTagline: "Turn Digital Attention Into Measurable Growth",
  professionalTitle: "Digital Marketing Agency",
  domain: "https://www.iffimedia.com",
  
  // Contact
  email: "hello@iffimedia.com",
  phone: null,
  // WhatsApp number with country code, no + or spaces
  whatsapp: "971507091227",
  location: "UAE",
  
  // Social
  social: {
    linkedin: null,
    twitter: null,
    instagram: null,
  },
  
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
    defaultTitle: "IFFI Media — SEO, Google Ads & Meta Ads Digital Growth Agency",
    defaultDescription: "Turn digital attention into measurable growth. IFFI Media specializes in SEO, Google Ads, Meta Ads, and conversion optimization for ambitious businesses.",
    ogImage: null,
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
    ga4Id: null,
    gtmId: null,
    googleAdsId: null,
    metaPixelId: null,
  },

  // Form Configuration Status
  formConfig: {
    backendConfigured: false,
    message: "Form submissions are not yet connected to a backend. Please use the email or WhatsApp contact.",
  },

  // Live Chat / WhatsApp Widget
  liveChat: {
    enabled: true,
    welcomeMessage: "Hi! 👋 How can we help you grow your business today?",
    quickReplies: [
      "I need help with SEO",
      "Tell me about Google Ads",
      "I want to discuss Meta Ads",
      "Let's talk about my project",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
