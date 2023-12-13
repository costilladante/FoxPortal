import { Center, Sparkles, OrbitControls } from '@react-three/drei';
import Portal from './Portal';
import Fox from './Fox';
import { Suspense } from 'react';

export default function Experience() {
  return (
    <>
      <color args={['#131221']} attach='background' />
      <OrbitControls
        makeDefault
        near={0.1}
        enableDamping={true}
        autoRotate={true}
        minDistance={3}
        maxDistance={12}
        maxPolarAngle={Math.PI * 0.43}
        enablePan={false}
      />
      <Center>
        <Suspense>
          <Portal />
          <Fox
            scale={0.006}
            position={[-0.67, 0.03, 1.1]}
            rotation-y={Math.PI * 0.5}
          />
          <Fox
            scale={0.006}
            scale-x={0.001}
            position={[-0.67, 0.03, 1.1]}
            rotation-y={Math.PI * 0.5}
            rotation-z={Math.PI * 0.5}
            useShadow={true}
          />
        </Suspense>
        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={60}
        />
      </Center>
    </>
  );
}
