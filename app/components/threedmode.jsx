"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Environment, Float } from "@react-three/drei";

function LockModel() {
  const lockRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const scrollY = scroll.offset; // 0 to 1
    if (lockRef.current) {
      lockRef.current.rotation.y = scrollY * Math.PI * 2;
      lockRef.current.position.y = -scrollY * 2;
      lockRef.current.material.opacity = scrollY;
    }
  });

  return (
    <Float floatIntensity={1} speed={2}>
      <mesh ref={lockRef} position={[0, 0, 0]}>
        {/* Body of the lock */}
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#0088ff" transparent opacity={0} />

        {/* U part of lock */}
        <mesh position={[0, 1.25, 0]}>
          <torusGeometry args={[0.4, 0.05, 16, 100, Math.PI]} />
          <meshStandardMaterial color="#004466" />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function LockScenePage() {
  return (
    <div style={{ width: "100vw", height: "100vh", scrollSnapType: "y mandatory", overflowY: "scroll" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="city" />
        <ScrollControls pages={2} damping={0.1}>
          <LockModel />
          <Html>
            <div style={{ height: "200vh", width: "100vw" }}>
              <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ color: "#0ff", fontSize: "2rem" }}>Scroll to Unlock Cybersecurity</h1>
              </div>
              <div style={{ height: "100vh" }}></div>
            </div>
          </Html>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
