import { useLang } from "@/App";
import { content, images } from "@/data/content";
import { Star, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const { lang } = useLang();
  const t = content[lang].hero;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(44,17,12,0.75)] via-[rgba(74,28,36,0.55)] to-[rgba(44,17,12,0.8)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fadeUp">
        {/* Overline */}
        <p
          className="text-xs font-sans uppercase tracking-[0.25em] mb-6"
          style={{ color: "#DAA520" }}
          data-testid="hero-overline"
        >
          {t.overline}
        </p>

        {/* Title */}
        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-cream mb-4 leading-[1.05]"
          data-testid="hero-title"
        >
          {t.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-lg sm:text-xl text-cream/80 mb-2"
          data-testid="hero-subtitle"
        >
          {t.subtitle}
        </p>

        {/* Tagline */}
        <p
          className="font-sans text-sm sm:text-base tracking-wide mb-8"
          style={{ color: "#DAA520" }}
          data-testid="hero-tagline"
        >
          {t.tagline}
        </p>

        {/* Rating */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm mb-10 border"
          style={{
            borderColor: "rgba(218,165,32,0.4)",
            backgroundColor: "rgba(44,17,12,0.5)",
          }}
          data-testid="hero-rating"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={14} fill="#DAA520" color="#DAA520" />
            ))}
            <Star size={14} fill="#DAA520" color="#DAA520" style={{ clipPath: "inset(0 50% 0 0)" }} />
          </div>
          <span className="text-sm font-sans text-cream">
            {t.rating} ({t.reviews})
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-testid="hero-ctas">
          <button
            onClick={() => scrollTo("menu")}
            className="px-8 py-3.5 bg-wine text-cream font-sans text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-wine-dark active:scale-[0.98] min-h-[44px]"
            data-testid="hero-cta-menu"
          >
            {t.cta_menu}
          </button>
          <a
            href="tel:+351234064340"
            className="px-8 py-3.5 border border-gold/60 text-cream font-sans text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-gold/10 active:scale-[0.98] min-h-[44px] inline-flex items-center justify-center"
            data-testid="hero-cta-reserve"
          >
            {t.cta_reserve}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 animate-bounce"
        aria-label="Scroll down"
        data-testid="scroll-indicator"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};
