import { ArrowRight, ShieldCheck, ExternalLink, MapPin } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Editorial Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              <span>Toolroom & Machine Shop</span>
              <span className="text-slate-300">•</span>
              <span>Daman, India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-5">
              Precision injection moulds for writing instruments & engineering plastics.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Specialized in multi-cavity ball pen moulds, side-core puller tooling, automatic unscrewing mechanisms, and contract CNC spark erosion (EDM) in Shakti Industrial Estate, Daman.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition cursor-pointer flex items-center gap-2"
              >
                <span>Request a Quotation</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-300 rounded transition cursor-pointer"
              >
                View Capabilities
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin size={14} className="text-slate-400 shrink-0" />
              <span>Gala No. A8, Shakti Industrial Estate, Ringanwada, Daman – 396210</span>
            </div>
          </div>

          {/* Structured Company Credentials & Summary Card */}
          <div className="lg:col-span-5 bg-slate-50/70 rounded-xl border border-slate-200/90 p-6 sm:p-7">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Enterprise Summary & Credentials
            </h2>

            <dl className="divide-y divide-slate-200/70 text-xs">
              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">Specialization</dt>
                <dd className="font-semibold text-slate-900 text-right">
                  Ball Pen Moulds & Spark Erosion
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">Leadership</dt>
                <dd className="font-medium text-slate-800 text-right">
                  Mr. Biju Nair (25+ Yrs)
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">Registered GSTIN</dt>
                <dd className="font-mono text-slate-800 text-right">
                  {COMPANY_LINKS.gstin}
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">Cavitation Range</dt>
                <dd className="font-medium text-slate-800 text-right">
                  8 to 64 Cavities
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">Mould Steels</dt>
                <dd className="font-medium text-slate-800 text-right">
                  Stavax ESR, AISI H13, 2316, P20
                </dd>
              </div>

              <div className="py-3 flex justify-between items-baseline gap-4">
                <dt className="text-slate-500 font-normal">EDM Finish</dt>
                <dd className="font-medium text-slate-800 text-right">
                  Sub-micron (down to VDI 12)
                </dd>
              </div>
            </dl>

            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
              <a
                href={COMPANY_LINKS.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-medium transition-colors"
              >
                <ShieldCheck size={14} className="text-emerald-700" />
                <span>IndiaMART Profile</span>
                <ExternalLink size={10} className="text-slate-400" />
              </a>

              <a
                href={COMPANY_LINKS.tradeindia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                <span>TradeIndia</span>
                <ExternalLink size={10} className="text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Fact Band */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold text-slate-900">25+ Years</div>
            <div className="text-xs text-slate-500 mt-0.5">Toolmaking experience in Daman</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">GST Verified</div>
            <div className="text-xs text-slate-500 mt-0.5">Registered Indian enterprise</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">MSME Registered</div>
            <div className="text-xs text-slate-500 mt-0.5">Government recognized unit</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">50+ Clients</div>
            <div className="text-xs text-slate-500 mt-0.5">Active plastics & stationery manufacturers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
