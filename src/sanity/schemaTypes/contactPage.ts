import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'richImage' }),
    defineField({
      name: 'directLabel',
      title: 'Direct-contact label',
      type: 'string',
      description: 'The line above the email/Instagram links. Example: "Prefer to reach us directly?"',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Contact Page' }),
  },
})
