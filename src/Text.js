import { Text } from "@react-three/drei";

const TextComponent = ({ children, ...props }) => (
  <Text
    color={"#EC2D2D"}
    fontSize={0.2}
    maxWidth={200}
    lineHeight={1}
    letterSpacing={0.02}
    textAlign={"left"}
    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
    anchorX="center"
    anchorY="middle"
    position={[0, 1, 0]}
    {...props}
  >
    {children}
  </Text>
);

export default TextComponent;
