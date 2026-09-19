import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Fleet & Logistics Coordinator`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default function OpengraphImage() {
  const imagePath = path.join(process.cwd(), "public/images/profile.jpg");
  const imageBuffer = fs.readFileSync(imagePath);
  const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0e14",
          fontFamily: "sans-serif",
        }}
      >
        {/* Central 630x630 square (safe area for WhatsApp 1:1 square crop) */}
        <div
          style={{
            width: "630px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "72px",
            boxSizing: "border-box",
          }}
        >
          {/* Circular profile photo */}
          <div
            style={{
              display: "flex",
              width: "220px",
              height: "220px",
              borderRadius: "110px",
              overflow: "hidden",
              border: "3px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageBase64}
              alt={siteConfig.name}
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "110px",
              }}
            />
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              fontSize: "44px",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "28px",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 500,
              color: "#98a2b3",
              marginTop: "12px",
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            Fleet & Logistics Coordinator
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

