"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Mission", href: "/mission" },
    { name: "Why Us", href: "/why-us" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">

            {/* Logo Area */}
            <Link href="/" className="pointer-events-auto">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        I
                    </div>
                    <span className="text-xl font-bold tracking-widest text-white hidden md:block">ICON</span>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 pointer-events-auto bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-xl">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide hover:scale-105 active:scale-95"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 right-6 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 pointer-events-auto md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
}
