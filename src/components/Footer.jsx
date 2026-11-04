import { Phone, Mail, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand & Verification */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/images/mmt-emblem.png"
                alt="Micro Moulds & Tools Monogram"
                className="h-10 w-auto bg-white p-1 rounded border border-slate-700 object-contain shadow-sm"
                width="48"
                height="36"
                loading="lazy"
              />
              <div>
                <h4 className="text-white font-semibold text-base leading-tight">Micro Moulds & Tools</h4>
                <p className="text-emerald-400 font-mono text-[11px] tracking-wider font-semibold">
                  SPECIALIST IN BALL PEN MOULD
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              All types of Mould Making, Mould Maintenance and Spark Erosion (EDM) Works. Precision engineered toolroom serving stationery and industrial leaders across India.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">
                <span className="text-slate-500">GSTIN:</span>
                <span className="text-white font-medium">{COMPANY_LINKS.gstin}</span>
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href={COMPANY_LINKS.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700 hover:bg-slate-700 hover:text-emerald-300 font-medium transition"
                title="Open Micro Moulds & Tools profile on IndiaMART"
              >
                <ShieldCheck size={14} />
                <span>IndiaMART Profile</span>
                <ExternalLink size={10} />
              </a>
              <a
                href={COMPANY_LINKS.tradeindia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white font-medium transition"
                title="Open Micro Moulds & Tools profile on TradeIndia"
              >
                <span>TradeIndia Profile</span>
                <ExternalLink size={10} />
              </a>
              <a
                href={COMPANY_LINKS.justdial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white font-medium transition"
                title="Open Micro Moulds & Tools profile on Justdial"
              >
                <span>Justdial Listing</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h5 className="text-white font-medium text-xs uppercase tracking-wider mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              {[
                { name: "About Us", id: "about" },
                { name: "Capabilities & Services", id: "services" },
                { name: "Selected Works", id: "works-preview" },
                { name: "Client Testimonials", id: "testimonials" },
                { name: "Toolroom Team", id: "team" },
                { name: "Technical FAQ", id: "faq" },
                { name: "Contact & RFQ", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct details */}
          <div className="md:col-span-4 space-y-2.5 text-xs text-slate-400">
            <h5 className="text-white font-medium uppercase tracking-wider mb-3">
              Toolroom Location
            </h5>
            <p className="flex items-start gap-2 leading-relaxed">
              <MapPin size={15} className="shrink-0 text-slate-300 mt-0.5" />
              <span>Gala No. A8, Survey No. 13/11, Shakti Industrial Estate, Ringanwada, Varkund, Nani Daman, Dadra & Nagar Haveli and Daman & Diu – 396210</span>
            </p>
            <p className="flex items-center gap-2 pt-1">
              <Phone size={15} className="shrink-0 text-slate-300" />
              <a href={`tel:${COMPANY_LINKS.phone}`} className="hover:text-white transition font-medium">
                +91 9377004215 (Mr. Biju Nair)
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-slate-300" />
              <a href={`mailto:${COMPANY_LINKS.email}`} className="hover:text-white transition font-medium">
                {COMPANY_LINKS.email}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>&copy; {new Date().getFullYear()} Micro Moulds & Tools. All rights reserved.</p>
          <a
            href="https://maps.google.com/?q=Micro+Moulds+and+Tools+Daman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1 transition text-slate-300"
          >
            <span>Shakti Industrial Estate, Ringanwada, Daman</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
