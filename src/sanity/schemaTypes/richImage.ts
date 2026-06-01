import { defineField, defineType } from 'sanity'

/**
 * An image plus its alt text. Alt text is required for accessibility and SEO —
 * it describes the photo for screen readers and search engines.
 */
export const richImage = defineType({
  name: 'richImage',
  title: 'Image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text (image description)',
      type: 'string',
      description:
        'A short description of what is in the photo, for accessibility and SEO. Example: "Couple laughing at the photo booth".',
      validation: (rule) => rule.required().warning('Add a description for accessibility.'),
    }),
    defineField({
      name: 'objectPosition',
      title: 'Focus position (advanced, optional)',
      type: 'string',
      description:
        'Optional. Controls how the photo is cropped, e.g. "center 20%" or "top". Leave blank for default centering.',
    }),
  ],
})
