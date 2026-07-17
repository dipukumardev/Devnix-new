import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Code2,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
  heroDescription: string;
  features: ServiceFeature[];
  process: string[];
  benefits: string[];
  pricing: {
    starter: { price: string; features: string[] };
    professional: { price: string; features: string[] };
    enterprise: { price: string; features: string[] };
  };
}

export const services: ServiceData[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with cutting-edge technologies. Fast, responsive, and optimized for conversions.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/website-development.jpg",
    heroDescription:
      "We build blazing-fast, responsive websites using Next.js, React, and modern frameworks. Every site is crafted for performance, accessibility, and conversions — so your business grows from day one.",
    features: [
      {
        title: "Responsive Design",
        description:
          "Every website we build looks stunning on desktops, tablets, and mobile devices. Fluid layouts ensure a seamless experience across all screen sizes.",
      },
      {
        title: "Performance Optimized",
        description:
          "We target 90+ Lighthouse scores with lazy loading, image optimization, code splitting, and server-side rendering for lightning-fast load times.",
      },
      {
        title: "SEO-Friendly Architecture",
        description:
          "Semantic HTML, structured data, meta tags, and clean URLs are baked into every build so search engines can discover and rank your pages.",
      },
      {
        title: "CMS Integration",
        description:
          "Connect your site to headless CMS platforms like Sanity, Strapi, or WordPress so your team can update content without touching code.",
      },
      {
        title: "E-Commerce Ready",
        description:
          "From product catalogs to checkout flows, we integrate Shopify, Stripe, and custom payment gateways to power your online store.",
      },
      {
        title: "Analytics & Tracking",
        description:
          "Built-in Google Analytics, heatmaps, and conversion tracking so you can measure every click and optimize for results.",
      },
    ],
    process: [
      "Discovery & requirement gathering",
      "Wireframing & design mockups",
      "Frontend & backend development",
      "Testing & quality assurance",
      "Launch & post-launch support",
    ],
    benefits: [
      "Faster load times boost user engagement by up to 70%",
      "Mobile-first design captures 60% of web traffic",
      "SEO-optimized structure improves organic rankings",
      "Scalable architecture grows with your business",
      "Ongoing maintenance keeps your site secure & updated",
    ],
    pricing: {
      starter: {
        price: "$999",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "1 month support",
        ],
      },
      professional: {
        price: "$2,499",
        features: [
          "Up to 15 pages",
          "Custom animations",
          "CMS integration",
          "Advanced SEO",
          "E-commerce (up to 50 products)",
          "3 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Unlimited pages",
          "Custom features & APIs",
          "Multi-language support",
          "Priority support",
          "Dedicated project manager",
          "12 months support",
        ],
      },
    },
  },
  {
    slug: "seo-management",
    icon: Search,
    title: "SEO Management",
    description:
      "Dominate search rankings with data-driven SEO strategies. On-page, off-page, and technical SEO expertise.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/seo-management.jpg",
    heroDescription:
      "Climb to the top of search results with our data-driven SEO strategies. We combine technical expertise, content optimization, and link building to deliver measurable organic growth.",
    features: [
      {
        title: "Technical SEO Audit",
        description:
          "Deep-dive analysis of your site structure, crawlability, indexing issues, Core Web Vitals, and schema markup to fix what search engines see.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Keyword-optimized titles, meta descriptions, headings, internal linking, and content structure that aligns with search intent.",
      },
      {
        title: "Off-Page & Link Building",
        description:
          "White-hat outreach, guest posting, and digital PR campaigns that build authoritative backlinks and domain trust.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimization, local citations, review management, and geo-targeted content to dominate local search.",
      },
      {
        title: "Content Strategy",
        description:
          "Keyword research, topic clustering, and content calendars that drive traffic with high-intent blog posts and landing pages.",
      },
      {
        title: "Monthly Reporting",
        description:
          "Transparent dashboards tracking keyword rankings, organic traffic, backlink profiles, and conversion rates with actionable insights.",
      },
    ],
    process: [
      "Comprehensive site audit & competitor analysis",
      "Keyword research & content gap analysis",
      "On-page & technical optimizations",
      "Link building & outreach campaigns",
      "Monthly performance reporting & strategy refinement",
    ],
    benefits: [
      "Organic traffic growth of 150-300% within 6 months",
      "Higher domain authority builds long-term visibility",
      "Lower customer acquisition cost vs paid ads",
      "Targeted keywords attract high-intent buyers",
      "Transparent reporting shows real ROI",
    ],
    pricing: {
      starter: {
        price: "$499/mo",
        features: [
          "Up to 10 keywords",
          "Monthly SEO audit",
          "On-page optimization",
          "Basic link building",
          "Monthly report",
        ],
      },
      professional: {
        price: "$999/mo",
        features: [
          "Up to 30 keywords",
          "Technical SEO fixes",
          "Content strategy",
          "Advanced link building",
          "Bi-weekly reporting",
          "Local SEO",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Unlimited keywords",
          "Dedicated SEO manager",
          "Content creation included",
          "Enterprise link building",
          "Weekly reporting",
          "Multi-location SEO",
        ],
      },
    },
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Full-funnel marketing strategies. PPC, social media, email campaigns, and content marketing.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/digital-marketing.jpg",
    heroDescription:
      "From awareness to conversion, we craft full-funnel marketing strategies that reach the right audience at the right time. PPC, social media, email, and content — all working together for maximum ROI.",
    features: [
      {
        title: "PPC & Paid Advertising",
        description:
          "Google Ads, Meta Ads, and LinkedIn campaigns optimized for conversions with A/B testing, bid strategies, and retargeting.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Content calendars, community management, influencer partnerships, and paid social across Instagram, LinkedIn, Twitter, and TikTok.",
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Drip campaigns, newsletters, segmentation, and automated workflows that nurture leads and drive repeat purchases.",
      },
      {
        title: "Content Marketing",
        description:
          "Blog posts, infographics, videos, and whitepapers that establish thought leadership and drive organic traffic.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Landing page optimization, A/B testing, funnel analysis, and UX improvements that turn visitors into customers.",
      },
      {
        title: "Campaign Analytics",
        description:
          "Real-time dashboards tracking ROAS, CPA, CTR, and conversion metrics across all channels with weekly optimization.",
      },
    ],
    process: [
      "Market research & audience analysis",
      "Strategy development & channel selection",
      "Campaign creation & creative production",
      "Launch, monitor & optimize",
      "Performance reporting & scaling",
    ],
    benefits: [
      "Multi-channel approach reaches customers everywhere",
      "Data-driven optimization maximizes ad spend ROI",
      "Automated email flows generate revenue on autopilot",
      "Content marketing builds long-term brand equity",
      "Real-time analytics enable agile decision making",
    ],
    pricing: {
      starter: {
        price: "$799/mo",
        features: [
          "1 advertising channel",
          "Social media management (2 platforms)",
          "Monthly email newsletter",
          "Basic analytics",
          "Monthly strategy call",
        ],
      },
      professional: {
        price: "$1,999/mo",
        features: [
          "3 advertising channels",
          "Social media (4 platforms)",
          "Email automation workflows",
          "Content creation",
          "Bi-weekly reporting",
          "A/B testing",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "All channels",
          "Dedicated marketing team",
          "Full content production",
          "Advanced automation",
          "Weekly reporting & calls",
          "Influencer campaigns",
        ],
      },
    },
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps. iOS, Android, and Progressive Web Apps built to perform.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/mobile-app-development.jpg",
    heroDescription:
      "We build high-performance mobile apps for iOS and Android using React Native and Flutter. From concept to App Store, we deliver apps that users love and businesses rely on.",
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "Single codebase for iOS and Android using React Native or Flutter, reducing development time and cost by up to 40%.",
      },
      {
        title: "Native Performance",
        description:
          "Optimized rendering, efficient memory management, and platform-specific APIs ensure your app feels truly native.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Local data storage, background sync, and intelligent caching so your app works flawlessly even without internet.",
      },
      {
        title: "Push Notifications",
        description:
          "Targeted push notification systems with segmentation, scheduling, and analytics to re-engage users and drive retention.",
      },
      {
        title: "App Store Optimization",
        description:
          "Keyword-optimized listings, compelling screenshots, A/B tested descriptions, and review management for higher rankings.",
      },
      {
        title: "Backend & API Development",
        description:
          "Scalable cloud backends with REST/GraphQL APIs, real-time databases, authentication, and payment processing.",
      },
    ],
    process: [
      "Concept validation & requirements",
      "UI/UX design & prototyping",
      "Development sprints with regular demos",
      "QA testing across devices & OS versions",
      "App Store submission & launch support",
    ],
    benefits: [
      "Cross-platform cuts development cost by 40%",
      "Offline-first design ensures reliability everywhere",
      "Push notifications boost retention by 3-10x",
      "App Store optimization drives organic downloads",
      "Ongoing updates keep your app competitive",
    ],
    pricing: {
      starter: {
        price: "$4,999",
        features: [
          "Single platform (iOS or Android)",
          "Up to 8 screens",
          "Basic features",
          "Push notifications",
          "App Store submission",
          "1 month support",
        ],
      },
      professional: {
        price: "$9,999",
        features: [
          "iOS + Android",
          "Up to 20 screens",
          "Custom backend & API",
          "Offline support",
          "Analytics integration",
          "3 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Unlimited screens",
          "Complex features (AR, ML, etc.)",
          "Enterprise backend",
          "Dedicated team",
          "Priority support",
          "12 months support",
        ],
      },
    },
  },
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions for complex business needs. APIs, dashboards, and enterprise tools.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/custom-software.jpg",
    heroDescription:
      "Off-the-shelf software doesn't fit every business. We build custom solutions — APIs, dashboards, automation tools, and enterprise platforms — engineered for your exact workflow.",
    features: [
      {
        title: "Custom API Development",
        description:
          "RESTful and GraphQL APIs designed for performance, security, and scalability. Documented with OpenAPI/Swagger for easy integration.",
      },
      {
        title: "Admin Dashboards",
        description:
          "Powerful internal tools with role-based access, real-time data, and intuitive interfaces that your team actually enjoys using.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, data entry, report generation, and inter-system communication to save hours every week.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Connect your tools — CRM, ERP, payment gateways, shipping, email services — into a unified, efficient ecosystem.",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "AWS, GCP, or Azure deployment with auto-scaling, monitoring, CI/CD pipelines, and 99.9% uptime guarantees.",
      },
      {
        title: "Security & Compliance",
        description:
          "Enterprise-grade security with encryption, authentication, audit logs, and compliance with GDPR, HIPAA, or SOC 2.",
      },
    ],
    process: [
      "Requirements analysis & system design",
      "Architecture planning & tech stack selection",
      "Agile development with sprint demos",
      "Integration testing & security audit",
      "Deployment, training & ongoing support",
    ],
    benefits: [
      "Custom-fit solution eliminates workarounds",
      "Automation saves 10-20 hours per week",
      "Scalable architecture handles business growth",
      "Integrations create a unified workflow",
      "Enterprise security protects sensitive data",
    ],
    pricing: {
      starter: {
        price: "$5,999",
        features: [
          "Single application",
          "Basic API integration",
          "Admin dashboard",
          "Cloud deployment",
          "3 months support",
        ],
      },
      professional: {
        price: "$14,999",
        features: [
          "Multi-module system",
          "Advanced integrations",
          "Custom workflows",
          "Role-based access",
          "CI/CD pipeline",
          "6 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Full enterprise platform",
          "Microservices architecture",
          "Compliance & security audit",
          "Dedicated dev team",
          "SLA guarantees",
          "12 months support",
        ],
      },
    },
  },
  {
    slug: "crm-solutions",
    icon: Users,
    title: "CRM Solutions",
    description:
      "Custom CRM platforms to manage leads, customers, and sales pipelines. Automate follow-ups and close more deals.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/crm-solutions.jpg",
    heroDescription:
      "We design and build CRM systems tailored to how your team actually sells and supports customers — centralize contacts, automate follow-ups, track pipelines, and get a single source of truth that grows revenue.",
    features: [
      {
        title: "Lead & Contact Management",
        description:
          "Capture, organize, and segment every lead and customer in one place, with custom fields, tags, and activity timelines.",
      },
      {
        title: "Sales Pipeline & Deals",
        description:
          "Visual drag-and-drop pipelines, stage automation, deal forecasting, and win/loss tracking so nothing slips through the cracks.",
      },
      {
        title: "Automation & Reminders",
        description:
          "Automate follow-up emails, task assignments, and reminders based on triggers so your team focuses on selling, not admin.",
      },
      {
        title: "Integrations",
        description:
          "Connect email, WhatsApp, calling, payments, and marketing tools so customer data stays in sync across your stack.",
      },
      {
        title: "Dashboards & Reports",
        description:
          "Real-time dashboards for revenue, conversion rates, team performance, and activity — exportable and role-based.",
      },
      {
        title: "Roles & Permissions",
        description:
          "Granular access control so sales, support, and management each see exactly what they need — nothing more.",
      },
    ],
    process: [
      "Discovery of your sales & support workflow",
      "Data model & pipeline design",
      "Build, automation & integrations",
      "Data migration & team onboarding",
      "Launch, training & ongoing support",
    ],
    benefits: [
      "Single source of truth for every customer",
      "Automation saves hours of manual follow-up",
      "Higher conversion with structured pipelines",
      "Clear reporting for data-driven decisions",
      "Scales with your team and processes",
    ],
    pricing: {
      starter: {
        price: "$2,999",
        features: [
          "Core CRM setup",
          "Lead & contact management",
          "1 sales pipeline",
          "Basic automation",
          "3 months support",
        ],
      },
      professional: {
        price: "$7,999",
        features: [
          "Multiple pipelines",
          "Advanced automation",
          "Email & WhatsApp integration",
          "Custom dashboards",
          "Role-based access",
          "6 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Fully custom CRM platform",
          "Deep third-party integrations",
          "Data migration included",
          "Dedicated success manager",
          "SLA guarantees",
          "12 months support",
        ],
      },
    },
  },
  {
    slug: "automation-software",
    icon: Workflow,
    title: "Automation Software",
    description:
      "Automate repetitive tasks and connect your tools. Custom workflows, bots, and integrations that save hours every week.",
    color: "from-blue-600 to-emerald-500",
    image: "/images/services/automation-software.jpg",
    heroDescription:
      "Stop doing manual, repetitive work. We build automation software that connects your apps, moves data, and runs workflows on autopilot — so your team can focus on what actually grows the business.",
    features: [
      {
        title: "Workflow Automation",
        description:
          "Design end-to-end workflows that trigger actions across your tools — no more copy-pasting between spreadsheets and apps.",
      },
      {
        title: "App & API Integrations",
        description:
          "Connect CRMs, payments, email, WhatsApp, sheets, and internal systems into one automated pipeline that just works.",
      },
      {
        title: "Bots & Auto-Replies",
        description:
          "Chatbots, email/WhatsApp auto-responders, and notification bots that handle routine requests around the clock.",
      },
      {
        title: "Data Sync & Migration",
        description:
          "Keep records consistent across platforms with scheduled syncs, deduplication, and reliable data transfers.",
      },
      {
        title: "Scheduled Jobs & Alerts",
        description:
          "Automated reports, reminders, and threshold-based alerts delivered exactly when and where your team needs them.",
      },
      {
        title: "Monitoring & Logs",
        description:
          "Built-in error handling, retries, and activity logs so every automation is transparent, auditable, and dependable.",
      },
    ],
    process: [
      "Audit of manual & repetitive tasks",
      "Workflow mapping & tool selection",
      "Build automations & integrations",
      "Testing, error handling & rollout",
      "Monitoring, tuning & ongoing support",
    ],
    benefits: [
      "Save 10-20+ hours of manual work weekly",
      "Eliminate human error in routine tasks",
      "Connect disconnected tools into one flow",
      "Faster response times with 24/7 automation",
      "Scales effortlessly as volume grows",
    ],
    pricing: {
      starter: {
        price: "$1,499",
        features: [
          "Up to 3 automated workflows",
          "2 app integrations",
          "Basic notifications",
          "Error alerts",
          "1 month support",
        ],
      },
      professional: {
        price: "$4,499",
        features: [
          "Up to 10 workflows",
          "Advanced integrations",
          "Bots & auto-replies",
          "Scheduled reports",
          "Monitoring dashboard",
          "3 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Unlimited workflows",
          "Custom integrations & APIs",
          "Dedicated automation engineer",
          "Advanced logging & audits",
          "SLA guarantees",
          "12 months support",
        ],
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
