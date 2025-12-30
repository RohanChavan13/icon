"use client";

import { motion } from "framer-motion";
import { Users, Zap, Globe, Clock, Code, Cpu, Shield, Paintbrush, PenTool, TrendingUp, Mic, Smartphone } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });
import TiltCard from "@/components/ui/TiltCard";

// Animation Variants
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 overflow-x-hidden font-sans">

            {/* 3D Particle Background */}
            <ThreeBackground />

            {/* Ambient Light Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 perspective-1000">

                {/* Header Section */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mb-24 text-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        {/* <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-400 mb-6 backdrop-blur-md">
                            Est. 2024 // Indus University
                        </span> */}
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
                        About ICON
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-sky-500 mx-auto rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
                </motion.div>

                {/* History Section */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mb-32"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold mb-6 text-white flex items-center gap-4">
                                <Clock className="w-8 h-8 text-violet-400" />
                                Our Legacy
                            </h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Founded in <span className="text-white font-semibold">2024</span>, ICON (Indus Connect) emerged from a simple yet powerful idea: to unite the brightest minds of Indus University under one umbrella.
                                </p>
                                <p>
                                    What started as a small group of tech enthusiasts meeting in library corners has evolved into the university's premier student-driven community. We realized that true innovation doesn't happen in silos. By bridging the gap between <span className="text-violet-400">classroom theory</span> and <span className="text-sky-400">industry reality</span>, we've created a launchpad for the next generation of leaders.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <TiltCard>
                                <div className="glass p-1 aspect-video rounded-3xl border border-white/10 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-black z-0" />
                                    {/* Decorative Graphic representing timeline/growth */}
                                    <div className="absolute top-1/2 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            className="h-full bg-gradient-to-r from-violet-500 to-sky-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <h3 className="text-5xl font-bold text-white/5 group-hover:text-white/20 transition-colors duration-500">HISTORY</h3>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>
                </motion.div>

                {/* What We Do */}
                <motion.div className="mb-32">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", icon: Zap, desc: "Building cutting-edge projects and hacking solutions to real-world problems." },
                            { title: "Collaboration", icon: Users, desc: "Fostering a culture where technical and creative minds work together." },
                            { title: "Growth", icon: TrendingUp, desc: "Workshops, seminars, and mentorship to accelerate professional development." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TiltCard className="h-full">
                                    <div className="h-full glass p-8 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                                        <item.icon className="w-10 h-10 text-violet-400 mb-6" />
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Domains */}
                <motion.div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-white/10 flex-1" />
                        <h2 className="text-4xl font-bold text-center text-white">Technical Domains</h2>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { name: "Web Dev", icon: Globe, color: "text-blue-400", border: "hover:border-blue-500/50" },
                            { name: "App Dev", icon: Smartphone, color: "text-green-400", border: "hover:border-green-500/50" },
                            { name: "AI & ML", icon: Cpu, color: "text-purple-400", border: "hover:border-purple-500/50" },
                            { name: "Cybersecurity", icon: Shield, color: "text-red-400", border: "hover:border-red-500/50" },
                        ].map((domain, idx) => (
                            <motion.div key={idx} variants={fadeIn}>
                                <div className={`p-6 rounded-2xl bg-white/[0.03] border border-white/5 ${domain.border} transition-all duration-300 hover:bg-white/[0.08] group`}>
                                    <domain.icon className={`w-8 h-8 mb-4 ${domain.color}`} />
                                    <h3 className="text-xl font-semibold">{domain.name}</h3>
                                    <p className="text-sm text-gray-500 mt-2">Crafting digital experiences and intelligent systems.</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Non-Technical Domains */}
                <motion.div className="mb-20">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-white/10 flex-1" />
                        <h2 className="text-4xl font-bold text-center text-white">Non-Technical Domains</h2>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { name: "Management", icon: Users, color: "text-orange-400" },
                            { name: "Creative Design", icon: Paintbrush, color: "text-pink-400" },
                            { name: "Content Writing", icon: PenTool, color: "text-yellow-400" },
                            { name: "Public Speaking", icon: Mic, color: "text-teal-400" },
                            { name: "Marketing", icon: TrendingUp, color: "text-indigo-400" },
                        ].map((domain, idx) => (
                            <motion.div key={idx} variants={fadeIn}>
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.08] flex items-center gap-4">
                                    <div className={`p-3 rounded-full bg-white/5 ${domain.color}`}>
                                        <domain.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{domain.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-center mt-32 text-gray-500 text-sm font-light tracking-widest uppercase"
                >
                    <p>© {new Date().getFullYear()} ICON // Indus Connect</p>
                </motion.div>

            </main>
        </div>
    );
}
