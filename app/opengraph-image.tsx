import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { MARKS } from "@/components/site/Logo";

export const alt = "Kodedit — AI studio and venture lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = join(process.cwd(), "node_modules/geist/dist/fonts");

export default async function OgImage() {
  const [sans, mono] = await Promise.all([
    readFile(join(FONT_DIR, "geist-sans/Geist-Medium.ttf")),
    readFile(join(FONT_DIR, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* 12-column guide */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 80,
            right: 80,
            bottom: 0,
            display: "flex",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderLeft: "1px solid #1C1C21",
                ...(i === 11 ? { borderRight: "1px solid #1C1C21" } : {}),
              }}
            />
          ))}
        </div>

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* The Kodedit mark, drawn from the shared brand grid. */}
            <div
              style={{
                position: "relative",
                display: "flex",
                width: 38,
                height: 38,
                borderRadius: 8,
                background: "#FE3641",
              }}
            >
              {MARKS.map(([x, y, w], i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: x * (38 / 32),
                    top: y * (38 / 32),
                    width: w * (38 / 32),
                    height: 2 * (38 / 32),
                    borderRadius: 2,
                    background: "#FFFFFF",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "Geist",
                fontSize: 30,
                lineHeight: 1,
                color: "#F4F4F5",
                letterSpacing: "-0.03em",
                marginLeft: 13,
              }}
            >
              kodedit
            </span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontSize: 78,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#F4F4F5",
              display: "flex",
              flexDirection: "column",
              whiteSpace: "pre",
            }}
          >
            <span>{"An AI studio for"}</span>
            <span>{"the industries"}</span>
            {/* Optical kern: the e->f sidebearings make a normal space read
                loose at this size, so this pair is tightened by hand. */}
            <span style={{ display: "flex" }}>
              <span>{"software"}</span>
              <span style={{ marginLeft: 11 }}>{"forgot."}</span>
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1F1F23",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#FE3641" }} />
            <span
              style={{
                fontFamily: "GeistMono",
                fontSize: 19,
                color: "#7A7A84",
                letterSpacing: "0.08em",
              }}
            >
              BUILDING: MEDSYS.HEALTHCARE
            </span>
          </div>
          <span
            style={{
              fontFamily: "GeistMono",
              fontSize: 19,
              color: "#7A7A84",
              letterSpacing: "0.08em",
            }}
          >
            KODEDIT.IO
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, style: "normal", weight: 500 },
        { name: "GeistMono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
