# Coescaling · Capacitaciones

Página para presentar las capacitaciones internas de Coescaling, con grabaciones de Zoom, instructor y descripción. El contenido se gestiona desde **Sanity Studio** y se muestra en una página construida con **Next.js**, lista para desplegar en **Vercel**.

## Stack

- Next.js 14 (App Router)
- Sanity (CMS headless, Studio embebido en `/studio`)
- CSS plano (sin framework) — diseño propio en `app/globals.css`

## Cómo correr el proyecto localmente

1. Instalar dependencias:

   pnpm install

   ```

   ```

2. Crear un proyecto en [sanity.io](https://www.sanity.io/manage) (gratis) y copiar tu **Project ID**.

3. Duplicar `.env.local.example` como `.env.local` y poner tu Project ID:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Correr en desarrollo:

   ```bash
   pnpm run dev
   ```

5. Abrir:
   - `http://localhost:3000` → página pública
   - `http://localhost:3000/studio` → panel para agregar/editar capacitaciones

> Si no configuras Sanity todavía, la página igual funciona: muestra 4 capacitaciones de ejemplo (`app/demoData.js`) para que puedas evaluarla sin pasos previos.

## Estructura

```
app/
  page.js              → página principal (listado)
  components/
    CapacitacionCard.js → tarjeta de cada capacitación
    Waveform.js          → forma de onda decorativa (signature visual)
  globals.css           → estilos y tokens de diseño
  studio/[[...tool]]/   → Sanity Studio embebido en /studio
  demoData.js           → datos de respaldo si Sanity está vacío
sanity/
  schemas/capacitacion.js → modelo de datos (nombre, instructor, descripción, link, categoría)
  client.js              → query a Sanity
sanity.config.js          → configuración del Studio
```

## Agregar una capacitación

Entra a `/studio`, crea un documento **Capacitación** con: nombre, instructor, descripción (2-3 líneas), link de la grabación de Zoom y categoría opcional. Se publica al instante en la página (revalida cada 60s).

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), importa el repo.
3. Agrega las variables de entorno `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET` en la configuración del proyecto en Vercel.
4. Deploy. Listo.

## Decisiones de diseño

Paleta oscura (azul marino + verde menta) inspirada en la identidad de Coescaling del brief. Cada capacitación se presenta como una "grabación" con una forma de onda y botón de reproducción en vez de una tarjeta genérica, para reforzar que el contenido central es el video de Zoom.
