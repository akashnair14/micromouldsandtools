import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, FileCheck } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "About", id: "about" },
    { label: "Capabilities", id: "services" },
    { label: "Machinery", id: "machinery" },
    { label: "Works", id: "works-preview" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Team", id: "team" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleNav = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Top Identity & Tax Registry Bar */}
      <div className="bg-[#0f3460] text-slate-100 text-[11px] py-1.5 px-4 sm:px-6 border-b border-[#0d2a4d]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wide text-amber-300 uppercase">
              {COMPANY_LINKS.tagline}
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-slate-200">
              {COMPANY_LINKS.subTagline}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline font-mono">
              GSTIN: <strong className="text-white">{COMPANY_LINKS.gstin}</strong>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <a
              href={`tel:${COMPANY_LINKS.phone}`}
              className="hover:text-white flex items-center gap-1 font-medium transition"
            >
              <Phone size={11} className="text-amber-400" />
              <span>{COMPANY_LINKS.rawPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Official Brand Logo Lockup */}
        <Link to="/" className="flex items-center gap-3 text-left cursor-pointer group py-1">
          <div className="h-12 w-auto flex items-center shrink-0">
            <img
              src="/images/mmt-emblem.png"
              alt="Micro Moulds and Tools Official Monogram"
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="border-l border-slate-200 pl-3">
            <span className="text-lg sm:text-xl font-black text-[#0f3460] tracking-tight block leading-tight font-serif uppercase">
              Micro Moulds & Tools
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                Specialist in Ball Pen Mould
              </span>
              <span className="hidden sm:inline text-[11px] text-slate-500 font-normal">
                Daman - 396210
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="hover:text-[#0f3460] hover:font-semibold transition-all cursor-pointer text-xs lg:text-sm"
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/works"
            className={`transition-colors px-2.5 py-1 rounded-md text-xs lg:text-sm ${
              location.pathname === "/works"
                ? "text-blue-700 bg-blue-50 font-semibold border border-blue-200"
                : "text-blue-700 hover:text-blue-900 hover:bg-blue-50/60 font-medium"
            }`}
          >
            All Works &rarr;
          </Link>

          <Link
            to="/careers"
            className={`transition-colors text-xs lg:text-sm ${
              location.pathname === "/careers"
                ? "text-slate-900 font-semibold"
                : "hover:text-[#0f3460]"
            }`}
          >
            Careers
          </Link>

          <button
            onClick={() => handleNav("contact")}
            className="ml-1 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3460] hover:bg-[#1a4b87] rounded-md transition-colors cursor-pointer shadow-sm"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu button (44x44px touch target) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate-800 hover:text-blue-700 active:bg-slate-100 rounded-lg cursor-pointer transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl">
          <div className="pb-2 mb-2 border-b border-slate-100 text-xs font-mono text-slate-500">
            GSTIN: <strong className="text-slate-900">{COMPANY_LINKS.gstin}</strong>
          </div>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-[#0f3460]"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/works"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2.5 text-sm font-semibold text-blue-700"
          >
            All Works Showcase &rarr;
          </Link>
          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2.5 text-sm font-medium text-slate-700"
          >
            Careers
          </Link>
          <div className="pt-2">
            <button
              onClick={() => handleNav("contact")}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#0f3460] rounded-md shadow"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
