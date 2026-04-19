import { useLang } from "@/App";
import { content, reviewsData } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const ReviewCard = ({ review, lang, index }) => (
  <div
    className="reveal-item glass-card-dark p-7 md:p-9 relative overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
    data-testid={`review-card-${index}`}
  >
    <Quote
      size={40}
      className="absolute top-5 right-5 text-[#DAA520]/8"
    />

    {/* Stars */}
    <div className="flex gap-0.5 mb-5" data-testid={`review-stars-${index}`}>
      {Array.from({ length: review.rating }).map((_, i) => (
        <Star key={i} size={13} fill="#DAA520" color="#DAA520" />
      ))}
    </div>

    {/* Text */}
    <p className="font-serif text-base sm:text-lg leading-[1.7] text-[#F5F0E8]/75 mb-7 italic">
      "{review.text[lang]}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm bg-[#722F37] text-[#DAA520]">
        {review.name.charAt(0)}
      </div>
      <span className="font-sans text-[13px] tracking-wide text-[#F5F0E8]/60">
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
      className="py-24 md:py-32"
      style={{ backgroundColor: "#120a07" }}
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal-item">
          <div className="flex justify-center mb-6">
            <div className="overline-decorated" data-testid="reviews-overline">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520]">
                {t.overline}
              </span>
            </div>
          </div>
          <h2
            className="font-serif text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] tracking-tight text-[#F5F0E8] mb-6"
            data-testid="reviews-title"
          >
            {lang === "pt" ? (
              <>O que dizem <em className="text-emphasis">de nós.</em></>
            ) : (
              <>What they say <em className="text-emphasis">about us.</em></>
            )}
          </h2>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ border: "1px solid rgba(218,165,32,0.25)", backgroundColor: "rgba(218,165,32,0.06)" }}
            data-testid="reviews-badge"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} fill="#DAA520" color="#DAA520" className={i === 5 ? "opacity-50" : ""} />
              ))}
            </div>
            <span className="text-[11px] font-sans tracking-[0.1em] uppercase text-[#F5F0E8]/50">
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
