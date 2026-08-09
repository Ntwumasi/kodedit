import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The wordmark cursor block, on its own. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0B",
        }}
      >
        <div style={{ width: 13, height: 20, background: "#FE3641" }} />
      </div>
    ),
    size
  );
}
