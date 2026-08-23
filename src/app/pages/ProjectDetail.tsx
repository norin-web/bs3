import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const statusLabel: Record<string, string> = {
    active: "Active",
    archived: "Archived",
    development: "In Development",
  };

  return (
    <div style={{ overflowX: "clip" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: project.color, minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
      >
        {/* Full-bleed cover photo */}
        {project.coverImage && (
          <>
            <img
              src={import.meta.env.BASE_URL + project.coverImage}
              alt=""
              aria-hidden
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${project.color} 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%)` }} />
          </>
        )}

        {/* Ambient giant letter — only without photo */}
        {!project.coverImage && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              right: "-0.03em",
              bottom: "-0.12em",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(10rem, 30vw, 26rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              lineHeight: 0.8,
              color: project.textLight ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.04)",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {project.name[0]}
          </span>
        )}

        <div className="relative z-10 px-6 md:px-10 lg:px-16 pt-40 pb-14 md:pb-20 max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Back */}
            <Link
              to="/projects"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: project.textLight ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "32px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              ← Projects
            </Link>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ width: "32px", height: "3px", background: project.accent, borderRadius: "999px" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: project.accent }}>
                {project.category} · {project.year}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: project.textLight ? "#ffffff" : "#0a0a0a",
                marginBottom: "24px",
                maxWidth: "900px",
              }}
            >
              {project.name}
            </h1>

            {/* Tagline + status */}
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.72,
                  color: project.textLight ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
                  maxWidth: "540px",
                }}
              >
                {project.description}
              </p>
              <div className="shrink-0 flex flex-col gap-3 md:pb-1">
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.09em] bg-white text-[#0a0a0a] hover:bg-[#E0E0E0] transition-colors duration-200"
                    style={{ borderRadius: "999px" }}
                  >
                    Download free
                  </a>
                )}
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: project.textLight ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                  }}
                >
                  {statusLabel[project.status]} · {project.platform}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="bg-white" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">
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
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.88,
                  color: "#E0E0E0",
                }}
              >
                About<br />the app
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{ borderTop: "1px solid #E0E0E0", paddingTop: "32px" }}
            >
              <p style={{ fontSize: "18px", lineHeight: 1.78, color: "#0a0a0a", maxWidth: "680px", marginBottom: "24px" }}>
                {project.tagline}
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#595959", maxWidth: "680px" }}>
                {project.longDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
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
            Capabilities
          </p>
          <div>
            {project.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex gap-6 py-5 group"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, color: project.accent, flexShrink: 0, paddingTop: "4px", letterSpacing: "0.06em", minWidth: "22px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      color: "#ffffff",
                      marginBottom: "6px",
                      transition: "color 0.2s",
                    }}
                  >
                    {f.title}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.72, color: "rgba(255,255,255,0.42)", maxWidth: "500px" }}>
                    {f.body}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* ── TECH INFO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F4F4F4]" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {project.tech.map((row, i) => (
              <div
                key={row.label}
                className="py-6 pr-4"
                style={{ borderLeft: i > 0 ? "1px solid #E0E0E0" : "none", paddingLeft: i > 0 ? "clamp(12px, 2vw, 24px)" : "0" }}
              >
                <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B0B0B0", marginBottom: "6px" }}>
                  {row.label}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#0a0a0a" }}>
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ────────────────────────────────────────────────── */}
      <section className="bg-white" style={{ borderTop: "1px solid #E0E0E0" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="flex items-center justify-between mb-10">
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959" }}>
              Other projects
            </p>
            <Link
              to="/projects"
              style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0a0a0a", textDecoration: "none" }}
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                >
                  <Link to={`/projects/${p.slug}`} className="block group">
                    <div
                      className="relative overflow-hidden mb-4"
                      style={{ background: p.color, borderRadius: "14px", aspectRatio: "16/9" }}
                    >
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          right: "-0.05em",
                          bottom: "-0.15em",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 900,
                          fontSize: "clamp(5rem, 12vw, 9rem)",
                          textTransform: "uppercase",
                          letterSpacing: "-0.05em",
                          lineHeight: 0.8,
                          color: p.textLight ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                          userSelect: "none",
                          pointerEvents: "none",
                        }}
                      >
                        {p.name[0]}
                      </span>
                      <div className="absolute inset-0 p-5 flex flex-col justify-end">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(1rem, 2vw, 1.4rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.92, color: p.textLight ? "#ffffff" : "#0a0a0a" }}>
                          {p.name}
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: "12px", color: "#595959", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {p.category} · {p.year}
                    </p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
