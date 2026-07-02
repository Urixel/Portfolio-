export const siteConfig = {
  name: "Praise Emetie",
  title: "Brand Identity Designer & Creative Strategist",
  description:
    "I help businesses and startups solve communication problems through branding, visual systems, and design strategy.",
  email: "hello@praiseemetie.com",
  linkedin: "https://linkedin.com/in/praiseemetie",
  behance: "https://behance.net/praiseemetie",
  location: "Lagos, Nigeria · Available Worldwide",
  resumeUrl: "/Praise-Emetie-Resume.pdf",
};

export interface Project {
  id: string;
  title: string;
  industry: string;
  category: string;
  summary: string;
  heroColor: string;
  accentColor: string;
  year: string;
  services: string[];
  tags: string[];
  featured: boolean;
  challenge: string;
  approach: string;
  outcome: string;
  process: ProcessStep[];
  metrics: Metric[];
  behanceUrl?: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const projects: Project[] = [
  {
    id: "nexus-fintech",
    title: "Nexus — Fintech Brand Identity",
    industry: "Financial Technology",
    category: "Brand Identity",
    summary:
      "Complete brand identity system for a next-generation African fintech platform targeting SMEs. From positioning strategy to a full visual language.",
    heroColor: "#0D1B2A",
    accentColor: "#2563EB",
    year: "2024",
    services: ["Brand Strategy", "Visual Identity", "Design Systems", "Brand Guidelines"],
    tags: ["Fintech", "Startup", "Brand Identity"],
    featured: true,
    challenge:
      "Nexus needed to compete with established fintech giants while appealing to underserved SME owners across West Africa — audiences skeptical of traditional banking. The brand had to communicate trust, innovation, and accessibility simultaneously without falling into generic fintech tropes.",
    approach:
      "We began with a 3-week discovery sprint — stakeholder interviews, competitive mapping, and audience research across Lagos, Accra, and Nairobi. The positioning axis emerged: 'infrastructure for the ambitious.' This informed every visual decision: a mark built from forward momentum, a type system mixing editorial authority with technical precision, and a color language anchored in deep trust rather than shallow optimism.",
    outcome:
      "Nexus launched with a brand that immediately differentiated in a crowded market. The visual system scaled seamlessly from app UI to investor decks. Within 3 months of launch, Nexus closed a $2.4M seed round — with investors specifically citing brand professionalism as a key trust signal.",
    process: [
      { phase: "01", title: "Discovery & Research", description: "Stakeholder workshops, competitive audit, and user interviews across 3 markets. Identified a gap: most fintech brands spoke to tech, not to the human ambition behind the business." },
      { phase: "02", title: "Strategy & Positioning", description: "Developed brand positioning, personality, tone of voice, and messaging hierarchy. The north star: 'Infrastructure for the ambitious.'" },
      { phase: "03", title: "Visual Exploration", description: "Three distinct brand directions presented: Precision, Momentum, and Trust. Client chose a synthesis of Momentum and Trust — bold but grounded." },
      { phase: "04", title: "Identity System", description: "Logomark built from forward-moving geometry. Extended into a comprehensive visual language: typography, color system, iconography, motion principles." },
      { phase: "05", title: "Brand Guidelines", description: "200-page brand book covering every application scenario — digital, print, environmental, motion." },
    ],
    metrics: [
      { value: "$2.4M", label: "Seed round closed post-launch" },
      { value: "3wks", label: "Discovery to concept" },
      { value: "200+", label: "Brand guideline pages" },
      { value: "98%", label: "Client satisfaction score" },
    ],
    behanceUrl: "https://behance.net/praiseemetie",
  },
  {
    id: "terra-packaging",
    title: "Terra — Sustainable Packaging Brand",
    industry: "Consumer Goods / Sustainability",
    category: "Brand Identity + Packaging",
    summary:
      "Brand identity and packaging design system for an eco-conscious consumer goods startup. Built to stand out on shelf and communicate sustainability without clichés.",
    heroColor: "#0A1A0D",
    accentColor: "#10B981",
    year: "2024",
    services: ["Brand Identity", "Packaging Design", "Art Direction", "Visual Systems"],
    tags: ["Packaging", "Sustainability", "Startup"],
    featured: true,
    challenge:
      "Terra's packaging needed to break through at retail — an environment saturated with 'green' brands all using the same leaf icons, earth tones, and eco-guilt messaging. The client wanted to attract a younger, design-savvy demographic who are sustainability-conscious but aesthetically demanding.",
    approach:
      "We rejected the category language entirely. Research showed the target demographic responded more to confident design than environmental preachiness. Strategy: 'Sustainability as aesthetic, not statement.' This unlocked a design direction using structural geometry, material honesty, and intentional white space — letting the quality of the packaging communicate responsibility.",
    outcome:
      "Terra packaging earned a Packaging Digest Design Award nomination within 6 months. Retail placement expanded from 3 to 47 stores in year one. The brand's Instagram following grew organically to 28K as customers photographed and shared the packaging.",
    process: [
      { phase: "01", title: "Category Audit", description: "Mapped 40+ sustainable packaging brands. Identified a white space: confident, aesthetic-first design was absent from the eco category." },
      { phase: "02", title: "Consumer Research", description: "Focus groups with target demographic revealed aesthetic standards as high as functional — unboxing experience mattered as much as sustainability credentials." },
      { phase: "03", title: "Design Direction", description: "Developed 'Structural Minimalism' as the visual language. Bold geometry, honest materials, zero decorative elements that don't earn their space." },
      { phase: "04", title: "Packaging System", description: "Designed across 12 SKUs, 3 product lines. Every format — pouch, box, sleeve, label — derived from the same geometric system." },
      { phase: "05", title: "Brand World", description: "Extended into digital brand: social media system, e-commerce photography art direction, and brand video guidelines." },
    ],
    metrics: [
      { value: "47", label: "Retail locations in year one" },
      { value: "28K", label: "Organic Instagram followers" },
      { value: "12", label: "SKUs in packaging system" },
      { value: "Award", label: "Packaging Digest nomination" },
    ],
    behanceUrl: "https://behance.net/praiseemetie",
  },
  {
    id: "velo-saas",
    title: "Velo — SaaS Product Brand",
    industry: "B2B SaaS / Productivity",
    category: "Brand Identity + UI Direction",
    summary:
      "Brand identity and product design direction for a B2B workflow automation platform targeting remote-first engineering teams.",
    heroColor: "#0D0D1A",
    accentColor: "#7C3AED",
    year: "2023",
    services: ["Brand Identity", "UI Design Direction", "Design System", "Product Branding"],
    tags: ["SaaS", "B2B", "Tech", "UI"],
    featured: true,
    challenge:
      "Velo was a technically superior product drowning in an identity crisis — generic SaaS aesthetic, no distinct personality, and a product UI that felt disconnected from any brand intention. They needed a unified brand-to-product design language before their Series A.",
    approach:
      "The brief demanded a rare synthesis: brand identity that could live equally in a marketing site, a complex product dashboard, and investor materials. We developed a visual language system first — a set of design tokens and compositional principles — then derived both brand and UI from that shared foundation.",
    outcome:
      "Velo raised an $8.5M Series A within 4 months of rebrand. The new brand-unified product experience drove a 34% improvement in trial-to-paid conversion. The design system is now maintained by an internal team of 6.",
    process: [
      { phase: "01", title: "Brand-Product Audit", description: "Full audit of current brand, product UI, marketing collateral, and competitor landscape. Identified inconsistency as the primary trust barrier." },
      { phase: "02", title: "Design Language Strategy", description: "Developed a foundational design language: a token system, spatial grammar, and compositional rules that would govern both brand and product." },
      { phase: "03", title: "Identity System", description: "Mark, wordmark, and extended brand assets built from the design language. Clean, systematic, unmistakably technical." },
      { phase: "04", title: "Product Direction", description: "Applied design language to product UI — dashboard, navigation, data visualization. Handed off comprehensive specs to the product team." },
      { phase: "05", title: "Design System", description: "Built a Figma component library and token documentation covering 400+ components across web and mobile." },
    ],
    metrics: [
      { value: "$8.5M", label: "Series A raised post-rebrand" },
      { value: "+34%", label: "Trial-to-paid conversion" },
      { value: "400+", label: "Design system components" },
      { value: "6", label: "Designers now on system" },
    ],
    behanceUrl: "https://behance.net/praiseemetie",
  },
  {
    id: "studio-volta",
    title: "Studio Volta — Creative Agency Identity",
    industry: "Creative Services",
    category: "Brand Identity",
    summary:
      "Premium brand identity for a boutique creative agency in Lagos. The brand needed to command international respect while carrying unmistakable African creative energy.",
    heroColor: "#1A0A0A",
    accentColor: "#F59E0B",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Typography Design", "Brand Applications"],
    tags: ["Agency", "Creative", "Premium", "Nigeria"],
    featured: true,
    challenge:
      "Studio Volta operated in a paradox: deep roots in Lagos creative culture, ambitious international clientele. Previous attempts to appear 'global' had stripped the brand of everything that made it interesting. The real challenge was synthesizing — not choosing between — both identities.",
    approach:
      "Rather than softening the Lagos influence, we amplified it through the lens of editorial sophistication. Research into African modernist design history surfaced rich references — the brutalist architecture of 1970s Lagos, the bold graphic tradition of Afrobeat album art, the geometric systems of Kente textile. These became the generative grammar of a visual identity that felt unmistakably original.",
    outcome:
      "Studio Volta won two new international clients within 6 weeks of brand launch — both citing the brand as the primary reason they reached out. The identity was featured in Brand New (UnderConsideration) as a standout African brand identity of 2023.",
    process: [
      { phase: "01", title: "Cultural Research", description: "Deep dive into Lagos creative history, African modernism, and the specific cultural references Studio Volta's founders brought to their work." },
      { phase: "02", title: "Synthesis Strategy", description: "Developed the strategic paradox into a brand truth: 'Global precision, Lagos soul.' This became the lens for every design decision." },
      { phase: "03", title: "Typography-Led Identity", description: "Custom lettering and type system as the primary brand differentiator. An expression of editorial authority informed by African graphic tradition." },
      { phase: "04", title: "Visual Language", description: "Extended the typographic identity into a full visual system: spatial composition rules, color language, and a unique pattern system derived from architectural references." },
      { phase: "05", title: "Applications", description: "Brand applied across stationary system, digital presence, presentation templates, and physical studio environment." },
    ],
    metrics: [
      { value: "2", label: "International clients in 6 weeks" },
      { value: "Featured", label: "Brand New, UnderConsideration" },
      { value: "3×", label: "Revenue growth in year one" },
      { value: "100%", label: "Client retention post-rebrand" },
    ],
    behanceUrl: "https://behance.net/praiseemetie",
  },
];

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    description: "Comprehensive visual identity systems — from strategic positioning to logomarks, typography, color systems, and brand guidelines that scale.",
    icon: "Layers",
    deliverables: ["Logo & Logomark", "Visual Identity System", "Brand Guidelines", "Color & Type Systems"],
  },
  {
    id: "visual-systems",
    title: "Visual Systems",
    description: "Design systems and component libraries that maintain brand consistency across every digital and physical touchpoint.",
    icon: "Grid",
    deliverables: ["Design Token Systems", "Component Libraries", "Pattern Libraries", "Multi-format Guidelines"],
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    description: "Strategic art direction for campaigns, brand worlds, and visual narratives that communicate complex ideas with clarity.",
    icon: "Eye",
    deliverables: ["Art Direction", "Campaign Direction", "Photography Direction", "Brand World Development"],
  },
  {
    id: "social-media",
    title: "Social Media Design",
    description: "Distinctive social media visual systems that maintain brand integrity while driving engagement across platforms.",
    icon: "Share2",
    deliverables: ["Social Templates", "Content Systems", "Story Frameworks", "Brand Motion Guidelines"],
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description: "Structural and surface design for packaging that performs at retail and communicates brand values at first glance.",
    icon: "Package",
    deliverables: ["Packaging Structure", "Surface Design", "Label Design", "Multi-SKU Systems"],
  },
  {
    id: "ai-workflows",
    title: "AI-Assisted Creative Workflows",
    description: "Integrating AI tools into the creative process to accelerate ideation, prototype faster, and deliver more value per engagement.",
    icon: "Cpu",
    deliverables: ["AI Moodboarding", "Rapid Prototyping", "Concept Generation", "Workflow Optimization"],
  },
];

export const skills = {
  Design: ["Brand Identity", "Visual Systems", "Typography", "Color Theory", "Packaging Design", "Logo Design", "Art Direction", "Motion Graphics"],
  Strategy: ["Brand Strategy", "Competitive Analysis", "Audience Research", "Positioning", "Messaging Architecture", "Creative Direction"],
  Tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign", "After Effects", "Framer", "Webflow", "Midjourney", "Runway"],
  Communication: ["Client Presentations", "Brand Storytelling", "Design Documentation", "Workshop Facilitation", "Cross-functional Collaboration"],
};

export const testimonials = [
  {
    name: "Amara Okonkwo",
    role: "CEO, Nexus Financial",
    company: "Nexus",
    text: "Praise didn't just design a logo. He built a brand that investors took seriously and customers trusted. The strategic thinking behind every visual decision was unlike anything I'd seen from a designer before.",
    avatar: "AO",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Terra Goods",
    company: "Terra",
    text: "We went from being invisible on shelf to customers photographing our packaging and posting it organically. That's the power of design that understands both strategy and aesthetics.",
    avatar: "SM",
  },
  {
    name: "Tunde Adeyemi",
    role: "Creative Director, Studio Volta",
    company: "Studio Volta",
    text: "Praise understood what we couldn't articulate ourselves — how to be proudly African and internationally competitive at the same time. The brand he created is genuinely ours.",
    avatar: "TA",
  },
  {
    name: "Marcus Chen",
    role: "VP Product, Velo",
    company: "Velo",
    text: "The rare designer who thinks in systems. Praise built a design language that unified our brand and product in ways our internal team had struggled with for years.",
    avatar: "MC",
  },
];
