import { getCapacitaciones } from '../sanity/client'
import { capacitacionesDemo } from './demoData'
import CapacitacionCard from './components/CapacitacionCard'

export const revalidate = 60 // re-genera la página cada 60s con datos frescos de Sanity

export default async function Home() {
  let capacitaciones = []

  try {
    capacitaciones = await getCapacitaciones()
  } catch (e) {
    capacitaciones = []
  }

  const usandoDemo = !capacitaciones || capacitaciones.length === 0
  const lista = usandoDemo ? capacitacionesDemo : capacitaciones

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="dot" /> Catálogo de grabaciones
          </span>
          <h1>
            Capacitaciones <em>Coescaling</em>, listas para repasar cuando las necesites.
          </h1>
          <p>
            Cada sesión quedó grabada en Zoom. Elige una capacitación, revisa de qué trata
            y entra directo a la grabación sin buscar links sueltos en el chat.
          </p>
          <div className="hero-meta">
            <span><strong>{lista.length}</strong> capacitaciones disponibles</span>
            <span>Contenido gestionado en <strong>Sanity Studio</strong></span>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Todas las capacitaciones</h2>
            <span>{usandoDemo ? 'Mostrando contenido de ejemplo' : 'Contenido publicado'}</span>
          </div>

          {lista.length === 0 ? (
            <div className="empty">
              <strong>Aún no hay capacitaciones publicadas</strong>
              Entra a /studio y agrega la primera capacitación.
            </div>
          ) : (
            <div className="grid">
              {lista.map((cap, i) => (
                <CapacitacionCard cap={cap} index={i} key={cap._id} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer>
        <div className="wrap">
          <p>Coescaling Consulting · Prueba Técnica — Junior TI</p>
        </div>
      </footer>
    </>
  )
}
