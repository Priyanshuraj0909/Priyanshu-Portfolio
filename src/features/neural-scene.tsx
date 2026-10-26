import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh, MathUtils } from "three";
import type { SceneSignals } from "./neural";

interface SceneProps {
  active: boolean;
  mobile: boolean;
  entering: boolean;
  expanded: boolean;
  signals: RefObject<SceneSignals>;
  onReady: () => void;
}

// Original procedural learning sphere; no model, textures or HDR downloads.
function LearningSphere({ active, mobile, entering, expanded, signals, onReady }: SceneProps) {
  const root = useRef<Group>(null);
  const rings = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const time = useRef(0);
  const emergence = useRef(entering ? 0 : 1);
  const spread = useRef(0);
  const { viewport, invalidate } = useThree();
  const particles = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 96; i++) {
      const y = 1 - (i / 95) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = i * Math.PI * (3 - Math.sqrt(5));
      positions.push(Math.cos(angle) * radius * 1.42, y * 1.42, Math.sin(angle) * radius * 1.42);
    }
    return new Float32Array(positions);
  }, []);
  useEffect(() => {
    invalidate();
    const frame = requestAnimationFrame(onReady);
    return () => cancelAnimationFrame(frame);
  }, [onReady, invalidate]);
  useEffect(() => { invalidate(); }, [expanded, entering, active, invalidate]);
  useFrame((_, delta) => {
    if (!root.current || !rings.current || !core.current) return;
    const dt = Math.min(delta, .05);
    if (active) time.current += dt;
    // Paused scenes still accept the explicit expand/collapse action in one frame.
    spread.current = active ? MathUtils.damp(spread.current, expanded ? 1 : signals.current.engaged * .2, 4, dt) : expanded ? 1 : 0;
    emergence.current = active ? MathUtils.damp(emergence.current, entering ? 0 : 1, 2.6, dt) : 1;
    const emergenceValue = emergence.current;
    const { x, y, progress, section } = signals.current;
    const radius = Math.min(viewport.width * (mobile ? .43 : .34), viewport.height * .46);
    const size = radius / 1.9;
    root.current.scale.setScalar(size * (.22 + emergenceValue * .78));
    if (active) {
      const side = section === 0 ? .2 : Math.sin(section * 1.7) * .23;
      root.current.position.x = MathUtils.damp(root.current.position.x, (mobile ? 0 : viewport.width * side) * emergenceValue, 2.5, dt);
      root.current.position.y = MathUtils.damp(root.current.position.y, mobile ? -.15 : -.15 + Math.sin(progress * Math.PI * 2) * .45, 2.5, dt);
      root.current.position.z = -8 * (1 - emergenceValue);
      root.current.rotation.set(y * -.17 + progress * .8, x * .25 + time.current * .06 + progress * Math.PI, -.25 + x * .06);
      rings.current.rotation.y = time.current * -.09;
      rings.current.rotation.z = time.current * .06 + progress * 1.3;
      core.current.rotation.y = time.current * .12;
      core.current.rotation.x = time.current * .08;
    }
    rings.current.scale.setScalar(1 + spread.current * .18);
    core.current.scale.setScalar(1 - spread.current * .18);
  });
  return <group ref={root}>
    <mesh ref={core} rotation={[.4, .3, .2]}><icosahedronGeometry args={[.92, 1]} /><meshStandardMaterial color="#567d70" metalness={.65} roughness={.28} flatShading /></mesh>
    <mesh><icosahedronGeometry args={[1.03, 1]} /><meshBasicMaterial color="#b8f8df" wireframe transparent opacity={.35} /></mesh>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[particles, 3]} /></bufferGeometry><pointsMaterial color="#baffdf" size={mobile ? .035 : .025} sizeAttenuation /></points>
    <group ref={rings}>
      {[0, 1, 2].map(layer => <group key={layer} rotation={[layer * .75 + .25, layer * .9, layer * .35]}>
        {[0, 1, 2, 3].map(segment => <mesh key={segment} rotation={[0, 0, segment * Math.PI / 2]}><torusGeometry args={[1.58 + layer * .13, .045 + layer * .012, 6, mobile ? 24 : 40, Math.PI * .39]} /><meshStandardMaterial color={layer === 1 ? '#d7eee3' : '#75ac96'} metalness={.65} roughness={.25} /></mesh>)}
        <mesh><torusGeometry args={[1.58 + layer * .13, .006, 4, mobile ? 64 : 96]} /><meshBasicMaterial color="#8bddba" transparent opacity={.3} /></mesh>
      </group>)}
    </group>
  </group>;
}
export default function NeuralScene(props: SceneProps) {
  return <Canvas aria-hidden="true" dpr={[1, props.mobile ? 1 : 1.5]} frameloop={props.active ? "always" : "demand"} camera={{position:[0,0,8],fov:42}} gl={{alpha:true,antialias:!props.mobile,powerPreference:'low-power'}}>
    <ambientLight intensity={1.2} /><directionalLight position={[3,5,6]} intensity={4} color="#e5fff3" /><directionalLight position={[-4,-2,3]} intensity={3} color="#5eac9f" /><LearningSphere {...props} />
  </Canvas>;
}
