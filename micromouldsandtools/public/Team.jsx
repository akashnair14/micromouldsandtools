import { motion } from "framer-motion";

export default function Team() {
    const team = [
        {
            name: "Mr. Biju Nair",
            role: "Founder & Lead Toolmaker",
            bio: "Decades of experience in precision toolmaking.",
            image: "/images/biju-nair.png" // Add your image path here
        },
        {
            name: "Manoj Yadav",
            role: "EDM Specialist",
            bio: "Expert in spark erosion techniques.",
            image: "/images/manoj-yadav.png"
        },
        {
            name: "Manoj Kumar",
            role: "Tool Maintenance Expert",
            bio: "Specializes in mould repair and maintenance.",
            image: "/images/manoj-kumar.png"
        },
    ];

    return (
        <section id="team" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
                >
                    Our Team
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                        >
                            {/* Employee Image */}
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">{member.name}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-center mb-3">{member.role}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
