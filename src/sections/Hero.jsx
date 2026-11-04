import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ExternalLink, Award, MapPin } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Hero() {
  return (
    <section id="home" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Verification & Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-semibold tracking-wide uppercase">
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
            <span>IndiaMART Verified Supplier</span>
            <ExternalLink size={10} className="opacity-70" />
          </a>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200">
            GSTIN: {COMPANY_LINKS.gstin}
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          Precision Injection Moulds for Writing Instruments & Industrial Tooling.
        </motion.h1>

        {/* Lead Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal mb-10 max-w-3xl mx-auto"
        >
          Daman’s trusted manufacturing studio for high-speed multi-cavity ball pen moulds, side-core pullers, automatic unscrewing tooling, and CNC spark erosion (EDM).
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <span>Request a Quotation / RFQ</span>
            <ArrowRight size={15} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition cursor-pointer shadow-2xs"
          >
            Explore Capabilities
          </motion.button>
        </motion.div>

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-flex items-center gap-2 text-xs text-slate-500 font-normal pb-4"
        >
          <MapPin size={14} className="text-slate-700 shrink-0" />
          <span>{COMPANY_LINKS.address}</span>
        </motion.div>

        {/* Fact Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "25+ Yrs", label: "Toolmaking experience in Daman" },
            { value: "±0.005 mm", label: "Sub-micron repeatability" },
            { value: "Up to 64", label: "Mould cavitation capability" },
            { value: "GST Verified", label: "Registered Indian enterprise" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * idx + 0.3 }}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950">{item.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
