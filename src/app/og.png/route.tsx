import { ImageResponse } from "next/og";

// Social preview image, written to `out/og.png` at build time. A real `.png`
// path (not the extensionless `opengraph-image` convention) so static hosts
// such as GitHub Pages serve it as image/png.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(60% 80% at 15% 0%, rgba(79,70,229,0.6), transparent), radial-gradient(50% 70% at 95% 100%, rgba(124,58,237,0.55), transparent), radial-gradient(40% 50% at 70% 30%, rgba(6,182,212,0.25), transparent), #0B1020",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #4F46E5, #7C3AED 60%, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32">
              <path d="M10.5 12.5 15 21.5 21.5 9.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Verity</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>Connect. Learn.</div>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, color: "#C7D2FE" }}>
            Share. Grow.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(224,231,255,0.85)", maxWidth: 900 }}>
            Meaningful conversations, trusted expertise, inspiring communities, and real opportunities.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
