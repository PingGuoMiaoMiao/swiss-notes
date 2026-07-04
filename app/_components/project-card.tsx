"use client";

import { useState } from "react";

interface Project {
  num: string;
  name: string;
  year: string;
  problem: string;
  outcome: string;
  url?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #D3D3D3",
        padding: "2.5rem 0",
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "2rem",
        alignItems: "start",
        borderLeft: hovered ? "3px solid #003153" : "3px solid transparent",
        paddingLeft: hovered ? "1.5rem" : 0,
        transition: "border-left 0.2s ease, padding-left 0.2s ease",
      }}
      className="project-card"
    >
      <div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "2rem",
            fontWeight: 600,
            color: hovered ? "#003153" : "#E0E0E0",
            lineHeight: 1,
            transition: "color 0.2s",
          }}
        >
          {project.num}
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: "#AAAAAA",
            marginTop: "0.4rem",
          }}
        >
          {project.year}
        </div>
      </div>
      <div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.35rem",
            fontWeight: 700,
            marginBottom: "1.2rem",
            letterSpacing: "-0.01em",
          }}
        >
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#111111",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#003153")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#111111")}
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {[
            ["问题", project.problem],
            ["成果", project.outcome],
          ].map(([label, text]) => (
            <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#003153",
                  fontWeight: 600,
                  flexShrink: 0,
                  minWidth: 60,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "#444444",
                  lineHeight: 1.6,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}