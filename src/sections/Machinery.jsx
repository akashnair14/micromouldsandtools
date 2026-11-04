import { motion } from "framer-motion";
import { Zap, Disc, Wrench, Microscope, Gauge, Cpu } from "lucide-react";

export default function Machinery() {
  const machineryList = [
    {
      category: "Electrical Discharge Machining (EDM)",
      icon: Zap,
      items: [
        {
          name: "CNC Sinker EDM Machines",
          quantity: "2 Units",
          specifications: "Z-axis DRO, 50A generator, precision copper/graphite erosion down to ±0.003mm",
          application: "Burning intricate cavity geometries, deep pen ribs, and grip patterns",
        },
        {
          name: "Conventional Spark Erosion EDM",
          quantity: "1 Unit",
          specifications: "High-stability dielectric tank, micro-step servo feed",
          application: "Narrow slots, blind keyways, and roughing operations",
        },
      ],
    },
    {
      category: "Turning & Lathe Center",
      icon: Disc,
      items: [
        {
          name: "High-Precision Toolroom Lathes",
          quantity: "2 Units",
          specifications: "Hardened bed, chuck runout < 0.005mm, metric/inch threading",
          application: "Pen barrel core pin turning, guide bush manufacturing, and sleeve machining",
        },
        {
          name: "Heavy-Duty All-Geared Lathe",
          quantity: "1 Unit",
          specifications: "Large swing over bed, high torque for roughing bolster plates",
          application: "Mould base preparation and bolster block squaring",
        },
      ],
    },
    {
      category: "Surface & Cylindrical Grinding",
      icon: Wrench,
      items: [
        {
          name: "Precision Hydraulic Surface Grinders",
          quantity: "2 Units",
          specifications: "Magnetic chuck (450 x 200 mm), digital readout, flatness < 0.003mm",
          application: "Parting line leveling, core plate grinding, and ejector plate finishing",
        },
        {
          name: "Precision Micro-Cylindrical Grinder",
          quantity: "1 Unit",
          specifications: "High concentricity collet chuck, micro-infeed for round pins",
          application: "Core pin OD grinding, runner nozzle tips, and ejector pin sizing",
        },
      ],
    },
    {
      category: "Milling, Drilling & Quality Inspection",
      icon: Microscope,
      items: [
        {
          name: "Turret Milling Machines",
          quantity: "2 Units",
          specifications: "Variable speed head, 3-Axis DRO, power feeds",
          application: "Waterline drilling, pocketing, guide pillar boring, and cavity roughing",
        },
        {
          name: "Precision Radial / Bench Drill Machines",
          quantity: "2 Units",
          specifications: "Multi-spindle speeds, rigid tapping attachment",
          application: "Cooling line deep-hole drilling, bolting, and eye-bolt tapping",
        },
        {
          name: "Metrology & Optical Inspection Instruments",
          quantity: "1 Setup",
          specifications: "Digital height master, Mitutoyo micrometers, optical profile projector, Rockwell hardness tester",
          application: "100% dimensional verification, hardness testing, and blue-matching",
        },
      ],
    },
  ];

  // Total machines count summary
  const totalMachinesCount = 13; // 3 EDM + 3 Lathe + 3 Grinding + 4 Milling/Drilling/Inspection

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
              Equipped with in-house CNC spark erosion (EDM), precision toolroom lathes, surface grinders, and inspection equipment in our Daman workshop.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs text-xs font-medium text-slate-700 shrink-0">
            <Cpu size={16} className="text-blue-600" />
            <span>Over {totalMachinesCount} Specialized Machines On Floor</span>
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

              {/* Bottom Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>In-House Calibration Maintained</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Production Ready
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
