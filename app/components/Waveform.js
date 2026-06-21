// Barras pseudo-aleatorias pero deterministas (seed por índice)
// para simular una forma de onda de audio sin librerías externas.
export default function Waveform({ seed = 0 }) {
  const bars = Array.from({ length: 24 }, (_, i) => {
    const v = Math.abs(Math.sin(seed * 12.9898 + i * 1.61803))
    const height = 4 + Math.round(v * 16)
    return height
  })

  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((h, i) => (
        <span key={i} style={{ height: `${h}px` }} />
      ))}
    </div>
  )
}
