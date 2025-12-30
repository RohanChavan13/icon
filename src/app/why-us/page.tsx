"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, ShieldCheck, Zap } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });

export default function WhyUsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">

                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Why Choose <span className="text-violet-500">ICON?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We aren't just a club; we are a career accelerator. Here’s what sets us apart from the rest.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Industry Connect",
                            icon: Zap,
                            color: "text-yellow-400",
                            desc: "Direct access to experts, alumni, and industry leaders through exclusive sessions."
                        },
                        {
                            title: "Practical Learning",
                            icon: Star,
                            color: "text-purple-400",
                            desc: "Move beyond textbooks. We focus on hackathons, live projects, and hands-on workshops."
                        },
                        {
                            title: "Elite Community",
                            icon: ShieldCheck,
                            color: "text-green-400",
                            desc: "Join a curated group of high-performers who push each other to achieve excellence."
                        },
                        {
                            title: "Holistic Growth",
                            icon: CheckCircle,
                            color: "text-sky-400",
                            desc: "We develop not just coders, but leaders, speakers, and creative thinkers."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-sky-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative h-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-xl bg-white/5 ${item.color}`}>
                                        <item.icon size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </main>
        </div>
    );
}
