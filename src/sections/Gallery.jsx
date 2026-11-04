import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";

export default function Gallery() {
  const [activeProject, setActiveProject] = useState(null);

  const works = [
    {
      title: "32-Cavity Ball Pen Barrel Mould",
      category: "Writing Instruments",
      material: "Stavax ESR / H13",
      notes: "Balanced runner layout with multi-point cooling to maintain strict barrel straightness and concentricity across all 32 cavities.",
      fullDetails: "Built for high-volume polypropylene (PP) and SAN pens. Incorporates hardened wear plates, interchangeable core inserts, and balanced hot-tip nozzles to ensure zero part variation and cycle times under 12 seconds.",
    },
    {
      title: "Pen Cap & Clip Combination Tool",
      category: "Assembly & Fitment",
      material: "Hardened Tool Steel",
      notes: "Precision collapsible core design for tight air-sealing and zero visible parting lines on the clip exterior.",
      fullDetails: "Addresses common pen drying issues by creating an airtight inner seal around the writing nib. Features multi-action lifters to release complex undercut clip geometries without scratching.",
    },
    {
      title: "Spark Erosion Grip Detailing",
      category: "CNC / EDM Process",
      material: "Copper-Tungsten Electrode",
      notes: "Sub-micron spark erosion for ergonomic grip textures directly machined into hardened cavity blocks.",
      fullDetails: "Created using CNC sinker EDM with high surface consistency down to VDI 12. Eliminates the need for secondary chemical texturing on pen grip regions.",
    },
    {
      title: "Core Pins & Precision Ejector Sleeves",
      category: "Toolroom Spares",
      material: "SKD61 Vacuum Treated",
      notes: "Precision turned and mirror polished core pins held to tight tolerances for high-wear sliding operations.",
      fullDetails: "Vacuum hardened to 52-54 HRC and finished with high-precision optical polish to prevent plastic dragging and pin scoring during millions of continuous cycles.",
    },
    {
      title: "Parting Line Restoration",
      category: "Mould Maintenance",
      material: "Laser Weld & Stone Finish",
      notes: "Quick-turnaround overhaul to eliminate flash and wear on existing production moulds.",
      fullDetails: "Mould restoration performed using micro-laser deposition welding on worn parting boundaries, followed by hand spotting and blue-matching in our toolroom.",
    },
    {
      title: "Custom Plastic Technical Components",
      category: "Industrial Components",
      material: "Pre-hardened P20 / 2316",
      notes: "Multi-slide tooling with side lifters for precision mechanical plastic housings and industrial components.",
      fullDetails: "Tooling engineered for dimensional stability in engineering resins (PBT, POM, Nylon). Features angled core pins and precision guiding mechanisms.",
    },
  ];

  return (
    <section id="works-preview" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Our Works & Projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Selected Works & Tooling Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              An overview of moulds, mechanisms, and machining delivered from our Daman toolroom.
            </p>
          </div>

          <Link
            to="/works"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-md transition group"
          >
            <span>View Dedicated Works Page</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setActiveProject(item)}
              className="p-6 rounded-lg border border-slate-200 hover:border-slate-400 transition-colors bg-white flex flex-col justify-between cursor-pointer group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500">
                    {item.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-slate-900 transition-colors"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {item.notes}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Material:</span>
                <span className="font-medium text-slate-700">{item.material}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-slate-200 relative text-left"
            >
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 block">
                {activeProject.category}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {activeProject.title}
              </h3>

              <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-xs font-medium text-slate-700 mb-4">
                Steel Grade: {activeProject.material}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {activeProject.fullDetails}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need similar tooling?</span>
                <button
                  onClick={() => {
                    setActiveProject(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition cursor-pointer"
                >
                  Contact About This Mould
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
