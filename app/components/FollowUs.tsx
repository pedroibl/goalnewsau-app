"use client";

const socialLinks = [
  { platform: "X (Twitter)", handle: "@goalnewsau", url: "https://x.com/goalnewsau", color: "#1d9bf0" },
  { platform: "Instagram", handle: "@goalnewsau", url: "https://instagram.com/goalnewsau", color: "#e1306c" },
  { platform: "Facebook", handle: "GoalNews AU", url: "https://facebook.com/goalnewsau", color: "#1877f2" },
  { platform: "TikTok", handle: "@goalnewsau", url: "https://tiktok.com/@goalnewsau", color: "#ff0050" },
];

export default function FollowUs() {
  return (
    <section aria-labelledby="follow-us-heading" className="py-12" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          <div className="shrink-0">
            <h2 id="follow-us-heading" className="text-4xl leading-none" style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.05em" }}>
              Follow <span style={{ color: "var(--color-accent)" }}>GoalNews AU</span>
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--color-secondary)" }}>Never miss a kick, try, or goal.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow GoalNews AU on ${s.platform}`}
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{ background: "var(--bg-card)", border: "1px solid var(--color-border)", color: "var(--color-secondary)" }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = s.color + "55"; el.style.background = s.color + "15"; el.style.color = s.color; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--color-border)"; el.style.background = "var(--bg-card)"; el.style.color = "var(--color-secondary)"; }}
              >
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
