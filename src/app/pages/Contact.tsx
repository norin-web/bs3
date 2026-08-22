import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #E0E0E0",
  padding: "12px 0",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#0a0a0a",
  outline: "none",
  transition: "border-color 0.15s",
  fontFamily: "'Inter', sans-serif",
  borderRadius: 0,
};

const inputFocusStyle = "border-b-[#0a0a0a]";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "#595959",
  marginBottom: "6px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "#c00",
  marginTop: "4px",
};

type FormData = { name: string; email: string; type: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", type: "support", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.location.href = `mailto:marija@par-nepar.store?subject=${encodeURIComponent(`[${form.type}] ${form.name}`)}&body=${encodeURIComponent(form.message)}`;
    setSubmitted(true);
  };

  const getInputStyle = (field: keyof FormData): React.CSSProperties => ({
    ...inputBase,
    borderBottomColor: errors[field] ? "#c00" : focusedField === field ? "#0a0a0a" : "#E0E0E0",
  });

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col lg:flex-row">

      {/* ═══════════════════════════════════════════════════════════════════════
          LEFT — dark, contact info
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="lg:w-[42%] bg-[#0a0a0a] flex flex-col justify-between pt-36 md:pt-44 pb-12 px-6 md:px-10 lg:px-14 relative overflow-hidden"
        style={{ minHeight: "60vh" }}
      >
        {/* Ambient text */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: "-0.05em",
            bottom: "-0.1em",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(6rem, 18vw, 15rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
            lineHeight: 0.8,
            color: "rgba(255,255,255,0.025)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          GET IN<br />TOUCH
        </span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ width: "5px", height: "5px", borderRadius: "999px", background: "#B5920A", flexShrink: 0 }} />
            Contact
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.91,
              color: "#ffffff",
              marginBottom: "32px",
            }}
          >
            We're here<br />to help
          </h1>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.72,
              color: "rgba(255,255,255,0.42)",
              maxWidth: "340px",
              marginBottom: "48px",
            }}
          >
            Questions about the app, support requests, or anything else — write to us and we'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "28px" }}
        >
          {[
            { label: "Email", value: "marija@par-nepar.store", href: "mailto:marija@par-nepar.store" },
            { label: "Company", value: "PAR - NEPAR d.o.o." },
            { label: "Location", value: "Zagreb, Croatia" },
            { label: "Response", value: "Within 24 hours" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex justify-between items-baseline py-3.5"
              style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)" }}>
                {item.label}
              </span>
              {item.href ? (
                <a href={item.href} style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#B5920A")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
                >
                  {item.value}
                </a>
              ) : (
                <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>{item.value}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          RIGHT — white, form
         ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="flex-1 bg-white flex flex-col justify-center pt-16 lg:pt-36 pb-16 px-6 md:px-10 lg:px-14"
        style={{ borderLeft: "1px solid #E0E0E0" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[520px] w-full"
        >
          {submitted ? (
            <div className="flex flex-col items-start gap-6">
              <div
                className="flex items-center justify-center bg-[#0a0a0a]"
                style={{ width: "48px", height: "48px", borderRadius: "999px" }}
              >
                <Check className="text-white w-5 h-5" />
              </div>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "#0a0a0a",
                }}
              >
                Email opened
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.72, color: "#595959", maxWidth: "380px" }}>
                Your email client should have opened with a pre-filled message. Or write directly to{" "}
                <a href="mailto:marija@par-nepar.store" style={{ color: "#0a0a0a", textDecoration: "underline" }}>
                  marija@par-nepar.store
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-flex items-center px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] bg-[#0a0a0a] text-white hover:bg-[#333] transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#595959", marginBottom: "8px" }}>
                Send a message
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={getInputStyle("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={getInputStyle("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Topic</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={{ ...getInputStyle("type"), appearance: "none", cursor: "pointer", background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23595959' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") no-repeat right 4px center" } as React.CSSProperties}
                  onFocus={() => setFocusedField("type")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="support">App support</option>
                  <option value="feature">Feature request</option>
                  <option value="bug">Bug report</option>
                  <option value="business">Business inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your question or issue…"
                  style={{
                    ...getInputStyle("message"),
                    resize: "none",
                    display: "block",
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.message && <p style={errorStyle}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 text-[13px] font-semibold uppercase tracking-[0.08em] bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-colors duration-200"
                style={{ borderRadius: "999px" }}
              >
                Send message
              </button>

              <p style={{ fontSize: "11px", color: "#888", textAlign: "center", letterSpacing: "0.04em" }}>
                Or email directly: marija@par-nepar.store
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
