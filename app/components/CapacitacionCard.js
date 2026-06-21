import Waveform from './Waveform'

export default function CapacitacionCard({ cap, index }) {
  const { nombre, instructor, descripcion, zoomLink, categoria } = cap

  return (
    <article className="card">
      <div className="card-top">
        <h3>{nombre}</h3>
        {categoria && <span className="tag">{categoria}</span>}
      </div>

      <span className="instructor">Impartido por {instructor}</span>
      <p className="desc">{descripcion}</p>

      <a
        className="rec-row"
        href={zoomLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Reproducir grabación de ${nombre}`}
      >
        <button className="play-btn" tabIndex={-1} aria-hidden="true">▶</button>
        <Waveform seed={index} />
        <span className="rec-label">Ver grabación</span>
      </a>
    </article>
  )
}
