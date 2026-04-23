type ScoreEntry = {
  competition: string;
  home: string;
  score: string;
  away: string;
  status: string;
  isLive: boolean;
};

const scores: ScoreEntry[] = [
  {
    competition: "A-League",
    home: "Melbourne Victory",
    score: "2 – 1",
    away: "Sydney FC",
    status: "FT",
    isLive: false,
  },
  {
    competition: "A-League",
    home: "Brisbane Roar",
    score: "0 – 0",
    away: "Western United",
    status: "67'",
    isLive: true,
  },
  {
    competition: "NRL",
    home: "Broncos",
    score: "18 – 12",
    away: "Storm",
    status: "FT",
    isLive: false,
  },
  {
    competition: "Matildas",
    home: "Australia",
    score: "3 – 1",
    away: "Thailand",
    status: "FT · Friendly",
    isLive: false,
  },
];

function getCompetitionStyle(competition: string): string {
  switch (competition) {
    case "A-League":
      return "tag-aleague";
    case "NRL":
      return "tag-nrl";
    case "Matildas":
      return "tag-matildas";
    default:
      return "tag-worldcup";
  }
}

function ScoreItem({ entry }: { entry: ScoreEntry }) {
  return (
    <div
      style={{ borderRight: "1px solid var(--color-border)" }}
      className="flex items-center gap-3 px-6 py-0 shrink-0"
    >
      <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded ${getCompetitionStyle(entry.competition)}`}>
        {entry.competition}
      </span>
      <span style={{ color: "var(--color-text)" }} className="text-sm font-medium">
        {entry.home}
      </span>
      <span
        style={{
          background: entry.isLive ? "rgba(0, 232, 122, 0.1)" : "rgba(255,255,255,0.05)",
          color: entry.isLive ? "var(--color-accent)" : "var(--color-text)",
          border: entry.isLive ? "1px solid rgba(0,232,122,0.3)" : "1px solid rgba(255,255,255,0.1)",
        }}
        className="text-sm font-bold tabular-nums px-2.5 py-0.5 rounded"
      >
        {entry.score}
      </span>
      <span style={{ color: "var(--color-text)" }} className="text-sm font-medium">
        {entry.away}
      </span>
      <span
        style={{ color: entry.isLive ? "var(--color-accent)" : "var(--color-secondary)" }}
        className="text-xs font-semibold uppercase tracking-wide"
      >
        {entry.isLive && (
          <span
            style={{ background: "var(--color-accent)" }}
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse mr-1"
          />
        )}
        {entry.status}
      </span>
    </div>
  );
}

export default function ScoresTicker() {
  // Duplicate entries so the seamless loop works
  const doubledScores = [...scores, ...scores];

  return (
    <aside
      aria-label="Live scores ticker"
      style={{
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--color-border)",
        height: "40px",
      }}
      className="overflow-hidden"
    >
      <div className="flex items-center h-full">
        {/* Label */}
        <div
          style={{
            background: "var(--color-accent)",
            color: "#000",
            fontFamily: "var(--font-bebas), sans-serif",
            letterSpacing: "0.1em",
            minWidth: "fit-content",
          }}
          className="h-full flex items-center px-4 text-sm shrink-0 z-10"
        >
          SCORES
        </div>

        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-track flex items-center h-10">
            {doubledScores.map((entry, i) => (
              <ScoreItem key={i} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
