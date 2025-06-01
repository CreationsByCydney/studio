import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vibe',
  title: 'Vibe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vibe Description',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'color',
      title: 'Vibe Color',
      type: 'color',
      validation: (Rule) => Rule.required()
    })

  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
