import { ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
              About Our Company
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-snug">
              Focused on accuracy, longevity, and reliable lead times.
            </h2>

            <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-medium text-slate-900">
                <ShieldCheck size={16} className="text-emerald-700" />
                <span>Verified Toolroom Supplier</span>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200 font-mono text-[11px] text-slate-600">
                <div>GSTIN: <span className="font-semibold text-slate-900">{COMPANY_LINKS.gstin}</span></div>
                <div className="text-[10px] text-slate-500 mt-0.5">Specialist in Ball Pen Mould</div>
              </div>
              <p>Registered and verified on major national B2B industrial trade networks:</p>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={COMPANY_LINKS.indiamart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-1 text-emerald-800 hover:text-emerald-950 font-medium"
                >
                  <span>&bull; View Profile on IndiaMART</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={COMPANY_LINKS.tradeindia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-1 text-blue-800 hover:text-blue-950 font-medium"
                >
                  <span>&bull; View Profile on TradeIndia</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={COMPANY_LINKS.justdial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-1 text-amber-800 hover:text-amber-950 font-medium"
                >
                  <span>&bull; View Profile on Justdial Daman</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Founded and directed by master toolmaker <strong className="text-slate-900 font-semibold">Mr. Biju Nair</strong>, Micro Moulds & Tools has been a trusted supplier to the Indian writing instrument and plastics industry from Shakti Industrial Estate, Daman.
            </p>
            <p>
              Our facility combines modern precision machinery (CNC spark erosion EDM, precision turning, surface grinders) with hands-on bench assembly, blue-matching, and trial sampling. We specialize in complex tooling mechanisms that standard toolrooms avoid — notably <strong className="text-slate-900 font-semibold">side-core puller moulds</strong> and <strong className="text-slate-900 font-semibold">automatic unscrewing moulds</strong> for threaded closures and caps.
            </p>
            <p>
              With extensive experience serving plastics manufacturing units across Daman, Silvassa, Vapi, and Gujarat, we also provide rapid breakdown maintenance, parting-line laser welding, and emergency replacement core pins.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">High-Grade Steels</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Hardened AISI H13, Stavax ESR, and 2316 for extreme polish and corrosion resistance.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">Side-Core & Unscrewing</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Expertise in complex threaded geometries, collapsible cores, and side-lifters.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">Job Work & Maintenance</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Dedicated CNC spark erosion (EDM) job work and 24-48h parting-line repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
