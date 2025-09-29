"use client"
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function useShaderMaterial(
    vertexShader: string,
    fragmentShader: string,
    uniforms: Record<string, THREE.IUniform>
) {

    const mat = useRef<THREE.ShaderMaterial>(null)

    useFrame((state) => {
        if (mat.current) {
            if (mat.current.uniforms.uTime) {
                mat.current.uniforms.uTime.value = state.clock.getElapsedTime();
            }
            if (mat.current.uniforms.uResolution) {
                mat.current.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
            }
        }
    })

    return (
        <shaderMaterial
            ref={mat}
            uniforms={uniforms}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
        />

    )
}


