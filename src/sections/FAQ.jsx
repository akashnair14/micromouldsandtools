import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What typical lead time do you require for a new injection mould?",
      a: "Depending on cavitation and complexity, single-part or low-cavity tools typically require 2.5 to 3 weeks. High-cavity moulds (16, 32, or 64 cavities) usually require 3.5 to 5 weeks from approved 3D CAD to initial sampling and trial parts.",
    },
    {
      q: "What mould steels do you use for pen barrels and caps?",
      a: "We predominantly work with imported Stavax ESR (through-hardened stainless steel for mirror finish and corrosion resistance), AISI H13 (vacuum hardened to 48-52 HRC for core/cavities), 2316, and pre-hardened P20 depending on resin characteristics and cycle requirements.",
    },
    {
      q: "Can you assist with emergency breakdown repairs on existing moulds?",
      a: "Yes. We maintain dedicated bench space and EDM capacity for rapid repair services: parting-line laser welding, replacement core pin turning, sleeve refurbishment, and flash elimination within 24 to 48 hours for local manufacturing plants in Daman, Silvassa, and Vapi.",
    },
    {
      q: "Do you supply inspection reports with completed tooling?",
      a: "Every mould is accompanied by stage inspection reports covering core pin concentricity, cavity dimensions, hardness test certifications, and sample trial measurement data before handover.",
    },
    {
      q: "Can we visit your facility in Daman to discuss a project?",
      a: "Yes, clients are always welcome to visit our toolroom at Gala No. A8, Shakti Industrial Estate in Ringanwada, Daman. You can review our EDM machines, inspect ongoing tooling projects, and consult directly with our founder Mr. Biju Nair.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Tooling Inquiries & Technical Details
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
