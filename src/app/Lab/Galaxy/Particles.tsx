"use client"
import * as THREE from "three"
import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import vertexShader from "@/app/Lab/Galaxy/shaders/paticles.vert.glsl"
import fragmentShader from "@/app/Lab/Galaxy/shaders/particle.frag.glsl"


export default function Particles() {
const {
count,
size,
speed,
spread,
arms,
armTwist,
colorInner,
colorOuter,
} = useControls("Galaxy", {
count: { value: 28500, min: 1000, max: 40000, step: 500 },
size: { value: 45, min: 1, max: 120, step: 1 },
speed: { value: 1.2, min: 0.0, max: 6, step: 0.05 },
spread: { value: 1.5, min: 0.2, max: 5, step: 0.1 },
arms: { value: 4, min: 1, max: 6, step: 1 },
armTwist: { value: 3.2, min: 0.1, max: 8, step: 0.1 },
colorInner: { value: [250, 133, 0] },
colorOuter: { value: [90, 130, 255] },
})

 const { positions, colors } = useMemo(() => {
const pos = new Float32Array(count * 3)
const cols = new Float32Array(count * 3)
for (let i = 0; i < count; i++) {
const radius = Math.pow(Math.random(), 0.9) * spread * 2.0
 const armIndex = Math.floor(Math.random() * arms)
const baseAngle = (armIndex / arms) * Math.PI * 2
const angle = baseAngle + radius * armTwist + (Math.random() - 0.5) * 0.6


const x = Math.cos(angle) * radius
const y = (Math.random() - 0.5) * radius * 0.1 // thin disk
const z = Math.sin(angle) * radius

 pos[i * 3 + 0] = x + (Math.random() - 0.5) * 0.15 * radius
pos[i * 3 + 1] = y
pos[i * 3 + 2] = z + (Math.random() - 0.5) * 0.15 * radius


 const inner = colorInner.map((v: number) => v / 255)
const outer = colorOuter.map((v: number) => v / 255)
 const mixFactor = Math.min(1.0, radius / (spread * 1.8))
cols[i * 3 + 0] = inner[0] * (1 - mixFactor) + outer[0] * mixFactor
cols[i * 3 + 1] = inner[1] * (1 - mixFactor) + outer[1] * mixFactor
cols[i * 3 + 2] = inner[2] * (1 - mixFactor) + outer[2] * mixFactor
}
return { positions: pos, colors: cols }
}, [count, spread, arms, armTwist, colorInner, colorOuter])


const geo = useMemo(() => {
const geometry = new THREE.BufferGeometry()
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
geometry.setAttribute("basePosition", new THREE.BufferAttribute(positions.slice(), 3))
geometry.setAttribute("colorAttr", new THREE.BufferAttribute(colors, 3))
geometry.computeBoundingSphere()
return geometry
}, [positions, colors])


const shaderRef = useRef<THREE.ShaderMaterial | null>(null)


const uniforms = useMemo(() => ({
uTime: { value: 0 },
uSize: { value: 23 },
uSpeed: { value: 2.50 },
uMorphFactor: { value: 0 },
uGlobalRotation: { value: 0 },
}), [])

useFrame((state) => {
const t = state.clock.getElapsedTime()
if (shaderRef.current) {
shaderRef.current.uniforms.uTime.value = t
shaderRef.current.uniforms.uSize.value = size
shaderRef.current.uniforms.uSpeed.value = speed
shaderRef.current.uniforms.uMorphFactor.value = 0.2 + 0.8 * Math.abs(Math.sin(t * 0.25))
shaderRef.current.uniforms.uGlobalRotation.value = t * 0.05
}
})

return (
<points geometry={geo} rotation={[0, 0, 0]} position={[0, 0.5, 0]}>
<shaderMaterial
ref={shaderRef}
vertexShader={vertexShader}
fragmentShader={fragmentShader}
uniforms={uniforms}
vertexColors={true}
transparent
depthWrite={false}
blending={THREE.AdditiveBlending}
/>
</points>
)
}