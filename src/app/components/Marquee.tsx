import { motion } from "motion/react";

const DEFAULT_ITEMS = [
  "BOSE SOUND CONTROLLER",
  "MUSIC PLAYBACK",
  "DEVICE CONTROL",
  "AIRPLAY",
  "FREE",
  "iOS 15+",
  "SOUND SETTINGS",
  "BOSE COMPATIBLE",
];

interface MarqueeProps {
  items?: string[];
  speed?: number;
  dark?: boolean;
  separator?: string;
}

export function Marquee({
  items = DEFAULT_ITEMS,
  speed = 28,
  dark = true,
  separator = "·",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: dark ? "#0a0a0a" : "#F4F4F4",
        borderTop: `1px solid ${dark ? "#1A1A1A" : "#E0E0E0"}`,
        borderBottom: `1px solid ${dark ? "#1A1A1A" : "#E0E0E0"}`,
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <motion.div
        style={{ display: "flex", whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              paddingRight: "18px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
            }}
          >
            {item}
            <span
              style={{
                color: "#B5920A",
                fontSize: "10px",
              }}
            >
              {separator}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
