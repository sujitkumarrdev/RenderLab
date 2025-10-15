"use client";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import vertex from "@/app/Lab/Atom/Shader/Nucleus.vert.glsl";
import fragment from "@/app/Lab/Atom/Shader/Nucleus.frag.glsl";
 
export default function NucleusMesh({ color = new THREE.Color(0xff6a6a) }: { color?: THREE.Color }) {
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: color },
      uPulse: { value: 1.0 },
    }),
    [color]
  );

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    matRef.current.uniforms.uTime.value = time;
    matRef.current.uniforms.uPulse.value = 0.85 + 0.15 * Math.sin(time * 2.5);
  });

  return (
    <mesh>
      <sphereGeometry args={[0.7, 64, 64]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
