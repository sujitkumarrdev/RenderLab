"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


 export default function Electrons({ count = 6, orbitRadius = 2.0 }: { count: number; orbitRadius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

   const attrs = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        speed: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        tilt: (Math.random() - 0.5) * 0.8,
        radius: orbitRadius * (0.6 + Math.random() * 0.6),
        scale: 0.05 + Math.random() * 0.05,  
        emissive: new THREE.Color().setHSL(Math.random() * 0.2 + 0.55, 1, 0.55 + Math.random() * 0.2),
      })),
    [count, orbitRadius]
  );

  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    emissive: new THREE.Color(0x66ccff),
    emissiveIntensity: 3.0,
    roughness: 0.1,
    metalness: 0.0,
  }), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const { speed, phase, tilt, radius, scale } = attrs[i];
      const angle = t * speed + phase;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius * (0.85 + 0.15 * Math.sin(angle * 2.0));
      const y = Math.sin(angle * 0.8 + i) * tilt;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scale * (1 + 0.15 * Math.sin(t * 3 + i)));
      dummy.rotation.set(0, angle, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.SphereGeometry(1, 16, 16), mat, count]} />
  );
}
