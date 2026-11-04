import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-left cursor-pointer group">
          <span className="text-base font-semibold text-slate-900 tracking-tight block">
            Micro Moulds & Tools
          </span>
          <span className="text-xs text-slate-500 font-normal block">
            Precision Tooling • Daman, India
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-4.5 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="hover:text-slate-900 transition-colors cursor-pointer text-xs lg:text-sm"
            >
              {link.label}
            </button>
          ))}

          <Link
            to="/works"
            className={`transition-colors px-2 py-0.5 rounded-md text-xs lg:text-sm ${
              location.pathname === "/works"
                ? "text-blue-600 bg-blue-50 font-semibold"
                : "text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 font-medium"
            }`}
          >
            All Works &rarr;
          </Link>

          <Link
            to="/careers"
            className={`transition-colors text-xs lg:text-sm ${
              location.pathname === "/careers"
                ? "text-slate-900 font-semibold"
                : "hover:text-slate-900"
            }`}
          >
            Careers
          </Link>

          <button
            onClick={() => handleNav("contact")}
            className="ml-1 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu button (44x44px ergonomic touch target) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="md:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:text-slate-900 active:bg-slate-100 rounded-lg cursor-pointer transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/works"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            All Works Showcase &rarr;
          </Link>
          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Careers
          </Link>
          <div className="pt-2">
            <button
              onClick={() => handleNav("contact")}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 rounded-md"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
