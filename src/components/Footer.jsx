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
            <h4 className="text-white font-semibold text-base">Micro Moulds & Tools</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Precision manufacturers of injection moulds for ball pens, side-core tooling, unscrewing moulds, and CNC spark erosion (EDM) job works. Founded by Mr. Biju Nair in Daman, India.
            </p>

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
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-amber-300 border border-slate-700 hover:bg-slate-700 hover:text-amber-200 font-medium transition"
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

        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>&copy; {new Date().getFullYear()} Micro Moulds & Tools. All rights reserved.</p>
          <a
            href="https://maps.google.com/?q=Micro+Moulds+and+Tools+Daman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 flex items-center gap-1 transition"
          >
            <span>Shakti Industrial Estate, Ringanwada, Daman</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
