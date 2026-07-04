"use client";

import { useReveal } from "@/app/_hooks/use-reveal";
import { MATRIX } from "@/app/_data/constants";

export default function ExpertiseMatrix() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="作品"
      ref={ref}
      style={{
        borderTop: "1px solid #D3D3D3",
        backgroundColor: "#EFEFEF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            padding: "3rem 0 1.5rem",
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#999999",
            }}
          >
            02 — 专业技能
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#D3D3D3" }} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid #D3D3D3",
            borderRight: "none",
            marginBottom: "4rem",
          }}
          className="matrix-grid"
        >
          {MATRIX.map((col) => (
            <div
              key={col.header}
              style={{
                borderRight: "1px solid #D3D3D3",
                padding: "1.8rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#003153",
                  marginBottom: "1.4rem",
                  fontWeight: 600,
                }}
              >
                {col.header}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item, ii) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 300,
                      color: "#111111",
                      padding: "0.55rem 0",
                      borderBottom:
                        ii < col.items.length - 1 ? "1px solid #E0E0E0" : "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 3,
                        height: 3,
                        backgroundColor: "#003153",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}