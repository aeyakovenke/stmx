'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function RobotModel() {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = 0.3
    }
  }, [])

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[1, 1.2, 1]} />
        <meshStandardMaterial color="#5677d4" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.3, 2.7, 0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" />
      </mesh>
      <mesh position={[0.3, 2.7, 0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.8]} />
        <meshStandardMaterial color="#3d4fc8" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.8, 1.5, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#5677d4" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.8, 1.5, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#5677d4" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.4, 0.2, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#2f3fa8" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.4, 0.2, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#2f3fa8" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Chest Light */}
      <mesh position={[0, 1.2, 0.42]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" />
      </mesh>
    </group>
  )
}

export default function Robot3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 2, 4]} />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={4}
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 2, 3]} intensity={0.8} color="#00ff88" />
      <RobotModel />
    </Canvas>
  )
}
