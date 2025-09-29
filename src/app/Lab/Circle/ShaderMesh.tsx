"use client"
import * as THREE from 'three'
import React from 'react'
import { useMemo } from 'react'
import useShaderMaterial from '@/app/Lab/Circle/hooks/useShaderMaterial'

import fragmentShader from '@/app/Lab/Circle/shader/circle.frag.glsl'
import vertexShader from '@/app/Lab/Circle/shader/circle.vert.glsl'


export default function ShaderMesh() {

 
  const geo = useMemo(() => new THREE.PlaneGeometry(16, 16), []);

  return (
    <mesh geometry={geo} >
      {useShaderMaterial(vertexShader, fragmentShader, {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight), }
      })}
    </mesh>
  )
}

