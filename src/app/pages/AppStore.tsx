import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Marquee } from "../components/Marquee";

const APP_STORE = "https://apps.apple.com/app/id6803135475";

const screens = [
  { src: "/images/screen1.jpg", label: "Listen", desc: "Music playback" },
  { src: "/images/screen2.jpg", label: "Device", desc: "Device discovery" },
  { src: "/images/screen3.jpg", label: "Playback", desc: "Full controls" },
  { src: "/images/screen4.jpg", label: "Settings", desc: "Audio settings" },
  { src: "/images/screen5.jpg", label: "Library", desc: "Browse content" },
];

const features = [
  { n: "01", title: "Music Playback", body: "Play, pause, skip, scrub. Album art and track info always visible." },
  { n: "02", title: "Device Discovery", body: "Automatic detection of Bose speakers and headphones on your network." },
  { n: "03", title: "Sound Control", body: "Volume and audio preferences from your iPhone — no hardware needed." },
  { n: "04", title: "Audio Streaming", body: "Browse your music library and stream directly to your Bose device." },
  { n: "05", title: "Device Settings", body: "Configuration, connection status, and audio preferences in one place." },
];

/* ─── Parallax hero image ─────────────────────────────────────────────────── */
function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="/images/app-lifestyle.jpg"
          alt="Bose Sound Controller in use"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        {/* gradient overlay bottom → title readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Hero text — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-14 md:pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#B5920A", flexShrink: 0 }} />
            PAR–NEPAR · App Store
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#ffffff",
              }}
            >
              Bose Sound<br />Controller
            </h1>

            <div className="shrink-0 flex flex-col gap-4">
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: "280px" }}>
                The complete iOS controller for Bose audio devices. Free on the App Store.
              </p>
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.07em] bg-white text-[#0a0a0a] hover:bg-[#E0E0E0] transition-colors duration-200 self-start"
                style={{ borderRadius: "999px" }}
              >
                Download free
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AppStore() {
  return (
    <div style={{ overflowX: "clip" }} className="bg-[#0a0a0a] text-white">

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — full bleed lifestyle photo, parallax
         ══════════════════════════════════════════════════════════════════════ */}
      <HeroImage />

      {/* ═══════════════════════════════════════════════════════════════════════
          MARQUEE
         ══════════════════════════════════════════════════════════════════════ */}
      <Marquee dark />

      {/* ═══════════════════════════════════════════════════════════════════════
          SCREENSHOTS — horizontal drag gallery with large caption
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 md:pt-28 pb-0">
        {/* Section header */}
        <div className="px-6 md:px-10 lg:px-16 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "10px" }}>
                Screenshots
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  color: "#ffffff",
                }}
              >
                Every screen,<br />every control
              </h2>
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em", paddingBottom: "4px" }}>
              Drag to explore →
            </p>
          </div>
        </div>

        {/* Drag-to-scroll gallery */}
        <div
          className="overflow-x-auto"
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
          <div className="flex gap-4 pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16 pb-16">
            {screens.map(({ src, label, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 flex flex-col gap-3"
              >
                <div
                  style={{
                    width: "clamp(170px, 20vw, 240px)",
                    height: "clamp(300px, 35vw, 420px)",
                    overflow: "hidden",
                    borderRadius: "24px",
                    background: "#111",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.025)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                >
                  <img
                    src={src}
                    alt={label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", pointerEvents: "none" }}
                    draggable={false}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#B5920A", letterSpacing: "0.08em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{label}</p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURES — two-column split, image left, list right
         ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* Left — image panel */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "380px", background: "#111" }}
            >
              <img
                src="/images/app-lifestyle.jpg"
                alt=""
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  filter: "brightness(0.55)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.9,
                    color: "#ffffff",
                  }}
                >
                  Everything<br />you need
                </p>
              </div>
            </div>

            {/* Right — numbered list */}
            <div className="px-6 md:px-10 lg:px-12 py-12 lg:py-16 flex flex-col justify-center">
              {features.map((f, i) => (
                <motion.div
                  key={f.n}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 py-5 group"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#B5920A", flexShrink: 0, paddingTop: "4px", letterSpacing: "0.08em" }}>
                    {f.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                        textTransform: "uppercase",
                        letterSpacing: "-0.01em",
                        color: "#ffffff",
                        marginBottom: "6px",
                        transition: "color 0.2s",
                      }}
                    >
                      {f.title}
                    </p>
                    <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.4)", maxWidth: "360px" }}>
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center self-start px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.09em] border border-[rgba(255,255,255,0.18)] text-white hover:border-white transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          APP INFO — minimal grid
         ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="px-6 md:px-10 lg:px-16 py-16 md:py-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Requires", value: "iOS 15.0+" },
              { label: "Compatible", value: "iPhone, iPad" },
              { label: "Language", value: "English" },
              { label: "Price", value: "Free" },
              { label: "Category", value: "Music" },
              { label: "Developer", value: "PAR-NEPAR" },
            ].map((row, i) => (
              <div
                key={row.label}
                className="py-6 pr-4"
                style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingLeft: i > 0 ? "clamp(12px, 2vw, 24px)" : "0" }}
              >
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>
                  {row.label}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
