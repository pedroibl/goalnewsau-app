import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "A-League", href: "/a-league" },
  { label: "NRL", href: "/nrl" },
  { label: "Matildas", href: "/matildas" },
  { label: "World Cup", href: "/world-cup" },
];

export default function Navbar() {
  return (
    <header
      style={{ background: "var(--bg-deep)", borderBottom: "1px solid var(--color-border)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <span
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                color: "var(--color-text)",
                letterSpacing: "0.04em",
              }}
              className="text-3xl leading-none"
            >
              GOAL
              <span style={{ color: "var(--color-accent)" }}>NEWS</span>
              <span style={{ color: "var(--color-secondary)", fontSize: "0.7em" }}> AU</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--color-secondary)",
                  fontFamily: "var(--font-inter), sans-serif",
                  transition: "color var(--duration-fast)",
                }}
                className="px-3 py-2 text-sm font-medium uppercase tracking-wider hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Live badge */}
          <div className="flex items-center gap-3">
            <span
              style={{
                background: "rgba(0, 232, 122, 0.1)",
                border: "1px solid rgba(0, 232, 122, 0.3)",
                color: "var(--color-accent)",
              }}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
            >
              <span
                style={{ background: "var(--color-accent)" }}
                className="w-1.5 h-1.5 rounded-full animate-pulse"
              />
              Live
            </span>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Mobile navigation"
        style={{ borderTop: "1px solid var(--color-border)" }}
        className="md:hidden flex overflow-x-auto scrollbar-hide"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ color: "var(--color-secondary)" }}
            className="shrink-0 px-4 py-3 text-xs font-semibold uppercase tracking-wider hover:text-white whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
