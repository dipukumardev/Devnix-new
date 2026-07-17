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

const polyhouseProject: PortfolioProject = {
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
};

const homeTuitionProject: PortfolioProject = {
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
};

const interntakProject: PortfolioProject = {
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
};

const devyoraCrmProject: PortfolioProject = {
    slug: "devyora-crm-business-software",
    title: "Devyora CRM — Sales & Operations Software",
    category: "Custom Software / CRM",
    summary:
      "All-in-one business CRM for sales and operations teams: quotations, telecaller EOD reports, call recordings, site visits, leads, reminders, and role-based workflows in one unified dashboard.",
    lead: "Devyora GRC Studio is a custom-built CRM that helps growing sales and operations teams run everything from first quotation to site visit and daily reporting — organized by role. Telecallers, dealers, and field staff register, get admin approval, then work inside modules tailored to their responsibilities, all measured through a single dashboard.",
    highlights: [
      "Role-based access for 6+ team roles: admin, telecaller, dealer, field staff, and more",
      "Quotations & orders: create quotes, manage client groups, track revisions, and monitor confirmed vs lost deals",
      "Telecaller operations: submit daily EOD reports, upload call recordings, and manage the sales pipeline",
      "Site visits & field work: raise visit requests, approve visits, and coordinate on-ground teams from one place",
      "Leads, reminders, and role-based workflows across 20+ CRM modules",
      "Registration + admin approval flow so new telecallers and dealers are vetted before access",
      "Unified dashboard for real-time visibility into team activity and outcomes",
    ],
    sections: [
      {
        title: "Custom business software, not a template",
        body: "Devyora CRM is bespoke operations software built around how a real sales and field team works. Instead of forcing a generic CRM, it models the actual pipeline: quotations and orders, telecaller daily reporting, call recording uploads, site-visit requests and approvals, leads, and reminders — all gated by role. The result is one place to run sales and operations rather than a stack of spreadsheets and chat groups.",
      },
      {
        title: "Role-based access and approvals",
        body: "The platform supports 6+ distinct roles with different permissions and views. New telecallers and dealers register first and must be approved by an admin before they can sign in, keeping data and pipeline access controlled. Each role lands in workflows relevant to them — telecallers in EOD and calls, field staff in site visits, admins in oversight and configuration.",
      },
      {
        title: "Quotations, orders, and pipeline",
        body: "Sales users create quotations, organize clients into groups, track quote revisions, and monitor which deals are confirmed versus lost. This turns the quotation-to-order journey into structured, reportable data instead of scattered documents, so managers can see conversion health at a glance.",
      },
      {
        title: "Telecaller operations and reporting",
        body: "Telecallers submit daily end-of-day (EOD) reports, upload call recordings for quality and accountability, and keep their pipeline moving inside the CRM. Standardized reporting means managers get consistent daily signal on activity and outcomes without chasing manual updates.",
      },
      {
        title: "Site visits and field coordination",
        body: "Field work is handled as a first-class module: teams raise site-visit requests, admins or managers approve them, and on-ground staff are coordinated from a single dashboard. This closes the loop between office-based sales and field execution, which is often where operations teams lose visibility.",
      },
      {
        title: "Unified dashboard and stack",
        body: "Everything rolls up into one unified dashboard spanning 20+ CRM modules, giving leadership a real-time view across roles. Built as a modern web application with secure authentication, role-based routing, and cloud hosting, the system is designed to scale as new roles, modules, and workflows are added.",
      },
    ],
    tags: [
      "CRM",
      "Custom Software",
      "React",
      "Auth",
      "Role-Based Access",
      "Dashboard",
      "Business Automation",
    ],
    image: "/images/work/devyora-crm.png",
    liveUrl: "https://devyora-crm-2.web.app/",
    liveUrlLabel: "View live app — Devyora CRM",
};

const listifyProject: PortfolioProject = {
    slug: "listify-uae-marketplace",
    title: "Listify.ae — UAE Classifieds Marketplace",
    category: "Marketplace / Classifieds",
    summary:
      "Multi-category UAE marketplace for motors, property, jobs, classifieds, and community listings — with search, category browsing, city shortcuts, user dashboards, and paid listing flows across all seven emirates.",
    lead: "Listify.ae is a full classifieds marketplace connecting buyers and sellers across Dubai, Abu Dhabi, Sharjah, and every UAE emirate. It brings motors, property for sale and rent, jobs, classifieds, home furniture, and community into one trusted platform with powerful search, role-based dashboards, listing management, and city-focused SEO landing pages.",
    highlights: [
      "Unified hero search with category tabs: Property for Sale/Rent, Motors, Classifieds, Jobs, Community, Services",
      "Location + category filtering scoped to all seven emirates and major cities",
      "Rich category taxonomy: Motors, Property, Jobs, Classifieds, Home Furniture, Mobile & Tablets, Community",
      "User accounts with Dashboard, Add Listing, and paid/featured listing flows",
      "City × category SEO shortcuts (e.g. Cars for Sale in Dubai, Villas in Abu Dhabi) for high-intent traffic",
      "Testimonials, About, Blog, and multi-language support for a trust-led UAE audience",
      "Mobile app coming soon with App Store / Google Play capture and an AI assistant widget",
    ],
    sections: [
      {
        title: "A full marketplace, not a single-category site",
        body: "Listify.ae is a horizontal classifieds platform spanning motors, property (sale and rent), jobs, general classifieds, home furniture, mobile & tablets, and community listings. The homepage is built around discovery: a prominent search bar, category tabs, and popular-category tiles let visitors jump straight to what they want while the platform quietly organizes thousands of listings across the UAE.",
      },
      {
        title: "Search and discovery UX",
        body: "The hero centers a dual search — category tabs (Property for Sale, Property for Rent, Classifieds, Motors, Community, Jobs, Services) paired with an emirate/city selector and a keyword field. This funnels visitors into filtered result pages quickly. Popular category cards and 'Explore by category' sections give zero-click browsing paths into subcategories like Cars for Sale, Villas, Apartments, and Electronics.",
      },
      {
        title: "Accounts, dashboards, and listings",
        body: "Registered users get a Dashboard and an Add Listing flow, with authentication (Login / Sign Up, Logout) in the top bar. Sellers can post and manage ads, and the platform supports featured or paid listing placements plus an 'Our Services' offering — turning the marketplace into a revenue-generating product rather than a static directory.",
      },
      {
        title: "City × category SEO architecture",
        body: "A major growth lever is location-based SEO: curated shortcuts like 'Cars for Sale in Dubai', 'Apartments for Rent in Dubai', 'Villas for Sale in Abu Dhabi', and 'Townhouses for Rent in Sharjah' create crawlable, high-intent landing pages. Structured city and category pages help Listify.ae capture long-tail search across Dubai, Abu Dhabi, Sharjah, Ajman, and the other emirates.",
      },
      {
        title: "Trust and content",
        body: "To win a competitive classifieds market, the site leans on trust signals: an About/Our Story section, testimonials from buyers, sellers, renters, and job seekers across the Emirates, a blog, and clear support (FAQ, Help, Contact, phone, and email). A multi-language toggle and location selector make it approachable for the UAE's diverse expat and resident base.",
      },
      {
        title: "Platform, mobile, and assistant",
        body: "Built as a modern responsive web application, Listify.ae is designed to scale across categories and cities, with a mobile app 'coming soon' and App Store / Google Play notify-me capture. An on-site AI assistant widget helps users with buying, selling, and renting queries, adding a support layer without a large human team.",
      },
    ],
    tags: [
      "Marketplace",
      "Classifieds",
      "Next.js",
      "React",
      "Auth",
      "SEO",
      "Payments",
      "Multi-language",
    ],
    image: "/images/work/listify-marketplace.png",
    liveUrl: "https://listify.ae/",
    liveUrlLabel: "View live site — listify.ae",
};

const canhiringProject: PortfolioProject = {
    slug: "canhiring-job-portal",
    title: "CanHiring — Global Job Portal",
    category: "Job Tech / Recruitment",
    summary:
      "Worldwide job board connecting candidates and employers: live posting counter, hero job search by title, country and city, popular job categories, CV upload, and employer job-posting flows.",
    lead: "CanHiring is a global recruitment platform for finding jobs, employment, and career opportunities worldwide. A clean, conversion-focused hero pairs a live 'postings here for you' counter with a job search by keyword, country, and city, while candidates upload CVs and employers post jobs — all organized around a rich, browsable category taxonomy.",
    highlights: [
      "Hero search: job title/keywords with country and city selectors and a prominent Find Jobs CTA",
      "Live headline counter (e.g. 92,630 postings) for instant social proof and freshness",
      "Popular job categories grid — Accounting & Finance, IT, Engineering, Media, and more",
      "Dual paths: candidates 'Upload your CV', employers 'Post Job'",
      "Account system with Login / Register and role-based candidate vs employer experiences",
      "Real-time activity nudges (e.g. 'Patricia from New Zealand posted a new job') for trust",
      "Content hub via Company, Blog, and Pages navigation for SEO and credibility",
    ],
    sections: [
      {
        title: "Product and positioning",
        body: "CanHiring is a worldwide job portal built to connect job seekers with employers across countries and industries. The homepage leads with a bold, benefit-driven headline and a live count of open postings, signaling scale and freshness the moment a visitor lands. The layout balances a strong search module on the left with a professional hero image on the right, keeping first-time users focused on searching immediately.",
      },
      {
        title: "Search and discovery UX",
        body: "The core funnel is the hero job search: a keyword field plus country and city selectors and a single Find Jobs button reduce friction and ambiguity. Beneath it, a 'Popular Job Categories' grid — Accounting & Finance, Administrative & Office Support, Advertising & Media, Agriculture, Architecture & Design, Automotive, Banking & Financial, and more — enables zero-click browsing and drives category landing pages for SEO.",
      },
      {
        title: "Candidate and employer paths",
        body: "The platform serves two personas cleanly. Candidates can 'Upload your CV' and search/apply for roles, while employers use 'Post Job' to advertise openings. Login / Register supports role-based onboarding so each side lands in the right dashboard — applications and saved jobs for seekers, listings and applicant management for recruiters.",
      },
      {
        title: "Trust and engagement",
        body: "To build confidence in a crowded recruitment market, the site uses live activity nudges such as 'Patricia from New Zealand posted a new job', a large postings counter, and 'jobs live — added today' labels. Company, Blog, and Pages sections add depth, career content, and credibility that also support organic search.",
      },
      {
        title: "Frontend — modern web stack",
        body: "Built as a fast, responsive web application, CanHiring delivers a light, high-contrast UI with a clear typographic hierarchy and accent-blue actions. Reusable components — search shell, category cards, navigation dropdowns (Company, Blog, Pages) — keep the experience consistent and easy to extend with new categories, countries, and pages.",
      },
      {
        title: "Accounts, roles, and SEO",
        body: "Authentication drives role-based routing for candidates and employers, with CV storage and job-posting workflows behind login while public search and category pages stay crawlable. Country/city and category URLs, structured headings, and content pages position the portal to capture high-intent, long-tail job searches across global markets.",
      },
    ],
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Auth",
      "Job Portal",
      "SEO",
      "Dashboard",
    ],
    image: "/images/work/canhiring-platform.png",
    liveUrl: "https://canhiring.com/",
    liveUrlLabel: "View live site — canhiring.com",
};

export const portfolioProjects: PortfolioProject[] = [
  listifyProject,
  canhiringProject,
  devyoraCrmProject,
  polyhouseProject,
  homeTuitionProject,
  interntakProject,
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}
