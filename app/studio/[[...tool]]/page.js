'use client'
// Este archivo es el punto de entrada para el estudio de Sanity en Next.js. Renderiza el componente NextStudio con la configuración de Sanity.
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
