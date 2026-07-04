export default function GridSVG() {
  return (
    <svg
      viewBox="0 0 400 340"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 32}
          y1={0}
          x2={i * 32}
          y2={340}
          stroke="#D3D3D3"
          strokeWidth="0.75"
        />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * 32}
          x2={400}
          y2={i * 32}
          stroke="#D3D3D3"
          strokeWidth="0.75"
        />
      ))}
      <rect x="64" y="64" width="128" height="80" fill="#003153" />
      <rect x="208" y="160" width="80" height="48" fill="none" stroke="#003153" strokeWidth="1.5" />
      <rect x="300" y="48" width="48" height="128" fill="none" stroke="#111111" strokeWidth="0.75" />
      <line x1="64" y1="64" x2="400" y2="340" stroke="#D3D3D3" strokeWidth="0.75" />
      <circle cx="288" cy="240" r="32" fill="none" stroke="#D3D3D3" strokeWidth="0.75" />
      <rect x="64" y="240" width="48" height="48" fill="#D3D3D3" />
    </svg>
  );
}