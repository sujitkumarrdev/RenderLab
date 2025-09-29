import * as THREE from 'three'
import React, { useRef } from 'react'

export default function Glowingring() {

    const meshref = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshref} position={[0, 9, 5]}>
      <torusGeometry args={[12, 0.15, 32, 200]} />
      <meshStandardMaterial 
      emissive="#ffffff"
      color="#ffffff"
      emissiveIntensity={5}
      toneMapped={true} 
      side={THREE.DoubleSide} />
    </mesh>
  )
}

 
