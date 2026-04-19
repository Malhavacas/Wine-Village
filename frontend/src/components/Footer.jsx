import { useLang } from "@/App";
import { content } from "@/data/content";
import { Facebook, Phone, MapPin, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const { lang } = useLang();
  const t = content[lang].footer;

  const handleDownload = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob(
      [`<!DOCTYPE html><html>${html}</html>`],
      { type: "text/html;charset=utf-8" }
    );
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
    <footer
      className="py-16 md:py-20"
      style={{ backgroundColor: "#4A1C24" }}
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div data-testid="footer-brand">
            <h3 className="font-serif text-2xl tracking-tight text-cream mb-3">
              Wine Village
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(245,245,220,0.6)" }}>
              {t.tagline}
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/winevillageagueda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:bg-wine/50"
                style={{ backgroundColor: "rgba(245,245,220,0.1)" }}
                data-testid="footer-facebook"
              >
                <Facebook size={16} style={{ color: "#F5F5DC" }} />
              </a>
              <a
                href="tel:+351234064340"
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:bg-wine/50"
                style={{ backgroundColor: "rgba(245,245,220,0.1)" }}
                data-testid="footer-phone"
              >
                <Phone size={16} style={{ color: "#F5F5DC" }} />
              </a>
              <a
                href="https://www.google.com/maps/search/Wine+Village+Águeda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 hover:bg-wine/50"
                style={{ backgroundColor: "rgba(245,245,220,0.1)" }}
                data-testid="footer-maps"
              >
                <MapPin size={16} style={{ color: "#F5F5DC" }} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div data-testid="footer-hours">
            <h4
              className="text-xs font-sans uppercase tracking-[0.2em] mb-5"
              style={{ color: "#DAA520" }}
            >
              {t.hours_title}
            </h4>
            <div className="flex flex-col gap-3">
              {t.hours.map((h, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="font-sans text-sm" style={{ color: "rgba(245,245,220,0.7)" }}>
                    {h.day}
                  </span>
                  <span className="font-sans text-sm font-medium text-cream">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="mt-5 font-sans text-xs font-medium"
              style={{ color: "#DAA520" }}
              data-testid="footer-reserve-note"
            >
              {t.reserve_cta}
            </p>
          </div>

          {/* Download */}
          <div data-testid="footer-download-section">
            <h4
              className="text-xs font-sans uppercase tracking-[0.2em] mb-5"
              style={{ color: "#DAA520" }}
            >
              {t.download_title}
            </h4>
            <button
              onClick={handleDownload}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-wine text-cream font-sans text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-wine-dark active:scale-[0.98] min-h-[44px]"
              data-testid="download-html-btn"
            >
              <Download size={16} />
              {t.download_btn}
            </button>
            <p
              className="mt-3 font-sans text-xs text-center"
              style={{ color: "rgba(245,245,220,0.5)" }}
            >
              {t.download_note}
            </p>
          </div>
        </div>

        <Separator className="bg-cream/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs" style={{ color: "rgba(245,245,220,0.4)" }}>
            &copy; {new Date().getFullYear()} Wine Village. {t.rights}.
          </p>
          <p className="font-sans text-xs" style={{ color: "rgba(245,245,220,0.4)" }}>
            {t.payment}
          </p>
        </div>
      </div>
    </footer>
  );
};
