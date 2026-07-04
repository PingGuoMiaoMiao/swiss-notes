"use client";

import { useReveal } from "@/app/_hooks/use-reveal";

export default function Contact() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="联系"
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
            04 — 联系
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#D3D3D3" }} />
        </div>
        <div style={{ padding: "3rem 0 4rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "#444444",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            如果你对操作系统、编译器、机器学习基础设施感兴趣，
            <br />
            欢迎通过以下方式与我交流。
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#999999",
                  marginBottom: "0.6rem",
                }}
              >
                QQ
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#003153",
                }}
              >
                3226742838
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}