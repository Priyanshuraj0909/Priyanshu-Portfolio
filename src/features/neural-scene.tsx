import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { Group, Vector3 } from "three";

function Brain({ active, mobile }: { active: boolean; mobile: boolean }) {
  const group = useRef<Group>(null);
  const data = useMemo(() => {
    const count = mobile ? 100 : 180;
    const points: number[] = [];
    const nodes: Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const y = 1 - 2 * ((i / 2 | 0) + .5) / (count / 2);
      const radius = Math.sqrt(1 - y * y);
      const theta = i * golden;
      const x = side * (.32 + Math.abs(Math.cos(theta)) * radius * .86);
      const z = Math.sin(theta) * radius * .63;
      const node = new Vector3(x, y * .9 + .13 * Math.sin(theta), z);
      nodes.push(node); points.push(node.x, node.y, node.z);
    }
    const edges: number[] = [];
    nodes.forEach((node, i) => nodes.slice(i + 1).forEach(other => { const d = node.distanceTo(other); if (d < .34 || (i % 8 === 0 && d < .58)) edges.push(node.x, node.y, node.z, other.x, other.y, other.z); }));
    const orbit: [number, number, number][] = Array.from({ length: 97 }, (_, i) => { const t = i / 96 * Math.PI * 2; return [Math.cos(t) * 1.42, Math.sin(t) * 1.11, Math.sin(t) * .3]; });
    return { points: new Float32Array(points), edges: new Float32Array(edges), orbit };
  }, [mobile]);
  useFrame(({ clock, pointer }) => {
    if (!group.current || !active) return;
    group.current.rotation.y += (pointer.x * .32 + Math.sin(clock.elapsedTime * .12) * .13 - group.current.rotation.y) * .035;
    group.current.rotation.x += (pointer.y * -.17 + window.scrollY * .00013 - group.current.rotation.x) * .035;
  });
  return <group ref={group}>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[data.points, 3]} /></bufferGeometry><pointsMaterial color="#99eaff" size={mobile ? .025 : .018} transparent opacity={.85} sizeAttenuation /></points>
    <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[data.edges, 3]} /></bufferGeometry><lineBasicMaterial color="#9b9aff" transparent opacity={.35} /></lineSegments>
    <Line points={data.orbit} color="#9b7cff" lineWidth={.65} transparent opacity={.25} />
    <group rotation={[0, .3, .7]}><Line points={data.orbit} color="#58e1ff" lineWidth={.5} transparent opacity={.16} /></group>
    <mesh position={[0, -.3, .04]}><sphereGeometry args={[.035, 12, 12]} /><meshBasicMaterial color="#b7eeff" /></mesh>
  </group>;
}
export default function NeuralScene({ active, mobile }: { active: boolean; mobile: boolean }) {
  return <Canvas aria-hidden="true" dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} camera={{ position: [0, 0, 3.6], fov: 44 }} gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}><Brain active={active} mobile={mobile} /></Canvas>;
}
