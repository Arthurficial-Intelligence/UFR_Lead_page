import { defineArrayMember, defineField, defineType } from 'sanity'

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 2 }),
    defineField({
      name: 'images',
      title: 'Gallery photos',
      type: 'array',
      description: 'Drag to reorder. Add or remove photos here — they appear on the Gallery page.',
      of: [defineArrayMember({ type: 'richImage' })],
      options: { layout: 'grid' },
    }),
    defineField({ name: 'closingPrompt', title: 'Closing prompt', type: 'string' }),
    defineField({ name: 'closingCtaLabel', title: 'Closing button label', type: 'string' }),
  ],
  preview: {
    prepare: () => ({ title: 'Gallery Page' }),
  },
})
