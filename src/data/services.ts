import {
  Globe,
  Search,
  Palette,
  Megaphone,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Code2,
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
    color: "from-violet-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
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
    color: "from-cyan-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
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
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. Research-backed designs that drive engagement.",
    color: "from-pink-500 to-rose-600",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    heroDescription:
      "We design intuitive, visually stunning interfaces backed by user research. From wireframes to pixel-perfect prototypes, every design decision is driven by data and empathy.",
    features: [
      {
        title: "User Research & Personas",
        description:
          "Surveys, interviews, and analytics to understand your audience. We build detailed personas that guide every design decision.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Interactive Figma prototypes that let you test and iterate before a single line of code is written, saving time and budget.",
      },
      {
        title: "Visual Design System",
        description:
          "Reusable component libraries, color palettes, typography scales, and spacing systems that ensure consistency across your product.",
      },
      {
        title: "Usability Testing",
        description:
          "Real-user testing sessions with heatmaps and session recordings to validate designs and uncover friction points.",
      },
      {
        title: "Responsive & Accessible Design",
        description:
          "WCAG 2.1 compliant designs that work beautifully across all devices, ensuring everyone can use your product.",
      },
      {
        title: "Design Handoff",
        description:
          "Pixel-perfect specs, exportable assets, and developer-ready Figma files that make implementation smooth and accurate.",
      },
    ],
    process: [
      "Discovery workshops & user research",
      "Information architecture & user flows",
      "Low-fidelity wireframes",
      "High-fidelity prototypes & visual design",
      "Usability testing & iteration",
    ],
    benefits: [
      "Research-backed designs increase conversions by 200%",
      "Consistent design systems speed up development",
      "Accessible design expands your audience reach",
      "Prototyping catches issues before development",
      "User-centered approach reduces churn",
    ],
    pricing: {
      starter: {
        price: "$1,499",
        features: [
          "Up to 5 screens",
          "Wireframes",
          "Visual mockups",
          "1 revision round",
          "Design handoff",
        ],
      },
      professional: {
        price: "$3,999",
        features: [
          "Up to 15 screens",
          "User research",
          "Interactive prototypes",
          "Design system",
          "3 revision rounds",
          "Usability testing",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Unlimited screens",
          "Full research program",
          "Design system library",
          "Ongoing design support",
          "Dedicated designer",
          "Priority iterations",
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
    color: "from-orange-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
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
    color: "from-green-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
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
    slug: "brand-identity",
    icon: ShieldCheck,
    title: "Brand Identity",
    description:
      "Craft a memorable brand. Logo design, brand guidelines, visual identity, and brand strategy.",
    color: "from-indigo-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    heroDescription:
      "Your brand is more than a logo — it's the feeling people get when they interact with your business. We craft complete brand identities that are memorable, consistent, and built to scale.",
    features: [
      {
        title: "Logo Design",
        description:
          "Multiple concept explorations, from minimalist wordmarks to detailed icons, refined through iterative feedback until it's perfect.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Comprehensive brand book covering logo usage, color palettes, typography, iconography, photography style, and tone of voice.",
      },
      {
        title: "Visual Identity System",
        description:
          "Business cards, letterheads, email signatures, social media templates, and presentation decks — all cohesive and on-brand.",
      },
      {
        title: "Brand Strategy",
        description:
          "Market positioning, competitor analysis, target audience definition, brand values, and messaging framework.",
      },
      {
        title: "Brand Voice & Messaging",
        description:
          "Tone of voice guidelines, taglines, elevator pitches, and key messaging that resonates with your audience.",
      },
      {
        title: "Brand Launch Support",
        description:
          "Rollout strategy, announcement materials, and team training to ensure consistent brand application from day one.",
      },
    ],
    process: [
      "Brand discovery & strategy workshop",
      "Market research & competitor analysis",
      "Concept development & exploration",
      "Design refinement & feedback",
      "Brand guideline documentation & delivery",
    ],
    benefits: [
      "Strong brand identity builds instant trust",
      "Consistent visuals increase recognition by 80%",
      "Clear brand strategy guides all marketing efforts",
      "Professional identity attracts premium clients",
      "Scalable system grows with your business",
    ],
    pricing: {
      starter: {
        price: "$1,999",
        features: [
          "Logo design (3 concepts)",
          "Color palette",
          "Typography selection",
          "Basic brand guide",
          "Business card design",
        ],
      },
      professional: {
        price: "$4,999",
        features: [
          "Logo design (5 concepts)",
          "Full brand guidelines",
          "Stationery suite",
          "Social media templates",
          "Brand voice guide",
          "Presentation template",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Complete brand strategy",
          "Unlimited concepts",
          "Full visual identity system",
          "Brand launch support",
          "Team training",
          "Ongoing brand consulting",
        ],
      },
    },
  },
  {
    slug: "analytics-reporting",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Data-driven decisions with comprehensive analytics. Track, measure, and optimize your performance.",
    color: "from-teal-500 to-cyan-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    heroDescription:
      "Turn raw data into actionable insights. We set up comprehensive analytics, build custom dashboards, and deliver reports that help you make smarter business decisions.",
    features: [
      {
        title: "Analytics Setup & Configuration",
        description:
          "Google Analytics 4, Tag Manager, and conversion tracking properly configured to capture every meaningful user interaction.",
      },
      {
        title: "Custom Dashboards",
        description:
          "Real-time dashboards in Looker Studio, Tableau, or custom-built solutions showing KPIs that matter to your business.",
      },
      {
        title: "Conversion Tracking",
        description:
          "End-to-end funnel tracking from first touch to purchase, with attribution modeling across all marketing channels.",
      },
      {
        title: "User Behavior Analysis",
        description:
          "Heatmaps, session recordings, and user flow analysis that reveal exactly how visitors interact with your site.",
      },
      {
        title: "A/B Testing Framework",
        description:
          "Structured testing programs that validate hypotheses and drive incremental improvements in conversion rates.",
      },
      {
        title: "Executive Reporting",
        description:
          "Clear, visual monthly reports translating complex data into plain-language insights and actionable recommendations.",
      },
    ],
    process: [
      "Analytics audit & goal definition",
      "Tracking implementation & testing",
      "Dashboard design & setup",
      "Initial data analysis & baseline",
      "Ongoing monitoring & optimization",
    ],
    benefits: [
      "Data-driven decisions reduce guesswork",
      "Conversion tracking reveals true marketing ROI",
      "User insights uncover hidden revenue opportunities",
      "A/B testing drives continuous improvement",
      "Custom dashboards save hours of manual reporting",
    ],
    pricing: {
      starter: {
        price: "$599",
        features: [
          "GA4 setup & configuration",
          "Basic event tracking",
          "1 custom dashboard",
          "Monthly report",
          "1 month support",
        ],
      },
      professional: {
        price: "$1,499",
        features: [
          "Full analytics stack",
          "Advanced event tracking",
          "3 custom dashboards",
          "Conversion funnels",
          "Bi-weekly reports",
          "3 months support",
        ],
      },
      enterprise: {
        price: "Custom",
        features: [
          "Enterprise analytics setup",
          "Custom data pipeline",
          "Unlimited dashboards",
          "A/B testing program",
          "Weekly reports",
          "Dedicated analyst",
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
    color: "from-fuchsia-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
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
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
