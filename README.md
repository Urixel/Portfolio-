import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "luvana",
    title: "Luvana",
    industry: "Skincare / Beauty",
    type: "Personal Project",
    category: "Brand Identity",
    summary:
      "A personal brand identity project — crafting a full visual language for a natural skincare brand from positioning and naming through to packaging and social media direction.",
    color: "#9333EA",
    accent: "#F9A8D4",
    tags: ["Brand Identity", "Packaging", "Social Media", "Personal Project"],
    year: "2024",
    hero: "#1a0d2e",
    challenge:
      "The beauty market is saturated with either clinical minimalism or maximalist luxury. Luvana needed to occupy a distinct third space: confident, natural, and accessible — premium without being pretentious, warm without being cheap.",
    process:
      "I defined the brand around one truth: 'Confidence in your natural glow.' From there I built a palette of deep plum, orchid, petal blush, and dusty slate — colours that feel skincare-specific without mimicking competitors. Typography paired a refined serif for headlines with a clean humanist sans for body copy. Every asset was designed to scale from a 1080×1080 Instagram post to physical packaging.",
    outcome:
      "A complete identity system: logo suite across all lockups, full colour and typography guide, packaging mockups, brand voice and messaging framework, and a 60-day social media content kit with 40+ ready-to-use templates.",
    metrics: ["Full identity in 3 weeks", "Packaging print-ready", "40+ social templates", "Personal portfolio centrepiece"],
    socialDesigns: [
      { label: "Product Launch Post", bg: "linear-gradient(135deg, #1a0d2e 0%, #9333EA22 100%)", accent: "#9333EA" },
      { label: "Skincare Tip Card", bg: "linear-gradient(135deg, #2d1060 0%, #F9A8D415 100%)", accent: "#F9A8D4" },
      { label: "Brand Story Reel Cover", bg: "linear-gradient(135deg, #1a0d2e 0%, #9333EA30 100%)", accent: "#C084FC" },
      { label: "Ingredients Feature", bg: "linear-gradient(135deg, #0f0820 0%, #9333EA18 100%)", accent: "#A855F7" },
    ],
  },
  {
    id: "the-cloud-guys",
    title: "The Cloud Guys",
    industry: "Tech Community / Online",
    type: "Client Project",
    category: "Brand Identity",
    summary:
      "Brand identity for a real online tech community — building a visual language that communicates expertise, approachability, and community spirit for cloud computing enthusiasts.",
    color: "#0EA5E9",
    accent: "#38BDF8",
    tags: ["Brand Identity", "Community Brand", "Social Media", "Digital"],
    year: "2024",
    hero: "#020b18",
    challenge:
      "Tech communities often default to sterile, corporate-looking branding that alienates the very people they're trying to attract. The Cloud Guys needed to feel credible and knowledgeable, but also warm, human, and genuinely fun to be part of.",
    process:
      "I began with a deep audit of how the community actually spoke — their tone in posts, how members described the group, what kept people coming back. The insight: cloud tech is often taught with intimidation; The Cloud Guys do the opposite. The visual identity had to embody that contrast. I chose sky-to-midnight blue gradients, a bold geometric wordmark, and a supporting icon language built around cloud forms, network nodes, and elevation metaphors.",
    outcome:
      "A full community brand system: primary logo with variants, a social media identity system, profile and banner templates across platforms, content card templates, community swag concepts, and a tone-of-voice guide that helps moderators and content creators stay on-brand.",
    metrics: ["Community of 500+ members", "Consistent cross-platform presence", "Brand recognition within 2 weeks of launch", "Active daily content system"],
    socialDesigns: [
      { label: "Community Announcement", bg: "linear-gradient(135deg, #020b18 0%, #0EA5E922 100%)", accent: "#0EA5E9" },
      { label: "Cloud Tip of the Day", bg: "linear-gradient(135deg, #041525 0%, #38BDF820 100%)", accent: "#38BDF8" },
      { label: "Member Spotlight", bg: "linear-gradient(135deg, #020b18 0%, #0EA5E930 100%)", accent: "#7DD3FC" },
      { label: "Event Promo Card", bg: "linear-gradient(135deg, #031020 0%, #0EA5E925 100%)", accent: "#0EA5E9" },
    ],
  },
];

const SERVICES = [
  { title: "Brand Identity Design", desc: "Logo systems, visual language, and identity guidelines that make brands recognizable and resilient.", icon: "◈" },
  { title: "Visual Systems", desc: "Scalable design systems — colour, type, spacing, and components — built for teams that move fast.", icon: "⊞" },
  { title: "Creative Direction", desc: "Strategic visual direction for campaigns, launches, and product storytelling.", icon: "◎" },
  { title: "Social Media Design", desc: "Content systems and template libraries that keep brands consistent at scale.", icon: "◻" },
  { title: "Packaging Design", desc: "Shelf-ready packaging that communicates brand values at a glance.", icon: "⬡" },
  { title: "AI-Assisted Workflows", desc: "Faster ideation, moodboarding, and prototyping with AI integrated into the creative process.", icon: "⟡" },
];

const TESTIMONIALS = [
  {
    quote: "Praise didn't just design a logo — she gave us a language. Every touchpoint now feels intentional and alive.",
    name: "Community Lead",
    role: "The Cloud Guys",
    initial: "C",
    color: "#0EA5E9",
  },
  {
    quote: "Fast, strategic, and deeply creative. Working with Praise felt like having a full creative director on demand.",
    name: "Founder",
    role: "Luvana Skincare",
    initial: "L",
    color: "#9333EA",
  },
  {
    quote: "She understood what we were building before we'd finished explaining it. That instinct is rare.",
    name: "Startup Founder",
    role: "Tech Brand Client",
    initial: "S",
    color: "#10B981",
  },
];

const SKILLS = {
  Design: ["Brand Identity", "Logo Design", "Typography", "Visual Systems", "Packaging Design", "Social Media Design", "UI Direction"],
  Strategy: ["Brand Strategy", "Competitive Analysis", "Positioning", "Creative Briefing", "Content Strategy"],
  Tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Framer", "Midjourney", "Adobe InDesign"],
  Communication: ["Client Presentations", "Brand Guidelines", "Stakeholder Management", "Creative Direction"],
};

const TICKER_ITEMS = [
  "Brand Identity", "Visual Strategy", "Creative Direction", "Design Systems",
  "Figma", "AI Workflows", "Packaging", "Typography", "Logo Design", "Brand Voice",
];

// Social media showcase items — brand-agnostic examples across both projects
const SOCIAL_SHOWCASE = [
  { project: "Luvana", label: "Product Launch", format: "Feed Post", color: "#9333EA", bg: "#1a0d2e", size: "1×1" },
  { project: "The Cloud Guys", label: "Community Tip", format: "Feed Post", color: "#0EA5E9", bg: "#020b18", size: "1×1" },
  { project: "Luvana", label: "Brand Story", format: "Reel Cover", color: "#C084FC", bg: "#2d1060", size: "9×16" },
  { project: "The Cloud Guys", label: "Event Promo", format: "Story", color: "#38BDF8", bg: "#041525", size: "9×16" },
  { project: "Luvana", label: "Ingredients Feature", format: "Carousel Slide", color: "#F9A8D4", bg: "#1a0d2e", size: "1×1" },
  { project: "The Cloud Guys", label: "Member Spotlight", format: "Carousel Slide", color: "#7DD3FC", bg: "#031020", size: "1×1" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s` }}>
      {children}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({ setActivePage, setActiveProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goHome = () => { setActivePage("home"); setActiveProject(null); setMenuOpen(false); window.scrollTo(0, 0); };
  const scrollTo = (id) => { setActivePage("home"); setMenuOpen(false); setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 60); };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(10,10,10,0.93)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? "1px solid #27272A" : "1px solid transparent", transition: "all 0.3s ease" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={goHome} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#2563EB", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, letterSpacing: "-0.02em" }}>P</span>
          </div>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>Praise Emetie</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {[["Work", "work"], ["About", "about"], ["Services", "services"], ["Contact", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#A1A1AA", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#fff"} onMouseLeave={e => e.target.style.color = "#A1A1AA"}>{label}</button>
          ))}
          <button style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s" }} onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>Download CV</button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: 20, display: "none" }} className="mobile-menu-btn">{menuOpen ? "✕" : "☰"}</button>
      </div>

      {menuOpen && (
        <div style={{ background: "#111827", borderTop: "1px solid #27272A", padding: "16px 24px 24px" }}>
          {[["Work", "work"], ["About", "about"], ["Services", "services"], ["Contact", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", color: "#A1A1AA", fontSize: 16, fontWeight: 500, padding: "13px 0", borderBottom: "1px solid #27272A" }}>{label}</button>
          ))}
          <button style={{ marginTop: 16, width: "100%", background: "#2563EB", color: "#fff", border: "none", borderRadius: 8, padding: "13px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Download CV</button>
        </div>
      )}
    </nav>
  );
}

// ─── Ticker ──────────────────────────────────────────────────────────────────

function Ticker() {
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid #27272A", borderBottom: "1px solid #27272A", padding: "11px 0", background: "#0A0A0A" }}>
      <div style={{ display: "flex", animation: "ticker 30s linear infinite", whiteSpace: "nowrap" }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", marginRight: 44, color: "#A1A1AA", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: i % 5 === 0 ? "#2563EB" : "#27272A", marginRight: 16, flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero({ setActivePage }) {
  const words = ["Brands", "Systems", "Stories", "Strategy"];
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % words.length); setFade(true); }, 280);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 24px 60px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ maxWidth: 840 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.22)", borderRadius: 100, padding: "6px 14px", marginBottom: 36 }}>
          <span style={{ width: 7, height: 7, background: "#10B981", borderRadius: "50%", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#A1A1AA", fontSize: 12, fontWeight: 500, letterSpacing: "0.06em" }}>AVAILABLE FOR NEW PROJECTS</span>
        </div>

        <h1 style={{ fontSize: "clamp(40px,7vw,86px)", fontWeight: 800, lineHeight: 1.05, color: "#fff", letterSpacing: "-0.03em", marginBottom: 28 }}>
          I Design{" "}
          <span style={{ color: "#2563EB", fontStyle: "italic", opacity: fade ? 1 : 0, transition: "opacity 0.28s ease", display: "inline-block" }}>
            {words[wordIdx]}
          </span>
          <br />That Solve Problems.
        </h1>

        <p style={{ fontSize: "clamp(15px,2vw,19px)", color: "#A1A1AA", lineHeight: 1.75, maxWidth: 560, marginBottom: 44 }}>
          Brand Identity Designer & Creative Strategist helping startups and businesses communicate with clarity, confidence, and visual precision.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => { const el = document.getElementById("work"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8 }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(0)"; }}>
            View Work <span>→</span>
          </button>
          <button style={{ background: "transparent", color: "#fff", border: "1px solid #27272A", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#4B5563"; e.currentTarget.style.background = "#1A1A1A"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#27272A"; e.currentTarget.style.background = "transparent"; }}>
            Download Resume
          </button>
          <button onClick={() => { const el = document.getElementById("contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            style={{ background: "transparent", color: "#A1A1AA", border: "none", borderRadius: 10, padding: "14px 20px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "#A1A1AA"}>
            Contact Me
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 48, marginTop: 80, paddingTop: 48, borderTop: "1px solid #27272A", flexWrap: "wrap" }}>
        {[["3+", "Years Experience"], ["2", "Signature Projects"], ["100%", "Client Satisfaction"], ["Global", "Remote Ready"]].map(([val, label]) => (
          <div key={label}>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{val}</div>
            <div style={{ fontSize: 13, color: "#A1A1AA", marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Work Section ─────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "#1A1A1A", border: `1px solid ${hover ? project.color + "55" : "#27272A"}`, borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease", transform: hover ? "translateY(-4px)" : "translateY(0)", boxShadow: hover ? `0 24px 60px ${project.color}18` : "none" }}>

      {/* Cover */}
      <div style={{ height: 240, background: `linear-gradient(140deg, ${project.hero} 0%, ${project.color}28 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ width: 84, height: 84, background: project.color, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800, color: "#fff", transform: hover ? "scale(1.06) rotate(4deg)" : "scale(1)", transition: "transform 0.3s ease" }}>
          {project.title[0]}
        </div>
        <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "4px 10px", fontSize: 10, color: "#A1A1AA", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {project.type}
        </div>
        <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "4px 10px", fontSize: 11, color: "#A1A1AA", fontWeight: 500 }}>
          {project.year}
        </div>
      </div>

      <div style={{ padding: "28px 28px 32px" }}>
        <div style={{ fontSize: 10, color: project.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{project.industry}</div>
        <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>{project.title}</h3>
        <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.7, marginBottom: 22 }}>{project.summary}</p>

        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: 11, color: "#A1A1AA", background: "#0A0A0A", border: "1px solid #27272A", borderRadius: 6, padding: "4px 10px", fontWeight: 500 }}>{tag}</span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: project.color, fontSize: 13, fontWeight: 700 }}>
          View Case Study
          <span style={{ transition: "transform 0.2s", transform: hover
