"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

function Gear({ position = [0, 0, 0], speed = 0.01, size = 1, color = "cyan" }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, 0.2, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function PipelineSphere({ distance = 3, speed = 1, delay = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + delay;
    ref.current.position.x = distance * Math.sin(t);
    ref.current.position.z = distance * Math.cos(t);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color="lime" emissive="lime" emissiveIntensity={0.4} />
    </mesh>
  );
}

function Server({ position = [0, -1.5, -2] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial color="#555" emissive="#0ff" emissiveIntensity={0.3} />
    </mesh>
  );
}

function Cloud({ position = [0, 2, -2] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
    </mesh>
  );
}

function ScrollZoomEffect() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();
  const zoom = useTransform(scrollYProgress, [0, 1], [8, 4]);

  useFrame(() => {
    camera.position.z = zoom.get();
  });

  return null;
}

export default function DevOps3DAnimation() {
  return (
    <div style={{ height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />

        <ScrollZoomEffect />

        {/* Gears symbolizing automation */}
        <Gear position={[-1.5, 0, 0]} speed={0.02} color="orange" />
        <Gear position={[1.5, 0, 0]} speed={-0.015} color="cyan" />

        {/* CI/CD pipeline balls */}
        <PipelineSphere distance={2.5} speed={1} />
        <PipelineSphere distance={3} speed={0.7} delay={2} />

        {/* Cloud and server */}
        <Cloud />
        <Server />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
