import React, { useRef } from "react";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Model = ({ margin = 0.5, size, isMobile = false }) => {
  const texture = new THREE.TextureLoader().load("./cobblestone.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  const material = new THREE.MeshStandardMaterial({ map: texture });

  // create a new group to hold the text and apply the rotation to it
  const textGroup = new THREE.Group();
  textGroup.rotation.x = Math.PI / 4;

  const { width, height } = useThree((state) => state.viewport);

  const meshRef = useRef();
  const modelRef = useRef(null);

  useFrame(({ clock }) => {
    const modelPosition = modelRef.current.position;
    meshRef.current.position.set(
      modelPosition.x,
      modelPosition.y,
      modelPosition.z
    );
    const angle = (Math.sin(clock.getElapsedTime()) * Math.PI) / 8;
    meshRef.current.rotation.y = THREE.MathUtils.clamp(
      angle,
      -Math.PI / 4,
      Math.PI / 4
    );
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <group position={[0, 0, 0]} scale={[size, size, size]}>
        <Center
          right
          bottom
          position={
            isMobile
              ? [-width / 2 + margin - 7.5, height / 2 - margin, 0]
              : [-width / 2 + margin - 2, height / 2 - margin, 0]
          }
          rotation={[-0.25, 0, 0]}
        >
          <Text3D
            ref={modelRef}
            font={"./Press Start 2P_Regular.json"}
            material={material}
            group={textGroup}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1.5}
          >
            SOME1HING
          </Text3D>
        </Center>
      </group>
    </mesh>
  );
};

const TextModel = () => {
  const isMobile = window.innerWidth < 768;
  const isLandscape = window.innerWidth > window.innerHeight;
  const size = isMobile ? (isLandscape ? 0.5 : 0.2) : 0.5;
  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      suppressHydrationWarning={true}
      orthographic
      camera={{ position: [0, 0, 100], zoom: 100 }}
    >
      <pointLight position={[5, 5, 5]} />
      <Model size={size} isMobile={isMobile} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
        dampingFactor={0.2}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  );
};

export default TextModel;
