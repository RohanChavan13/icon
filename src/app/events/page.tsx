"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
const ThreeBackground = dynamic(() => import("@/components/ui/ThreeBackground"), { ssr: false });
import TiltCard from "@/components/ui/TiltCard";
import Image from "next/image";

// Placeholder events data
const events = [
    {
        id: 1,
        title: "ICON Hackathon 2025",
        date: "March 15, 2025",
        time: "09:00 AM - 09:00 PM",
        location: "Main Auditorium",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=2070&auto=format&fit=crop",
        category: "Competition",
        status: "Upcoming"
    },
    {
        id: 2,
        title: "AI & ML Workshop",
        date: "February 20, 2025",
        time: "10:00 AM - 04:00 PM",
        location: "Lab Complex 3",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
        category: "Workshop",
        status: "Upcoming"
    },
    {
        id: 3,
        title: "Tech Talk: Future of Web3",
        date: "January 10, 2025",
        time: "02:00 PM - 04:00 PM",
        location: "Seminar Hall A",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        category: "Seminar",
        status: "Past"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-violet-500/30 font-sans overflow-hidden">
            <ThreeBackground />

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-4"
                        >
                            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">Events</span>
                        </motion.h1>
                        <p className="text-gray-400 text-lg">Join us to learn, compete, and grow.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard className="h-full">
                                <div className="group h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 flex flex-col">
                                    {/* Image Area */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${event.status === 'Upcoming' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                                                {event.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <span className="text-violet-400 text-sm font-semibold mb-2">{event.category}</span>
                                        <h3 className="text-2xl font-bold mb-4 line-clamp-2">{event.title}</h3>

                                        <div className="space-y-3 text-gray-400 text-sm mb-6 flex-grow">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        <button className="w-full py-3 rounded-xl bg-white/10 border border-white/10 font-bold hover:bg-violet-600 hover:border-violet-600 transition-all flex items-center justify-center gap-2 group-hover:gap-4">
                                            Register Now <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </main>
        </div>
    );
}
