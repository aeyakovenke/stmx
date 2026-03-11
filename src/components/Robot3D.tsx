'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function LobsterEmoji() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial
          map={createCanvasTexture()}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

function createCanvasTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')!
  
  // Draw lobster emoji
  ctx.font = 'bold 400px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('🦞', 256, 256)
  
  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

export default function Lobster3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#5677d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#a6c1e8" />
      
      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={1.5}
        floatingRange={[-0.1, 0.1]}
      >
        <LobsterEmoji />
      </Float>
    </Canvas>
  )
}
