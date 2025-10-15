"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Loader, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import NucleusMesh from "@/app/Lab/Atom/NucleusMesh";
import OrbitRings from "@/app/Lab/Atom/OrbitRings";
import Electrons from "@/app/Lab/Atom/Electrons";
import DustParticles from "@/app/Lab/Atom/BackgroundDust";

type Props = {
  electronCount?: number;
  orbitRadius?: number;
};

 function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    const isMobile = size.width < 768;

    perspectiveCamera.position.set(0, isMobile ? 2.5 : 1.8, isMobile ? 10 : 6);
    perspectiveCamera.fov = isMobile ? 65 : 50;
    perspectiveCamera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

export default function AtomScene({ electronCount = 8, orbitRadius = 2.0 }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle at center, #040016 0%, #000010 100%)",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 1.8, 6], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
         <ResponsiveCamera />

        <Suspense
          fallback={
            <Html center>
              <div
                style={{
                  color: "#88aaff",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                Loading Atom...
              </div>
            </Html>
          }
        >
           <fog attach="fog" args={["#040016", 6, 20]} />
          <ambientLight intensity={0.25} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#88aaff" />

           <group>
            <NucleusMesh color={new THREE.Color(0xff7a66)} />
            <OrbitRings
              count={4}
              radii={[
                orbitRadius * 0.9,
                orbitRadius,
                orbitRadius * 1.25,
                orbitRadius * 1.55,
              ]}
            />
            <Electrons count={electronCount} orbitRadius={orbitRadius} />
            <DustParticles count={180} />
          </group>

           <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.3}
          />

           <EffectComposer multisampling={4}>
            <Bloom
              luminanceThreshold={0.35}
              luminanceSmoothing={0.9}
              intensity={0.6}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

       <Loader
        containerStyles={{
          backgroundColor: "#000010",
        }}
        innerStyles={{
          background: "linear-gradient(90deg, #88aaff, #ff7a66)",
          height: "4px",
          borderRadius: "2px",
        }}
        dataStyles={{
          color: "#88aaff",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "1px",
          marginTop: "8px",
        }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </div>
  );
}
