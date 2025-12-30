"use client";

import { motion } from "framer-motion";
import { Eye, Lightbulb, Rocket } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });
import TiltCard from "@/components/ui/TiltCard";

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] opacity-40" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        <Eye className="w-6 h-6 text-violet-400 mr-2" />
                        <span className="text-gray-300 font-medium tracking-wide">Our Vision</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Seeing Beyond <br />
                        <span className="text-violet-500">The Horizon</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
                        To cultivate a world-class ecosystem where innovation creates impact, connecting student potential with industry reality to shape the leaders of tomorrow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
                    {[
                        { icon: Lightbulb, title: "Innovate", color: "text-amber-400", desc: "Pioneering new solutions for modern challenges." },
                        { icon: Rocket, title: "Accelerate", color: "text-sky-400", desc: "Fast-tracking growth through hands-on experience." },
                        { icon: Eye, title: "Envision", color: "text-violet-400", desc: "Creating a roadmap for sustainable tech future." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <TiltCard className="h-full">
                                <div className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-colors backdrop-blur-md flex flex-col items-center text-center group">
                                    <item.icon className={`w-12 h-12 mb-4 ${item.color} group-hover:scale-110 transition-transform`} />
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </main>
        </div>
    );
}
