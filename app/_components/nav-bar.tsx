"use client";

import { NAV_LINKS } from "@/app/_data/constants";

export default function NavBar() {
  return (
    <nav
      style={{
        borderBottom: "1px solid #D3D3D3",
        backgroundColor: "#F5F5F5",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 2rem",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#111111",
          }}
        >
          [PingGuoMiaoMiao]
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.68rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#111111",
                textDecoration: "none",
                opacity: 0.55,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}