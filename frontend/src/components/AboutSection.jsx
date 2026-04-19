import { useLang } from "@/App";
import { content, images } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection = () => {
  const { lang } = useLang();
  const t = content[lang].about;
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-cream"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal-group">
          {/* Image */}
          <div className="relative overflow-hidden rounded-sm reveal-item" data-testid="about-image-wrapper">
            <img
              src={images.about}
              alt={lang === "pt" ? "Interior acolhedor do Wine Village" : "Cozy Wine Village interior"}
              className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              data-testid="about-image"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[rgba(44,17,12,0.3)] to-transparent" />
          </div>

          {/* Text */}
          <div className="reveal-item" style={{ animationDelay: "0.15s" }}>
            <p
              className="text-xs font-sans uppercase tracking-[0.2em] mb-4"
              style={{ color: "#DAA520" }}
              data-testid="about-overline"
            >
              {t.overline}
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight"
              style={{ color: "#2C110C" }}
              data-testid="about-title"
            >
              {t.title}
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-5"
              style={{ color: "#5C3A21" }}
              data-testid="about-text1"
            >
              {t.text1}
            </p>
            <p
              className="font-sans text-base leading-relaxed mb-8"
              style={{ color: "#5C3A21" }}
              data-testid="about-text2"
            >
              {t.text2}
            </p>

            {/* Highlight Quote */}
            <blockquote
              className="pl-5 border-l-2 italic font-serif text-lg leading-relaxed"
              style={{ color: "#722F37", borderColor: "#DAA520" }}
              data-testid="about-highlight"
            >
              "{t.highlight}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
