import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Award, CheckCircle } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Mr. Biju Nair",
      role: "Founder & Master Toolmaker",
      experience: "25+ Years Experience",
      expertise: ["Multi-Cavity Architecture", "Tool Steel Selection", "Mould Flow & Trials"],
      bio: "Founded Micro Moulds & Tools in Daman. Personally oversees tooling architecture, client technical consultations, and pre-dispatch mould trials. Over two decades of specialized expertise in writing instrument moulds.",
      image: "/images/biju-nair.png",
      tag: "Leadership & Strategy",
    },
    {
      name: "Manoj Yadav",
      role: "Senior EDM Machining Specialist",
      experience: "15+ Years Experience",
      expertise: ["CNC Spark Erosion", "Custom Electrodes", "Micro-Detailing (VDI 12)"],
      bio: "Expert in CNC and conventional electrical discharge machining (EDM). Directs electrode fabrication and sub-micron cavity burning for intricate grip contours, deep slots, and textured pen inserts.",
      image: "/images/manoj-yadav.png",
      tag: "Precision Machining",
    },
    {
      name: "Manoj Kumar",
      role: "Lead Tool Maintenance Specialist",
      experience: "12+ Years Experience",
      expertise: ["Parting Line Restoration", "Precision Grinding", "Laser Welding Alignment"],
      bio: "Specializes in rapid mould refurbishment and bench fitting. Manages flash remediation, core pin micro-turning, mirror polishing, and emergency turnaround servicing to keep production lines running.",
      image: "/images/manoj-kumar.png",
      tag: "Toolroom & Assembly",
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">
              Craftsmanship & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Meet the Masters Behind the Moulds
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Sub-micron tooling cannot rely on automated machinery alone — it demands seasoned craftsman intuition, bench accuracy, and decades of practical toolroom discipline.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3.5 py-2 rounded-lg shadow-2xs">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Over 50 Years Combined Toolroom Heritage</span>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner with Professional Framing */}
                <div className="p-6 pb-0 flex items-center gap-4">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-100 shadow-sm shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=f1f5f9&color=0f172a&size=160&bold=true`;
                      }}
                    />
                  </div>

                  <div>
                    <span className="inline-block text-[11px] font-semibold tracking-wide text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded mb-1">
                      {member.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 leading-snug">
                      {member.role}
                    </p>
                    <span className="text-[11px] font-mono text-slate-400 block mt-1">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Bio text */}
                <div className="p-6 pt-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {member.bio}
                  </p>

                  {/* Skills/Expertise Pills */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-3 bg-slate-50/80 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Verified Specialist</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active on Floor
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
