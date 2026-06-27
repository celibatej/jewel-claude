import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Route segment config
export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated Open Graph / social preview image, built around the
 * JEWEL wordmark. Produces a real PNG at request time — no static asset.
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
        {/* JEWEL wordmark */}
        <div
          style={{
            fontSize: "40px",
            fontWeight: 800,
            letterSpacing: "16px",
            color: "#ffffff",
          }}
        >
          JEWEL
        </div>

        {/* Identity */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "74px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: "38px", color: "#98a2b3", marginTop: "14px" }}>
            {siteConfig.title}
          </div>
        </div>

        {/* Footer line */}
        <div style={{ fontSize: "26px", color: "#667085" }}>
          {siteConfig.location} · {siteConfig.experienceYears} years of experience
        </div>
      </div>
    ),
    { ...size },
  );
}
