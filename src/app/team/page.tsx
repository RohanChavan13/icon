"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });
import Image from "next/image";

const teamMembers = [
    {
        name: "Rohan Chavan",
        role: "President",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Alex Johnson",
        role: "Tech Lead",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Sarah Williams",
        role: "Design Head",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Michael Chen",
        role: "Event Coordinator",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Jessica Lee",
        role: "Content Strategist",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "David Smith",
        role: "Management Lead",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        socials: { linkedin: "#", github: "#", twitter: "#" }
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">

                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Meet The <span className="text-violet-500">Team</span>
                    </motion.h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The minds behind ICON. We are a diverse group of dreamers, doers, and creators.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute inset-0 bg-violet-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center hover:bg-white/10 transition-colors backdrop-blur-md">
                                <div className="relative w-32 h-32 mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-sky-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="relative w-full h-full rounded-full border-2 border-white/20 object-cover bg-black"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-6">
                                    {member.role}
                                </div>

                                <div className="flex gap-4">
                                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href={member.socials.github} className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                                        <Github size={20} />
                                    </a>
                                    <a href={member.socials.twitter} className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </main>
        </div>
    );
}
