import { defineArrayMember, defineField, defineType } from 'sanity'

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Questions & answers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
          ],
          preview: {
            select: { title: 'question' },
          },
        }),
      ],
    }),
    defineField({
      name: 'closingPrompt',
      title: 'Closing prompt',
      type: 'string',
      description: 'The line above the final button. Example: "Have a question we didn’t cover?"',
    }),
    defineField({ name: 'closingCtaLabel', title: 'Closing button label', type: 'string' }),
  ],
  preview: {
    prepare: () => ({ title: 'FAQ Page' }),
  },
})
