"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Image, Text, Sparkles, OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingLogo() {
    // Creating a reference for the group to animate
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle rotation based on mouse or time
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} scale={0.5}>
                {/* The ICON Logo Image - Double Sided Trick */}
                <Image
                    url="/icon.png"
                    scale={[3, 3]}
                    position={[0, 0.5, 0]}
                    transparent
                    side={THREE.DoubleSide}
                />

                {/* --- FRONT TEXT --- */}
                <Text
                    position={[0, -1.8, 0]}
                    fontSize={1.5}
                    color="white"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    ICON
                    <meshStandardMaterial attach="material" color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={2} toneMapped={false} />
                </Text>
                <Text
                    position={[0, -2.6, 0.1]}
                    fontSize={0.4}
                    color="#a5f3fc"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.2}
                >
                    INDUS CONNECT PROJECTS
                </Text>



            </group>
        </Float>
    );
}

function DangerousBackground() {
    return (
        <group>
            {/* Distorted Sphere Blob - Reduced Size & Moved Back */}
            <Float speed={4} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-4, 0, -10]} scale={2.5}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#1a1a1a"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.9}
                    />
                </mesh>
            </Float>
            {/* Secondary Blob - Reduced Size & Moved Right */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[6, -3, -12]} scale={2}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <MeshDistortMaterial
                        color="#4c1d95"
                        distort={0.5}
                        speed={3}
                        roughness={0.4}
                        radius={1}
                    />
                </mesh>
            </Float>
        </group>
    )
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full select-none bg-black">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: false, antialias: true }}>
                {/* Explicit Black Background to prevent white flashes */}
                <color attach="background" args={['#000000']} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />

                {/* Environment for reflections */}
                <Environment preset="city" background={false} />

                {/* Floating Elements */}
                <FloatingLogo />

                {/* Particles */}
                <Sparkles
                    count={200}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.5}
                    color="#0ea5e9"
                />

                {/* Camera Interaction */}
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </div>
    );
}
