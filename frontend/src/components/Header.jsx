import { useLang } from "@/App";
import { content } from "@/data/content";
import { Phone, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const { lang, toggleLang } = useLang();
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-xl shadow-md border-b border-wine/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-serif text-xl md:text-2xl tracking-tight"
          data-testid="header-logo"
          style={{ color: scrolled ? "#722F37" : "#F5F5DC" }}
        >
          Wine Village
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          {[
            ["about", t.about],
            ["menu", t.menu],
            ["reviews", t.reviews],
            ["contact", t.contact],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-sans tracking-wide transition-colors duration-300 hover:opacity-70"
              style={{ color: scrolled ? "#2C110C" : "#F5F5DC" }}
              data-testid={`nav-${id}`}
            >
              {label}
            </button>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-sans transition-colors duration-300"
            style={{ color: scrolled ? "#DAA520" : "#DAA520" }}
            data-testid="lang-toggle-desktop"
          >
            <Globe size={16} />
            {lang === "pt" ? "EN" : "PT"}
          </button>

          {/* Phone */}
          <a
            href="tel:+351234064340"
            className="flex items-center gap-2 px-4 py-2 bg-wine text-cream text-sm font-sans rounded-sm transition-all duration-300 hover:bg-wine-dark"
            data-testid="header-phone-desktop"
          >
            <Phone size={14} />
            234 064 340
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-sans"
            style={{ color: "#DAA520" }}
            data-testid="lang-toggle-mobile"
          >
            <Globe size={14} />
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <a
            href="tel:+351234064340"
            className="flex items-center justify-center w-10 h-10 bg-wine text-cream rounded-sm"
            data-testid="header-phone-mobile"
          >
            <Phone size={18} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-10 h-10"
            style={{ color: scrolled ? "#2C110C" : "#F5F5DC" }}
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-cream/98 backdrop-blur-xl border-t border-wine/10 animate-slideDown"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col py-4 px-6 gap-1">
            {[
              ["about", t.about],
              ["menu", t.menu],
              ["reviews", t.reviews],
              ["contact", t.contact],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left py-3 text-base font-sans text-wine-dark border-b border-wine/5 transition-colors hover:text-wine"
                data-testid={`mobile-nav-${id}`}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:+351234064340"
              className="flex items-center gap-3 py-3 text-base font-sans text-wine font-medium"
              data-testid="mobile-nav-phone"
            >
              <Phone size={18} />
              {t.reserve} — 234 064 340
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
