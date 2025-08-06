"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function SecurityCore({ alert }) {
  const color = alert ? "red" : "cyan";
  const emissive = alert ? "red" : "blue";

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.8} />
    </mesh>
  );
}

function FirewallRing({ radius = 2, speed = 0.01, color = "orange" }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function DataPacket({ distance = 3, speed = 0.02, size = 0.1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = distance * Math.cos(t);
      ref.current.position.z = distance * Math.sin(t);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color="lime" emissive="lime" emissiveIntensity={0.5} />
    </mesh>
  );
}

function HackerNode({ onAttack }) {
  const ref = useRef();
  const [beamVisible, setBeamVisible] = useState(false);
  const beamRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Hacker orbiting slowly
    const radius = 6;
    if (ref.current) {
      ref.current.position.x = radius * Math.cos(t * 0.3);
      ref.current.position.z = radius * Math.sin(t * 0.3);
    }

    // Fire beam every 5 seconds
    if (Math.floor(t) % 5 === 0 && !beamVisible) {
      setBeamVisible(true);
      onAttack(); // trigger core alert
      setTimeout(() => setBeamVisible(false), 500); // beam duration
    }

    // Update beam position
    if (beamRef.current && ref.current) {
      const hackerPos = ref.current.position;
      beamRef.current.position.set(
        hackerPos.x / 2,
        0,
        hackerPos.z / 2
      );
      beamRef.current.scale.z = 3;
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="red" emissive="red" emissiveIntensity={1.2} />
      </mesh>
      {beamVisible && (
        <mesh ref={beamRef}>
          <cylinderGeometry args={[0.05, 0.05, 6, 32]} />
          <meshBasicMaterial color="red" transparent opacity={0.7} />
        </mesh>
      )}
    </>
  );
}

export default function CyberSecurity3DAnimation() {
  const [alert, setAlert] = useState(false);
  const alertTimeout = useRef(null);

  const handleAttack = () => {
    setAlert(true);
    clearTimeout(alertTimeout.current);
    alertTimeout.current = setTimeout(() => setAlert(false), 800);
  };

  return (
    <div style={{ height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <SecurityCore alert={alert} />
        <FirewallRing radius={2} speed={0.01} color="red" />
        <FirewallRing radius={2.5} speed={-0.015} color="orange" />

        <DataPacket distance={3} speed={0.8} />
        <DataPacket distance={3.5} speed={1.2} />

        <HackerNode onAttack={handleAttack} />

        <OrbitControls enableZoom={false} />

        {/* animation added  */}
        
      </Canvas>
    </div>
  );
}
