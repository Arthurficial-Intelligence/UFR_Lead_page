import { defineArrayMember, defineField, defineType } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Intro' },
    { name: 'included', title: "What's Included" },
    { name: 'collections', title: 'Collections' },
    { name: 'canvas', title: 'Canvas (Corporate)' },
    { name: 'closing', title: 'Fine Print & Closing' },
  ],
  fields: [
    // Intro
    defineField({ name: 'heroHeading', title: 'Heading', type: 'string', group: 'hero' }),
    defineField({
      name: 'heroParagraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 3 })],
      group: 'hero',
    }),
    defineField({ name: 'heroImage', title: 'Image', type: 'richImage', group: 'hero' }),
    // Included
    defineField({ name: 'includedHeading', title: 'Heading', type: 'string', group: 'included' }),
    defineField({
      name: 'includedItems',
      title: 'Included items',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'included',
    }),
    defineField({ name: 'includedImage', title: 'Image', type: 'richImage', group: 'included' }),
    // Collections
    defineField({
      name: 'collectionsHeading',
      title: 'Heading',
      type: 'string',
      group: 'collections',
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      group: 'collections',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'collection',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'Including the $ sign, e.g. "$795".',
            }),
            defineField({ name: 'duration', title: 'Duration', type: 'string' }),
            defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
            defineField({
              name: 'note',
              title: 'Note (optional)',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'includes',
              title: 'What’s included',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
          },
        }),
      ],
    }),
    // Canvas
    defineField({ name: 'canvasEyebrow', title: 'Eyebrow', type: 'string', group: 'canvas' }),
    defineField({ name: 'canvasHeading', title: 'Heading', type: 'string', group: 'canvas' }),
    defineField({
      name: 'canvasPricingNote',
      title: 'Pricing note',
      type: 'string',
      group: 'canvas',
    }),
    defineField({
      name: 'canvasParagraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 3 })],
      group: 'canvas',
    }),
    defineField({
      name: 'canvasAudienceLabel',
      title: 'Audience label',
      type: 'string',
      group: 'canvas',
    }),
    defineField({
      name: 'canvasAudience',
      title: 'Audience list',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'canvas',
    }),
    defineField({
      name: 'canvasCtaLabel',
      title: 'Button label',
      type: 'string',
      group: 'canvas',
    }),
    // Closing
    defineField({
      name: 'finePrint',
      title: 'Fine print',
      type: 'text',
      rows: 3,
      group: 'closing',
    }),
    defineField({ name: 'closingHeading', title: 'Closing heading', type: 'string', group: 'closing' }),
    defineField({ name: 'closingCopy', title: 'Closing copy', type: 'text', rows: 2, group: 'closing' }),
    defineField({
      name: 'closingCtaLabel',
      title: 'Closing button label',
      type: 'string',
      group: 'closing',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Services Page' }),
  },
})
