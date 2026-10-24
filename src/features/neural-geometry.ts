// Original deterministic graph shared by the WebGL scene and static SVG fallback.
export function neuralGeometry(mobile: boolean) {
  const count = mobile ? 100 : 180;
  const nodes: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const y = 1 - 2 * ((i / 2 | 0) + .5) / (count / 2);
    const radius = Math.sqrt(1 - y * y);
    const angle = i * golden;
    nodes.push([side * (.1 + Math.abs(Math.cos(angle)) * radius * .88), y * .9 + .13 * Math.sin(angle), Math.sin(angle) * radius * .63]);
  }
  for (let i = 0; i < 5; i++) nodes.push([(i % 2 - .5) * .08, -.85 - i * .07, .06]);
  const links: [number, number][] = [];
  nodes.forEach((node, i) => nodes.slice(i + 1).forEach((other, offset) => {
    const distance = Math.hypot(node[0] - other[0], node[1] - other[1], node[2] - other[2]);
    if (distance < .34 || (i % 8 === 0 && distance < .58)) links.push([i, i + 1 + offset]);
  }));
  return { nodes, links };
}
