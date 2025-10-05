import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function About() {
    const values = [
        { title: "Precision", desc: "Micron-level accuracy in every component" },
        { title: "Reliability", desc: "Consistent quality and timely delivery" },
        { title: "Partnership", desc: "Long-term relationships built on trust" },
        { title: "Innovation", desc: "Continuous improvement and modernization" },
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        About Us
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-700 dark:text-gray-300">
                            <p>
                                Founded with a vision for precision and excellence, Micro Moulds & Tools has been a trusted name in the injection moulding industry.
                            </p>
                            <p>
                                Our founder's dedication to quality and attention to detail has built lasting relationships with clients who value reliability and craftsmanship.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
                            <ul className="space-y-4">
                                {values.map((value, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="bg-blue-600 rounded-full p-1 mt-1">
                                            <ChevronRight size={16} className="text-white" />
                                        </div>
                                        <div>
                                            <strong className="text-gray-900 dark:text-white">{value.title}:</strong>{" "}
                                            <span className="text-gray-700 dark:text-gray-300">{value.desc}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
