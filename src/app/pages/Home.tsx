import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Link } from "react-router";
import { useRef, useState } from "react";
import { Marquee } from "../components/Marquee";
import { projects } from "../data/projects";

const APP_STORE = "https://apps.apple.com/app/id6803135475";

/* ─── App Store Badge ─────────────────────────────────────────────────────── */
function AppStoreBadge({ size = 156 }: { size?: number }) {
  const h = Math.round(size * (40 / 135));
  return (
    <a href={APP_STORE} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
      <svg width={size} height={h} viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="7" fill="#000" />
        <rect width="135" height="40" rx="7" stroke="#A6A6A6" strokeWidth="0.5" fill="none" />
        <path d="M24.77 20.3c-.02-2.52 2.06-3.75 2.16-3.81-1.18-1.72-3.01-1.96-3.66-1.98-1.55-.16-3.03.92-3.82.92-.8 0-2.02-.9-3.33-.87-1.7.03-3.27 1-4.15 2.52-1.78 3.08-.46 7.63 1.27 10.13.85 1.22 1.86 2.59 3.18 2.54 1.28-.05 1.76-.82 3.31-.82 1.54 0 1.98.82 3.33.8 1.38-.02 2.24-1.24 3.08-2.47.98-1.41 1.38-2.79 1.4-2.86-.03-.01-2.68-1.03-2.77-4.1z" fill="#fff" />
        <path d="M22.34 13.37c.71-.86 1.18-2.05 1.05-3.25-1.02.04-2.25.68-2.98 1.52-.65.75-1.22 1.96-1.07 3.11 1.14.09 2.3-.57 3-1.38z" fill="#fff" />
        <text x="38" y="14" fontSize="7.5" fontFamily="-apple-system,'Helvetica Neue',sans-serif" fill="#fff" fontWeight="400" letterSpacing="0.1">Download on the</text>
        <text x="38" y="27" fontSize="13.5" fontFamily="-apple-system,'Helvetica Neue',sans-serif" fill="#fff" fontWeight="500" letterSpacing="-0.2">App Store</text>
      </svg>
    </a>
  );
}

/* ─── Feature sticky scroll data ─────────────────────────────────────────── */
const FEATURES = [
  {
    n: "01",
    title: "Music Playback",
    body: "Full transport controls — play, pause, skip, scrub. Album art and track metadata from your library.",
    screen: "/images/screen1.jpg",
  },
  {
    n: "02",
    title: "Device Discovery",
    body: "The app automatically detects compatible Bose devices on your local network. No pairing, no setup.",
    screen: "/images/screen2.jpg",
  },
  {
    n: "03",
    title: "Sound Control",
    body: "Adjust volume and sound preferences precisely from your phone, without touching the hardware.",
    screen: "/images/screen3.jpg",
  },
  {
    n: "04",
    title: "Audio Streaming",
    body: "Browse your music library and connected sources. Stream directly to your Bose device.",
    screen: "/images/screen4.jpg",
  },
  {
    n: "05",
    title: "Device Settings",
    body: "Access configuration, connection status, and audio preferences for your Bose device.",
    screen: "/images/screen5.jpg",
  },
];

/* ─── Feature sticky scroll ──────────────────────────────────────────────── */
function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      FEATURES.length - 1,
      Math.floor(v * FEATURES.length)
    );
    setActive(idx);
  });

  const PHONE_W = 220;
  const PHONE_H = Math.round(PHONE_W * (2868 / 1320));

  return (
    <div
      ref={containerRef}
      style={{ height: `${FEATURES.length * 90}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a] flex pt-20">
        {/* Left: feature text */}
        <div className="flex-1 flex flex-col justify-end pb-16 md:pb-24 pl-6 md:pl-10 lg:pl-16 pr-6 relative">
          {/* Section label */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "48px",
            }}
          >
            App capabilities
          </p>

          {/* Feature numbers (ambient) */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(4rem, 12vw, 9rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.85,
                    color: "rgba(255,255,255,0.04)",
                    userSelect: "none",
                    position: "absolute",
                    top: "-1.5em",
                    left: "-0.05em",
                  }}
                >
                  {FEATURES[active].n}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="flex gap-1.5 mb-8">
              {FEATURES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "2px",
                    background: i === active ? "#B5920A" : "rgba(255,255,255,0.18)",
                    transition: "width 0.35s ease, background 0.35s ease",
                    borderRadius: "999px",
                  }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#B5920A",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {FEATURES[active].n}
                </p>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.95,
                    color: "#ffffff",
                    marginBottom: "16px",
                    maxWidth: "380px",
                  }}
                >
                  {FEATURES[active].title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.72,
                    color: "rgba(255,255,255,0.45)",
                    maxWidth: "340px",
                  }}
                >
                  {FEATURES[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: phone */}
        <div
          className="hidden md:flex items-center justify-center pr-10 lg:pr-16"
          style={{ minWidth: "280px" }}
        >
          <div
            style={{
              width: PHONE_W,
              height: PHONE_H,
              position: "relative",
              borderRadius: "36px",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
              background: "#111",
              flexShrink: 0,
            }}
          >
            {FEATURES.map((f, i) => (
              <motion.img
                key={f.n}
                src={f.screen}
                alt={f.title}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.04]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  const PHONE_W = 240;
  const PHONE_H = Math.round(PHONE_W * (2868 / 1320));

  return (
    <div style={{ overflowX: "clip" }}>

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO — full dark, centered phone, overlaid text
         ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
      >
        {/* Full-bleed background photo */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={import.meta.env.BASE_URL + "images/hero-phone.jpg"}
            alt=""
            aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
          {/* Dark overlay so text stays readable */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </motion.div>

        {/* Top-left: small label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          style={{ opacity: heroOpacity }}
          className="absolute top-[100px] left-6 md:left-10 lg:left-16 z-10 flex items-center gap-2"
        >
          <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#B5920A" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)" }}>
            PAR–NEPAR · iOS
          </span>
        </motion.p>

        {/* Bottom: heading + CTA together — no gap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-0 right-0 px-6 md:px-10 lg:px-16 z-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
            {/* Heading */}
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#ffffff",
              }}
            >
              Bose Sound<br />Controller
            </h1>

            {/* CTA + meta */}
            <div className="flex flex-col gap-4 shrink-0 md:pb-1">
              <div className="flex flex-wrap items-center gap-3">
                <AppStoreBadge size={140} />
                <Link
                  to="/app"
                  className="inline-flex items-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white border border-[rgba(255,255,255,0.22)] hover:border-white transition-colors duration-200"
                  style={{ borderRadius: "999px" }}
                >
                  See screenshots
                </Link>
              </div>
              <p style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)" }}>
                Free · iOS 15.0+ · PAR-NEPAR d.o.o.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MARQUEE
         ══════════════════════════════════════════════════════════════════════ */}
      <Marquee dark />

      {/* ═══════════════════════════════════════════════════════════════════════
          PROJECTS STRIP — horizontal scrollable cards
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-14 md:pt-20 pb-0" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="px-6 md:px-10 lg:px-16 mb-8 flex items-end justify-between">
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "8px" }}>
              Our projects
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.91,
                color: "#0a0a0a",
              }}
            >
              What we build
            </h2>
          </div>
          <Link
            to="/projects"
            style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0a0a0a", textDecoration: "none", paddingBottom: "4px", flexShrink: 0 }}
          >
            All projects →
          </Link>
        </div>

        {/* Horizontal scroll strip */}
        <div
          className="overflow-x-auto pb-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab" } as React.CSSProperties}
          onMouseDown={(e) => {
            const el = e.currentTarget;
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            el.style.cursor = "grabbing";
            const onMove = (ev: MouseEvent) => { el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX); };
            const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          <div className="flex gap-4 pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16">
            {/* Bose — large featured card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0"
              style={{ width: "clamp(280px, 36vw, 420px)" }}
            >
              <Link to="/projects/bose-sound-controller" className="block group">
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ background: "#0a0a0a", borderRadius: "16px", aspectRatio: "3/4" }}
                >
                  <span aria-hidden style={{ position: "absolute", right: "-0.04em", bottom: "-0.12em", fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(6rem, 18vw, 13rem)", textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: 0.8, color: "rgba(255,255,255,0.04)", userSelect: "none", pointerEvents: "none" }}>B</span>
                  <div style={{ position: "absolute", top: "24px", left: "24px", width: "28px", height: "3px", background: "#B5920A", borderRadius: "999px" }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B5920A", marginBottom: "8px" }}>Flagship · 2025</span>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.91, color: "#ffffff", marginBottom: "8px" }}>Bose Sound Controller</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>iOS companion for Bose audio devices</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Other projects — smaller */}
            {projects.slice(1, 4).map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 1) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
                style={{ width: "clamp(200px, 24vw, 280px)" }}
              >
                <Link to={`/projects/${p.slug}`} className="block group">
                  <div
                    className="relative overflow-hidden mb-4"
                    style={{ background: p.color, borderRadius: "16px", aspectRatio: "3/4" }}
                  >
                    <span aria-hidden style={{ position: "absolute", right: "-0.04em", bottom: "-0.12em", fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(6rem, 16vw, 11rem)", textTransform: "uppercase", letterSpacing: "-0.05em", lineHeight: 0.8, color: p.textLight ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)", userSelect: "none", pointerEvents: "none" }}>{p.name[0]}</span>
                    <div style={{ position: "absolute", top: "20px", left: "20px", width: "24px", height: "2px", background: p.accent, borderRadius: "999px" }} />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: p.accent, marginBottom: "6px" }}>{p.year}</span>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.91, color: p.textLight ? "#ffffff" : "#0a0a0a", marginBottom: "6px" }}>{p.name}</p>
                      <p style={{ fontSize: "11px", color: p.textLight ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", lineHeight: 1.5 }}>{p.category}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. HOW IT WORKS — giant ambient numbers
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        {[
          {
            n: "01",
            title: "Connect to Wi-Fi",
            body: "Make sure your Bose device and iPhone are on the same Wi-Fi network.",
            bg: "#ffffff",
          },
          {
            n: "02",
            title: "Open the app",
            body: "The app automatically discovers compatible Bose devices — no manual pairing needed.",
            bg: "#F4F4F4",
          },
          {
            n: "03",
            title: "Control everything",
            body: "Play music, adjust sound settings, and manage your Bose device from one interface.",
            bg: "#ffffff",
          },
        ].map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden"
            style={{
              background: step.bg,
              borderTop: "1px solid #E0E0E0",
              minHeight: "280px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Giant ambient number */}
            <span
              style={{
                position: "absolute",
                right: "-0.05em",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(8rem, 22vw, 18rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
                color: i % 2 === 0 ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.05)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {step.n}
            </span>

            {/* Step content */}
            <div className="relative z-10 px-6 md:px-10 lg:px-16 py-14 md:py-16 max-w-[1440px] mx-auto w-full">
              <div className="max-w-[480px]">
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#B5920A",
                    marginBottom: "14px",
                  }}
                >
                  Step {step.n}
                </p>
                <h2
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.95,
                    color: "#0a0a0a",
                    marginBottom: "16px",
                  }}
                >
                  {step.title}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "#595959",
                    maxWidth: "360px",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. FEATURE STICKY SCROLL
         ══════════════════════════════════════════════════════════════════════ */}
      <FeatureScroll />

      {/* ═══════════════════════════════════════════════════════════════════════
          MARQUEE (light)
         ══════════════════════════════════════════════════════════════════════ */}
      <Marquee dark={false} speed={22} />

      {/* ═══════════════════════════════════════════════════════════════════════
          4. APP STORE CTA — split screen
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row" style={{ minHeight: "70vh" }}>
        {/* Left: dark */}
        <div
          className="flex-1 bg-[#0a0a0a] flex flex-col justify-end px-6 md:px-10 lg:px-14 pt-20 pb-16 md:pb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "20px",
              }}
            >
              Available now
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.91,
                color: "#ffffff",
                marginBottom: "28px",
              }}
            >
              Download<br />free on<br />App Store
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "340px",
                marginBottom: "40px",
              }}
            >
              No account needed. Works with compatible Bose audio devices on your Wi-Fi.
            </p>
            <AppStoreBadge size={160} />
          </motion.div>
        </div>

        {/* Right: light */}
        <div
          className="flex-1 bg-white flex flex-col justify-end px-6 md:px-10 lg:px-14 pt-20 pb-16 md:pb-20"
          style={{ borderLeft: "1px solid #E0E0E0" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#595959",
                marginBottom: "20px",
              }}
            >
              App details
            </p>
            <div>
              {[
                { label: "Developer", value: "PAR - NEPAR d.o.o." },
                { label: "Category", value: "Music" },
                { label: "Platform", value: "iPhone, iPad" },
                { label: "Requires", value: "iOS 15.0+" },
                { label: "Language", value: "English" },
                { label: "Price", value: "Free" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className="flex justify-between items-baseline py-3.5"
                  style={{
                    borderTop: "1px solid #E0E0E0",
                    borderBottom: i === arr.length - 1 ? "1px solid #E0E0E0" : "none",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#595959" }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "#0a0a0a" }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/app"
                className="inline-flex items-center px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] bg-[#0a0a0a] text-white hover:bg-[#333] transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                View all features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. PAR-NEPAR — minimal strip
         ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-[#F4F4F4] px-6 md:px-10 lg:px-16 py-16 md:py-20"
        style={{ borderTop: "1px solid #E0E0E0" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "8px" }}>
              Developer
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(1.25rem, 3vw, 2rem)", textTransform: "uppercase", letterSpacing: "-0.03em", color: "#0a0a0a" }}>
              PAR–NEPAR d.o.o. — Zagreb, Croatia
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] border border-[#E0E0E0] text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors duration-200 shrink-0"
            style={{ borderRadius: "999px" }}
          >
            About us
          </Link>
        </div>
      </section>

    </div>
  );
}
