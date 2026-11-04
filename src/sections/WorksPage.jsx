import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Filter, ShieldCheck, X } from "lucide-react";

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

  const categories = [
    "All",
    "Ball Pen Moulds",
    "Side-Core & Unscrewing",
    "EDM Job Work",
    "Mould Refurbishment",
    "Industrial Plastics",
  ];

  const projects = [
    {
      id: 1,
      title: "32-Cavity High-Speed Ball Pen Barrel Mould",
      category: "Ball Pen Moulds",
      clientType: "Writing Instrument Manufacturer",
      steelGrade: "Stavax ESR (Through-Hardened)",
      cavities: "32 Cavities",
      cycleTime: "11.5 Seconds",
      tolerance: "±0.005 mm",
      description:
        "High-volume injection mould designed for transparent polypropylene (PP) ball pen barrels. Engineered with a balanced multi-channel cooling layout and custom manifold to ensure uniform melt flow, preventing core pin deflection and barrel curvature.",
      deliverables: [
        "Balanced hot runner system integration",
        "Interchangeable hardened core pins",
        "Zero-flash parting line accuracy",
        "Pre-dispatch 10,000-shot mould trial verification",
      ],
      leadTime: "4 Weeks",
    },
    {
      id: 2,
      title: "Automatic Unscrewing Mould for Threaded Closures",
      category: "Side-Core & Unscrewing",
      clientType: "Cosmetics & Packaging Brand",
      steelGrade: "AISI H13 / 2316 High Polish",
      cavities: "16 Cavities",
      cycleTime: "14 Seconds",
      tolerance: "±0.005 mm",
      description:
        "Automatic unscrewing injection mould designed for precision threaded pen grips and bottle caps. Utilizes hydraulic unscrewing motors with precision rack-and-pinion transmission to de-mold threads without parting marks.",
      deliverables: [
        "Hydraulic unscrewing mechanism synchronization",
        "Precision hardened internal core threads",
        "Wear-resistant phosphor bronze bushings",
        "Sampling approval on production press",
      ],
      leadTime: "4 Weeks",
    },
    {
      id: 3,
      title: "Side-Core Puller Mould for Dual-Action Pen Clips",
      category: "Side-Core & Unscrewing",
      clientType: "Stationery Export Brand",
      steelGrade: "DIN 1.2316 Mirror Finish",
      cavities: "16 Cavities",
      cycleTime: "13.0 Seconds",
      tolerance: "±0.004 mm",
      description:
        "Multi-action side-core injection tool engineered to mold intricate undercut pen clip geometries and airtight cap chambers in a single fast shot without secondary assembly.",
      deliverables: [
        "Cam-slider mechanical core pulling action",
        "Zero drag lines on exterior cosmetic surfaces",
        "Beryllium copper cooling inserts for fast cycle",
        "Airtight inner cap sealing zone",
      ],
      leadTime: "3.5 Weeks",
    },
    {
      id: 4,
      title: "CNC Spark Erosion (EDM) Finger Grip Detailing",
      category: "EDM Job Work",
      clientType: "Toolroom Job Work Contract",
      steelGrade: "AISI H13 Vacuum Hardened (50 HRC)",
      cavities: "16 Inserts",
      cycleTime: "N/A (Tooling Process)",
      tolerance: "±0.003 mm",
      description:
        "Precision contract sinker EDM machining of intricate diamond-pattern ergonomic grip ribs on pen barrel cores. Machined using ultra-fine grain copper-tungsten electrodes without thermal stress or micro-cracks.",
      deliverables: [
        "Custom 3D electrode milling",
        "Uniform VDI 12 spark erosion finish",
        "Zero distortion on hardened cavity blocks",
        "Full CMM optical coordinate inspection report",
      ],
      leadTime: "48 Hours",
    },
    {
      id: 5,
      title: "64-Cavity Mould Parting Line Laser Restoration",
      category: "Mould Refurbishment",
      clientType: "Major Writing Instrument Facility",
      steelGrade: "Tool Steel Micro-Cladding",
      cavities: "64 Cavities",
      cycleTime: "Restored to Original Spec",
      tolerance: "Zero Flash Restored",
      description:
        "Complete toolroom overhaul of a worn 64-cavity pen barrel mould that was producing excess flash at the parting line. Micro-welded with matching tool steel wire, precision surface ground, hand-stoned, and blue-matched.",
      deliverables: [
        "Micro-laser welding of all cavity edges",
        "Bench spotted and hand blue-matched",
        "Replacement of 12 worn core pins and sleeves",
        "Turnaround in under 36 hours during plant shutdown",
      ],
      leadTime: "36 Hours",
    },
    {
      id: 6,
      title: "Precision Micro Core Pins & Ejector Sleeves Batch",
      category: "Ball Pen Moulds",
      clientType: "In-house Toolroom Spares",
      steelGrade: "SKD61 (52-54 HRC)",
      cavities: "Batch of 150 Pcs",
      cycleTime: "N/A (Tooling Component)",
      tolerance: "±0.002 mm Concentricity",
      description:
        "Manufacturing of precision replacement core pins for ball pen barrels. Precision cylindrical ground and diamond polished to Ra 0.05 to eliminate plastic sticking and dragging during ejection.",
      deliverables: [
        "High concentricity between head and pin body",
        "Mirror-finished sliding surfaces",
        "Vacuum heat treatment certification",
        "100% micrometric dimensional check",
      ],
      leadTime: "3 Days",
    },
    {
      id: 7,
      title: "Multi-Slide Technical Housing for Electronic Plastics",
      category: "Industrial Plastics",
      clientType: "Industrial Electronics Manufacturer",
      steelGrade: "P20 Pre-Hardened / 718H",
      cavities: "4 Cavities",
      cycleTime: "18 Seconds",
      tolerance: "±0.008 mm",
      description:
        "Injection mould for dimensional engineering resins (Polycarbonate & ABS alloy). Features two-way mechanical slides, threaded inserts, and uniform ejector grid to ensure warp-free flat surfaces.",
      deliverables: [
        "Hardened slide guide blocks",
        "Balanced multi-gate edge feeding",
        "Mould-flow cooling analysis",
        "First article inspection (FAI) approval",
      ],
      leadTime: "4 Weeks",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft size={14} /> Back to Overview
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Toolroom Portfolio
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
              <ShieldCheck size={12} /> IndiaMART Verified Catalog
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Our Works & Manufacturing Track Record
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive look at ball pen moulds, side-core pullers, automatic unscrewing tooling, and CNC spark erosion (EDM) job works engineered at our Shakti Industrial Estate facility in Daman.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-slate-200">
          <span className="text-xs font-medium text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter size={13} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedWork(project)}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-400 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide bg-slate-100 px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-400 group-hover:text-slate-900 transition-colors"
                  />
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Quick Spec Strip */}
              <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 font-normal">
                <div className="flex justify-between">
                  <span>Steel Grade:</span>
                  <span className="font-medium text-slate-800">{project.steelGrade}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cavities:</span>
                  <span className="font-medium text-slate-800">{project.cavities}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tolerance:</span>
                  <span className="font-medium text-slate-800">{project.tolerance}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip at bottom */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              Have a custom mould or component specification?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Share your 2D/3D component drawings with our toolroom engineering team for feasibility and quotations.
            </p>
          </div>
          <Link
            to="/#contact"
            className="shrink-0 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md transition text-center"
          >
            Submit an RFQ
          </Link>
        </div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left"
            >
              <button
                onClick={() => setSelectedWork(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 block">
                {selectedWork.category} • {selectedWork.clientType}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                {selectedWork.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100 text-xs mb-5">
                <div>
                  <span className="text-slate-400 block">Steel Specification</span>
                  <span className="font-medium text-slate-800">{selectedWork.steelGrade}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Tolerance Standard</span>
                  <span className="font-medium text-slate-800">{selectedWork.tolerance}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Cavitation</span>
                  <span className="font-medium text-slate-800">{selectedWork.cavities}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Manufacturing Lead Time</span>
                  <span className="font-medium text-slate-800">{selectedWork.leadTime}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                {selectedWork.description}
              </p>

              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                  Technical Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedWork.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition"
                >
                  Close
                </button>
                <Link
                  to="/#contact"
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition"
                >
                  Inquire on Similar Project
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
