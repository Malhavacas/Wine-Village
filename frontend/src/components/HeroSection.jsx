import { useLang } from "@/App";
import { content, images } from "@/data/content";
import { Star, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { lang } = useLang();
  const t = content[lang].hero;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${images.hero})`,
          transition: "transform 20s linear",
        }}
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(13,8,6,0.88) 0%, rgba(26,15,10,0.65) 40%, rgba(13,8,6,0.75) 100%)"
      }} />

      {/* Content - Left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="max-w-2xl">
          {/* Overline */}
          <div
            className="overline-decorated mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            data-testid="hero-overline"
          >
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520]">
              {lang === "pt" ? "Restaurante & Bar de Vinhos" : "Restaurant & Wine Bar"} &nbsp; {t.overline}
            </span>
          </div>

          {/* Title with italic gold emphasis */}
          <h1
            className="font-serif text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] tracking-tight text-[#F5F0E8] mb-8 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            data-testid="hero-title"
          >
            {lang === "pt" ? (
              <>Onde cada <em className="text-emphasis not-italic" style={{ fontStyle: "italic" }}>gole</em><br />conta uma <em className="text-emphasis not-italic" style={{ fontStyle: "italic" }}>história.</em></>
            ) : (
              <>Where every <em className="text-emphasis not-italic" style={{ fontStyle: "italic" }}>sip</em><br />tells a <em className="text-emphasis not-italic" style={{ fontStyle: "italic" }}>story.</em></>
            )}
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans text-sm sm:text-base text-[#F5F0E8]/55 max-w-lg mb-10 leading-relaxed opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            data-testid="hero-subtitle"
          >
            {lang === "pt"
              ? "Petiscos portugueses cuidadosamente servidos, vinhos criteriosamente escolhidos, numa atmosfera que transforma qualquer noite num momento."
              : "Carefully crafted Portuguese tapas, thoughtfully curated wines, in an atmosphere that transforms any evening into a moment."
            }
          </p>

          {/* CTAs - Pill buttons */}
          <div
            className="flex flex-wrap gap-4 mb-14 opacity-0 animate-fadeUp"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            data-testid="hero-ctas"
          >
            <a
              href="tel:+351234064340"
              className="btn-pill btn-pill-gold"
              data-testid="hero-cta-reserve"
            >
              {lang === "pt" ? "Ligar Agora" : "Call Now"}
              <ArrowRight size={14} strokeWidth={2} />
            </a>
            <button
              onClick={() => scrollTo("menu")}
              className="btn-pill btn-pill-outline"
              data-testid="hero-cta-menu"
            >
              {lang === "pt" ? "Ver Petiscos" : "View Menu"}
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </div>

          {/* Rating */}
          <div
            className="flex items-center gap-3 opacity-0 animate-fadeIn"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
            data-testid="hero-rating"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} fill="#DAA520" color="#DAA520" className={i === 5 ? "opacity-50" : ""} />
              ))}
            </div>
            <span className="text-[11px] font-sans tracking-[0.12em] uppercase text-[#F5F0E8]/50">
              {t.rating} {lang === "pt" ? "Estrelas" : "Stars"} &middot; {t.reviews}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent to-[#DAA520]/30" />
    </section>
  );
};
