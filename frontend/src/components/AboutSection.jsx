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
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F5F0E8" }}
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-20 items-center reveal-group">
          {/* Left - Image with organic shape */}
          <div className="relative reveal-item flex justify-center" data-testid="about-image-wrapper">
            {/* Main oval image */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[460px] md:h-[520px]">
              <div className="w-full h-full oval-clip overflow-hidden">
                <img
                  src={images.about}
                  alt={lang === "pt" ? "Vinhos do Wine Village" : "Wine Village wines"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid="about-image"
                />
              </div>

              {/* Floating small circle image */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#F5F0E8] shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt={lang === "pt" ? "Vinho a ser servido" : "Wine being poured"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Year badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center"
                style={{ backgroundColor: "#722F37" }}
              >
                <span className="font-serif text-2xl sm:text-3xl text-[#DAA520]">2019</span>
                <span className="text-[8px] font-sans tracking-[0.15em] uppercase text-[#F5F0E8]/60 mt-0.5">
                  {lang === "pt" ? "Desde o primeiro brinde" : "Since the first toast"}
                </span>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="reveal-item" style={{ animationDelay: "0.15s" }}>
            <div className="overline-decorated mb-6" data-testid="about-overline">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520]">
                {t.overline}
              </span>
            </div>

            <h2
              className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight mb-8"
              style={{ color: "#1a0f0a" }}
              data-testid="about-title"
            >
              {lang === "pt" ? (
                <>Um refúgio <em className="text-emphasis">de sabores</em> no coração de Águeda.</>
              ) : (
                <>A haven <em className="text-emphasis">of flavours</em> in the heart of Águeda.</>
              )}
            </h2>

            <p
              className="font-sans text-[15px] leading-[1.8] mb-5"
              style={{ color: "#5C3A21" }}
              data-testid="about-text1"
            >
              {lang === "pt"
                ? "O Wine Village nasceu do desejo de celebrar a mesa portuguesa com intimidade e elegância. Entre garrafas criteriosamente escolhidas, paredes em pedra e luz quente, servimos petiscos para partilhar e pratos que homenageiam o produto nacional."
                : "Wine Village was born from the desire to celebrate the Portuguese table with intimacy and elegance. Among carefully chosen bottles, stone walls and warm lighting, we serve tapas to share and dishes that honour national produce."
              }
            </p>
            <p
              className="font-sans text-[15px] leading-[1.8] mb-10"
              style={{ color: "#5C3A21" }}
              data-testid="about-text2"
            >
              {lang === "pt"
                ? "Aqui, o tempo desacelera. A cozinha é flexível ao gosto, o vinho é servido como conselho, e cada mesa é pensada como um encontro — não como uma passagem."
                : "Here, time slows down. The kitchen adapts to your taste, wine is served as advice, and every table is designed as an encounter — not a mere stop."
              }
            </p>

            {/* Signature */}
            <div className="overline-decorated">
              <span className="font-serif text-lg italic" style={{ color: "#722F37" }}>
                — {lang === "pt" ? "A Equipa Wine Village" : "The Wine Village Team"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
