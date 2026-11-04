import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2, ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [showMap, setShowMap] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nr7zvcq";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zagdxle";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "A-BrXuwgItHkMo7Tu";

    setStatus({ state: "submitting", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({
        state: "success",
        message: "Thank you. Your RFQ has been received. Our team will review your specifications and respond promptly.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        state: "error",
        message: "Failed to send message online. Please call Mr. Biju Nair directly at +91 9377004215.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              Contact & Inquiries
            </span>
            <span className="text-slate-400">•</span>
            <a
              href={COMPANY_LINKS.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 hover:bg-emerald-100 flex items-center gap-1 transition"
            >
              <ShieldCheck size={12} className="text-emerald-700" /> IndiaMART Profile <ExternalLink size={10} />
            </a>
            <a
              href={COMPANY_LINKS.tradeindia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-300 hover:bg-blue-100 flex items-center gap-1 transition"
            >
              TradeIndia Profile <ExternalLink size={10} />
            </a>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Get in Touch & Request Quotation
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Send us component drawing files (CAD / 3D STEP), mould specifications, or visit our facility in Daman.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-5">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Tool Room & Registered Address
              </h3>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin size={18} className="text-slate-900 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-slate-900 font-semibold block">Micro Moulds & Tools</strong>
                  <span>Gala No. A8, Survey No. 13/11, Shakti Industrial Estate, Ringanwada, Varkund, Nani Daman, Dadra & Nagar Haveli and Daman & Diu – 396210, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Phone size={18} className="text-slate-900 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_LINKS.phone}`} className="hover:text-slate-900 font-medium">
                    +91 9377004215
                  </a>
                  <span className="text-xs text-slate-600 block">Direct Line: Mr. Biju Nair</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Mail size={18} className="text-slate-900 shrink-0" />
                <div>
                  <a href={`mailto:${COMPANY_LINKS.email}`} className="hover:text-slate-900 font-medium">
                    {COMPANY_LINKS.email}
                  </a>
                  <span className="text-xs text-slate-600 block">Official RFQ Mailbox</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <Clock size={16} className="text-slate-700 shrink-0" />
                <span>Monday – Saturday: 8:30 AM – 8:00 PM (IST)</span>
              </div>
            </div>

            {/* Facade/Deferred Map: Saves ~414 KiB of Google Maps JS on page load */}
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs">
              <div className="h-60 relative flex items-center justify-center bg-slate-100">
                {showMap ? (
                  <iframe
                    title="Micro Moulds and Tools Facility Map Daman"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.338836232909!2d72.87057227496078!3d20.41013300873908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d1298999062d%3A0x8905f7d140684946!2sMicro%20Moulds%20and%20Tools!5e0!3m2!1sen!2sin!4v1759657764290!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                ) : (
                  <div className="text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Shakti Industrial Estate, Ringanwada, Daman
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Click below to load the interactive Google Map
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition cursor-pointer"
                    >
                      Load Interactive Map
                    </button>
                  </div>
                )}
              </div>
              <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium">Shakti Industrial Estate, Ringanwada</span>
                <a
                  href="https://maps.google.com/?q=Micro+Moulds+and+Tools+Daman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-lg border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Submit an RFQ / Inquiry
              </h3>
              <span className="text-xs text-slate-600 font-mono">Response in &le; 24h</span>
            </div>
            <p className="text-slate-600 text-xs mb-6 font-normal">
              Provide your details, component type, target cavities, or required breakdown maintenance.
            </p>

            {status.state === "success" && (
              <div className="mb-6 p-4 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            {status.state === "error" && (
              <div className="mb-6 p-4 rounded-md bg-rose-50 text-rose-800 border border-rose-200 flex items-center gap-3 text-sm">
                <AlertCircle size={18} className="text-rose-600 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="contact_name" className="block text-xs font-medium text-slate-700 mb-1">
                  Name / Company Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact_name"
                  type="text"
                  name="from_name"
                  required
                  placeholder="e.g. Rajesh Sharma / ABC Polymers"
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact_email" className="block text-xs font-medium text-slate-700 mb-1">
                  Business Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact_email"
                  type="email"
                  name="from_email"
                  required
                  placeholder="procurement@company.com"
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact_message" className="block text-xs font-medium text-slate-700 mb-1">
                  Mould Requirements / Specifications <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact_message"
                  name="message"
                  rows="4"
                  required
                  placeholder="State product description (e.g., 32-cavity ball pen barrel mould, side-core puller mould, spark erosion job work, or repair request)..."
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                aria-label="Submit RFQ to Toolroom"
                disabled={status.state === "submitting"}
                className="w-full py-2.5 px-4 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 rounded-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {status.state === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting RFQ...
                  </>
                ) : (
                  "Submit RFQ to Toolroom"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
