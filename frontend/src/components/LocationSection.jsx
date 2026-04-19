import { useLang } from "@/App";
import { content } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export const LocationSection = () => {
  const { lang } = useLang();
  const t = content[lang].location;
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FAF9F6" }}
      data-testid="location-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 reveal-item">
          <p
            className="text-xs font-sans uppercase tracking-[0.2em] mb-4"
            style={{ color: "#DAA520" }}
            data-testid="location-overline"
          >
            {t.overline}
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: "#2C110C" }}
            data-testid="location-title"
          >
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Map */}
          <div className="reveal-item overflow-hidden rounded-sm" data-testid="google-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-8.4494!3d40.5741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a3b1e7b1c1c1%3A0x1234567890abcdef!2sWine%20Village!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wine Village Location"
              className="w-full"
              data-testid="google-map-iframe"
            />
          </div>

          {/* Contact Info */}
          <div className="reveal-item flex flex-col gap-7" style={{ animationDelay: "0.15s" }}>
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/Wine+Village+Águeda+R.+Eng.+Júlio+Portela+111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
              data-testid="contact-address"
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0"
                style={{ backgroundColor: "rgba(114,47,55,0.1)" }}
              >
                <MapPin size={20} style={{ color: "#722F37" }} />
              </div>
              <div>
                <p className="font-sans text-base font-medium" style={{ color: "#2C110C" }}>
                  {t.address}
                </p>
                <span className="text-xs font-sans flex items-center gap-1 mt-1 group-hover:underline" style={{ color: "#DAA520" }}>
                  <ExternalLink size={10} />
                  Google Maps
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+351234064340"
              className="flex items-start gap-4 group"
              data-testid="contact-phone"
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0"
                style={{ backgroundColor: "rgba(114,47,55,0.1)" }}
              >
                <Phone size={20} style={{ color: "#722F37" }} />
              </div>
              <div>
                <p className="font-sans text-base font-medium group-hover:underline" style={{ color: "#2C110C" }}>
                  {t.phone}
                </p>
                <span className="text-xs font-sans mt-1" style={{ color: "#5C3A21" }}>
                  {lang === "pt" ? "Toque para ligar" : "Tap to call"}
                </span>
              </div>
            </a>

            {/* Schedule */}
            <div className="flex items-start gap-4" data-testid="contact-schedule">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0"
                style={{ backgroundColor: "rgba(114,47,55,0.1)" }}
              >
                <Clock size={20} style={{ color: "#722F37" }} />
              </div>
              <div>
                <p className="font-sans text-base font-medium" style={{ color: "#2C110C" }}>
                  {t.schedule}
                </p>
                <p className="text-sm font-sans mt-1" style={{ color: "#5C3A21" }}>
                  {t.closed}
                </p>
                <p className="text-xs font-sans mt-2 font-medium" style={{ color: "#DAA520" }}>
                  {t.reserve_note}
                </p>
              </div>
            </div>

            {/* Facebook */}
            <a
              href="https://facebook.com/winevillageagueda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
              data-testid="contact-facebook"
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0"
                style={{ backgroundColor: "rgba(114,47,55,0.1)" }}
              >
                <Facebook size={20} style={{ color: "#722F37" }} />
              </div>
              <div>
                <p className="font-sans text-base font-medium group-hover:underline" style={{ color: "#2C110C" }}>
                  Facebook
                </p>
                <span className="text-xs font-sans mt-1" style={{ color: "#5C3A21" }}>
                  /winevillageagueda
                </span>
              </div>
            </a>

            {/* Services */}
            <div data-testid="contact-services">
              <p className="font-sans text-sm font-medium mb-3" style={{ color: "#2C110C" }}>
                {t.services_title}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans rounded-sm"
                    style={{
                      backgroundColor: "rgba(114,47,55,0.06)",
                      color: "#5C3A21",
                      border: "1px solid rgba(114,47,55,0.1)",
                    }}
                    data-testid={`service-tag-${idx}`}
                  >
                    <CheckCircle size={10} style={{ color: "#DAA520" }} />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Reserve CTA */}
            <a
              href="tel:+351234064340"
              className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-wine text-cream font-sans text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-wine-dark active:scale-[0.98] min-h-[52px]"
              data-testid="contact-reserve-cta"
            >
              <Phone size={16} />
              {content[lang].nav.reserve} — 234 064 340
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
