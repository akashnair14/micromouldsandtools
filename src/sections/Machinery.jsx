import { motion } from "framer-motion";
import { Zap, Disc, Wrench, Microscope, Sparkles, Cpu } from "lucide-react";

export default function Machinery() {
  const machineryList = [
    {
      category: "Sparking & Electrical Discharge Machining (EDM)",
      icon: Zap,
      items: [
        {
          name: "Sparking EDM Machines (Spark Erosion)",
          quantity: "3 Units",
          specifications: "Z-axis DRO, fine generator controls, precision copper & graphite spark erosion",
          application: "Burning complex mould cavities, pen grip ribs, fine texturing, and blind details",
        },
      ],
    },
    {
      category: "Precision Drilling & Micro Hole Machining",
      icon: Microscope,
      items: [
        {
          name: "Micro Needle Drilling Machine",
          quantity: "1 Unit",
          specifications: "Ultra-fine high-speed spindle with micro infeed for small-diameter hole drilling",
          application: "Precision micro pen tip channels, vent hole drilling, and small orifice machining",
        },
        {
          name: "Toolroom Drill Machine",
          quantity: "1 Unit",
          specifications: "Multi-speed rigid spindle with precision depth stop and tapping capacity",
          application: "Waterline cooling circuits, guide pin bolting, bolster plate drilling, and tapping",
        },
      ],
    },
    {
      category: "Turning & Lathe Center",
      icon: Disc,
      items: [
        {
          name: "Precision Lathe Machine",
          quantity: "1 Unit",
          specifications: "Heavy toolroom lathe with hardened bed, precision 3/4-jaw chucks, and metric/inch threading",
          application: "Pen barrel core pin turning, guide bush fabrication, cavity sleeve sizing, and bolster work",
        },
      ],
    },
    {
      category: "Surface Grinding & Polishing Setup",
      icon: Wrench,
      items: [
        {
          name: "Precision Surface Grinding Machines",
          quantity: "2 Units",
          specifications: "Magnetic chucks with micro infeed and digital readouts for tight parallelism",
          application: "Parting line leveling, core plate sizing, ejector block grinding, and flatness maintenance",
        },
        {
          name: "Toolroom Polishing Machine",
          quantity: "1 Unit",
          specifications: "Variable speed buffing/lapping spindle with fine diamond compound finishing",
          application: "High-gloss mirror polishing on pen cavity inserts, parting lines, and sliding cores",
        },
      ],
    },
  ];

  // Total machines count summary: 3 EDM + 1 Micro Needle Drill + 1 Drill + 1 Lathe + 2 Surface Grinding + 1 Polishing = 9 Machines
  const totalMachinesCount = 9;

  return (
    <section id="machinery" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Plant & Equipment
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Toolroom Machinery & Infrastructure
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Our workshop in Shakti Industrial Estate, Daman is equipped with in-house sparking EDM, micro needle drilling, precision turning, surface grinding, and mirror polishing setups.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs text-xs font-medium text-slate-700 shrink-0">
            <Cpu size={16} className="text-blue-600" />
            <span>{totalMachinesCount} Specialized Machines On Floor</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {machineryList.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gIdx * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                    <group.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Machines in Category */}
                <div className="space-y-4">
                  {group.items.map((machine, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-slate-900">
                          {machine.name}
                        </h4>
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-mono">
                          {machine.quantity}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 font-normal">
                        <strong className="text-slate-700 font-medium">Specs:</strong> {machine.specifications}
                      </p>

                      <p className="text-xs text-slate-500 font-normal">
                        <strong className="text-slate-700 font-medium">Use:</strong> {machine.application}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
