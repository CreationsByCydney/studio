import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bead',
  title: 'Bead',
  type: 'document',
  fields: [
    defineField({
      name: 'color',
      title: 'Bead Color',
      type: 'color',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

  ],
  preview: {
    select: {
      title: 'material'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
