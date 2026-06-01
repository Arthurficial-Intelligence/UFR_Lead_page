import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full business name',
      type: 'string',
      description: 'Used in SEO and the page footer. Example: "Unfiltered Rays Media Co."',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short name',
      type: 'string',
      description: 'The shorter version shown in the navigation and footer heading.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site description (SEO)',
      type: 'text',
      rows: 3,
      description: 'A one-to-two sentence summary used by Google and social previews.',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'The italic line under the name in the footer.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram handle',
      type: 'string',
      description: 'Including the @, e.g. @unfilteredraysmediaco',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram link',
      type: 'url',
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service areas (cities)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The cities listed in the footer.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
