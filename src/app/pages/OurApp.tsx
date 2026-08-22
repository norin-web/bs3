import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Marquee } from "../components/Marquee";

const APP_STORE = "https://apps.apple.com/app/id6803135475";

const screens = [
  { src: "/images/screen1.jpg", n: "01", label: "Listen", desc: "Your audio hub" },
  { src: "/images/screen2.jpg", n: "02", label: "Device", desc: "Find & connect" },
  { src: "/images/screen3.jpg", n: "03", label: "Playback", desc: "Full controls" },
  { src: "/images/screen4.jpg", n: "04", label: "Settings", desc: "Sound tuning" },
  { src: "/images/screen5.jpg", n: "05", label: "Library", desc: "Browse music" },
];

const PHONE_W = 200;
const PHONE_H = Math.round(PHONE_W * (2868 / 1320));

/* ─── Parallax hero ───────────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height: "100vh" }}>
      {/* Parallax bg */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <img
          src="/images/app-hero.jpg"
          alt=""
          aria-hidden
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "70% center", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.1) 45%, rgba(10,10,10,0.82) 100%)" }} />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-16 md:pb-24 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#B5920A", flexShrink: 0 }} />
            PAR–NEPAR · iOS App
          </p>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 8rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.87,
              color: "#ffffff",
              marginBottom: "32px",
            }}
          >
            Bose Sound<br />Controller
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.07em] bg-white text-[#0a0a0a] hover:bg-[#E0E0E0] transition-colors duration-200"
              style={{ borderRadius: "999px" }}
            >
              Download free
            </a>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>
              iOS 15.0+ · Free · PAR-NEPAR d.o.o.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Phone showcase ──────────────────────────────────────────────────────── */
function PhoneShowcase() {
  const rotations = [-6, -3, 0, 3, 6];
  const yOffsets = [20, 8, 0, 8, 20];

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-10 lg:px-16 mb-12">
        <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "12px" }}>
          Every screen
        </p>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 0.91,
            color: "#ffffff",
          }}
        >
          Five views.<br />One app.
        </h2>
      </div>

      <div className="flex items-end justify-center gap-4 md:gap-6 px-6 pb-8" style={{ minHeight: `${PHONE_H + 60}px` }}>
        {screens.map(({ src, n, label }, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: yOffsets[i] }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: yOffsets[i] - 12, transition: { duration: 0.3 } }}
            style={{ rotate: rotations[i], originY: 1 }}
            className="shrink-0 flex flex-col items-center gap-3"
          >
            <div
              style={{
                width: `${PHONE_W}px`,
                height: `${PHONE_H}px`,
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
                background: "#111",
              }}
            >
              <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} draggable={false} />
            </div>
            <div className="text-center">
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#B5920A", letterSpacing: "0.08em" }}>{n}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function OurApp() {
  return (
    <div style={{ overflowX: "clip" }}>

      {/* 1. HERO */}
      <Hero />

      {/* 2. MARQUEE */}
      <Marquee dark items={["Bose Sound Controller", "Music Playback", "Device Control", "Sound Settings", "Free", "iOS 15+", "AirPlay", "PAR-NEPAR"]} />

      {/* 3. INTRO — dark, key stats */}
      <section className="bg-[#0a0a0a]" style={{ borderBottom: "1px solid #1A1A1A" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.25)", marginBottom: "20px" }}>
                About the app
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.91,
                  color: "#ffffff",
                  marginBottom: "28px",
                }}
              >
                Your Bose,<br />your control
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", maxWidth: "540px" }}>
                Bose Sound Controller is a native iOS companion app for compatible Bose audio devices.
                Music playback, device discovery, sound settings, and full AirPlay support — all in one focused interface.
              </p>
            </motion.div>

            {/* Stat grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-0"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "Free", label: "Price" },
                { value: "iOS 15+", label: "Requires" },
                { value: "iPhone", label: "Platform" },
                { value: "English", label: "Language" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="p-6"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    borderTop: i >= 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", textTransform: "uppercase", letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1, marginBottom: "6px" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PHONE SHOWCASE */}
      <PhoneShowcase />

      {/* 5. FEATURES — white, editorial grid */}
      <section className="bg-white" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderBottom: "1px solid #E0E0E0" }}>
            <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20" style={{ borderRight: "1px solid #E0E0E0" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "16px" }}>
                What it does
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.93,
                  color: "#0a0a0a",
                }}
              >
                One app.<br />All controls.
              </h2>
            </div>
            <div className="px-6 md:px-10 lg:px-14 py-16 md:py-20 flex flex-col justify-center">
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#595959", maxWidth: "480px" }}>
                Bose Sound Controller gives you complete control of your Bose audio devices from iPhone.
                Music, settings, and device management — built natively for iOS.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ borderBottom: "1px solid #E0E0E0" }}>
            {[
              { n: "01", title: "Music Playback", body: "Play, pause, skip, and scrub through tracks. Album art and info always visible." },
              { n: "02", title: "Device Discovery", body: "Automatic detection of compatible Bose devices on your local network." },
              { n: "03", title: "Sound Control", body: "Volume and audio preferences from your iPhone — no hardware interaction needed." },
              { n: "04", title: "Library Streaming", body: "Browse your music library and stream directly to any connected Bose device." },
              { n: "05", title: "Device Settings", body: "Configuration, connection status, and audio preferences all in one place." },
              { n: "↗", title: "Get it free", body: "Available now on the App Store. No subscription, no in-app purchases.", cta: true },
            ].map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="px-6 md:px-10 py-10 md:py-12"
                style={{
                  borderRight: (i % 3 !== 2) ? "1px solid #E0E0E0" : "none",
                  borderTop: i >= 3 ? "1px solid #E0E0E0" : "none",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#B5920A", letterSpacing: "0.08em", marginBottom: "14px" }}>{f.n}</p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.72, color: "#595959" }}>{f.body}</p>
                {(f as { cta?: boolean }).cta && (
                  <a
                    href={APP_STORE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.09em] bg-[#0a0a0a] text-white hover:bg-[#333] transition-colors duration-200"
                    style={{ borderRadius: "999px" }}
                  >
                    App Store
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS — numbered steps, light bg */}
      <section className="bg-[#F4F4F4]" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:sticky lg:top-32"
            >
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "16px" }}>
                How it works
              </p>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                  color: "#E0E0E0",
                }}
              >
                Get<br />started
              </div>
            </motion.div>

            <div style={{ borderTop: "1px solid #E0E0E0", paddingTop: "0" }}>
              {[
                { n: "01", title: "Download the app", body: "Install Bose Sound Controller from the App Store for free. No account or sign-up required." },
                { n: "02", title: "Connect your device", body: "Open the app and tap 'Find device'. It will automatically scan your local network for compatible Bose speakers or headphones." },
                { n: "03", title: "Start controlling", body: "Once connected, you have full access to music playback, volume, sound settings, and device configuration — all from your iPhone." },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="flex gap-8 py-8"
                  style={{ borderBottom: "1px solid #E0E0E0" }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em", color: "#E0E0E0", flexShrink: 0, lineHeight: 1 }}>
                    {step.n}
                  </span>
                  <div className="pt-1">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.2rem)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "10px" }}>
                      {step.title}
                    </p>
                    <p style={{ fontSize: "15px", lineHeight: 1.72, color: "#595959", maxWidth: "480px" }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA — dark full width */}
      <section className="bg-[#0a0a0a]" style={{ borderTop: "1px solid #1A1A1A" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.25)", marginBottom: "16px" }}>
              App Store
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 6vw, 5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#ffffff",
              }}
            >
              Download<br />for free
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-4 shrink-0"
          >
            <p style={{ fontSize: "14px", lineHeight: 1.72, color: "rgba(255,255,255,0.4)", maxWidth: "300px" }}>
              Available on the App Store. Requires iPhone running iOS 15.0 or later. No subscription.
            </p>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] bg-white text-[#0a0a0a] hover:bg-[#E0E0E0] transition-colors duration-200 self-start"
              style={{ borderRadius: "999px" }}
            >
              Get on App Store
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. PLATFORM INFO */}
      <section className="bg-[#0a0a0a]" style={{ borderTop: "1px solid #1A1A1A" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
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
                className="py-6 pr-4 text-white"
                style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingLeft: i > 0 ? "clamp(12px,2vw,24px)" : "0" }}
              >
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>
                  {row.label}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 600 }}>{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
