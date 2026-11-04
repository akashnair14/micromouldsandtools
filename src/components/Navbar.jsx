import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_LINKS } from "../constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Curated, decluttered top-level navigation links
  const links = [
    { label: "About", id: "about" },
    { label: "Capabilities", id: "services" },
    { label: "Machinery", id: "machinery" },
    { label: "Works", id: "works-preview" },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Sleek, minimal Top Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-100 uppercase tracking-wide">
              {COMPANY_LINKS.tagline}
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">Daman, India</span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <span className="hidden md:inline text-slate-400">
              GSTIN: <span className="text-white font-medium">{COMPANY_LINKS.gstin}</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href={`tel:${COMPANY_LINKS.phone}`}
              className="text-slate-200 hover:text-white flex items-center gap-1.5 font-sans font-medium transition"
            >
              <Phone size={11} className="text-slate-400" />
              <span>{COMPANY_LINKS.rawPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand identity: clean, professional, established */}
        <Link to="/" className="flex items-center gap-3.5 cursor-pointer group shrink-0">
          <img
            src="/images/mmt-emblem.png"
            alt="Micro Moulds & Tools"
            className="h-11 w-auto object-contain shrink-0"
            width="44"
            height="36"
          />
          <div className="leading-tight">
            <span className="text-lg font-bold tracking-tight text-slate-900 block whitespace-nowrap">
              Micro Moulds & Tools
            </span>
            <span className="text-xs text-slate-500 font-normal whitespace-nowrap">
              Precision Toolroom & CNC Spark Erosion • Daman
            </span>
          </div>
        </Link>

        {/* Clean, spacious Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="hover:text-slate-900 transition-colors cursor-pointer text-sm"
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/careers"
            className={`transition-colors text-sm ${
              location.pathname === "/careers"
                ? "text-slate-900 font-semibold"
                : "hover:text-slate-900"
            }`}
          >
            Careers
          </Link>

          <button
            onClick={() => handleNav("contact")}
            className="ml-3 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
          >
            Request Quotation
          </button>
        </nav>

        {/* Medium-screen (tablet) compact nav button */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <button
            onClick={() => handleNav("contact")}
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            Get a Quote
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-slate-950 active:bg-slate-100 rounded-md transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate-800 hover:text-slate-950 active:bg-slate-100 rounded-lg cursor-pointer transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-2.5 shadow-xl">
          <div className="pb-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Specialist in Ball Pen Mould</span>
            <span className="font-mono text-[11px]">GSTIN: {COMPANY_LINKS.gstin}</span>
          </div>

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/works"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
          >
            Selected Works
          </Link>

          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
          >
            Careers
          </Link>

          <div className="pt-3">
            <button
              onClick={() => handleNav("contact")}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-xs"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
