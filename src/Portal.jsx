import { shaderMaterial, useTexture, useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import crystalVertex from './shaders/crystal/vertex.glsl';
import crystalFragment from './shaders/crystal/fragment.glsl';
import portalVertex from './shaders/portal/vertex.glsl';
import portalFragment from './shaders/portal/fragment.glsl';
import { useRef } from 'react';

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#fdf9ff'),
    uColorEnd: new THREE.Color('#c7d5f0'),
  },
  portalVertex,
  portalFragment
);
extend({ PortalMaterial });

const CrystalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#8375cc'),
    uColorEnd: new THREE.Color('#1c1d56'),
    uOpacity: 0.85,
  },
  crystalVertex,
  crystalFragment
);
extend({ CrystalMaterial });

export default function Portal() {
  const bakedTexture = useTexture('./models/portal/baked.jpg');
  bakedTexture.flipY = false;

  const model = useGLTF('./models/portal/portal.glb');
  const { nodes } = model;
  const {
    baked: bakedNode,
    crystalA,
    crystalB,
    crystalC,
    crystalD,
    foxLeftEye,
    foxRightEye,
    foxTotem,
    poleLightA,
    poleLightB,
    portalGate,
  } = nodes;

  const portalMaterialRef = useRef();
  const foxLeftEyeRef = useRef();
  const foxRightEyeRef = useRef();
  const crystalARef = useRef();
  const crystalBRef = useRef();
  const crystalCRef = useRef();
  const crystalDRef = useRef();
  const foxTotemRef = useRef();

  useFrame((state, delta) => {
    portalMaterialRef.current.uTime += delta;
    foxLeftEyeRef.current.uTime += delta;
    foxRightEyeRef.current.uTime += delta;
    crystalARef.current.uTime += delta;
    crystalBRef.current.uTime += delta;
    crystalCRef.current.uTime += delta;
    crystalDRef.current.uTime += delta;
    foxTotemRef.current.uTime += delta;
  });

  return (
    <>
      <group rotation={[0, Math.PI * 0.8, 0]}>
        <mesh
          geometry={bakedNode.geometry}
          position={bakedNode.position}
          rotation={bakedNode.rotation}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={poleLightA.geometry}
          position={poleLightA.position}
          rotation={poleLightA.rotation}
          scale={poleLightA.scale}
        >
          <meshBasicMaterial
            color={0xfdeac1}
            opacity={0.8}
            transparent={true}
          />
        </mesh>
        <mesh
          geometry={poleLightB.geometry}
          position={poleLightB.position}
          rotation={poleLightB.rotation}
          scale={poleLightB.scale}
        >
          <meshBasicMaterial
            color={0xfdeac1}
            opacity={0.8}
            transparent={true}
          />
        </mesh>
        <mesh
          geometry={portalGate.geometry}
          position={portalGate.position}
          rotation={portalGate.rotation}
          scale={portalGate.scale}
        >
          <portalMaterial ref={portalMaterialRef} />
        </mesh>
        <mesh
          geometry={foxLeftEye.geometry}
          position={foxLeftEye.position}
          rotation={foxLeftEye.rotation}
          scale={foxLeftEye.scale}
        >
          <portalMaterial ref={foxLeftEyeRef} />
        </mesh>
        <mesh
          geometry={foxRightEye.geometry}
          position={foxRightEye.position}
          rotation={foxRightEye.rotation}
          scale={foxRightEye.scale}
        >
          <portalMaterial ref={foxRightEyeRef} />
        </mesh>
        <mesh
          geometry={crystalA.geometry}
          position={crystalA.position}
          rotation={crystalA.rotation}
          scale={crystalA.scale}
        >
          <crystalMaterial ref={crystalARef} opacity={0.85} transparent />
        </mesh>
        <mesh
          geometry={crystalB.geometry}
          position={crystalB.position}
          rotation={crystalB.rotation}
          scale={crystalB.scale}
        >
          <crystalMaterial ref={crystalBRef} opacity={0.85} transparent />
        </mesh>
        <mesh
          geometry={crystalC.geometry}
          position={crystalC.position}
          rotation={crystalC.rotation}
          scale={crystalC.scale}
        >
          <crystalMaterial ref={crystalCRef} opacity={0.85} transparent />
        </mesh>
        <mesh
          geometry={crystalD.geometry}
          position={crystalD.position}
          rotation={crystalD.rotation}
          scale={crystalD.scale}
        >
          <crystalMaterial ref={crystalDRef} opacity={0.85} transparent />
        </mesh>
        <mesh
          geometry={foxTotem.geometry}
          position={foxTotem.position}
          rotation={foxTotem.rotation}
          scale={foxTotem.scale}
        >
          <crystalMaterial ref={foxTotemRef} opacity={0.85} transparent />
        </mesh>
      </group>
    </>
  );
}
