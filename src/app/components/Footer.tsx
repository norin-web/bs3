import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: "Company",
      links: [
        { label: "About us", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Feedback", to: "/feedback" },
      ],
    },
    {
      heading: "App",
      links: [
        { label: "Our App", to: "/app" },
        { label: "Support", to: "/support" },
        { label: "App Store", to: "/app-store" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms of Use", to: "/terms" },
      ],
    },
  ];

  return (
    <footer
      className="bg-[#F4F4F4] text-[#0a0a0a]"
      style={{ borderTop: "1px solid #E0E0E0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-14 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              to="/"
              className="inline-block mb-5"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#0a0a0a",
              }}
            >
              PAR<span style={{ color: "#B5920A" }}>–</span>NEPAR
            </Link>
            <p
              className="text-[#6B6B6B]"
              style={{ fontSize: "13px", lineHeight: 1.7 }}
            >
              Bose Sound Controller — a companion app for compatible Bose audio devices, developed by PAR - NEPAR d.o.o.
            </p>
            <div className="mt-6">
              <a
                href="https://apps.apple.com/app/id6803135475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-[13px] bg-[#0a0a0a] text-white border border-[#0a0a0a] text-[11px] font-semibold uppercase tracking-[0.07em] transition-colors duration-200 hover:bg-[#333] hover:border-[#333]"
                style={{ borderRadius: "999px" }}
              >
                Download on the App Store
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.heading}>
                <p
                  className="text-[#0a0a0a] mb-5"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                  }}
                >
                  {col.heading}
                </p>
                <nav className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200"
                      style={{ fontSize: "13px", lineHeight: 1.5 }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderTop: "1px solid #E0E0E0", paddingTop: "24px" }}
        >
          <p className="text-[#6B6B6B]" style={{ fontSize: "12px" }}>
            © {year} PAR - NEPAR d.o.o. All rights reserved.
          </p>
          <a
            href="mailto:marija@par-nepar.store"
            className="text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors duration-200"
            style={{ fontSize: "12px" }}
          >
            marija@par-nepar.store
          </a>
        </div>
      </div>
    </footer>
  );
}
