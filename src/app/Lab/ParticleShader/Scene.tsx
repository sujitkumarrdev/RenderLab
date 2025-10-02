"use client"
import * as THREE from "three"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Particles from "@/app/Lab/ParticleShader/Particles"
import Background from "@/app/Lab/ParticleShader/Background"

import { Leva } from "leva"

export default function CanvasComponent() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 3], far: 50 }}
        style={{ width: "100vw", height: "100vh" }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace
          gl.toneMapping = THREE.ACESFilmicToneMapping
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Particles />
          <Background/>
          <OrbitControls enableZoom enablePan />
        </Suspense>
      </Canvas>

      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: 999,
        }}
      >
        <Leva collapsed={true} fill theme={{ sizes: { rootWidth: "100%" } }} />
      </div>
    </>
  )
}