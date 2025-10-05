import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Micro Moulds & Tools</h3>
                    <p className="text-gray-400">Precision engineering excellence in injection moulding.</p>
                </div>
                {/* <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <div className="space-y-2">
                        {['Home', 'About', 'Services', 'Contact'].map((link) => (
                            <button
                                key={link}
                                onClick={() => {
                                    const el = document.getElementById(link.toLowerCase());
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="block text-gray-400 hover:text-white transition-colors"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div> */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                            <div key={idx} className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                                <Icon size={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Micro Moulds & Tools. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;