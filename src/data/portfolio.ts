export interface PortfolioSection {
  title: string;
  body: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  /** Short text for the grid card */
  summary: string;
  /** Hero lead on the case study page */
  lead: string;
  sections: PortfolioSection[];
  highlights?: string[];
  tags: string[];
  image: string;
  liveUrl?: string;
  liveUrlLabel?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "polyhouse-smart-farming-web",
    title: "Polyhouse & Smart Farming Website",
    category: "Agri / Polyhouse Web",
    summary:
      "Marketing and lead site for protected cultivation — polyhouses, net houses, drip irrigation, hydroponics — styled like trusted agri builders (e.g. Greentech Services).",
    lead: "Built for agri engineering firms selling large on-farm projects: explain polyhouse and smart-farming solutions clearly, prove scale with projects and stats, and convert searches into calls, WhatsApp quotes, and site visits — not a product catalog or shopping cart.",
    highlights: [
      "Service-led IA: polyhouse, net house, drip irrigation, hydroponics, subsidy support",
      "Project gallery with region, crop, and structure type for credibility",
      "Local and pan-India SEO for high-intent farmer and investor queries",
      "Quote and site-inspection forms via Express APIs into email or CRM",
      "Firebase for secure admin uploads: site photos, brochures, testimonial media",
      "Analytics on forms, tap-to-call, and WhatsApp clicks — not cart revenue",
    ],
    sections: [
      {
        title: "Polyhouse website, not e-commerce",
        body: "This project type is a polyhouse and smart-farming services website: it presents turnkey protected cultivation for Indian farmers and agri businesses — structures, irrigation, hydroponics, and often government subsidy guidance. Visually and structurally it follows reference sites such as greentechexperts.in: strong hero, trust counters, service sections, featured farms, testimonials, and obvious actions like Get Quote, WhatsApp, and phone. Success is measured in qualified leads and booked site inspections, not checkout conversions.",
      },
      {
        title: "How visitors use the site",
        body: "Typical visitors compare vendors for high-ticket builds. They need service pages that spell out what polyhouse vs net house vs drip entails, a portfolio of completed projects with locations and acreage, proof of experience and warranties, and answers on timelines and subsidy paperwork. The site reduces repetitive phone explanations so your field team can focus on surveys and estimates.",
      },
      {
        title: "Frontend — Next.js, React, Tailwind",
        body: "Next.js and React deliver fast, SEO-friendly pages and smooth scrolling on low-end phones common in rural areas. Tailwind implements the dark premium layout, glass-style stat bands, and responsive project grids so the brand feels modern and industrial without sacrificing readability on long educational copy.",
      },
      {
        title: "APIs — Express",
        body: "Express backs server-side form handling for quotes and callbacks: validation, spam protection, and forwarding to email, CRM, or WhatsApp Business triggers. Optional webhooks connect a headless CMS so new project case studies can invalidate static paths and go live quickly after approval.",
      },
      {
        title: "Admin & media — Firebase",
        body: "Firebase Authentication and Storage let non-developers publish fresh project photos, PDF brochures, and subsidy explainers safely. Firestore can optionally store draft content or regional variants if you run state-specific landing pages for schemes like NHM or PMKSY.",
      },
      {
        title: "CMS, SEO, and measurement",
        body: "A headless or custom CMS keeps blog posts, scheme updates, and service copy editable without deploys. Technical SEO — clean URLs, structured data for local business, fast LCP — supports both map-pack and long-tail searches. Analytics focuses on lead signals: form submits, call clicks, and WhatsApp taps per service and region.",
      },
    ],
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Express",
      "Firebase",
      "CMS",
      "SEO",
      "Analytics",
    ],
    image: "/images/work/greentech-platform.png",
    liveUrl: "https://greentechexperts.in/",
    liveUrlLabel: "View live reference — Greentech Services",
  },
  {
    slug: "home-tuition-bhopal",
    title: "H.T.C. Home Tution Classes — Local Web",
    category: "EdTech / Local Services",
    summary:
      "Glassmorphism marketing site for offline home tuition in Bhopal — one teacher, one student, with student & tutor registration and clear local trust signals.",
    lead: "H.T.C. Home Tution Classes · hometuitionz.com — badges “Now in Bhopal” and “Fully offline,” headline “One teacher, one student,” sub “Teachers at your home,” and body copy about personal home tuition with student and teacher registration open. Glass-style hero cards, Student registration, Tutor registration, and Contact — aligned with the live hometuitionz.com experience.",
    highlights: [
      "Pill badges for locality and service model: Now in Bhopal · Fully offline",
      "Dual glass cards on hero: primary CTA block + secondary summary with contact strip",
      "Clear IA: Courses, Tutor registration, Student registration, Why us, Contact",
      "Prominent phone (+91 8602369343) and support@hometuitionz.com with tap-to-call / mailto",
      "Programme grid (LKG–12th, NTSE, competitive exams, music, self defence) with Enquire flows",
      "Built with modern stack: Next.js, React, Tailwind — fast, mobile-first, SEO-ready for city + service keywords",
    ],
    sections: [
      {
        title: "Brand and message",
        body: "The site centers on trust for parents and tutors in Bhopal: the teaching model is spelled out as one teacher, one student; service is fully offline with teachers at the home; registration is open for both students and teachers. Supporting copy on the live site at hometuitionz.com reinforces programmes (school boards, competitive exams, languages), testimonials, and how the offline model works — all scannable in a few scrolls.",
      },
      {
        title: "UI — glassmorphism and warmth",
        body: "The hero uses a warm tutoring photo with layered frosted-glass panels (backdrop blur, soft borders, rounded corners) so CTAs stay readable without a flat boxy layout. Accent greens and pinks on badges echo “open” and “offline” cues; typography stays clean sans-serif for a professional tuition brand, not a generic template.",
      },
      {
        title: "Frontend — Next.js, React, Tailwind",
        body: "The implementation uses Next.js App Router with React for interactive navigation, mobile menu, and registration-oriented buttons. Tailwind drives consistent spacing, responsive grids for course cards, and reusable glass utilities (blur, border-white/10, shadow) so new cities or programme rows can ship quickly without one-off CSS.",
      },
      {
        title: "Conversion and contact",
        body: "Primary actions — Student registration, Tutor registration, Contact us — sit in the hero glass card alongside a green registration link. A dedicated contact page pattern (referenced on the live site) centralizes phone, email, WhatsApp, and enquiry form so analytics can attribute leads to channel while keeping the homepage lightweight.",
      },
      {
        title: "Local SEO and growth",
        body: "Copy and headings target Bhopal and Madhya Pradesh intent (home tuition, offline, boards). Structured headings, fast LCP on hero imagery, and clear internal links to Courses and Why us help capture long-tail searches; optional schema for LocalBusiness or Organization can reinforce NAP consistency with Google Business Profile.",
      },
      {
        title: "WhatsApp and mobile",
        body: "A floating WhatsApp entry point (as on the reference experience) meets users where they already coordinate trials and schedules. Touch-friendly targets, sticky header on small screens, and minimal form friction on registration routes keep completion rates high on phones.",
      },
    ],
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
      "SEO",
      "Responsive",
    ],
    image: "/images/work/home-tuition-hometuitionz.png",
    liveUrl: "https://hometuitionz.com/",
    liveUrlLabel: "View live site — hometuitionz.com",
  },
  {
    slug: "interntak-job-platform",
    title: "Interntak — Job & Career Platform",
    category: "Job Tech / Marketplace",
    summary:
      "Bright, trust-led careers site: AI job-matching promo, hero job search, popular skill tags, and separate paths for job seekers vs recruiters — aligned with interntak.com.",
    lead: "A light, high-contrast marketing and discovery experience for a job platform: announcement strip for new features (e.g. AI-powered matching), bold headline with accent keyword (“Career”), dual-field search (role/skills vs location/remote), quick filters as pills, and role-based entry points for candidates and hiring teams.",
    highlights: [
      "Top promo strip for product news and deep links (e.g. “Try AI matching”)",
      "Mega-nav pattern: Find Jobs, Companies, Resources — with clear active states",
      "Primary CTA stack: Sign in + Get Started for conversion without cluttering browse",
      "Hero search module with icons, validation-ready fields, and prominent Search Jobs",
      "Popular tags (Remote, React, Marketing, etc.) for zero-click exploration",
      "Dual persona cards: Job seeker vs Recruiter with short value props and icons",
      "Stack: Next.js, React, Tailwind, TypeScript — fast LCP on illustration-heavy hero",
    ],
    sections: [
      {
        title: "Product and brand",
        body: "Interntak positions itself as a confident place to start or grow a career: social proof (“Trusted by 50,000+ job seekers”), a clear value line under the headline, and illustration-led storytelling on the right to balance dense UI on the left. The live experience at interntak.com is optimized for first-time visitors who want to search immediately while still understanding who the product serves.",
      },
      {
        title: "Information architecture",
        body: "Navigation separates discovery (Find Jobs, Companies), learning (Resources, Blog), and trust (About, Contact). Dropdown affordances on key items keep depth available without overwhelming the top bar. Authenticated flows sit behind Sign in / Get Started so anonymous traffic stays focused on search and exploration.",
      },
      {
        title: "Search and discovery UX",
        body: "The hero search is the main funnel: job title or skills paired with location or explicit Remote reduces ambiguity. A single primary button reduces decision fatigue. Pill tags under the form capture high-volume intents and can be wired to pre-filled queries or landing pages for SEO.",
      },
      {
        title: "Frontend — Next.js, React, Tailwind",
        body: "Next.js gives SSR or SSG for marketing pages and SEO-friendly job landing routes. React composes the navbar, hero, search shell, and tag lists. Tailwind encodes the white canvas, red brand actions, slate typography scale, and responsive two-column hero (copy + illustration) that stacks cleanly on mobile.",
      },
      {
        title: "Accounts and roles",
        body: "Job seeker and recruiter paths can deep-link to sign-up with role hints, feeding different onboarding and dashboard shells. Session handling, saved searches, and alerts typically live behind auth while public SEO pages stay cacheable at the edge.",
      },
      {
        title: "Performance and SEO",
        body: "Large hero art ships as optimized SVG or responsive images with priority hints only where needed. Structured data for WebSite and Organization, clean URLs for job categories, and crawlable listing pages support organic acquisition alongside paid campaigns tied to the same UTM-aware search URLs.",
      },
    ],
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
      "SEO",
      "Auth",
    ],
    image: "/images/work/interntak-platform.png",
    liveUrl: "https://interntak.com/",
    liveUrlLabel: "View live site — interntak.com",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}
