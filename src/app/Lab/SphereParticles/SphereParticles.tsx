"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticlesSphere({ count = 2500, radius = 2 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const [phase, setPhase] = useState<"idle" | "explode" | "reform">("idle");
  const phaseStartTime = useRef<number>(performance.now());

  const basePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#44ccff");
    const color2 = new THREE.Color("#ff66ff");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      const mixed = color1.clone().lerp(color2, Math.random());
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, [count, radius]);

   useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) =>
        prev === "idle" ? "explode" : prev === "explode" ? "reform" : "idle"
      );
      phaseStartTime.current = performance.now();
    }, 3000);  
    return () => clearInterval(interval);
  }, []);

   useFrame(() => {
    const time = performance.now() * 0.001;
    const elapsed = (performance.now() - phaseStartTime.current) / 1000;
    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const bx = basePositions.positions[i3];
      const by = basePositions.positions[i3 + 1];
      const bz = basePositions.positions[i3 + 2];

      const len = Math.sqrt(bx * bx + by * by + bz * bz);
      const nx = bx / len;
      const ny = by / len;
      const nz = bz / len;

      let distance = radius;
      if (phase === "explode") {
        const t = Math.min(elapsed / 2.0, 1);
        distance = radius + t * 5.0;
      } else if (phase === "reform") {
        const t = Math.min(elapsed / 2.0, 1);
        distance = radius + (1 - t) * 5.0;
      }

      positions[i3] = nx * distance;
      positions[i3 + 1] = ny * distance;
      positions[i3 + 2] = nz * distance;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    pointsRef.current.rotation.y += 0.0025;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.5;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[basePositions.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[basePositions.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
