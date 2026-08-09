import { ImageResponse } from "next/og";
import { MARKS } from "@/components/site/Logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// 32-unit brand grid scaled to the iOS icon, with the marks inset slightly
// so they do not crowd the rounded corners iOS applies.
const S = 180 / 32;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#FE3641",
        }}
      >
        {MARKS.map(([x, y, w], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x * S,
              top: y * S,
              width: w * S,
              height: 2 * S,
              borderRadius: S,
              background: "#FFFFFF",
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
