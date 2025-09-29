"use client"
import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ShaderMesh from '@/app/Lab/Circle/ShaderMesh'
 
export default function CanvasComponent() {
    return (
        <Canvas camera={{ position: [0, 0, 5], near: 0.1, far: 100 }}
            gl={{ antialias: true, powerPreference: "high-performance" }}
            onCreated={({ gl }) => {
                gl.outputColorSpace = THREE.SRGBColorSpace;
                gl.toneMapping = THREE.ACESFilmicToneMapping;
            }}
        >
            <Suspense fallback={null}>
                <ShaderMesh />
            </Suspense>
         </Canvas>
    )
}

