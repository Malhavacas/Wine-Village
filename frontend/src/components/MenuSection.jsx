import { useLang } from "@/App";
import { content, menuItems } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";
import { useState } from "react";

const categories = ["starters", "mains", "risottos", "desserts", "drinks"];

const MenuCard = ({ item, lang, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="group reveal-item relative overflow-hidden rounded-2xl cursor-default"
      style={{
        animationDelay: `${index * 0.08}s`,
        backgroundColor: "#1a0f0a",
        border: item.star ? "1px solid rgba(218,165,32,0.4)" : "1px solid rgba(245,240,232,0.06)",
      }}
      data-testid={`menu-item-${item.id}`}
    >
      {item.star && (
        <div
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-sans tracking-[0.1em] uppercase"
          style={{ backgroundColor: "#DAA520", color: "#1a0f0a" }}
          data-testid={`star-badge-${item.id}`}
        >
          <Star size={9} fill="#1a0f0a" color="#1a0f0a" />
          {lang === "pt" ? "Destaque" : "Star Dish"}
        </div>
      )}

      <div className="relative overflow-hidden h-48 sm:h-56">
        {!imgLoaded && <div className="absolute inset-0 img-shimmer" />}
        <img
          src={item.image}
          alt={item.name[lang]}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg text-[#F5F0E8] mb-1.5">
          {item.name[lang]}
        </h3>
        <p className="font-sans text-[13px] leading-relaxed text-[#F5F0E8]/45">
          {item.desc[lang]}
        </p>
      </div>
    </div>
  );
};

export const MenuSection = () => {
  const { lang } = useLang();
  const t = content[lang].menu;
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState("risottos");

  const catLabels = {
    starters: t.categories.starters,
    mains: t.categories.mains,
    risottos: t.categories.risottos,
    desserts: t.categories.desserts,
    drinks: t.categories.drinks,
  };

  return (
    <section
      id="menu"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0d0806" }}
      data-testid="menu-section"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal-item">
          <div className="flex justify-center mb-6">
            <div className="overline-decorated" data-testid="menu-overline">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520]">
                {t.overline}
              </span>
            </div>
          </div>
          <h2
            className="font-serif text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] tracking-tight text-[#F5F0E8]"
            data-testid="menu-title"
          >
            {lang === "pt" ? (
              <>Os nossos <em className="text-emphasis">petiscos.</em></>
            ) : (
              <>Our <em className="text-emphasis">tapas.</em></>
            )}
          </h2>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 reveal-item" style={{ animationDelay: "0.1s" }} data-testid="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full text-[11px] font-sans tracking-[0.15em] uppercase transition-all duration-400 min-h-[44px] ${
                activeTab === cat
                  ? "bg-[#DAA520] text-[#1a0f0a] shadow-lg shadow-[#DAA520]/20"
                  : "bg-transparent border border-[#F5F0E8]/12 text-[#F5F0E8]/50 hover:border-[#DAA520]/40 hover:text-[#DAA520]"
              }`}
              data-testid={`menu-tab-${cat}`}
            >
              {catLabels[cat]}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid={`menu-content-${activeTab}`}>
          {(menuItems[activeTab] || []).map((item, idx) => (
            <MenuCard key={item.id} item={item} lang={lang} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
