// Data-driven content for the website
// Services, case studies, and blog articles are defined here for easy editing

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  deliverables: string[];
  successMetrics: string[];
  idealClient: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  isDemo: boolean;
  challenge: string;
  strategy: string;
  channels: string[];
  execution: string;
  results: { label: string; value: string }[];
  period: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  isDraft: boolean;
  content: string;
  toc: { id: string; title: string }[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
}

// Services data
export const services: Service[] = [
  {
    id: "seo-organic-growth",
    title: "SEO & Organic Growth",
    shortDescription: "Sustainable organic visibility through technical excellence, content strategy, and authority building.",
    problem: "Your website isn't being found by the right people at the right time. Organic traffic is stagnant or declining, and competitors are capturing search demand you should own.",
    approach: "I audit your technical foundation, analyse search intent across your market, build a content architecture aligned with user journeys, and execute link-building strategies that build genuine authority.",
    deliverables: [
      "Technical SEO audit and fix roadmap",
      "Keyword research and search intent mapping",
      "Content strategy and editorial calendar",
      "On-page optimization",
      "Link-building and digital PR strategy",
      "Monthly performance reporting",
    ],
    successMetrics: [
      "Organic traffic growth (sessions, users)",
      "Keyword rankings for target terms",
      "Organic conversions and conversion rate",
      "Domain authority and backlink profile growth",
      "Core Web Vitals scores",
    ],
    idealClient: "Businesses with an existing website that need sustainable organic growth, or new businesses building their search presence from the ground up.",
    icon: "search",
  },
  {
    id: "google-search-ads",
    title: "Google Search Ads",
    shortDescription: "High-intent paid search campaigns that capture demand at the moment of purchase intent.",
    problem: "Your paid search budget isn't generating proportional returns. Campaigns are poorly structured, keywords are misaligned with intent, or you're paying for clicks that don't convert.",
    approach: "I build search campaigns around verified user intent, structure accounts for scale and optimization, implement rigorous testing frameworks, and continuously refine bids, audiences, and messaging.",
    deliverables: [
      "Account structure and campaign architecture",
      "Keyword research and match-type strategy",
      "Ad copy creation and testing framework",
      "Landing page alignment recommendations",
      "Bid strategy and budget allocation",
      "Conversion tracking setup and verification",
      "Weekly/monthly performance reports",
    ],
    successMetrics: [
      "Cost per acquisition (CPA)",
      "Return on ad spend (ROAS)",
      "Conversion rate by campaign",
      "Quality Score improvements",
      "Impression share on priority terms",
    ],
    idealClient: "Businesses spending on Google Search Ads who need better structure, performance, or accountability from their campaigns.",
    icon: "target",
  },
  {
    id: "google-performance-max",
    title: "Google Performance Max / Display",
    shortDescription: "Full-funnel Google campaigns leveraging machine learning across all Google surfaces.",
    problem: "You need to reach customers across YouTube, Display, Search, Discover, Gmail, and Maps — but Performance Max campaigns require the right asset groups, audience signals, and conversion data to perform.",
    approach: "I structure Performance Max campaigns with clear asset group segmentation, provide strong audience signals, ensure conversion tracking is accurate, and monitor asset performance to guide creative optimization.",
    deliverables: [
      "Campaign structure and asset group strategy",
      "Audience signal configuration",
      "Creative asset development guidance",
      "Conversion tracking audit",
      "Performance monitoring and optimization",
      "Reporting with channel-level insights",
    ],
    successMetrics: [
      "Overall ROAS across Google surfaces",
      "Incremental conversions vs. Search-only",
      "Asset group performance",
      "Audience signal effectiveness",
      "Cost per acquisition",
    ],
    idealClient: "Businesses ready to expand beyond Search into Google's full advertising ecosystem with proper tracking and creative assets.",
    icon: "layout-grid",
  },
  {
    id: "meta-ads",
    title: "Meta Ads — Facebook & Instagram",
    shortDescription: "Social advertising that builds awareness, drives consideration, and converts across Meta's ecosystem.",
    problem: "Meta advertising requires creative-first thinking, proper funnel architecture, and audience strategy that goes beyond basic demographics. Poor creative or misaligned audiences waste budget fast.",
    approach: "I develop full-funnel Meta strategies — from prospecting creative testing to retargeting sequences — with emphasis on creative performance, audience segmentation, and conversion optimization.",
    deliverables: [
      "Full-funnel campaign architecture",
      "Creative strategy and testing framework",
      "Audience segmentation and targeting",
      "Pixel and conversion API setup",
      "Budget allocation across funnel stages",
      "Performance reporting and optimization",
    ],
    successMetrics: [
      "Cost per acquisition by funnel stage",
      "Creative performance metrics (CTR, hook rate)",
      "Return on ad spend",
      "Audience reach and frequency management",
      "Pipeline contribution from paid social",
    ],
    idealClient: "Brands and businesses that need to build or optimize their presence on Facebook and Instagram with measurable commercial outcomes.",
    icon: "users",
  },
  {
    id: "retargeting-audience",
    title: "Retargeting & Audience Strategy",
    shortDescription: "Strategic remarketing and audience development across all paid channels.",
    problem: "You're leaving money on the table by not re-engaging warm audiences, or your retargeting is too broad, too aggressive, or poorly segmented.",
    approach: "I design audience architectures that match message to intent stage, build sequential retargeting flows, and ensure proper exclusion logic to maximize efficiency without annoying prospects.",
    deliverables: [
      "Audience architecture and segmentation",
      "Retargeting campaign design",
      "Exclusion and frequency management",
      "Cross-platform audience synchronization",
      "Custom audience development",
      "Performance monitoring",
    ],
    successMetrics: [
      "Retargeting conversion rates",
      "Audience-level CPA",
      "Frequency and reach balance",
      "Pipeline from retargeting campaigns",
      "Cross-channel audience overlap analysis",
    ],
    idealClient: "Businesses running paid campaigns who need more sophisticated audience strategy to improve efficiency and conversion rates.",
    icon: "refresh-cw",
  },
  {
    id: "conversion-optimization",
    title: "Landing Page & Conversion Optimization",
    shortDescription: "Turning more visitors into customers through research-driven page and funnel optimization.",
    problem: "Traffic is arriving but not converting. Landing pages have high bounce rates, forms are abandoned, or the user journey has friction points that kill conversions.",
    approach: "I analyse conversion data, user behaviour, and qualitative feedback to identify friction points, then design and test improvements through structured experimentation.",
    deliverables: [
      "Conversion audit and heuristic analysis",
      "User journey mapping",
      "Landing page wireframes and copy",
      "A/B test planning and execution",
      "Form and checkout optimization",
      "Conversion rate reporting",
    ],
    successMetrics: [
      "Conversion rate improvements",
      "Form completion rates",
      "Page-level engagement metrics",
      "Revenue per visitor",
      "Test win rate and learning velocity",
    ],
    idealClient: "Businesses with sufficient traffic to test meaningfully, who need to improve the conversion efficiency of their existing funnels.",
    icon: "zap",
  },
  {
    id: "analytics-reporting",
    title: "Tracking, Analytics & Reporting",
    shortDescription: "Accurate measurement infrastructure that turns data into actionable business intelligence.",
    problem: "You can't trust your numbers, don't know which channels are actually working, or lack the reporting clarity to make confident marketing decisions.",
    approach: "I audit and fix tracking implementations, build proper conversion measurement, create clear reporting dashboards, and establish the data foundation needed for informed optimization.",
    deliverables: [
      "Tracking audit and implementation",
      "GA4 configuration and event setup",
      "Conversion tracking across platforms",
      "Custom reporting dashboards",
      "Attribution model recommendations",
      "Data-driven recommendation reports",
    ],
    successMetrics: [
      "Tracking accuracy and completeness",
      "Data-driven decision velocity",
      "Report clarity and actionability",
      "Cross-platform data consistency",
      "Reduction in measurement uncertainty",
    ],
    idealClient: "Businesses that need reliable measurement before scaling marketing investment, or who need to fix broken tracking and reporting.",
    icon: "bar-chart-2",
  },
  {
    id: "digital-growth-strategy",
    title: "Digital Growth Strategy",
    shortDescription: "End-to-end digital strategy that aligns channels, budgets, and experimentation toward growth objectives.",
    problem: "Marketing activities are disconnected, budgets aren't allocated based on evidence, or there's no coherent strategy linking channels to business outcomes.",
    approach: "I develop integrated growth strategies that map channels to business objectives, establish testing priorities, allocate budgets based on opportunity and evidence, and build frameworks for continuous improvement.",
    deliverables: [
      "Digital growth audit",
      "Channel opportunity analysis",
      "Budget allocation framework",
      "Testing and experimentation roadmap",
      "Quarterly strategy reviews",
      "Growth metrics and KPI framework",
    ],
    successMetrics: [
      "Revenue growth from digital channels",
      "Marketing efficiency ratio",
      "Customer acquisition cost trends",
      "Channel diversification and resilience",
      "Strategic clarity and execution speed",
    ],
    idealClient: "Businesses ready to approach digital marketing strategically rather than tactically, with leadership commitment to data-driven growth.",
    icon: "trending-up",
  },
];

// Case Studies (demo/placeholder - clearly labelled)
export const caseStudies: CaseStudy[] = [
  {
    id: "demo-ecommerce-dtc",
    title: "E-commerce DTC Brand — Paid Media Restructure",
    client: "Demo Project — DTC E-commerce",
    industry: "E-commerce / Direct-to-Consumer",
    isDemo: true,
    challenge: "A direct-to-consumer brand was spending across Google and Meta with declining ROAS, poor account structure, and limited creative testing. Campaigns were cannibalizing each other and attribution was unclear.",
    strategy: "Restructured paid media accounts around funnel stages, implemented proper conversion tracking, developed a creative testing framework, and established clear audience segmentation across platforms.",
    channels: ["Google Search", "Google Performance Max", "Meta Ads"],
    execution: "Rebuilt campaign architecture with clear prospecting and retargeting separation. Implemented conversion API for Meta. Developed weekly creative testing sprints. Aligned landing pages with ad messaging.",
    results: [
      { label: "ROAS Improvement", value: "Illustrative: +40%" },
      { label: "CPA Reduction", value: "Illustrative: -25%" },
      { label: "Creative Test Velocity", value: "Illustrative: 3x increase" },
    ],
    period: "Demo Period: 3 months",
    tags: ["Google Ads", "Meta Ads", "E-commerce", "Paid Media"],
  },
  {
    id: "demo-b2b-saas",
    title: "B2B SaaS — Organic Growth Engine",
    client: "Demo Project — B2B SaaS",
    industry: "Technology / SaaS",
    isDemo: true,
    challenge: "A B2B SaaS company had minimal organic presence despite strong product-market fit. Competitors were capturing search demand for category terms and comparison queries.",
    strategy: "Built a content architecture targeting the full buyer journey, optimized technical foundation, and developed a link-building strategy focused on digital PR and resource linkability.",
    channels: ["SEO", "Content Marketing", "Technical SEO"],
    execution: "Conducted comprehensive technical audit and fixed critical issues. Mapped content to search intent across awareness, consideration, and decision stages. Executed quarterly content sprints with performance tracking.",
    results: [
      { label: "Organic Traffic Growth", value: "Illustrative: +180%" },
      { label: "Organic Demo Requests", value: "Illustrative: +95%" },
      { label: "Ranking Keywords", value: "Illustrative: 3x increase" },
    ],
    period: "Demo Period: 6 months",
    tags: ["SEO", "B2B", "SaaS", "Content Strategy"],
  },
  {
    id: "demo-local-services",
    title: "Local Services — Multi-Channel Growth",
    client: "Demo Project — Local Services",
    industry: "Local Services",
    isDemo: true,
    challenge: "A local services business was invisible in local search, had no paid media presence, and relied entirely on word-of-mouth for new clients.",
    strategy: "Implemented local SEO foundation, launched targeted Google Search campaigns for high-intent services, and built a conversion-optimized website with clear calls to action.",
    channels: ["Local SEO", "Google Search Ads", "CRO"],
    execution: "Optimized Google Business Profile, built location-specific landing pages, launched search campaigns targeting service-area keywords, and implemented call tracking for attribution.",
    results: [
      { label: "Local Search Visibility", value: "Illustrative: Top 3 for core terms" },
      { label: "Inbound Enquiries", value: "Illustrative: +120%" },
      { label: "Cost Per Lead", value: "Illustrative: Within target range" },
    ],
    period: "Demo Period: 4 months",
    tags: ["Local SEO", "Google Ads", "CRO", "Lead Generation"],
  },
];

// Blog Posts (drafts - clearly labelled)
export const blogPosts: BlogPost[] = [
  {
    id: "seo-foundation-2026",
    title: "Building an SEO Foundation That Actually Works in 2026",
    slug: "seo-foundation-2026",
    excerpt: "Most SEO advice is either outdated or too generic. Here's what actually matters when building organic visibility that compounds over time.",
    category: "SEO",
    date: "2026-01-15",
    readingTime: "8 min read",
    isDraft: true,
    content: `## The State of SEO

Search engine optimization in 2026 requires a fundamentally different approach than even two years ago. The rise of AI-generated search summaries, evolving ranking signals, and changing user behaviour mean that technical excellence and genuine expertise matter more than ever.

## What Actually Matters

### Technical Foundation
Before anything else, your website needs to be technically sound. This means fast loading, mobile-friendly, properly crawlable, and structured for both users and search engines.

### Content That Serves Intent
Google doesn't rank pages — it ranks answers to user questions. Your content needs to genuinely serve the searcher's intent, whether that's informational, navigational, commercial, or transactional.

### Authority Through Expertise
Links still matter, but the quality bar is higher. Authority comes from being genuinely referenced by other credible sources in your field.

## A Practical Framework

1. **Audit your technical foundation** — fix crawlability, speed, and mobile issues first
2. **Map search intent** — understand what your audience is actually searching for and why
3. **Build content architecture** — create a logical structure that serves the full user journey
4. **Execute and measure** — publish, monitor, iterate based on data
5. **Build authority** — earn genuine references through expertise and digital PR

## The Bottom Line

SEO isn't about tricks or shortcuts. It's about building a website that genuinely serves your audience's needs better than alternatives, and making sure search engines can understand and surface that value.`,
    toc: [
      { id: "the-state-of-seo", title: "The State of SEO" },
      { id: "what-actually-matters", title: "What Actually Matters" },
      { id: "a-practical-framework", title: "A Practical Framework" },
      { id: "the-bottom-line", title: "The Bottom Line" },
    ],
  },
  {
    id: "google-ads-structure",
    title: "Google Ads Account Structure: Principles Over Templates",
    slug: "google-ads-structure",
    excerpt: "Stop copying account structures from blog posts. Here are the principles that should drive how you organize your Google Ads campaigns.",
    category: "Google Ads",
    date: "2026-01-22",
    readingTime: "6 min read",
    isDraft: true,
    content: `## Why Structure Matters

Your Google Ads account structure determines how effectively you can manage, optimize, and scale campaigns. A poor structure makes optimization impossible; a good one makes it systematic.

## Core Principles

### 1. Match Structure to Intent
Group keywords by the underlying user intent, not just surface-level similarity. Someone searching "buy running shoes" has different needs than someone searching "best running shoes for flat feet."

### 2. Separate Prospecting From Retargeting
Never mix cold audience campaigns with remarketing. They require different strategies, budgets, and success metrics.

### 3. Build for Optimization
Your structure should make it easy to identify what's working and what isn't. If you can't tell which campaigns drive profitable conversions, your structure is failing you.

### 4. Allow for Scale
Start simple, but don't paint yourself into a corner. Your structure should accommodate new products, services, and markets without requiring a complete rebuild.

## Common Mistakes

- Too many campaigns with too few keywords each
- Mixing match types without strategy
- Ignoring negative keyword management
- Not separating by device or location when performance differs significantly
- Failing to align landing pages with campaign themes

## The Practical Approach

Start with your business objectives. Map those to search intent. Build campaigns that serve each intent cluster. Create ad groups that allow meaningful optimization. Then iterate based on data.`,
    toc: [
      { id: "why-structure-matters", title: "Why Structure Matters" },
      { id: "core-principles", title: "Core Principles" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "the-practical-approach", title: "The Practical Approach" },
    ],
  },
  {
    id: "meta-ads-creative-testing",
    title: "Meta Ads Creative Testing: A Systematic Approach",
    slug: "meta-ads-creative-testing",
    excerpt: "Creative is the biggest lever in Meta advertising. Here's how to build a testing system that consistently identifies winners.",
    category: "Meta Ads",
    date: "2026-02-05",
    readingTime: "7 min read",
    isDraft: true,
    content: `## Creative Is the Strategy

In Meta advertising, your creative does the heavy lifting. The algorithm finds audiences — your creative determines whether those audiences convert. Treating creative as an afterthought is the fastest way to waste budget.

## Building a Testing Framework

### Define What You're Testing
Don't just throw random creative at the wall. Have a hypothesis. Are you testing hooks? Formats? Value propositions? Social proof approaches?

### Control Your Variables
Test one element at a time when possible. If you change the hook, format, and CTA simultaneously, you won't know what drove the result.

### Set Clear Success Criteria
Define what "winning" looks like before the test starts. Is it CTR? Thumb-stop rate? Cost per purchase? ROAS? Different metrics matter at different funnel stages.

### Run Tests Long Enough
Statistical significance matters. Don't kill a test after 24 hours because it's "not working." Give it enough time and budget to reach reliable conclusions.

## Creative Categories to Test

1. **Hooks** — the first 1-3 seconds that stop the scroll
2. **Formats** — static, video, carousel, collection
3. **Value propositions** — what benefit or outcome you lead with
4. **Social proof** — testimonials, UGC, expert endorsement
5. **CTAs** — different calls to action and urgency approaches
6. **Audience alignment** — creative tailored to specific audience segments

## The Iteration Loop

Testing isn't a one-time activity. Build a continuous loop: hypothesize → create → test → learn → iterate. The brands that win on Meta are the ones that treat creative development as a core business capability, not a marketing task.`,
    toc: [
      { id: "creative-is-the-strategy", title: "Creative Is the Strategy" },
      { id: "building-a-testing-framework", title: "Building a Testing Framework" },
      { id: "creative-categories-to-test", title: "Creative Categories to Test" },
      { id: "the-iteration-loop", title: "The Iteration Loop" },
    ],
  },
  {
    id: "conversion-rate-audit",
    title: "How to Audit Your Conversion Rate (Before Spending More on Ads)",
    slug: "conversion-rate-audit",
    excerpt: "Before increasing your ad spend, make sure your funnel isn't leaking. Here's a practical conversion audit framework.",
    category: "Conversion Optimization",
    date: "2026-02-18",
    readingTime: "9 min read",
    isDraft: true,
    content: `## The Leaky Bucket Problem

Many businesses respond to poor marketing performance by spending more on advertising. But if your conversion rate is low, you're pouring budget into a leaky bucket. Fix the bucket first.

## A Practical Conversion Audit

### Step 1: Map Your Funnel
Document every step a user takes from first touch to conversion. Where are the drop-off points? Which pages lose the most visitors?

### Step 2: Analyse by Segment
Look at conversion rates by traffic source, device, location, and audience segment. The aggregate number hides the real story.

### Step 3: Identify Friction Points
Use a combination of quantitative data (analytics) and qualitative research (user testing, surveys, session recordings) to find where and why users abandon.

### Step 4: Prioritize by Impact
Not all friction points are equal. Prioritize fixes by: volume of affected users × severity of friction × ease of implementation.

### Step 5: Test and Measure
Implement changes as experiments. Measure the impact. Learn and iterate.

## Common Conversion Killers

- Slow page load times
- Confusing navigation or information architecture
- Weak or unclear value propositions
- Form friction (too many fields, poor UX)
- Lack of trust signals
- Mobile experience that doesn't match desktop
- Misalignment between ad promise and landing page

## The ROI of Conversion Optimization

Improving conversion rate is often the highest-ROI marketing activity available. A 20% conversion rate improvement means 20% more revenue from the same traffic — without spending more on acquisition.`,
    toc: [
      { id: "the-leaky-bucket-problem", title: "The Leaky Bucket Problem" },
      { id: "a-practical-conversion-audit", title: "A Practical Conversion Audit" },
      { id: "common-conversion-killers", title: "Common Conversion Killers" },
      { id: "the-roi-of-conversion-optimization", title: "The ROI of Conversion Optimization" },
    ],
  },
  {
    id: "analytics-setup-guide",
    title: "Analytics Setup: Getting Measurement Right Before You Scale",
    slug: "analytics-setup-guide",
    excerpt: "Accurate measurement is the foundation of effective marketing. Here's how to set up analytics that you can actually trust.",
    category: "Analytics",
    date: "2026-03-01",
    readingTime: "7 min read",
    isDraft: true,
    content: `## Why Measurement Comes First

You cannot optimize what you cannot measure. Before scaling any marketing channel, ensure your measurement infrastructure is accurate, complete, and actionable.

## The Measurement Audit

### Conversion Tracking
Are conversions being tracked accurately across all platforms? Are you double-counting or missing conversions? Is the data consistent between your analytics platform and advertising platforms?

### Event Tracking
Beyond conversions, are you tracking the meaningful events that indicate progress through your funnel? Page views, form starts, add-to-cart, video plays — these intermediate signals matter.

### Attribution
How are you attributing conversions to channels? First-click, last-click, data-driven? Each model tells a different story. Choose intentionally.

### Data Quality
Is your data clean? Are there duplicate events, missing parameters, or broken tags? Data quality issues compound over time.

## Building a Measurement Framework

1. **Define your conversion events** — what constitutes a meaningful outcome?
2. **Map the user journey** — what intermediate steps lead to conversion?
3. **Implement tracking** — set up tags, events, and conversion tracking
4. **Verify accuracy** — test, compare, and validate your data
5. **Build reporting** — create dashboards that surface actionable insights
6. **Review regularly** — measurement needs change as your business evolves

## Common Mistakes

- Relying on a single data source
- Not verifying conversion tracking after website changes
- Ignoring cross-device behaviour
- Over-attributing to the last touchpoint
- Not connecting marketing metrics to business outcomes

## The Bottom Line

Good measurement isn't a one-time setup — it's an ongoing practice. Invest in getting it right, and every marketing decision becomes more confident and more effective.`,
    toc: [
      { id: "why-measurement-comes-first", title: "Why Measurement Comes First" },
      { id: "the-measurement-audit", title: "The Measurement Audit" },
      { id: "building-a-measurement-framework", title: "Building a Measurement Framework" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "the-bottom-line", title: "The Bottom Line" },
    ],
  },
];

// Testimonials (placeholder - no real testimonials provided)
export const testimonials: Testimonial[] = [];
// Note: Add real testimonials here when available
// Example format:
// {
//   id: "testimonial-1",
//   text: "Real testimonial text here",
//   author: "Real Name",
//   role: "Real Role",
//   company: "Real Company",
// }
