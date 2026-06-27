import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Route segment config
export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated Open Graph / social preview image.
 * Produces a real PNG at request time — no static binary asset required.
 * Next.js automatically applies this to Open Graph and Twitter cards.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0e14",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              color: "#0b0e14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            JIJ
          </div>
          <span style={{ fontSize: "26px", color: "#98a2b3" }}>{siteConfig.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "76px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: "40px", color: "#98a2b3", marginTop: "12px" }}>
            {siteConfig.title}
          </div>
        </div>

        <div style={{ fontSize: "28px", color: "#667085" }}>
          {siteConfig.experienceYears} years of experience
        </div>
      </div>
    ),
    { ...size },
  );
}
