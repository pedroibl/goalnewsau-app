type Article = {
  title: string;
  category: string;
  time: string;
  excerpt: string;
  imgClass: string;
  tagClass: string;
};

const articles: Article[] = [
  {
    title: "Matildas Call Up Young Brisbane Striker Ahead of Asian Cup Qualifier",
    category: "Matildas",
    time: "2h ago",
    excerpt:
      "The Westfield Matildas squad has been bolstered with the surprise inclusion of Brisbane City's 20-year-old forward ahead of the crucial qualifier.",
    imgClass: "img-matildas",
    tagClass: "tag-matildas",
  },
  {
    title: "NRL Round 12: Broncos Edge Storm in Brisbane Thriller",
    category: "NRL",
    time: "3h ago",
    excerpt:
      "A last-minute Payne Haas try gave the Broncos an 18-12 victory over Melbourne Storm in a pulsating contest at Suncorp Stadium.",
    imgClass: "img-nrl",
    tagClass: "tag-nrl",
  },
  {
    title: "Western United Announce New Spanish Midfielder Signing",
    category: "A-League",
    time: "4h ago",
    excerpt:
      "Western United have bolstered their midfield with the signing of former La Liga midfielder Javi Lara on an 18-month deal.",
    imgClass: "img-aleague",
    tagClass: "tag-aleague",
  },
  {
    title: "FIFA Confirm 2026 World Cup Host City Matches for Sydney and Melbourne",
    category: "World Cup",
    time: "5h ago",
    excerpt:
      "FIFA has officially confirmed Stadium Australia and Melbourne Rectangular Stadium will host group stage matches for the 2026 FIFA World Cup.",
    imgClass: "img-worldcup",
    tagClass: "tag-worldcup",
  },
  {
    title: "Sam Kerr Returns to Full Training, On Track for Asian Cup",
    category: "Matildas",
    time: "6h ago",
    excerpt:
      "Chelsea striker Sam Kerr rejoined full squad training today, boosting hopes she will be available for the upcoming AFC Women's Asian Cup.",
    imgClass: "img-matildas",
    tagClass: "tag-matildas",
  },
  {
    title: "Brisbane Roar Held at Home as Title Race Tightens",
    category: "A-League",
    time: "8h ago",
    excerpt:
      "A goalless draw at Moreton Daily Stadium means Brisbane Roar have now gone three games without a win as the A-League title race enters the home stretch.",
    imgClass: "img-aleague",
    tagClass: "tag-aleague",
  },
];

function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--color-border)",
        transition: "border-color var(--duration-fast), transform var(--duration-fast)",
      }}
      className={`group rounded-lg overflow-hidden flex flex-col cursor-pointer hover:border-[rgba(0,232,122,0.3)] hover:-translate-y-0.5 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`${article.imgClass} shrink-0 ${
          featured ? "lg:w-2/5 aspect-video lg:aspect-auto" : "aspect-video w-full"
        } relative`}
      >
        {/* Category icon texture */}
        <div
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 0%, transparent 60%)",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-3 p-4 ${featured ? "lg:p-6" : ""} flex-1`}>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded ${article.tagClass}`}
          >
            {article.category}
          </span>
          <span style={{ color: "var(--color-secondary)" }} className="text-xs">
            {article.time}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            color: "var(--color-text)",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            transition: "color var(--duration-fast)",
          }}
          className={`${featured ? "text-2xl lg:text-3xl" : "text-xl"} group-hover:text-[var(--color-accent)]`}
        >
          {article.title}
        </h2>

        {featured && (
          <p
            style={{ color: "var(--color-secondary)", lineHeight: 1.6 }}
            className="text-sm line-clamp-3"
          >
            {article.excerpt}
          </p>
        )}

        <div className="mt-auto pt-2">
          <span
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
            className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
          >
            Read more
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 6h10M7 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function NewsGrid() {
  const [featured, ...rest] = articles;

  return (
    <section aria-labelledby="latest-news-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section header */}
      <div
        style={{ borderBottom: "2px solid var(--color-accent)" }}
        className="flex items-end gap-4 pb-3 mb-8"
      >
        <h2
          id="latest-news-heading"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            color: "var(--color-text)",
            letterSpacing: "0.05em",
          }}
          className="text-3xl"
        >
          Latest News
        </h2>
        <span style={{ color: "var(--color-secondary)" }} className="text-sm pb-1">
          Updated moments ago
        </span>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured article — full width on lg */}
        <div className="lg:col-span-3">
          <ArticleCard article={featured} featured />
        </div>

        {/* Remaining 5 articles in a 3-col grid */}
        {rest.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </div>
    </section>
  );
}
