"use client"
import * as THREE from "three"
import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import vertexShader from "@/app/Lab/Galaxy/Bg-Shader/bg.vert.glsl"
import fragmentShader from "@/app/Lab/Galaxy/Bg-Shader/bg.frag.glsl"

export default function Background() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0.2 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  }), [])

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh scale={[100, 100, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
