import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'The primary image that represents the product.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'vibes',
      title: 'Vibes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'vibe'},
          ]
        },
    ]
    }),
    defineField({
      name: 'parts',
      title: 'Parts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type:'bead'},
          ]
        },
    ]
    }),

  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
