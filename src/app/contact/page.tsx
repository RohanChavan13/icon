"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            <div className="absolute top-0 right-0 p-32 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32 min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Get in <span className="text-sky-500">Touch</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-12 max-w-lg">
                            Have questions? Want to collaborate? Or just want to say hi? We’d love to hear from you.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", value: "contact@icon-indus.com" },
                                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                                { icon: MapPin, label: "Location", value: "Indus University, Ahmedabad" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-500/50 transition-all duration-300">
                                        <item.icon className="text-gray-300 group-hover:text-sky-400" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">{item.label}</p>
                                        <p className="text-xl font-semibold text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl hover:border-white/20 transition-colors shadow-2xl relative overflow-hidden group">
                            {/* Form Edge Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-gray-700" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-gray-700" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-gray-700" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all placeholder:text-gray-700" placeholder="Your thought..." />
                                </div>

                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                    Send Message <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
