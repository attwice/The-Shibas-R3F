import { useTexture } from "@react-three/drei";

const useTextures = () => {
  const colorMaps = useTexture([
    "/default_baseColor.png",
    "/robot/Shiba_Base_Color.jpg",
    "/baby/default_albedo.jpg",
    "/nasa/base_colour.jpg",
    "/hippie/DefaultMaterial_Base_Color2.jpg",
    "/pyjama/default_albedo.jpg"
  ]);
  colorMaps.forEach((t) => (t.flipY = false));
  const normal = useTexture([
    "robot/Shiba_Normal.jpg",
    "/baby/default_normal.jpg",
    "/nasa/bump.jpg",
    "hippie/DefaultMaterial_Normal_OpenGL.jpg",
    "/pyjama/default_normal.jpg"
  ]);
  const normalMaps = [null, ...normal];
  normal.forEach((t) => (t.flipY = false));
  const roughness = useTexture([
    "robot/Shiba_Roughness.jpg",
    "/baby/default_roughness.jpg",
    "/nasa/roughness.jpg",
    "/hippie/DefaultMaterial_Roughness.jpg",
    "/pyjama/default_roughness.jpg"
  ]);
  const roughnessMaps = [null, ...roughness];
  roughness.forEach((t) => (t.flipY = false));
  const emissive = useTexture(["robot/Shiba_Emissive.jpg"]);
  const emissiveMaps = [null, ...emissive];
  emissive.forEach((t) => (t.flipY = false));
  const metalic = useTexture(["robot/Shiba_Metallic.jpg"]);
  const metalicMaps = [null, ...metalic];
  metalic.forEach((t) => (t.flipY = false));

  return [colorMaps, normalMaps, roughnessMaps, emissiveMaps, metalicMaps];
};

export default useTextures;
