import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Micro Moulds & Tools
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                >
                    Precision Injection Moulds for Ball Pens & Plastic Components
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 mx-auto"
                >
                    Get in Touch <ChevronRight size={20} />
                </motion.button>
            </div>
        </section>
    );
}
