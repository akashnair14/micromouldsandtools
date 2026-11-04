import { motion } from "framer-motion";

export default function Services() {
  const capabilities = [
    {
      title: "Ball Pen & Plastic Injection Moulds",
      desc: "Specialized high-cavitation tooling (8, 16, 32, up to 64 cavities) for pen barrels, caps, clips, plugs, and precision consumer plastic components with balanced runners.",
      details: [
        "Side-Core Puller Moulds",
        "Automatic Unscrewing Moulds (Threaded)",
        "Stavax ESR & H13 Hardened Steels",
        "Hot runner & cold runner layouts",
      ],
    },
    {
      title: "CNC Spark Erosion (EDM) Job Work",
      desc: "Contract electrical discharge machining for complex blind cavities, intricate grip texturing, deep rib burning, and narrow slots on hardened tool steels.",
      details: [
        "Fine copper and graphite electrode design",
        "Micro-hole drilling & narrow gap burning",
        "Uniform surface finish down to VDI 12",
        "Sub-micron tolerance repeatability",
      ],
    },
    {
      title: "Mould Maintenance & Breakdown Repair",
      desc: "Time-critical toolroom maintenance for production moulds across Daman, Silvassa, and Vapi to eliminate flash, restore worn parting lines, and replace damaged core pins.",
      details: [
        "Parting line laser welding & bench spotting",
        "Replacement core pins & ejector sleeves (SKD61)",
        "Cavity repolishing & venting restoration",
        "Emergency 24 to 48-hour plant turnaround",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Toolroom Capabilities & Services
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            What We Manufacture & Service
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Full-service tooling engineering backed by registered manufacturing and job-work capabilities in Daman.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-7 rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-medium text-slate-400 block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-1.5 text-xs text-slate-500">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
