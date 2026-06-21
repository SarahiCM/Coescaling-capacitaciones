import { getCapacitaciones } from '../sanity/client'
import { capacitacionesDemo } from './demoData'
import CapacitacionCard from './components/CapacitacionCard'

export const revalidate = 60 // re-genera la página cada 60s con datos frescos de Sanity
// Este es el componente principal de la página de inicio. Se encarga de obtener la lista de capacitaciones desde Sanity, manejar el estado de carga y mostrar las tarjetas de cada capacitación utilizando el componente CapacitacionCard. Si no hay capacitaciones publicadas, muestra un mensaje indicando que aún no hay contenido disponible.
export default async function Home() {
  let capacitaciones = []
// Se intenta obtener las capacitaciones desde Sanity. Si ocurre un error (por ejemplo, problemas de conexión o configuración), se captura la excepción y se asigna un arreglo vacío para evitar que la aplicación se rompa.
  try {
    capacitaciones = await getCapacitaciones()
  } catch (e) {
    capacitaciones = []
  }
// Si no hay capacitaciones publicadas, se muestra el contenido de ejemplo definido en demoData.js para que la página no se vea vacía.
  const usandoDemo = !capacitaciones || capacitaciones.length === 0
  const lista = usandoDemo ? capacitacionesDemo : capacitaciones
// Se renderiza la página con un header que presenta el catálogo de grabaciones, seguido de una sección principal que muestra todas las capacitaciones disponibles. Si no hay capacitaciones, se muestra un mensaje indicando que aún no hay contenido publicado. Finalmente, se incluye un footer con información de la empresa y el propósito de la prueba técnica.
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
