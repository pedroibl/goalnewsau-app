export default function HeroArticle() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{ background: "var(--bg-deep)" }}
      className="relative overflow-hidden"
    >
      {/* Subtle grid texture overlay */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,232,122,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,122,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
        className="absolute inset-0"
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,102,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        className="absolute inset-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Text content — takes 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* Tag row */}
            <div className="flex items-center gap-3">
              <span className="tag-aleague text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                A-League
              </span>
              <span
                style={{ color: "var(--color-accent)" }}
                className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5"
              >
                <span
                  style={{ background: "var(--color-accent)" }}
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                />
                Just Now
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                color: "var(--color-text)",
                lineHeight: 1.0,
                letterSpacing: "0.02em",
              }}
              className="text-5xl sm:text-6xl lg:text-7xl"
            >
              Fornaroli Fires{" "}
              <span style={{ color: "var(--color-accent)" }}>Melbourne Victory</span> to Top of
              A-League Table
            </h1>

            {/* Deck / sub-headline */}
            <p
              style={{ color: "var(--color-secondary)", lineHeight: 1.6 }}
              className="text-lg sm:text-xl max-w-xl"
            >
              Bruno Fornaroli&apos;s brace sealed a dramatic 2-1 win over Sydney FC at AAMI Park, sending
              Victory to the summit of the A-League standings with five rounds remaining.
            </p>

            {/* Read more CTA */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                style={{
                  background: "var(--color-accent)",
                  color: "#000",
                  fontFamily: "var(--font-bebas), sans-serif",
                  letterSpacing: "0.08em",
                  transition: "background var(--duration-fast)",
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-lg rounded hover:opacity-90"
              >
                Read Full Story
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span style={{ color: "var(--color-secondary)" }} className="text-sm">
                3 min read
              </span>
            </div>
          </div>

          {/* Hero image placeholder — 2 cols */}
          <div className="lg:col-span-2">
            <div
              className="img-hero relative rounded-lg overflow-hidden"
              style={{
                aspectRatio: "4/3",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Score overlay */}
              <div
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                className="absolute bottom-0 left-0 right-0 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div
                      style={{ fontFamily: "var(--font-bebas), sans-serif", color: "var(--color-text)" }}
                      className="text-lg leading-none"
                    >
                      Melbourne Victory
                    </div>
                    <div
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-bebas), sans-serif" }}
                      className="text-4xl leading-tight"
                    >
                      2
                    </div>
                  </div>
                  <div
                    style={{ color: "var(--color-secondary)", fontFamily: "var(--font-bebas), sans-serif" }}
                    className="text-2xl"
                  >
                    FT
                  </div>
                  <div className="text-center">
                    <div
                      style={{ fontFamily: "var(--font-bebas), sans-serif", color: "var(--color-text)" }}
                      className="text-lg leading-none"
                    >
                      Sydney FC
                    </div>
                    <div
                      style={{ fontFamily: "var(--font-bebas), sans-serif", color: "var(--color-text)" }}
                      className="text-4xl leading-tight"
                    >
                      1
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle pitch lines decoration */}
              <div
                aria-hidden="true"
                style={{
                  border: "2px solid rgba(255,255,255,0.06)",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "40%",
                  aspectRatio: "1",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  borderTop: "2px solid rgba(255,255,255,0.06)",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
