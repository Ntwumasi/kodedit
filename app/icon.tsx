import { ImageResponse } from "next/og";
import { MARKS } from "@/components/site/Logo";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The Kodedit mark: KODEDIT in Morse, white on the brand red. */
export default function Icon() {
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
              left: x,
              top: y,
              width: w,
              height: 2,
              borderRadius: 1,
              background: "#FFFFFF",
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
