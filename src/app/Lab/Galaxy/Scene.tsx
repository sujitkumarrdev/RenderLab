"use client"
import * as THREE from "three"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Particles from "@/app/Lab/Galaxy/Particles"
import { Leva } from "leva"
import Background from "@/app/Lab/Galaxy/Background"


export default function CanvasComponent() {
return (
<>
<Canvas
camera={{ position: [0, 4, 3], far: 75 }}
style={{ width: "100vw", height: "100vh" }}
gl={{ antialias: true, powerPreference: "high-performance" }}
onCreated={({ gl }) => {
gl.outputColorSpace = THREE.SRGBColorSpace
gl.toneMapping = THREE.ACESFilmicToneMapping
}}
dpr={[1, 2]}
>
<ambientLight intensity={0.3} />
<Suspense fallback={null}>
<Particles />
<Background/>
<OrbitControls enableZoom={true} enablePan={true} />
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