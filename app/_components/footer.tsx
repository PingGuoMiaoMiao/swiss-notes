"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #D3D3D3",
        backgroundColor: "#111111",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "#666666",
          }}
        >
          {new Date().getFullYear()} [PingGuoMiaoMiao] — 欢迎精选合作洽谈。
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a
            href="https://github.com/PingGuoMiaoMiao"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#555555",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
          >
            GitHub
          </a>
          <a
            href="mailto:3226742838@qq.com"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#555555",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}