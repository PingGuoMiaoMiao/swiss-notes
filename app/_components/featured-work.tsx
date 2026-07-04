"use client";

import { useReveal } from "@/app/_hooks/use-reveal";
import { PROJECTS } from "@/app/_data/constants";
import ProjectCard from "@/app/_components/project-card";

export default function FeaturedWork() {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      style={{
        borderTop: "1px solid #D3D3D3",
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
            03 — 精选项目
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#D3D3D3" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: "4rem" }}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}