import {
  OrbitControls,
  Environment,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import chroma from "chroma-js";

import { Sphere } from "./Sphere";

export default function Spheres() {
  const count = 46;
  const [colors] = useState(() => chroma.scale("Spectral").colors(count));

  const renderSpheres = (count, content = []) => {
    for (let i = 0; i < count; i++) {
      content.push(<Sphere color={colors[i]} key={i} />);
    }
    return content;
  };

  return (
    <>
      <Canvas className="h-24 w-full rounded-lg">
        <color attach="background" args={["#075985"]} />
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />
        <ambientLight intensity={0.05} />
        <Suspense fallback={null}>
          {renderSpheres(count)}
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} />
      </Canvas>
    </>
  );
}
