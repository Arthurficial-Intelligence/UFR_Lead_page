import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'brand', title: 'Brand Statement' },
    { name: 'howItWorks', title: 'How It Works' },
    { name: 'eventTypes', title: 'Event Types' },
    { name: 'closing', title: 'Closing' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroHeadingLead',
      title: 'Hero heading',
      type: 'string',
      group: 'hero',
      description: 'The main words. Example: "The moment,"',
    }),
    defineField({
      name: 'heroHeadingEmphasis',
      title: 'Hero heading (italic word)',
      type: 'string',
      group: 'hero',
      description: 'The italic emphasized word at the end. Example: "held."',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero subheading',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero button label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero background image',
      type: 'richImage',
      group: 'hero',
    }),
    // Brand statement
    defineField({
      name: 'brandImage',
      title: 'Image',
      type: 'richImage',
      group: 'brand',
    }),
    defineField({
      name: 'brandHeading',
      title: 'Heading',
      type: 'string',
      group: 'brand',
    }),
    defineField({
      name: 'brandParagraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 3 })],
      group: 'brand',
    }),
    // How it works
    defineField({
      name: 'howItWorksHeading',
      title: 'Heading',
      type: 'string',
      group: 'howItWorks',
    }),
    defineField({
      name: 'howItWorksSteps',
      title: 'Steps',
      type: 'array',
      group: 'howItWorks',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'copy', title: 'Copy', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'number' },
          },
        }),
      ],
    }),
    // Event types
    defineField({
      name: 'eventTypesHeading',
      title: 'Heading',
      type: 'string',
      group: 'eventTypes',
    }),
    defineField({
      name: 'eventTypes',
      title: 'Event types',
      type: 'array',
      group: 'eventTypes',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'copy', title: 'Copy', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'Image', type: 'richImage' }),
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        }),
      ],
    }),
    // Closing
    defineField({
      name: 'closingHeading',
      title: 'Heading',
      type: 'string',
      group: 'closing',
    }),
    defineField({
      name: 'closingCopy',
      title: 'Copy',
      type: 'text',
      rows: 3,
      group: 'closing',
    }),
    defineField({
      name: 'closingCtaLabel',
      title: 'Button label',
      type: 'string',
      group: 'closing',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})
