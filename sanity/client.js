import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'TU_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // `false` si quieres datos frescos en cada solicitud
})

export async function getCapacitaciones() {
  return client.fetch(
    `*[_type == "capacitacion"] | order(orden asc, _createdAt asc){
      _id, nombre, instructor, descripcion, zoomLink, categoria
    }`
  )
}
