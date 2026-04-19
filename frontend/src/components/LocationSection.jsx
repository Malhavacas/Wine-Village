import { useLang } from "@/App";
import { content } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, ExternalLink, ArrowRight } from "lucide-react";

export const LocationSection = () => {
  const { lang } = useLang();
  const t = content[lang].location;
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      data-testid="location-section"
    >
      {/* Full-width Map Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-8.4494!3d40.5741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a3b1e7b1c1c1%3A0x1234567890abcdef!2sWine%20Village!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.4) brightness(0.6)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wine Village Location"
          data-testid="google-map-iframe"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/80 via-transparent to-transparent" />

      {/* Glass Card floating over map */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full" ref={ref}>
        <div
          className="glass-card-dark p-8 sm:p-10 md:p-12 max-w-md reveal-item"
          data-testid="location-card"
        >
          {/* Overline */}
          <div className="overline-decorated mb-6" data-testid="location-overline">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DAA520]">
              {lang === "pt" ? "Encontre-nos" : "Find Us"}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-serif text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-tight text-[#F5F0E8] mb-10"
            data-testid="location-title"
          >
            {lang === "pt" ? (
              <>A dois passos <em className="text-emphasis">do centro.</em></>
            ) : (
              <>Steps from <em className="text-emphasis">the centre.</em></>
            )}
          </h2>

          {/* Address */}
          <div className="mb-8" data-testid="contact-address">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full border border-[#DAA520]/30 flex items-center justify-center">
                <MapPin size={14} className="text-[#DAA520]" />
              </div>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#DAA520]">
                {lang === "pt" ? "Morada" : "Address"}
              </span>
            </div>
            <p className="font-sans text-[15px] text-[#F5F0E8]/80 ml-12 leading-relaxed">
              R. Eng. Júlio Portela n&deg;111<br />
              3750-158 Águeda, Portugal
            </p>
          </div>

          {/* Schedule */}
          <div className="mb-10" data-testid="contact-schedule">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-[#DAA520]/30 flex items-center justify-center">
                <Clock size={14} className="text-[#DAA520]" />
              </div>
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#DAA520]">
                {lang === "pt" ? "Horário" : "Schedule"}
              </span>
            </div>
            <div className="ml-12 space-y-2">
              {(content[lang].footer.hours || []).map((h, idx) => (
                <div key={idx} className="flex justify-between text-[14px] font-sans">
                  <span className="text-[#F5F0E8]/50">{h.day}</span>
                  <span className="text-[#F5F0E8]/80">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services line */}
          <p className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#F5F0E8]/30 mb-8">
            {lang === "pt"
              ? "Serviço de mesa · Take-away · Reservas"
              : "Table service · Takeaway · Reservations"
            }
          </p>

          {/* CTA */}
          <a
            href="https://www.google.com/maps/search/Wine+Village+Águeda+R.+Eng.+Júlio+Portela+111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-dark"
            data-testid="contact-maps-btn"
          >
            {lang === "pt" ? "Abrir no Google Maps" : "Open in Google Maps"}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};
