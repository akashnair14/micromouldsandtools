import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState("light");

    const navItems = ["Home", "About", "Services", "Team", "Gallery", "Contact"];
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Initial theme (system preference or saved)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(systemPref ? "dark" : "light");
            document.documentElement.classList.toggle("dark", systemPref);
        }
    }, []);

    // Update theme on state change
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    const scrollToSection = (section) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => {
                const el = document.getElementById(section.toLowerCase());
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            const el = document.getElementById(section.toLowerCase());
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white dark:bg-gray-800 shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-blue-600 cursor-pointer"
                    onClick={() => scrollToSection("Home")}
                >
                    Micro Moulds & Tools
                </motion.div>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <motion.button
                            key={item}
                            whileHover={{ scale: 1.1, color: "#2563eb" }}
                            onClick={() => scrollToSection(item)}
                            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                        >
                            {item}
                        </motion.button>
                    ))}

                    <Link
                        to="/careers"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                    >
                        Careers
                    </Link>

                    {/* Toggle */}
                    <button onClick={toggleTheme} className="ml-4 flex items-center gap-1">
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                >
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="block w-full text-left py-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors"
                        >
                            {item}
                        </button>
                    ))}

                    <Link
                        to="/careers"
                        className="block w-full text-left py-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                        Careers
                    </Link>

                    <button onClick={toggleTheme} className="mt-4 flex items-center gap-1">
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />} Toggle Theme
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
