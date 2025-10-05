import { motion } from "framer-motion";
import { Cog, Wrench, Zap } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Cog size={40} />,
            title: "Injection Mould Manufacturing",
            description:
                "High-precision moulds designed for ball pens and various plastic components with exceptional accuracy.",
        },
        {
            icon: <Wrench size={40} />,
            title: "Mould Repair & Maintenance",
            description:
                "Expert repair services with quick turnaround times to minimize production downtime and extend mould life.",
        },
        {
            icon: <Zap size={40} />,
            title: "Spark Erosion (EDM)",
            description:
                "Advanced EDM technology for intricate detailing and precision work on complex mould geometries.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
                >
                    Our Services
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                        >
                            <div className="text-blue-600 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
