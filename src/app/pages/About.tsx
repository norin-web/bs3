import { motion } from "motion/react";
import { Link } from "react-router";
import { Marquee } from "../components/Marquee";

const capabilities = [
  "Mobile application development and technical implementation",
  "Product and interface design",
  "Connected-device and companion app experiences",
  "Application publishing and release support",
  "Long-term maintenance and product updates",
  "Technical adaptation to changing platform requirements",
  "Brand implementation and digital brand support",
  "Product localization and international distribution",
  "Quality assurance and ongoing technical monitoring",
];

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — full dark with ambient watermark
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0a0a0a] overflow-hidden" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        {/* Giant ambient watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(5rem, 20vw, 18rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              color: "rgba(255,255,255,0.03)",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            PAR–NEPAR
          </span>
        </div>

        <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-40 pb-16 md:pb-20 max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stats row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { value: "10+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "Full cycle", label: "Concept → Launch" },
                { value: "Zagreb", label: "Croatia" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="py-8 pr-6"
                  style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingLeft: i > 0 ? "clamp(16px, 2.5vw, 32px)" : "0" }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      color: "#ffffff",
                      marginBottom: "4px",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 7vw, 6rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.91,
                color: "#ffffff",
                maxWidth: "820px",
                marginBottom: "28px",
              }}
            >
              A focused team<br />behind one product
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "520px",
              }}
            >
              PAR - NEPAR d.o.o. is a Croatian software company based in Zagreb.
              We build mobile applications and digital products with a focus on quality and long-term support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MARQUEE
         ══════════════════════════════════════════════════════════════════════ */}
      <Marquee dark items={["PAR-NEPAR d.o.o.", "Zagreb", "Croatia", "Mobile Development", "iOS Apps", "Since 2014", "Full Cycle", "Quality First"]} />

      {/* ═══════════════════════════════════════════════════════════════════════
          STORY — editorial single column
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:sticky lg:top-32"
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                  color: "#E0E0E0",
                }}
              >
                About<br />us
              </div>
            </motion.div>

            {/* Right: body text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="space-y-8"
              style={{ borderTop: "1px solid #E0E0E0", paddingTop: "32px" }}
            >
              <p style={{ fontSize: "18px", lineHeight: 1.75, color: "#0a0a0a", fontWeight: 400, maxWidth: "640px" }}>
                For more than ten years, our team has been working across different areas of
                software development — from consumer mobile applications to specialized utility
                and companion products.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#595959", maxWidth: "640px" }}>
                We develop our own applications as well as custom solutions for partners and clients,
                supporting projects from the initial concept and product design through development,
                testing, release, and ongoing maintenance.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#595959", maxWidth: "640px" }}>
                Our work is centered around creating practical, reliable, and well-designed software
                for modern platforms. We place particular emphasis on product quality, user experience,
                platform compliance, and long-term technical support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CAPABILITIES — numbered list, full width, dark bg
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-20">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "32px",
            }}
          >
            What we do
          </p>
          <div>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-6 py-5 group"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    color: "#B5920A",
                    flexShrink: 0,
                    minWidth: "24px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontSize: "clamp(15px, 2.2vw, 20px)",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.4,
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-white"
                >
                  {cap}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BOSE PRODUCT BLOCK
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F4F4]" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "14px" }}>
                Current product
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.93,
                  color: "#0a0a0a",
                  marginBottom: "16px",
                }}
              >
                Bose Sound<br />Controller
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.72, color: "#595959", maxWidth: "440px" }}>
                A native iOS app for controlling Bose audio devices — music playback, sound settings,
                and device management. Free on the App Store.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] bg-[#0a0a0a] text-white hover:bg-[#333] transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                View app
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] border border-[#E0E0E0] text-[#0a0a0a] hover:border-[#0a0a0a] transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
