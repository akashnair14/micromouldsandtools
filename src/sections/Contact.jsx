import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_nr7zvcq',    // Replace with your EmailJS service ID
            'template_zagdxle',   // Replace with your EmailJS template ID
            formRef.current,
            'A-BrXuwgItHkMo7Tu'     // Replace with your EmailJS public key
        ).then(
            () => {
                alert("✅ Message sent successfully!");
                formRef.current.reset();
            },
            (error) => {
                alert("❌ Failed to send message. Please try again.");
                console.error(error.text);
            }
        );
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Reach out to us for inquiries, collaborations, or just to say hi!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left side - Info + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Office</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                📍 Gala No. A8, Shakti Industrial Estate, RInganwada, Nani Daman, Daman, India- 396210
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                📞 +91 9377004215
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                📧 microtool71@gmail.com.com
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                title="Company Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.338836232909!2d72.87057227496078!3d20.41013300873908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d1298999062d%3A0x8905f7d140684946!2sMicro%20Moulds%20and%20Tools!5e0!3m2!1sen!2sin!4v1759657764290!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right side - Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                required
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="from_email"
                                required
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
