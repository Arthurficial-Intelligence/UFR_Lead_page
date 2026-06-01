import type { StructureResolver } from 'sanity/structure'

/**
 * Custom Studio sidebar.
 *
 * Each page is a single editable document, presented in plain language so the
 * client sees "Home Page", "Gallery Page", etc. — not a database-style list of
 * document types. No "create / delete" actions, since there is exactly one of
 * each.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Services Page')
        .id('servicesPage')
        .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
      S.listItem()
        .title('FAQ Page')
        .id('faqPage')
        .child(S.document().schemaType('faqPage').documentId('faqPage')),
      S.listItem()
        .title('Gallery Page')
        .id('galleryPage')
        .child(S.document().schemaType('galleryPage').documentId('galleryPage')),
      S.listItem()
        .title('Contact Page')
        .id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
    ])
