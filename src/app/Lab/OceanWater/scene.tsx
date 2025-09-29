"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky , Stars, OrbitControls, Cloud } from '@react-three/drei'
import Ocean from './ocean'
import GlowingRing from "./glowingring"
export default function Scene() {
  return (

    <Canvas camera={{ position: [0, 20, 50], fov: 75 }}
    gl={{antialias: true}}
      >

      <pointLight decay={0} position={[100, 100, 100]} />
      <pointLight decay={0.05} position={[-100, -100, -100]} />

      <color attach="background" args={['#000000']} />
      <Suspense fallback={null}>
        <Ocean/>
          <GlowingRing/>
        <Cloud 
          position={[50, 30, 0]}
          speed={0.3}
          opacity={0.5}
          segments={20}
          rotation={[Math.PI / 2, 0, 0]}
        />
         <Cloud 
          position={[-20, 40, -50]}
          speed={0.2}
          opacity={0.5}
          segments={20}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <Cloud 
          position={[-120, 55, -90]}
          speed={0.2}
          opacity={0.5}
          segments={20}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </Suspense>
      <Sky sunPosition={[400, 200, -1000]} turbidity={0.01} rayleigh={0.04} mieCoefficient={0.05} mieDirectionalG={0.1} />
      <Stars
          radius={100}     
          depth={50}       
          count={500}     
          factor={4}       
          saturation={0}   
          fade={true}      
        />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

 
