import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Building2 } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "Micro Moulds & Tools delivered a 32-cavity ball pen barrel mould that ran flawlessly from day one. Zero parting-line flash, uniform wall thickness across all cavities, and delivered right on schedule.",
      author: "Rajesh Sharma",
      title: "Head of Tooling & Production",
      company: "National Writing Instruments Ltd.",
      location: "Vapi, Gujarat",
      rating: 5,
      project: "32-Cavity Pen Barrel Mould",
    },
    {
      quote:
        "Their spark erosion (EDM) quality is exceptional. We had intricate knurling and grip contours that other toolmakers struggled with; Mr. Biju Nair’s team achieved exact sub-micron tolerances.",
      author: "Pravin Solanki",
      title: "Senior Mould Procurement Manager",
      company: "Apex Polymers Pvt. Ltd.",
      location: "Daman, India",
      rating: 5,
      project: "CNC EDM Intricate Pen Grips",
    },
    {
      quote:
        "When our high-volume mould broke a critical core pin during peak season, they overhauled the parting line and delivered replacement pins within 36 hours. Invaluable partner for breakdown maintenance.",
      author: "Vipin Mehta",
      title: "Plant General Manager",
      company: "Monarch Plastotech",
      location: "Silvassa",
      rating: 5,
      project: "Emergency Mould Refurbishment",
    },
    {
      quote:
        "We have worked with Micro Moulds & Tools for over 8 years. Their attention to steel quality (Stavax ESR) and runner balancing has saved us hundreds of machine hours in rejection rates.",
      author: "Sunil Kothari",
      title: "Technical Director",
      company: "Crown Stationary & Plastics",
      location: "Mumbai, Maharashtra",
      rating: 5,
      project: "Multi-Cavity Cap & Clip Tooling",
    },
  ];

  // Auto-advance every 6 seconds unless user is interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Client Feedback
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Trusted by Leading Pen & Plastics Manufacturers
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-sm min-h-[280px] flex flex-col justify-between"
        >
          <Quote size={40} className="text-slate-200 absolute top-6 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="ml-2 text-xs font-medium text-slate-600">
                  Project: {active.project}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-slate-800 leading-relaxed font-normal">
                "{active.quote}"
              </p>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{active.author}</h3>
                  <p className="text-xs text-slate-600">
                    {active.title} • <span className="text-slate-800 font-medium">{active.company}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Building2 size={14} className="text-slate-500" />
                  <span>{active.location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator with accessible touch target sizing */}
          <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-100">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className="py-3 px-1.5 cursor-pointer flex items-center justify-center"
              >
                <span
                  className={`h-2 rounded-full transition-all block ${
                    current === idx ? "w-8 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
