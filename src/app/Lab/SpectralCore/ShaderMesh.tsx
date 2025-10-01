"use client"
import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import fragmentShader from '@/app/Lab/SpectralCore/shader/spectralCore.frag.glsl'
import vertexShader from '@/app/Lab/SpectralCore/shader/spectralCore.vert.glsl'

export default function ShaderMesh() {
  const { noiseStrength, speed, radius, segments } = useControls({
    noiseStrength: { value: 0.3, min: 0, max: 1, step: 0.01 },
    speed: { value: 1.0, min: 0.1, max: 5, step: 0.1 },
    radius: { value: 1.5, min: 0.5, max: 3, step: 0.1 },
    segments: { value: 128, min: 16, max: 256, step: 16 },
  })

const geo = useMemo(() => {
    return new THREE.SphereGeometry(radius, segments, segments)
  }, [radius, segments])

  const shaderRef = useRef<THREE.ShaderMaterial>(null)

 useFrame((state) => {
  if (!shaderRef.current) return
  shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
  shaderRef.current.uniforms.uNoiseStrength.value = noiseStrength
  shaderRef.current.uniforms.uSpeed.value = speed
})

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uNoiseStrength: { value: 0.3 },
    uSpeed: { value: 1.0 },
   }),[]) // ✅ No dependencies — stable object
   

  return (
    <mesh geometry={geo} position={[0, 0, 0]}>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}