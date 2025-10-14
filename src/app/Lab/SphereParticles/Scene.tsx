"use client";
import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticlesSphere from "./SphereParticles";

export default function CanvasComponent() {
  const [radius, setRadius] = useState(2.2); // default desktop radius

   useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setRadius(1.5);  
      } else {
        setRadius(2.3);  
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at 50% 50%, #0a0b1f 0%, #030513 60%, #00010a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ParticlesSphere count={2500} radius={radius} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
