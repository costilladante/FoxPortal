/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Fox.gltf --transform 
Files: Fox.gltf [45.1KB] > Fox-transformed.glb [90.3KB] (-100%)
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Fox-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="fox" geometry={nodes.fox.geometry} material={materials.fox_material} skeleton={nodes.fox.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/Fox-transformed.glb')
