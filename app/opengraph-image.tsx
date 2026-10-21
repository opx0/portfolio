import { ImageResponse } from "next/og";

export const alt = "Abhishek Yadav. Full-stack engineer and systems developer. opxz.dev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: "#c5e9f2", color: "#101413", fontFamily: "sans-serif", borderBottom: "12px solid #101413" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#34545c" }}>
          <span>opxz.dev</span>
          <span>Portfolio & selected work</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -5 }}>Abhishek Yadav</div>
          <div style={{ fontSize: 38, color: "#34545c" }}>Full-stack engineer & systems developer</div>
        </div>
        <div style={{ fontSize: 25, color: "#34545c" }}>TypeScript · React · Node.js · PostgreSQL</div>
      </div>
    ),
    size,
  );
}
