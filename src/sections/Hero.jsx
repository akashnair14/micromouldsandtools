import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ExternalLink, Award, FileCheck, MapPin } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Hero() {
  return (
    <section id="home" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Official Badge & Identity Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f3460] text-white text-xs font-bold tracking-wide uppercase shadow-2xs">
                <Award size={13} className="text-amber-400" />
                <span>Specialist in Ball Pen Mould</span>
              </span>
              <a
                href={COMPANY_LINKS.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium hover:bg-emerald-100 transition"
              >
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>IndiaMART Verified</span>
                <ExternalLink size={10} className="opacity-70" />
              </a>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-mono">
                GST: {COMPANY_LINKS.gstin}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
              Precision Injection Moulds for Writing Instruments & Industrial Parts.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Micro Moulds & Tools is Daman’s trusted manufacturing studio for high-speed multi-cavity ball pen moulds, side-core pullers, automatic unscrewing moulds, and contract CNC spark erosion (EDM).
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 text-sm font-bold text-white bg-[#0f3460] hover:bg-[#1a4b87] rounded-md transition cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span>Request a Quotation / RFQ</span>
                <ArrowRight size={15} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition cursor-pointer"
              >
                Toolroom Capabilities
              </motion.button>
            </div>

            {/* Quick address strip */}
            <div className="flex items-start gap-2 text-xs text-slate-500 font-normal">
              <MapPin size={15} className="text-[#0f3460] shrink-0 mt-0.5" />
              <span>{COMPANY_LINKS.address}</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Toolroom Engineering Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 text-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-slate-800 relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header: Core Specialization */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                    Live Toolroom Specifications
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  Daman Facility
                </span>
              </div>

              {/* Engineering Scope Highlight */}
              <div className="my-5 p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  Primary Domain
                </div>
                <div className="text-lg font-bold text-white tracking-tight">
                  Ball Pen Moulds & Spark Erosion (EDM)
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Specialized in multi-cavity pen barrels, side-action clip moulds, and automatic unscrewing threaded caps.
                </p>
              </div>

              {/* 4 Precision Metric Cells */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">
                    Machining Tolerance
                  </span>
                  <div className="text-xl font-bold text-emerald-400 mt-0.5">±0.005 mm</div>
                  <span className="text-[10px] text-slate-500">Sub-micron spark erosion</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">
                    Cavitation
                  </span>
                  <div className="text-xl font-bold text-white mt-0.5">Up to 64</div>
                  <span className="text-[10px] text-slate-500">Balanced runner layouts</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">
                    Steels Processed
                  </span>
                  <div className="text-sm font-bold text-slate-200 mt-1">Stavax ESR / H13</div>
                  <span className="text-[10px] text-slate-500">Hardened AISI & 2316</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">
                    Lead Expertise
                  </span>
                  <div className="text-sm font-bold text-slate-200 mt-1">25+ Years</div>
                  <span className="text-[10px] text-slate-500">Master toolmaker lead</span>
                </div>
              </div>

              {/* Capabilities checklist footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> CNC Spark Erosion
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> 24h Mould Repair
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> Trial Sampling
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fact Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {[
            { value: "25+ Yrs", label: "Toolmaking experience in Daman" },
            { value: "±0.005 mm", label: "Sub-micron repeatability" },
            { value: "Up to 64", label: "Mould cavitation capability" },
            { value: "GST Verified", label: "26ALLPB6896P1Z7" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx + 0.2 }}
            >
              <div className="text-2xl font-bold text-[#0f3460]">{item.value}</div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
