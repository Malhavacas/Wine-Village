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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#1a0f0a]/95 backdrop-blur-xl shadow-2xl border-b border-[#DAA520]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 group"
          data-testid="header-logo"
        >
          <div className="w-9 h-9 rounded-full border border-[#DAA520]/50 flex items-center justify-center transition-all duration-300 group-hover:border-[#DAA520]">
            <span className="font-serif text-sm text-[#DAA520]">W</span>
          </div>
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#F5F0E8]">
            Wine Village
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
          {[
            ["about", t.about],
            ["menu", t.menu],
            ["reviews", t.reviews],
            ["contact", t.contact],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[11px] font-sans tracking-[0.18em] uppercase text-[#F5F0E8]/60 transition-colors duration-400 hover:text-[#DAA520]"
              data-testid={`nav-${id}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="w-10 h-10 rounded-full border border-[#DAA520]/30 flex items-center justify-center transition-all duration-300 hover:border-[#DAA520] hover:bg-[#DAA520]/10"
            data-testid="lang-toggle-desktop"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <span className="text-[10px] font-sans tracking-wider text-[#DAA520] uppercase">
              {lang === "pt" ? "EN" : "PT"}
            </span>
          </button>

          {/* Phone - pill */}
          <a
            href="tel:+351234064340"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DAA520] text-[#1a0f0a] text-[11px] font-sans tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#c49420] hover:shadow-lg hover:shadow-[#DAA520]/20"
            data-testid="header-phone-desktop"
          >
            <Phone size={12} strokeWidth={2.5} />
            234 064 340
          </a>

          {/* Mobile phone icon */}
          <a
            href="tel:+351234064340"
            className="sm:hidden w-10 h-10 rounded-full bg-[#DAA520] flex items-center justify-center text-[#1a0f0a]"
            data-testid="header-phone-mobile"
          >
            <Phone size={14} strokeWidth={2.5} />
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#F5F0E8]/20 flex items-center justify-center text-[#F5F0E8] transition-all duration-300 hover:border-[#DAA520]/50"
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden bg-[#1a0f0a]/98 backdrop-blur-2xl border-t border-[#DAA520]/10 animate-slideDown"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col py-6 px-6 gap-1">
            {[
              ["about", t.about],
              ["menu", t.menu],
              ["reviews", t.reviews],
              ["contact", t.contact],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left py-4 text-[11px] font-sans tracking-[0.18em] uppercase text-[#F5F0E8]/70 border-b border-[#F5F0E8]/5 transition-colors hover:text-[#DAA520]"
                data-testid={`mobile-nav-${id}`}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:+351234064340"
              className="flex items-center gap-3 py-4 text-[11px] font-sans tracking-[0.18em] uppercase text-[#DAA520]"
              data-testid="mobile-nav-phone"
            >
              <Phone size={14} />
              {t.reserve} — 234 064 340
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
