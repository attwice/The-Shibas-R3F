import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Center
} from "@react-three/drei";
import {
  A11y,
  useA11y,
  A11yAnnouncer,
  useUserPreferences,
  A11ySection,
  A11yUserPreferencesContext
} from "@react-three/a11y";
import Model from "./Model";
import TextComponent from "./Text";
import Footer from "./Footer";

const text = [
  "Let's texture this shiba created by zixisun02",
  "Cute looking Shiba",
  "Robot Shiba by grigoriyarx",
  "Baby Shiba? created by Zacxophone",
  "Astronaut Shiba. Created by lulu9green",
  "Hippie Shiba by KarolinaRenkiewicz",
  "Pyjama Shiba by Panki6"
];

export default function Viewer() {
  const ref = useRef();
  const [textureIndex, setTextureIndex] = useState(0);
  const listener = (e) => {
    if (
      (e.code === "ArrowRight" || e.code === "Space" || e.code === "Tab") &&
      text[textureIndex + 1]
    ) {
      setTextureIndex(textureIndex + 1);
    }
    if (e.code === "ArrowLeft" && textureIndex !== 0) {
      setTextureIndex(textureIndex - 1);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [textureIndex]);

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <A11ySection
            label="Shiba carousel"
            description="This carousel contains 1 dog model. Use the Previous and Next buttons to cycle through all the textures."
          >
            {textureIndex !== 0 && (
              <A11y
                role="button"
                description={`Previous texture`}
                actionCall={() => setTextureIndex((t) => t - 1)}
              >
                <mesh
                  position={[-1.8, 0, 0]}
                  scale={0.2}
                  rotation={[0, 0, -Math.PI / 4]}
                >
                  <tetrahedronBufferGeometry />
                  <meshStandardMaterial
                    metalness={0}
                    roughness={1}
                    color={"#e24e46"}
                    emissive={"#e24e46"}
                  />
                </mesh>
              </A11y>
            )}
            <Center>
              <A11y
                role="content"
                description={`The Shiba and all it's colors`}
                actionCall={() => setTextureIndex((t) => t + 1)}
              >
                <TextComponent> The Shiba and all it's colors</TextComponent>
              </A11y>
              <TextComponent
                position={[0, -0.9, 1]}
                fontSize={0.08}
                color="#082f49"
              >
                {text[textureIndex]}
              </TextComponent>
              <Environment preset="dawn" />
              <Model textureIndex={textureIndex} />
              <ContactShadows
                position={[0, -0.999, 0]}
                width={10}
                height={10}
                far={30}
                rotation={[Math.PI / 2, 0, 0]}
                blur={2}
                opacity={0.5}
              />
            </Center>
            {textureIndex !== text.length - 1 && (
              <A11y
                role="button"
                description={`Next texture`}
                actionCall={() => setTextureIndex((t) => t + 1)}
              >
                <mesh
                  position={[1.8, 0, 0]}
                  scale={0.2}
                  rotation={[0, 0, -Math.PI / 4]}
                >
                  <tetrahedronBufferGeometry />
                  <meshStandardMaterial
                    metalness={0}
                    roughness={1}
                    color={"#e24e46"}
                    emissive={"#e24e46"}
                  />
                </mesh>
              </A11y>
            )}
          </A11ySection>
        </Suspense>
        <OrbitControls ref={ref} />
      </Canvas>
      <A11yAnnouncer />
      <Footer />
    </>
  );
}
