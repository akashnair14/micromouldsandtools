import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Hero() {
  return (
    <section id="home" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Toolroom & EDM Works • Daman, India</span>
            </div>
            <a
              href={COMPANY_LINKS.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium hover:bg-emerald-100 hover:border-emerald-300 transition"
              title="View Micro Moulds & Tools profile on IndiaMART"
            >
              <ShieldCheck size={13} className="text-emerald-600" />
              <span>IndiaMART Verified Profile</span>
              <ExternalLink size={11} className="opacity-70" />
            </a>
            <a
              href={COMPANY_LINKS.tradeindia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium hover:bg-blue-100 hover:border-blue-300 transition"
              title="View Micro Moulds & Tools profile on TradeIndia"
            >
              <span>TradeIndia Listed</span>
              <ExternalLink size={11} className="opacity-70" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
            Precision injection moulds for ball pens and plastic components.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
            Founded by Mr. Biju Nair with over 25 years of master toolroom craftsmanship. We manufacture high-cavity ball pen moulds, side-core & unscrewing tooling, and CNC spark erosion (EDM) in Shakti Industrial Estate, Daman.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition cursor-pointer flex items-center gap-2"
            >
              <span>Request a Quote / RFQ</span>
              <ArrowRight size={15} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition cursor-pointer"
            >
              View Capabilities
            </motion.button>
          </div>
        </motion.div>

        {/* Fact strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {[
            { value: "25+ Yrs", label: "Master toolmaker heritage" },
            { value: "±0.005 mm", label: "Machining tolerance" },
            { value: "Up to 64", label: "Mould cavitation capacity" },
            { value: "Survey 13/11", label: "Shakti Ind. Estate, Daman" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * idx + 0.2 }}
            >
              <div className="text-2xl font-semibold text-slate-900">{item.value}</div>
              <div className="text-xs text-slate-500 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
