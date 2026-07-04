"use client";

import { useReveal } from "@/app/_hooks/use-reveal";
import GridSVG from "@/app/_components/grid-svg";

export default function Hero() {
  const [ref, visible] = useReveal();
  return (
    <section
      id="首页"
      ref={ref}
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "6rem 2rem 5rem",
        display: "grid",
        gridTemplateColumns: "60fr 40fr",
        gap: "3rem",
        alignItems: "start",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
      className="hero-grid"
    >
      <div>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#003153",
            marginBottom: "1.5rem",
          }}
        >
          软件工程师
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "#111111",
            marginBottom: "2rem",
            letterSpacing: "-0.02em",
          }}
        >
          [PingGuoMiaoMiao]
        </h1>
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: "#003153",
            marginBottom: "2rem",
          }}
        />
        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#444444",
            maxWidth: 420,
          }}
        >
          专注于分布式系统与实时数据处理
          的交叉领域。
          <br />
          构建可无上限扩展的基础设施。
          <br />
          目前在 [公司] 任职。
        </p>
        <div style={{ marginTop: "3rem", display: "flex", gap: "2rem" }}>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#003153",
                lineHeight: 1,
              }}
            >
              43%
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#999999",
                marginTop: "0.3rem",
              }}
            >
              延迟降低
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#003153",
                lineHeight: 1,
              }}
            >
              5M
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#999999",
                marginTop: "0.3rem",
              }}
            >
              事件 / 秒
            </div>
          </div>
          <a
            href="https://github.com/PingGuoMiaoMiao?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "#003153",
                lineHeight: 1,
                transition: "color 0.2s",
              }}
            >
              51
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#999999",
                marginTop: "0.3rem",
                transition: "color 0.2s",
              }}
            >
              开源项目
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #D3D3D3",
          borderLeft: "1px solid #D3D3D3",
          padding: "1.5rem",
          minHeight: 260,
        }}
      >
        <GridSVG />
      </div>
    </section>
  );
}