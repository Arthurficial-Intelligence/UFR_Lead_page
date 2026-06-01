/**
 * Default site content.
 *
 * This is the canonical copy/imagery for the site. It serves two purposes:
 *   1. It is rendered live whenever Sanity is not configured (or a fetch
 *      fails), so the site never breaks during the CMS transition.
 *   2. It is the source the seed script reads from to populate Sanity, so the
 *      client starts editing from exactly what is on the site today.
 *
 * Edit copy here only as a fallback of last resort — once Sanity is live, the
 * client edits content in the Studio at /studio.
 */
import type {
  AboutContent,
  ContactContent,
  FaqContent,
  GalleryContent,
  HomeContent,
  ServicesContent,
  SiteSettings,
} from './types'

export const defaultSiteSettings: SiteSettings = {
  name: 'Unfiltered Rays Media Co.',
  shortName: 'Unfiltered Rays',
  description:
    'Intentional, refined photo experiences for weddings and elevated events in Nashville. Preserving the moment, as it is.',
  tagline: 'Preserving the moment, as it is.',
  contactEmail: 'hello@unfilteredrays.com',
  instagram: '@unfilteredraysmediaco',
  instagramUrl: 'https://www.instagram.com/unfilteredraysmediaco',
  serviceAreas: [
    'Nashville',
    'Murfreesboro',
    'Clarksville',
    'Franklin',
    'Spring Hill',
    'Lebanon',
  ],
}

export const defaultHome: HomeContent = {
  heroHeadingLead: 'The moment,',
  heroHeadingEmphasis: 'held.',
  heroSubheading:
    'A refined photo booth experience for weddings, celebrations, and the gatherings that matter most.',
  heroCtaLabel: 'Inquire',
  heroBackgroundImage: { src: '/images/ufr-1085.jpg', alt: '' },
  brandImage: {
    src: '/images/ufr-1808.jpg',
    alt: 'An intimate, unposed moment at a photo booth experience',
  },
  brandHeading: 'Gathered. Real. Yours.',
  brandParagraphs: [
    'Some moments are too good to let slip by unnoticed. At Unfiltered Rays, we create space for your guests to slow down — to laugh, connect, and leave with something tangible from the night.',
    'We’re not here to add noise to your event. We’re here to add warmth.',
  ],
  howItWorksHeading: 'A seamless addition to your celebration.',
  howItWorksSteps: [
    {
      number: '1',
      title: 'Reserve your date',
      copy: 'Reach out and tell us about your event. We’ll confirm availability and walk you through the collections.',
    },
    {
      number: '2',
      title: 'Design your experience',
      copy: 'Choose your backdrop, overlay, and styling details. We handle every element so you don’t have to.',
    },
    {
      number: '3',
      title: 'Arrive and enjoy',
      copy: 'Our team sets up before your guests arrive and stays present throughout. You celebrate. We take care of the rest.',
    },
  ],
  eventTypesHeading: 'Every gathering deserves to be remembered.',
  eventTypes: [
    {
      title: 'Weddings',
      copy: 'An intimate addition to your reception — giving guests a printed keepsake and a reason to linger a little longer.',
      image: {
        src: '/images/ufr-1622.jpg',
        alt: 'Couple sharing a joyful moment at their wedding photo booth',
        objectPosition: 'top',
      },
    },
    {
      title: 'Milestone Events',
      copy: 'The moments worth marking. We make sure the day exists beyond the memory.',
      image: {
        src: '/images/milestone-portrait.jpg',
        alt: 'Guest posing confidently at a milestone celebration',
        objectPosition: 'center 45%',
      },
    },
    {
      title: 'Private Celebrations',
      copy: 'Birthdays, anniversaries, baby showers, graduations. The milestones that call for something more than a camera phone.',
      image: {
        src: '/images/celebration-portrait.jpg',
        alt: 'Guest laughing during a private celebration',
        objectPosition: 'center 35%',
      },
    },
    {
      title: 'Corporate & Brand Activations',
      copy: 'We bring the same warmth and refinement to brand experiences — helping your guests connect with your brand in a way that feels human.',
      image: {
        src: '/images/ufr-1784.jpg',
        alt: 'Group of friends posing together at a brand activation',
        objectPosition: 'center 20%',
      },
    },
  ],
  closingHeading: 'Your date is waiting.',
  closingCopy:
    'We take a limited number of events each season to ensure every experience gets our full attention. Reach out to check availability.',
  closingCtaLabel: 'Submit an Inquiry',
}

export const defaultAbout: AboutContent = {
  heading: 'We started this because moments matter.',
  image: {
    src: '/images/ufr-1825.jpg',
    alt: 'The Unfiltered Rays team sharing an unposed, joyful moment',
  },
  paragraphs: [
    'Unfiltered Rays Media Co. was built around a simple belief: the best photos are the ones that actually look like you. Not the posed version. Not the camera-ready version. The real one — mid-laugh, leaning in, completely present.',
    'We’re a small, intentional team that brings a calm, elevated photo booth experience to the events we care about most. Every setup is thoughtfully designed. Every interaction is warm. And every photo is a piece of the day, exactly as it happened.',
    'We work with couples, families, and brands who understand the difference between documentation and memory-making. If you’re here, you probably do too.',
  ],
}

export const defaultServices: ServicesContent = {
  heroHeading: 'Considered experiences, designed for your day.',
  heroParagraphs: [
    'Every Unfiltered Rays collection is built around the same promise — a seamless, beautiful experience that your guests will actually remember. We handle setup, styling, and takedown so you can be fully present.',
    'Collections are available for weddings, private celebrations, milestones, and corporate brand activations in Nashville and surrounding areas.',
  ],
  heroImage: {
    src: '/images/booth-product.jpg',
    alt: 'The handcrafted Unfiltered Rays wooden photo booth',
  },
  includedHeading: 'What’s Included in Every Collection',
  includedItems: [
    'Handcrafted wooden booth with high-powered mirrorless/DSLR camera',
    'Professional studio lighting',
    'On-site printed photo strips throughout your event',
    'Unlimited digital photos with full online gallery',
    'Instant sharing via text and email — no app required',
    'GIFs and boomerang capability',
    'Personalized photo overlay (name, date, and event details)',
    'Curated backdrop selection',
    'Thoughtfully styled props',
    'Custom welcome screen',
    'Dedicated on-site attendant for the full rental period',
    'Delivery, full setup, and breakdown — Nashville and surrounding areas',
  ],
  includedImage: {
    src: '/images/ufr-1489.jpg',
    alt: 'Guests interacting with the photo booth',
  },
  collectionsHeading: 'The Collections',
  collections: [
    {
      name: 'The Gathered Collection',
      price: '$795',
      duration: '3 hours of booth time',
      tagline: 'For the people worth slowing down for.',
      description:
        'Our most-loved experience, and the clearest expression of what we do. Designed for weddings, birthday celebrations, anniversaries, and any gathering where the people in the room are the whole point. Every detail is handled. Every guest leaves with something real in their hands.',
      note: 'This collection includes everything listed above — a complete, warmly considered experience with nothing missing and nothing superfluous.',
      includes: [
        'Personalized overlay design, tailored to your event',
        'Standard backdrop from our curated selection',
        'Classic color photo output',
        'Standard photo strip prints',
      ],
    },
    {
      name: 'The Evening Collection',
      price: '$1,050',
      duration: '3 hours of booth time',
      tagline: 'Refined. Considered. Unhurried.',
      description:
        'Everything in The Gathered Collection, elevated for your most polished occasions. Designed for upscale receptions, milestone celebrations, and hosts who want the finer details to feel exactly right. The same warmth, the same presence — with a more refined finish throughout.',
      note: null,
      includes: [
        'Everything in The Gathered Collection, plus:',
        'Premium backdrop upgrade — elevated materials and finishes',
        'Premium pearl print upgrade — a richer, more luxurious photo strip',
        'AI-enhanced photo finish — a polished, glam-ready output for every guest',
        'Choice of color, black & white, or sepia photo output',
      ],
    },
    {
      name: 'The Curated Collection',
      price: '$1,350',
      duration: '4 hours of booth time',
      tagline: 'Every detail, designed with intention.',
      description:
        'Our most comprehensive experience, built for those who want full creative control. Extends your rental by an additional hour and unlocks complete bespoke design — from a fully custom overlay crafted around your event aesthetic, to a custom back screen that makes every photo feel made for this moment specifically.',
      note: 'If you’ve been saving inspiration for months, this one’s for you.',
      includes: [
        'Everything in The Evening Collection, plus:',
        'One additional hour of booth time — 4 hours total',
        'Fully bespoke overlay design — built from scratch around your event, not pulled from a template',
        'Custom back screen design — a fully branded experience from the moment guests approach',
      ],
    },
  ],
  canvasEyebrow: 'The Canvas Collection — Corporate & Brand',
  canvasHeading: 'Your brand. Your moment. Built together.',
  canvasPricingNote: 'Pricing upon inquiry · Custom duration',
  canvasParagraphs: [
    'Designed for corporate clients, brand activations, and experiential marketing moments. The Canvas Collection is fully bespoke — we work directly with your team to design a photo booth experience that feels native to your brand, not like a vendor add-on.',
    'Whether you’re launching a product, hosting a client appreciation event, or building a social-worthy activation, we bring the same warmth and intention that defines every Unfiltered Rays experience — built entirely around your audience.',
  ],
  canvasAudienceLabel: 'Who it’s for',
  canvasAudience: [
    'Product launches and brand activations',
    'Corporate holiday parties and client appreciation events',
    'Experiential marketing campaigns',
    'Conferences, retreats, and team events',
  ],
  canvasCtaLabel: 'Let’s Talk About Your Event',
  finePrint:
    'Additional hours may be added to any collection at $150 per hour. A mileage fee of $0.70 per mile applies to events outside a 50-mile radius of Nashville, TN. All bookings are subject to a signed contract and retainer.',
  closingHeading: 'Not sure which collection fits your event?',
  closingCopy:
    'Reach out and tell us about your gathering. We’ll help you find the right fit.',
  closingCtaLabel: 'Submit an Inquiry',
}

export const defaultFaq: FaqContent = {
  heading: 'A few things people like to know.',
  items: [
    {
      question: 'What types of events do you serve?',
      answer:
        'We specialize in weddings, private celebrations, milestone events, and corporate brand activations. If you have a gathering that deserves to be remembered, we’d love to hear about it.',
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'We recommend reaching out at least 8–12 weeks before your event, especially during peak wedding and holiday seasons. We take a limited number of events each season to give every experience our full attention.',
    },
    {
      question: 'What’s included in every collection?',
      answer:
        'Every collection includes a handcrafted wooden booth, professional studio lighting, on-site printed photo strips, unlimited digital photos with a full online gallery, instant sharing via text and email, GIFs and boomerangs, a personalized photo overlay, curated backdrop selection, styled props, a custom welcome screen, a dedicated on-site attendant, and full setup and breakdown. The difference between collections is duration, print quality, and customization depth.',
    },
    {
      question: 'Can I customize my overlay or backdrop?',
      answer:
        'Yes — customization is part of our process. During booking we’ll work with you to design an overlay that fits your event aesthetic and select a backdrop that complements your venue. Our Curated Collection includes a fully bespoke overlay and custom back screen designed from scratch.',
    },
    {
      question: 'Do you travel for events?',
      answer:
        'We’re based in Nashville, TN, and serve the surrounding area within a 50-mile radius. Events beyond that radius are welcome — a mileage fee of $0.70 per mile applies. Reach out and we’ll work out the details.',
    },
    {
      question: 'Can I add more time to my collection?',
      answer:
        'Yes. Additional hours may be added to any collection at $150 per hour. Just let us know when you inquire and we’ll include it in your proposal.',
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer:
        'Life happens. Our rescheduling and cancellation policies are outlined in your contract at the time of booking. We’re always happy to work with you when circumstances change.',
    },
    {
      question: 'How do guests receive their digital photos?',
      answer:
        'Immediately after each session, guests receive a link via text or email to download and share their photos. No app required.',
    },
    {
      question: 'What does the experience actually look like at my event?',
      answer:
        'We arrive early, set up completely before your guests arrive, and stay present throughout the rental period. Our team is warm, unobtrusive, and there to make the experience feel effortless. When the event ends, we pack up quietly so you never have to think about it.',
    },
  ],
  closingPrompt: 'Have a question we didn’t cover?',
  closingCtaLabel: 'Reach Out',
}

export const defaultGallery: GalleryContent = {
  heading: 'Moments we’ve been trusted to hold.',
  intro: 'A selection of experiences from our recent gatherings.',
  images: [
    { src: '/images/ufr-1085.jpg', alt: 'Elegant editorial moment at the photo booth' },
    { src: '/images/ufr-1825.jpg', alt: 'Three friends laughing together with abandon' },
    { src: '/images/ufr-1808.jpg', alt: 'Warm, intimate embrace between couple' },
    { src: '/images/ufr-1777.jpg', alt: 'Joyful wedding photo booth moment' },
    { src: '/images/ufr-1622.jpg', alt: 'Playful group gathered around the booth' },
    { src: '/images/ufr-1757.jpg', alt: 'Composed group portrait at event' },
    { src: '/images/ufr-1784.jpg', alt: 'Milestone celebration at photo booth' },
    { src: '/images/ufr-1545.jpg', alt: 'Clean photo booth product shot' },
    { src: '/images/ufr-1548.jpg', alt: 'Photo booth detail and setup' },
    { src: '/images/ufr-1489.jpg', alt: 'Guest interaction with photo booth' },
    { src: '/images/ufr-1196.jpg', alt: 'Warm candid moment at gathering' },
    { src: '/images/ufr-1241.jpg', alt: 'Beautiful event photography moment' },
  ],
  closingPrompt: 'Ready to add your story to ours?',
  closingCtaLabel: 'Inquire Here',
}

export const defaultContact: ContactContent = {
  heading: 'Let’s talk about your gathering.',
  intro:
    'We’d love to hear about your event. Fill out the form below and a member of our team will be in touch within 2 business days.',
  image: {
    src: '/images/ufr-1808.jpg',
    alt: 'Warm, intimate moment at photo booth',
  },
  directLabel: 'Prefer to reach us directly?',
}
