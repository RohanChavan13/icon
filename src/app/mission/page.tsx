"use client";

import { motion } from "framer-motion";
import { Target, Compass, Users } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-sky-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            {/* Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] opacity-40" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-16 min-h-screen">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        <Target className="w-6 h-6 text-sky-400 mr-2" />
                        <span className="text-gray-300 font-medium tracking-wide">Our Mission</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Bridging the <br />
                        <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">Gap</span>
                    </h1>

                    <div className="space-y-8">
                        {[
                            { title: "Empowerment", desc: "To provide students with the resources, mentorship, and platform needed to excel in their technical careers." },
                            { title: "Collaboration", desc: "To foster a community where ideas are shared, refined, and brought to life through collective effort." },
                            { title: "Excellence", desc: "To set high standards in project development, leadership, and professional conduct." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <span className="text-sky-400 font-bold">{i + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual / 3D Element Placeholder -> Could be an image or just a stylistic layout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative h-full w-full glass rounded-3xl border border-white/10 flex items-center justify-center p-8 overflow-hidden">
                            {/* Abstract Design */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] z-10" />
                            <Target className="w-48 h-48 text-white/5 z-0 absolute" />

                            <div className="relative z-20 text-center">
                                <Compass className="w-24 h-24 text-sky-400 mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-2">Guided by Purpose</h3>
                                <p className="text-gray-400">Driven by Passion</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}
