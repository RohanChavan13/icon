"use client";

import dynamic from "next/dynamic";

// Dynamically import Scene3D to avoid server-side rendering issues with Canvas
const Scene3D = dynamic(() => import("@/components/ui/Scene3D"), { ssr: false });


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">

      {/* 3D Scene Background */}
      <main className="relative flex-grow w-full">
        {/* HERO SECTION - Fixed Background 3D Scene */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Scene3D />
          </div>


        </section>

        {/* NEW SCROLL CONTENT */}
        <div className="relative z-20 bg-black">

          {/* Transition Gradient */}
          <div className="h-32 bg-gradient-to-b from-transparent to-black pointer-events-none -mt-32 relative z-20" />


        </div>
      </main>
    </div>
  );
}
