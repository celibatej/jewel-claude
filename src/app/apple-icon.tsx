import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Dynamically generated Apple touch icon (monogram on a dark rounded tile). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0e14",
          color: "#ffffff",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-2px",
          fontFamily: "sans-serif",
        }}
      >
        JIJ
      </div>
    ),
    { ...size },
  );
}
