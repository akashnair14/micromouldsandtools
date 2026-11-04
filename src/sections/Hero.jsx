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

          {/* Right Column: Authentic Company Signboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl border-2 border-[#0f3460] shadow-xl overflow-hidden p-6 relative">
              <div className="text-center pb-5 border-b border-slate-100">
                <img
                  src="/images/mmt-logo.png"
                  alt="Micro Moulds and Tools Official Signboard Logo"
                  className="w-full max-w-sm mx-auto h-auto object-contain"
                />
              </div>

              <div className="pt-5 space-y-3">
                <div className="bg-blue-50/80 rounded-lg p-3 text-center border border-blue-100">
                  <span className="text-xs font-bold text-[#0f3460] uppercase tracking-wider block">
                    Certified Manufacturing Scope
                  </span>
                  <p className="text-xs text-slate-700 mt-1 font-medium">
                    All Type of Mould Making, Mould Maintenance & Spark Erosion Works
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Machining Limit</span>
                    <strong className="text-slate-900 text-sm">±0.005 mm</strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Cavity Capacity</span>
                    <strong className="text-slate-900 text-sm">Up to 64 Cavities</strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Steels Formed</span>
                    <strong className="text-slate-900 text-sm">Stavax ESR / H13</strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-mono">Master Experience</span>
                    <strong className="text-slate-900 text-sm">25+ Years Lead</strong>
                  </div>
                </div>
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
