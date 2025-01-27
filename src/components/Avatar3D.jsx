import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Avatar3D = () => {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/assets/avatar.glb`); // Update the path to your avatar model
  const avatarRef = useRef();

  const handlePointerOver = () => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.5; // Rotate slightly on hover
      avatarRef.current.scale.set(2.5, 2.5, 2.5); // Scale up on hover
    }
  };

  const handlePointerOut = () => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y = 0; // Reset rotation
      avatarRef.current.scale.set(2, 2, 2); // Reset scale
    }
  };

  return (
    <Canvas style={{ height: "600px", width: "600px" }}> {/* Increased frame size */}
      <ambientLight intensity={1.5} /> {/* Brighter ambient light */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} /> {/* Stronger directional light */}
      <pointLight
        position={[0, 5, 10]}
        intensity={2}
        color="#64ffda"
      /> {/* Bright glowing point light */}
      <primitive
        object={scene}
        ref={avatarRef}
        scale={2} // Default scale
        position={[0, -1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <OrbitControls enableZoom={true} /> {/* Allows zooming */}
    </Canvas>
  );
};

export default Avatar3D;
