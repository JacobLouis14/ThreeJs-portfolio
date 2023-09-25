import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.icons]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.75} color={"#915eff"} />
      <directionalLight position={[0, 0, 0.25]} color={"purple"} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* <OrbitControls /> */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} frameloop="demand">
      <Suspense fallback={<CanvasLoader />}>
        <Ball icons={icon} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
