import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const animationTime = 0.15;

export const Sphere = ({ color }) => {
  gsap.registerEffect({
    name: "sphereScaleAnimation",
    effect: (targets, config) => {
      return gsap.fromTo(
        targets,
        {
          x: config.sphereProps.scale,
          y: config.sphereProps.scale,
          z: config.sphereProps.scale,
        },
        {
          ease: "power2.inOut",
          duration: 0.25,
          yoyo: true,
          repeat: 1,
          x: config.scaleFactor * config.sphereProps.scale,
          y: config.scaleFactor * config.sphereProps.scale,
          z: config.scaleFactor * config.sphereProps.scale,
        }
      );
    },
    defaults: { duration: animationTime },
    extendTimeline: true,
  });

  const [sphereTimeline, setSphereTimeline] = useState(null);

  const [sphereProps] = useState({
    position: [
      getRandomArbitrary(-7, 7),
      getRandomArbitrary(-7, 7),
      getRandomArbitrary(-7, 7),
    ],
    scale: getRandomArbitrary(0.5, 2),
  });

  const mesh = useRef();

  useEffect(() => {
    setSphereTimeline(() => {
      const tl = gsap.timeline({ paused: true });
      const scaleFactor = getRandomArbitrary(1.25, 3);

      tl.sphereScaleAnimation(mesh.current?.scale, {
        sphereProps,
        scaleFactor,
      });
      return tl;
    });
  }, [sphereProps]);

  return (
    <mesh ref={mesh} position={sphereProps.position} scale={sphereProps.scale}>
      <sphereGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
