import { useLang } from "@/App";
import { content, menuItems } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { useState } from "react";

const MenuCard = ({ item, lang, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="group reveal-item relative overflow-hidden rounded-sm bg-white"
      style={{
        animationDelay: `${index * 0.08}s`,
        border: item.star ? "1px solid rgba(218,165,32,0.5)" : "1px solid rgba(44,17,12,0.08)",
      }}
      data-testid={`menu-item-${item.id}`}
    >
      {item.star && (
        <div
          className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-sm text-xs font-sans"
          style={{ backgroundColor: "#DAA520", color: "#2C110C" }}
          data-testid={`star-badge-${item.id}`}
        >
          <Star size={10} fill="#2C110C" color="#2C110C" />
          {lang === "pt" ? "Destaque" : "Star Dish"}
        </div>
      )}

      <div className="relative overflow-hidden h-48 sm:h-56">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-wine/5 animate-pulse" />
        )}
        <img
          src={item.image}
          alt={item.name[lang]}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      <div className="p-4">
        <h3
          className="font-serif text-lg mb-1"
          style={{ color: "#2C110C" }}
        >
          {item.name[lang]}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: "#5C3A21" }}
        >
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

  const categories = [
    { key: "starters", label: t.categories.starters },
    { key: "mains", label: t.categories.mains },
    { key: "risottos", label: t.categories.risottos },
    { key: "desserts", label: t.categories.desserts },
    { key: "drinks", label: t.categories.drinks },
  ];

  return (
    <section
      id="menu"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FAF9F6" }}
      data-testid="menu-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 reveal-item">
          <p
            className="text-xs font-sans uppercase tracking-[0.2em] mb-4"
            style={{ color: "#DAA520" }}
            data-testid="menu-overline"
          >
            {t.overline}
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: "#2C110C" }}
            data-testid="menu-title"
          >
            {t.title}
          </h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="risottos" className="reveal-item" style={{ animationDelay: "0.1s" }}>
          <TabsList
            className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto p-0"
            data-testid="menu-tabs"
          >
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.key}
                value={cat.key}
                className="px-5 py-2.5 text-sm font-sans rounded-sm border transition-all duration-300
                  data-[state=active]:bg-wine data-[state=active]:text-cream data-[state=active]:border-wine
                  data-[state=inactive]:bg-transparent data-[state=inactive]:border-wine/20 data-[state=inactive]:text-wine-dark
                  hover:border-wine/40 min-h-[44px]"
                data-testid={`menu-tab-${cat.key}`}
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key} data-testid={`menu-content-${cat.key}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(menuItems[cat.key] || []).map((item, idx) => (
                  <MenuCard key={item.id} item={item} lang={lang} index={idx} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
