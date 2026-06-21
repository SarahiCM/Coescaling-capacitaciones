//Modelo de datos para las capacitaciones, con campos para nombre, instructor, descripción breve, link de grabación (Zoom), categoría y orden de aparición.

export default {
  name: 'capacitacion',
  title: 'Capacitación',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción breve',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(280),
    },
    {
      name: 'zoomLink',
      title: 'Link de grabación (Zoom)',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: ['BI / Datos', 'Desarrollo', 'Cloud', 'Soft skills', 'Otro'],
      },
    },
    {
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'ordenAsc',
      by: [{ field: 'orden', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'instructor' },
  },
}
