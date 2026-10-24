import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Group, Mesh, ShaderMaterial } from "three";
// Original gradient study inspired by ShaderGradient's moving color fields.
function GradientField({ active }: { active: boolean }) {
  const material = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((_, delta) => { if (active && material.current) material.current.uniforms.uTime.value += Math.min(delta, .05) * .15; });
  return <mesh position={[0, 0, -2]}><planeGeometry args={[10, 10]} /><shaderMaterial ref={material} transparent depthWrite={false} uniforms={uniforms}
    vertexShader={`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`}
    fragmentShader={`varying vec2 vUv; uniform float uTime; void main(){vec2 p=vUv-.5; float wave=sin(p.x*7.+uTime)*cos(p.y*6.-uTime); float fade=1.-smoothstep(.08,.47,length(p)); vec3 color=mix(vec3(.80,.48,.31),vec3(.68,.72,.51),wave*.5+.5); gl_FragColor=vec4(color,fade*.23);}`} /></mesh>;
}
function Sculpture({ active, mobile }: { active: boolean; mobile: boolean }) {
  const group = useRef<Group>(null);
  const knot = useRef<Mesh>(null);
  useFrame(({ pointer }, delta) => {
    if (!active || !group.current || !knot.current) return;
    knot.current.rotation.y += Math.min(delta, .05) * .13;
    group.current.rotation.x += (pointer.y * .14 - group.current.rotation.x) * .025;
    group.current.rotation.z += (pointer.x * .12 - group.current.rotation.z) * .025;
  });
  return <group ref={group} scale={.85}><mesh ref={knot} rotation={[.3, .1, -.6]}><torusKnotGeometry args={[1.25, .43, mobile ? 128 : 224, 32, 2, 3]} /><meshPhysicalMaterial color="#f27745" metalness={.9} roughness={.19} clearcoat={1} clearcoatRoughness={.14} /></mesh><Environment resolution={128}><Lightformer intensity={5} position={[0, 4, 3]} scale={[8, 3, 1]} color="#fff5e5" /><Lightformer intensity={3} position={[-4, 0, 2]} rotation={[0, Math.PI/2, 0]} scale={[3, 8, 1]} color="#ffffff" /><Lightformer intensity={4} position={[3, -2, 1]} rotation={[0, -Math.PI/3, 0]} scale={[2, 6, 1]} color="#ffa176" /></Environment></group>;
}
export default function NeuralScene({ active, mobile }: { active: boolean; mobile: boolean }) {
 return <Canvas aria-hidden="true" dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} camera={{ position: [0, 0, 6.7], fov: 39 }} gl={{ alpha: true, antialias: !mobile, powerPreference: "low-power" }}><GradientField active={active} /><ambientLight intensity={.7} /><directionalLight position={[3, 4, 5]} intensity={3} /><Sculpture active={active} mobile={mobile} /></Canvas>;
}
