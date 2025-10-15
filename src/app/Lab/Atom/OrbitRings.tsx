"use client";
import React from "react";
import * as THREE from "three";


export default function OrbitRings({ count = 4, radii = [1.6, 2.2, 2.8, 3.4] }: { count: number; radii?: number[] }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const r = radii[i] ?? 2 + i * 0.5;
        return (
          <mesh key={i} rotation={[Math.PI / 2, 0, (i * 0.7) % Math.PI]}>
            <torusGeometry args={[r, 0.005 + i * 0.002, 16, 150]} />
            <meshBasicMaterial
              transparent
              opacity={0.1}
              blending={THREE.AdditiveBlending}
              color={new THREE.Color(0x66aaff).multiplyScalar(1.5 - i * 0.2)}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </>
  );
}
