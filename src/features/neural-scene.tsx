import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";

// A small, deterministic inference graph: four layers, 24 nodes, 108 edges.
function InferenceCore({ active, onReady }: { active: boolean; onReady: () => void }) {
  const group = useRef<Group>(null);
  const time = useRef(0);
  const graph = useMemo(() => {
    const nodes: number[][] = [];
    for (let layer = 0; layer < 4; layer++) for (let n = 0; n < 6; n++) {
      const a = n / 6 * Math.PI * 2;
      nodes.push([(layer - 1.5) * .95, Math.cos(a) * .95, Math.sin(a) * .95]);
    }
    const edges: number[] = [];
    for (let layer = 0; layer < 3; layer++) for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) edges.push(...nodes[layer * 6 + a], ...nodes[(layer + 1) * 6 + b]);
    return { nodes: new Float32Array(nodes.flat()), edges: new Float32Array(edges) };
  }, []);
  useEffect(() => { const frame = requestAnimationFrame(onReady); return () => cancelAnimationFrame(frame); }, [onReady]);
  useFrame(({ pointer }, delta) => {
    if (!active || !group.current) return;
    time.current += Math.min(delta, .05);
    group.current.rotation.y += (pointer.x * .28 + Math.sin(time.current * .23) * .12 - group.current.rotation.y) * .04;
    group.current.rotation.x += (pointer.y * -.18 - group.current.rotation.x) * .04;
  });
  return <group ref={group} rotation={[0, 0, -.2]}>
    <group rotation={[.35, -.35, 0]}>
      <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[graph.nodes, 3]} /></bufferGeometry><pointsMaterial color="#bcffe8" size={.075} sizeAttenuation /></points>
      <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[graph.edges, 3]} /></bufferGeometry><lineBasicMaterial color="#8bcebb" transparent opacity={.23} /></lineSegments>
      {[-.42, 0, .42].map((x, i) => <mesh key={x} position={[x, 0, 0]} rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[1.25, 1.25, .09]} /><meshStandardMaterial color={i===1 ? '#a8e8d3' : '#586b66'} metalness={.55} roughness={.3} /></mesh>)}
      <mesh rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[1.45, 1.45, 1.08]} /><meshBasicMaterial color="#a0ead2" wireframe transparent opacity={.35} /></mesh>
      {[-1.43,1.43].map(x => <mesh key={x} position={[x,0,0]} rotation={[0,Math.PI/2,0]}><ringGeometry args={[.99,1.005,48]} /><meshBasicMaterial color="#6e9a8d" side={2} transparent opacity={.5} /></mesh>)}
    </group>
  </group>;
}
export default function NeuralScene({ active, mobile, onReady }: { active: boolean; mobile: boolean; onReady: () => void }) {
 return <Canvas aria-hidden="true" dpr={[1, mobile ? 1 : 1.5]} frameloop={active ? "always" : "demand"} camera={{ position: [0, 0, 6], fov: 40 }} gl={{ alpha:true, antialias:!mobile, powerPreference:"low-power" }}><ambientLight intensity={1.5} /><directionalLight position={[2,4,5]} intensity={4} color="#dcfff3" /><directionalLight position={[-3,-2,3]} intensity={2} color="#668caa" /><InferenceCore active={active} onReady={onReady} /></Canvas>;
}
