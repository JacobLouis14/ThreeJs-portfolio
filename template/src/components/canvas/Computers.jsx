import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import CanvasLoader from "../Loader";

const Computers = ({ ismobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  /* Animation */
  const model = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });
    if (ismobile) {
      tl.current
        .to(model.current.rotation, { y: 7 }, 0)
        .to(model.current.rotation, { x: 0.5, z: -0.5 }, 1)

        .to(model.current.rotation, { x: 0, z: 0 }, 6)
        .to(model.current.rotation, { y: 5.2 }, 6)

        .to(model.current.position, { x: -13 }, 11)
        .to(model.current.rotation, { y: -0.1 }, 11)
        .to(model.current.position, { z: -2, y: 1 }, 11);
    } else {
      tl.current
        .to(model.current.rotation, { y: 7 }, 0)
        // .to(model.current.rotation, { y: 1 }, 2)
        .to(model.current.position, { x: -10, z: 6 }, 1)

        .to(model.current.rotation, { y: -1 }, 6)
        .to(model.current.position, { x: 5, z: -2.8 }, 6)

        .to(model.current.position, { x: -8 }, 11)
        .to(model.current.rotation, { y: 0 }, 11)
        .to(model.current.position, { z: -2, y: 1 }, 11);
    }
  }, [scroll]);

  return (
    <group ref={model}>
      <mesh>
        <hemisphereLight
          intensity={1}
          groundColor={"black"}
          color={"#915eff"}
        />
        <spotLight
          position={[-30, 3, -5]}
          intensity={1000}
          angle={0.5}
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={computer.scene}
          scale={ismobile ? 0.7 : 1}
          position={ismobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </group>
  );
};

const ComputerCanvas = () => {
  const [ismobile, setIsMobile] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // <Canvas
    //   frameloop="demand"
    //   shadows
    //   camera={{ position: [20, 3, 5], fov: 25 }}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableRotate={false}
        mouseButtons={false}
      />
      <Computers ismobile={ismobile} />
      <Preload all />
    </Suspense>
    // </Canvas>
  );
};

export default ComputerCanvas;
