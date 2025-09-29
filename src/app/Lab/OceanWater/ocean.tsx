import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import {Water} from 'three-stdlib'

export default function Ocean() {
  
  const ref = useRef<THREE.Group>(null);
  const waterRef = useRef<Water>(null);
  const waterNormals = useLoader(THREE.TextureLoader, "/img/waternormals.jpg");


  useEffect(() => {
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

    const watergeometry = new THREE.PlaneGeometry(1000, 1000);
    const water = new Water(watergeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: true,
    })
    water.rotation.x = -Math.PI / 2;
    waterRef.current = water;
    ref.current?.add(water);
  },[waterNormals])
 
  useFrame((_, delta) => {
    if(waterRef.current) {
      waterRef.current.material.uniforms.time.value += delta * 0.5;
    }
  })
  return (
    <group ref={ref}/>
  )
}

 
