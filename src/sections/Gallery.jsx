import { motion } from "framer-motion";

export default function Gallery() {
    const images = [
        { title: "EDM Machine", color: "from-blue-400 to-blue-600" },
        { title: "Precision Lathe", color: "from-purple-400 to-purple-600" },
        { title: "Ball Pen Mould", color: "from-green-400 to-green-600" },
        { title: "Workshop Floor", color: "from-orange-400 to-orange-600" },
        { title: "Quality Control", color: "from-pink-400 to-pink-600" },
        { title: "Tool Assembly", color: "from-indigo-400 to-indigo-600" },
    ];

    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
                >
                    Our Workshop
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {images.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                                <p className="text-white text-2xl font-bold">{image.title}</p>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
