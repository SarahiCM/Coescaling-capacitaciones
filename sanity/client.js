import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'TU_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  // true = usa el CDN de Sanity (rápido, ideal para producción).
  // Si cambia contenido y no se ve al instante, puede tardar unos segundos en propagar.
  // Para ver cambios al instante en desarrollo, se cambia a false.
  useCdn: true,
})

export async function getCapacitaciones() {
  return client.fetch(
    `*[_type == "capacitacion"] | order(orden asc, _createdAt asc){
      _id, nombre, instructor, descripcion, zoomLink, categoria
    }`
  )
}