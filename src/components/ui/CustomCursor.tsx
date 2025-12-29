"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        }

        const handleMouseDown = () => setIsHovered(true);
        const handleMouseUp = () => setIsHovered(false);


        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseover", handleMouseOver); // Global link detection

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovered ? 2.5 : 1,
                }}
            />

            {/* Trailing Ring - Slightly delayed */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-violet-500 rounded-full pointer-events-none z-[9998] opacity-50"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -8, // Offset to center around the 4px dot
                    y: -8,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }} // Slower follow
            />
        </>
    );
}
