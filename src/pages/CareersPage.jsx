import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "EDM Spark Erosion Operator",
    experience: "2-5 Years",
    message: "",
  });

  const jobs = [
    {
      title: "EDM Spark Erosion Operator",
      type: "Full Time",
      location: "Daman, India",
      experience: "2+ Years CNC/Conventional EDM",
      details: "Operating sinker/spark erosion machines, electrode setup, and holding tight tolerances on multi-cavity pen moulds.",
    },
    {
      title: "Tool & Die Maker",
      type: "Full Time",
      location: "Daman, India",
      experience: "3+ Years Injection Moulds",
      details: "Bench assembly, core & cavity fitment, blue-matching of parting lines, and mould servicing.",
    },
    {
      title: "Surface Grinding Technician",
      type: "Full Time",
      location: "Daman, India",
      experience: "1+ Years Toolroom Experience",
      details: "Precision surface grinding of core plates, ejector pins, and general toolroom finishing.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Log directly to Google Sheets under 'Careers' sheet
      await fetch(COMPANY_LINKS.googleSheetsEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "career",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          experience: formData.experience,
          message: formData.message,
        }),
      });

      // 2. Open email client with details so candidate can attach resume
      const subject = encodeURIComponent(`Job Application: ${formData.role} - ${formData.fullName}`);
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${formData.role}\nExperience: ${formData.experience}\n\nCandidate Notes:\n${formData.message}`
      );
      window.location.href = `mailto:microtool71@gmail.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
    } catch (err) {
      console.error("Career submission error:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 mb-8"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Careers
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Join Micro Moulds & Tools
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are looking for skilled toolmakers and EDM operators to join our workshop in Daman.
          </p>
        </div>

        {/* Openings list */}
        <div className="space-y-4 mb-16">
          <h2 className="text-base font-semibold text-slate-900 mb-2">Current Openings</h2>
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{job.title}</h3>
                <div className="text-xs text-slate-500 mt-0.5 space-x-2">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>
                <p className="text-xs text-slate-600 mt-2">{job.details}</p>
              </div>
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, role: job.title }));
                  document.getElementById("apply-box")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="shrink-0 px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition"
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="apply-box" className="p-7 rounded-lg border border-slate-200 bg-white shadow-2xs">
          <h3 className="text-base font-semibold text-slate-900 mb-1">Apply for a Position</h3>
          <p className="text-xs text-slate-500 mb-6">
            Applying for: <strong className="text-slate-800">{formData.role}</strong>
          </p>

          {submitted ? (
            <div className="p-4 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-3 text-sm">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
              <span>Application logged to our hiring database. Please attach your CV/resume in your email window to complete.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="career_name" className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  id="career_name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="career_email" className="block text-xs font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    id="career_email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="career_phone" className="block text-xs font-medium text-slate-700 mb-1">Phone *</label>
                  <input
                    id="career_phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="career_role" className="block text-xs font-medium text-slate-700 mb-1">Position</label>
                  <select
                    id="career_role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none bg-white"
                  >
                    <option value="EDM Spark Erosion Operator">EDM Spark Erosion Operator</option>
                    <option value="Tool & Die Maker">Tool & Die Maker</option>
                    <option value="Surface Grinding Technician">Surface Grinding Technician</option>
                    <option value="General Application">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="career_exp" className="block text-xs font-medium text-slate-700 mb-1">Experience</label>
                  <select
                    id="career_exp"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none bg-white"
                  >
                    <option value="Fresher / < 1 Year">&lt; 1 Year</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="career_message" className="block text-xs font-medium text-slate-700 mb-1">Summary / Work History</label>
                <textarea
                  id="career_message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention previous toolroom experience, machines operated..."
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-sm focus:border-slate-900 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 rounded-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Logging Application...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Submit Application & Log
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
