"use client"
import * as THREE from "three"
import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import vertexShader from "@/app/Lab/ParticleShader/Shader/particles.vert.glsl"
import fragmentShader from "@/app/Lab/ParticleShader/Shader/particles.frag.glsl"

export default function Particles() {
  const { count, size, speed, spread } = useControls("Particles", {
    count: { value: 9700, min: 100, max: 10000, step: 100 },
    size: { value: 20.0, min: 1, max: 60, step: 1 },
    speed: { value: 1.2, min: 0.1, max: 10, step: 0.1 },
    spread: { value: 2.5, min: 0.5, max: 5, step: 0.1 },
  })

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spread
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread
    }
    return arr
  }, [count, spread])

  const geo = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("basePosition", new THREE.BufferAttribute(positions, 3))
    geometry.computeBoundingSphere()  
    return geometry
  }, [positions])

  const shaderRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSize: { value: 20 },
    uSpeed: { value: 1.2 },
    uMorphFactor: { value: 0 },
  }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = t
      shaderRef.current.uniforms.uSize.value = size * 0.8   
      shaderRef.current.uniforms.uSpeed.value = speed
      shaderRef.current.uniforms.uMorphFactor.value = 0.5 + 0.5 * Math.sin(t * Math.PI / 2)
    }

     geo.rotateY(0.0008)
  })

  return (
    <points geometry={geo}>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
