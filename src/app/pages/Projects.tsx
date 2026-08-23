import { Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../data/projects";

const statusLabel: Record<string, string> = {
  active: "Active",
  archived: "Archived",
  development: "In Development",
};

const statusColor: Record<string, string> = {
  active: "#B5920A",
  archived: "rgba(255,255,255,0.25)",
  development: "#4A90D9",
};

/* ─── Project card ────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="block group">
        {/* Card visual */}
        <div
          className="relative overflow-hidden mb-5"
          style={{
            background: project.color,
            borderRadius: "16px",
            aspectRatio: "4/3",
          }}
        >
          {/* Cover photo */}
          {project.coverImage && (
            <img
              src={import.meta.env.BASE_URL + project.coverImage}
              alt=""
              aria-hidden
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
          )}

          {/* Dark overlay (always present, stronger if photo) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: project.coverImage
                ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.2) 100%)"
                : undefined,
            }}
          />

          {/* Giant ambient letter — only without photo */}
          {!project.coverImage && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                right: "-0.05em",
                bottom: "-0.15em",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(8rem, 18vw, 14rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
                lineHeight: 0.8,
                color: project.textLight ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {project.name[0]}
            </span>
          )}

          {/* Accent bar */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              width: "28px",
              height: "3px",
              background: project.accent,
              borderRadius: "999px",
              zIndex: 2,
            }}
          />

          {/* Card text */}
          <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ zIndex: 2 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.91,
                color: "#ffffff",
                marginBottom: "6px",
                transition: "transform 0.3s ease",
              }}
              className="group-hover:translate-y-[-3px]"
            >
              {project.name}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
                maxWidth: "280px",
              }}
            >
              {project.tagline}
            </p>
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(0,0,0,0.12)", zIndex: 3 }}
          />
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#595959", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {project.category}
            </span>
            <span style={{ fontSize: "11px", color: "#E0E0E0" }}>·</span>
            <span style={{ fontSize: "11px", color: "#595959" }}>{project.year}</span>
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: statusColor[project.status],
            }}
          >
            {statusLabel[project.status]}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <div style={{ overflowX: "clip" }} className="bg-white min-h-screen">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white" style={{ minHeight: "72vh" }}>
        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          <img
            src={import.meta.env.BASE_URL + "images/projects-hero.jpg"}
            alt=""
            aria-hidden
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)" }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-36 md:pt-44 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#B5920A" }} />
                PAR–NEPAR
              </p>
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.89,
                  color: "#ffffff",
                }}
              >
                Our<br />Projects
              </h1>
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.72, color: "rgba(255,255,255,0.45)", maxWidth: "380px", paddingBottom: "4px" }}>
              Mobile applications and digital products built by our team — from utilities to companion apps and hospitality tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED — Bose ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pt-14 md:pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto">
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "14px" }}>
            Featured
          </p>

          <Link to={`/projects/${featured.slug}`} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden"
              style={{ background: featured.color, borderRadius: "20px", minHeight: "340px" }}
            >
              {/* Headphone photo — right side */}
              <div
                className="absolute inset-y-0 right-0 hidden md:block"
                style={{ width: "48%", pointerEvents: "none" }}
              >
                <img
                  src={import.meta.env.BASE_URL + "images/hero-phone.jpg"}
                  alt=""
                  aria-hidden
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
                />
                {/* left fade */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0a0a0a 0%, transparent 55%)" }} />
              </div>

              {/* Ambient text */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  right: "-0.02em",
                  bottom: "-0.12em",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(8rem, 22vw, 18rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.8,
                  color: "rgba(255,255,255,0.025)",
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              >
                BOSE
              </span>

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 p-8 md:p-12" style={{ maxWidth: "60%" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                    <span style={{ width: "32px", height: "3px", background: "#B5920A", borderRadius: "999px" }} />
                    <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5920A" }}>Flagship · 2025</span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 5vw, 4.5rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.9,
                      color: "#ffffff",
                      marginBottom: "16px",
                      transition: "transform 0.3s ease",
                    }}
                    className="group-hover:translate-x-1"
                  >
                    Bose Sound<br />Controller
                  </h2>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: "380px" }}>
                    {featured.description}
                  </p>
                  <div className="flex flex-col gap-4 mt-8">
                    <span
                      className="inline-flex items-center px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.09em] border border-[rgba(255,255,255,0.2)] text-white group-hover:border-white transition-colors duration-200"
                      style={{ borderRadius: "999px", alignSelf: "flex-start" }}
                    >
                      View project →
                    </span>
                    <div className="flex items-center gap-3">
                      <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#B5920A" }} />
                      <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)" }}>Active · iOS App</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto">
          <div style={{ borderTop: "1px solid #E0E0E0", paddingTop: "40px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959" }}>
              All projects
            </p>
            <p style={{ fontSize: "11px", color: "#B0B0B0", letterSpacing: "0.04em" }}>
              {projects.length} total
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO PHOTOS ──────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="flex items-end justify-between mb-8">
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.3)" }}>
              Behind the work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { src: "/images/team-1.jpg", pos: "center center" },
              { src: "/images/team-2.jpg", pos: "center center" },
              { src: "/images/team-3.jpg", pos: "center center" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="overflow-hidden"
                style={{ borderRadius: "14px", aspectRatio: "4/3" }}
              >
                <img
                  src={img.src}
                  alt=""
                  aria-hidden
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.pos, display: "block" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
