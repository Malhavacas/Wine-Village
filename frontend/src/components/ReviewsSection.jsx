import { useLang } from "@/App";
import { content, reviewsData } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const ReviewCard = ({ review, lang, index }) => (
  <div
    className="reveal-item p-6 md:p-8 rounded-sm bg-white relative"
    style={{
      animationDelay: `${index * 0.12}s`,
      border: "1px solid rgba(218,165,32,0.2)",
    }}
    data-testid={`review-card-${index}`}
  >
    <Quote
      size={28}
      className="absolute top-4 right-4 opacity-10"
      style={{ color: "#722F37" }}
    />

    {/* Stars */}
    <div className="flex gap-0.5 mb-4" data-testid={`review-stars-${index}`}>
      {Array.from({ length: review.rating }).map((_, i) => (
        <Star key={i} size={14} fill="#DAA520" color="#DAA520" />
      ))}
    </div>

    {/* Text */}
    <p
      className="font-sans text-base leading-relaxed mb-5 italic"
      style={{ color: "#5C3A21" }}
    >
      "{review.text[lang]}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm"
        style={{ backgroundColor: "#722F37", color: "#F5F5DC" }}
      >
        {review.name.charAt(0)}
      </div>
      <span className="font-sans text-sm font-medium" style={{ color: "#2C110C" }}>
        {review.name}
      </span>
    </div>
  </div>
);

export const ReviewsSection = () => {
  const { lang } = useLang();
  const t = content[lang].reviews;
  const ref = useScrollReveal();

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-cream"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 reveal-item">
          <p
            className="text-xs font-sans uppercase tracking-[0.2em] mb-4"
            style={{ color: "#DAA520" }}
            data-testid="reviews-overline"
          >
            {t.overline}
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ color: "#2C110C" }}
            data-testid="reviews-title"
          >
            {t.title}
          </h2>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm"
            style={{
              border: "1px solid rgba(218,165,32,0.4)",
              backgroundColor: "rgba(218,165,32,0.08)",
            }}
            data-testid="reviews-badge"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="#DAA520" color="#DAA520" />
              ))}
              <Star size={14} fill="#DAA520" color="#DAA520" style={{ clipPath: "inset(0 50% 0 0)" }} />
            </div>
            <span className="text-sm font-sans" style={{ color: "#2C110C" }}>
              {t.badge} &middot; {t.subtitle}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="reviews-grid">
          {reviewsData.map((review, idx) => (
            <ReviewCard key={idx} review={review} lang={lang} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
