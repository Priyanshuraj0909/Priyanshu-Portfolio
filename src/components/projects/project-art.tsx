export function ProjectArt({ index = 0 }: { index?: number }) {
  return <svg className="project-art" viewBox="0 0 500 400" fill="none" aria-hidden="true">
    <g transform={`translate(250 200) rotate(${index * 17 - 25})`}>
      {Array.from({ length: 24 }, (_, i) => index % 2 === 0
        ? <ellipse key={i} rx={55 + i * 5} ry={27 + i * 2} transform={`rotate(${i * 6})`} stroke="currentColor" strokeWidth={i % 6 === 0 ? 1.5 : .6} opacity={.2 + i / 40} />
        : <rect key={i} x={-55 - i * 4} y={-55 - i * 4} width={110 + i * 8} height={110 + i * 8} rx={12} transform={`rotate(${i * 4})`} stroke="currentColor" strokeWidth={i % 6 === 0 ? 1.5 : .6} opacity={.2 + i / 40} />)}
    </g>
  </svg>;
}
