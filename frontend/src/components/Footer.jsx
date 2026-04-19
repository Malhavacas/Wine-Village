import { useLang } from "@/App";
import { content } from "@/data/content";
import { Facebook, Phone, MapPin, Download, MessageCircle } from "lucide-react";

export const Footer = () => {
  const { lang } = useLang();
  const t = content[lang].footer;

  const handleDownload = () => {
    const clone = document.documentElement.cloneNode(true);
    // Remove React scripts and dev tools
    clone.querySelectorAll('script').forEach(s => s.remove());
    clone.querySelectorAll('#emergent-badge').forEach(s => s.remove());
    clone.querySelectorAll('[data-debug-wrapper]').forEach(s => s.remove());
    const cssText = Array.from(document.styleSheets)
      .map(sheet => {
        try { return Array.from(sheet.cssRules).map(r => r.cssText).join('\n'); }
        catch(e) { return ''; }
      }).join('\n');
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    clone.querySelector('head').appendChild(styleEl);
    const html = `<!DOCTYPE html>\n<html lang="pt">\n${clone.innerHTML}\n</html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wine-village-website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating Contact Buttons - Fixed */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" data-testid="floating-contacts">
        <a
          href="https://facebook.com/winevillageagueda"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#722F37] flex items-center justify-center text-[#F5F0E8] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[#722F37]/40 hover:shadow-2xl"
          data-testid="floating-facebook"
          title="Facebook"
        >
          <MessageCircle size={18} />
        </a>
        <a
          href="tel:+351234064340"
          className="w-12 h-12 rounded-full bg-[#DAA520] flex items-center justify-center text-[#1a0f0a] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[#DAA520]/40 hover:shadow-2xl"
          data-testid="floating-phone"
          title="234 064 340"
        >
          <Phone size={18} />
        </a>
      </div>

      {/* Footer */}
      <footer
        className="py-20 md:py-24"
        style={{ backgroundColor: "#0d0806", borderTop: "1px solid rgba(218,165,32,0.08)" }}
        data-testid="footer"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
            {/* Brand */}
            <div data-testid="footer-brand">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full border border-[#DAA520]/40 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#DAA520]">W</span>
                </div>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#F5F0E8]">
                  Wine Village
                </span>
              </div>
              <p className="font-sans text-[13px] leading-[1.8] text-[#F5F0E8]/35 mb-6">
                {t.tagline}
              </p>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/winevillageagueda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#F5F0E8]/10 flex items-center justify-center transition-all duration-300 hover:border-[#DAA520]/50 hover:bg-[#DAA520]/5"
                  data-testid="footer-facebook"
                >
                  <Facebook size={14} className="text-[#F5F0E8]/40" />
                </a>
                <a
                  href="tel:+351234064340"
                  className="w-10 h-10 rounded-full border border-[#F5F0E8]/10 flex items-center justify-center transition-all duration-300 hover:border-[#DAA520]/50 hover:bg-[#DAA520]/5"
                  data-testid="footer-phone"
                >
                  <Phone size={14} className="text-[#F5F0E8]/40" />
                </a>
                <a
                  href="https://www.google.com/maps/search/Wine+Village+Águeda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#F5F0E8]/10 flex items-center justify-center transition-all duration-300 hover:border-[#DAA520]/50 hover:bg-[#DAA520]/5"
                  data-testid="footer-maps"
                >
                  <MapPin size={14} className="text-[#F5F0E8]/40" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div data-testid="footer-hours">
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520] mb-6">
                {t.hours_title}
              </h4>
              <div className="flex flex-col gap-3.5">
                {t.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="font-sans text-[13px] text-[#F5F0E8]/35">
                      {h.day}
                    </span>
                    <span className="font-sans text-[13px] text-[#F5F0E8]/70">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px] font-sans tracking-[0.15em] uppercase text-[#DAA520]/60" data-testid="footer-reserve-note">
                {t.reserve_cta}
              </p>
            </div>

            {/* Download */}
            <div data-testid="footer-download-section">
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520] mb-6">
                {t.download_title}
              </h4>
              <button
                onClick={handleDownload}
                className="btn-pill btn-pill-dark w-full justify-center"
                data-testid="download-html-btn"
              >
                <Download size={14} />
                {t.download_btn}
              </button>
              <p className="mt-4 font-sans text-[11px] text-[#F5F0E8]/25 text-center">
                {t.download_note}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#F5F0E8]/5 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-sans text-[11px] text-[#F5F0E8]/20">
              &copy; {new Date().getFullYear()} Wine Village. {t.rights}.
            </p>
            <p className="font-sans text-[11px] text-[#F5F0E8]/20">
              {t.payment}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
